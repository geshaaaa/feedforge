import { NextResponse } from 'next/server'
import { isValidEmail, requireText, sendFormNotification } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = requireText(body?.name)
    const email = requireText(body?.email)
    const company = requireText(body?.company)
    const message = requireText(body?.message)

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required.' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ success: false, message: 'Please enter a valid email.' }, { status: 400 })
    }

    await sendFormNotification({
      formType: 'demo-request',
      fields: {
        name,
        email,
        company,
        message,
      },
    })

    return NextResponse.json({ success: true, message: 'Demo request sent successfully.' })
  } catch (error) {
    console.error('POST /api/demo-request failed', error)
    return NextResponse.json(
      { success: false, message: 'Something went wrong while sending your request.' },
      { status: 500 }
    )
  }
}
