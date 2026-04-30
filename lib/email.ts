import sgMail from '@sendgrid/mail'

export type EmailFormType = 'demo-request' | 'subscribe' | 'contact'

type SendFormNotificationInput = {
  formType: EmailFormType
  fields: Record<string, string>
}

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL
const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY)
}

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
  if (!SENDGRID_API_KEY) {
    throw new Error('Missing SENDGRID_API_KEY')
  }

  if (!CONTACT_TO_EMAIL) {
    throw new Error('Missing CONTACT_TO_EMAIL')
  }

  if (!SENDGRID_FROM_EMAIL) {
    throw new Error('Missing SENDGRID_FROM_EMAIL')
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

  try {
    await sgMail.send({
      from: SENDGRID_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      subject: SUBJECT_BY_FORM[formType],
      text: `Form: ${formType}\n\n${textBody}`,
      html: htmlBody,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown SendGrid error'
    throw new Error(`SendGrid send failed: ${message}`)
  }
}
