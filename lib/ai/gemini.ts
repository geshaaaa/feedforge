import { GoogleGenerativeAI } from '@google/generative-ai'
import { requireText } from '@/lib/email'

const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const GEMINI_MODEL = process.env.GEMINI_MODEL

type TryProductInput = {
  productTitle: string
  description: string
}

export type TryProductOutput = {
  optimizedTitle: string
  optimizedDescription: string
  tags: string[]
}

function parseJsonFromText(text: string): TryProductOutput | null {
  const cleaned = text.replace(/```json|```/g, '').trim()
  const firstBrace = cleaned.indexOf('{')
  const lastBrace = cleaned.lastIndexOf('}')

  if (firstBrace < 0 || lastBrace < 0 || firstBrace >= lastBrace) {
    return null
  }

  const jsonSlice = cleaned.slice(firstBrace, lastBrace + 1)

  try {
    const parsed = JSON.parse(jsonSlice) as {
      optimizedTitle?: unknown
      optimizedDescription?: unknown
      tags?: unknown
    }

    const optimizedTitle = requireText(parsed.optimizedTitle)
    const optimizedDescription = requireText(parsed.optimizedDescription)
    const tags = Array.isArray(parsed.tags)
      ? parsed.tags.map((tag) => requireText(tag)).filter(Boolean).slice(0, 8)
      : []

    if (!optimizedTitle || !optimizedDescription || tags.length === 0) {
      return null
    }

    return {
      optimizedTitle,
      optimizedDescription,
      tags,
    }
  } catch {
    return null
  }
}

export async function generateTryProductFeed(input: TryProductInput): Promise<TryProductOutput> {
  if (!GEMINI_API_KEY) {
    throw new Error('Missing GEMINI_API_KEY')
  }

  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)
  const candidateModels = [
    GEMINI_MODEL,
    'gemini-3-flash-preview',
    'gemini-2.0-flash',
    'gemini-1.5-flash-latest',
    'gemini-1.5-flash',
  ]
    .filter((value, index, arr): value is string => Boolean(value) && arr.indexOf(value as string) === index)

  const prompt = `
You are an ecommerce feed optimization assistant.
Given the product data, produce optimized content for product feeds and ad channels.

Input title: ${input.productTitle}
Input description: ${input.description || '(not provided)'}

Return only valid JSON with this exact shape:
{
  "optimizedTitle": "string",
  "optimizedDescription": "string",
  "tags": ["TAG_ONE", "TAG_TWO", "TAG_THREE"]
}

Rules:
- optimizedTitle should be concise, descriptive, and conversion-friendly.
- optimizedDescription should be 1-3 sentences and highlight value.
- tags should be 3 to 6 uppercase short tags.
- No markdown, no extra text outside JSON.
`.trim()

  let lastError: unknown = null

  for (const modelName of candidateModels) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName })
      const result = await model.generateContent(prompt)
      const responseText = result.response.text()
      const parsed = parseJsonFromText(responseText)

      if (!parsed) {
        throw new Error(`Gemini response could not be parsed for model: ${modelName}`)
      }

      return parsed
    } catch (error) {
      lastError = error
    }
  }

  throw new Error(
    `Gemini generation failed for models: ${candidateModels.join(', ')}. ${
      lastError instanceof Error ? lastError.message : 'Unknown error.'
    }`
  )
}
