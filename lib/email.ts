import { Resend } from 'resend'

export type EmailFormType = 'demo-request' | 'subscribe' | 'contact'

type SendFormNotificationInput = {
  formType: EmailFormType
  fields: Record<string, string>
}

const RESEND_API_KEY = process.env.RESEND_API_KEY
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null

const SUBJECT_BY_FORM: Record<EmailFormType, string> = {
  'demo-request': 'New demo request submission',
  subscribe: 'New newsletter subscription',
  contact: 'New contact form message',
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function requireText(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

export async function sendFormNotification({ formType, fields }: SendFormNotificationInput) {
  if (!resend) {
    throw new Error('Missing RESEND_API_KEY')
  }

  if (!CONTACT_TO_EMAIL) {
    throw new Error('Missing CONTACT_TO_EMAIL')
  }

  const textBody = Object.entries(fields)
    .map(([key, value]) => `${key}: ${value || '-'}`)
    .join('\n')

  const htmlBody = `
    <h2>${SUBJECT_BY_FORM[formType]}</h2>
    <p><strong>Form:</strong> ${formType}</p>
    <ul>
      ${Object.entries(fields)
        .map(([key, value]) => `<li><strong>${key}:</strong> ${value || '-'}</li>`)
        .join('')}
    </ul>
  `

  const { data, error } = await resend.emails.send({
    from: RESEND_FROM_EMAIL,
    to: CONTACT_TO_EMAIL,
    subject: SUBJECT_BY_FORM[formType],
    text: `Form: ${formType}\n\n${textBody}`,
    html: htmlBody,
  })

  if (error) {
    throw new Error(`Resend send failed: ${error.message}`)
  }

  if (!data?.id) {
    throw new Error('Resend send failed: missing message id in response')
  }
}
