import { NextResponse } from 'next/server'
import { isValidEmail, requireText, sendFormNotification } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const fullName = requireText(body?.fullName)
    const email = requireText(body?.email)
    const company = requireText(body?.company)
    const message = requireText(body?.message)

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Full name, email, and message are required.' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ success: false, message: 'Please enter a valid email.' }, { status: 400 })
    }

    await sendFormNotification({
      formType: 'contact',
      fields: {
        fullName,
        email,
        company,
        message,
      },
    })

    return NextResponse.json({ success: true, message: 'Message sent successfully.' })
  } catch (error) {
    console.error('POST /api/contact failed', error)
    return NextResponse.json(
      { success: false, message: 'Something went wrong while sending your message.' },
      { status: 500 }
    )
  }
}
