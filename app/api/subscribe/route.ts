import { NextResponse } from 'next/server'
import { isValidEmail, requireText, sendFormNotification } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const email = requireText(body?.email)

    if (!email) {
      return NextResponse.json({ success: false, message: 'Email is required.' }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ success: false, message: 'Please enter a valid email.' }, { status: 400 })
    }

    await sendFormNotification({
      formType: 'subscribe',
      fields: {
        email,
      },
    })

    return NextResponse.json({ success: true, message: 'Subscription request sent successfully.' })
  } catch (error) {
    console.error('POST /api/subscribe failed', error)
    return NextResponse.json(
      { success: false, message: 'Something went wrong while subscribing.' },
      { status: 500 }
    )
  }
}
