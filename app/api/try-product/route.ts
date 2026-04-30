import { NextResponse } from 'next/server'
import { requireText } from '@/lib/email'
import { generateTryProductFeed } from '@/lib/ai/gemini'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const productTitle = requireText(body?.productTitle)
    const description = requireText(body?.description)

    if (!productTitle) {
      return NextResponse.json(
        { success: false, message: 'Product title is required.' },
        { status: 400 }
      )
    }

    const result = await generateTryProductFeed({ productTitle, description })

    return NextResponse.json({
      success: true,
      message: 'AI feed generated successfully.',
      ...result,
    })
  } catch (error) {
    console.error('POST /api/try-product failed', error)
    return NextResponse.json(
      { success: false, message: 'Could not generate AI feed right now. Please try again.' },
      { status: 500 }
    )
  }
}
