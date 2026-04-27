import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '必須項目を入力してください。' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください。' },
        { status: 400 }
      )
    }

    // If SMTP is configured, send email
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      const toEmail = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER

      await transporter.sendMail({
        from: `"ストーク お問い合わせ" <${process.env.SMTP_USER}>`,
        to: toEmail,
        subject: `【お問い合わせ】${subject} - ${name}様`,
        html: `
          <h2>ウェブサイトからのお問い合わせ</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:12px;border-bottom:1px solid #eee;font-weight:bold;width:140px;">お名前</td><td style="padding:12px;border-bottom:1px solid #eee;">${name}</td></tr>
            <tr><td style="padding:12px;border-bottom:1px solid #eee;font-weight:bold;">メール</td><td style="padding:12px;border-bottom:1px solid #eee;">${email}</td></tr>
            <tr><td style="padding:12px;border-bottom:1px solid #eee;font-weight:bold;">電話番号</td><td style="padding:12px;border-bottom:1px solid #eee;">${phone || '未入力'}</td></tr>
            <tr><td style="padding:12px;border-bottom:1px solid #eee;font-weight:bold;">会社名</td><td style="padding:12px;border-bottom:1px solid #eee;">${company || '未入力'}</td></tr>
            <tr><td style="padding:12px;border-bottom:1px solid #eee;font-weight:bold;">種別</td><td style="padding:12px;border-bottom:1px solid #eee;">${subject}</td></tr>
            <tr><td style="padding:12px;border-bottom:1px solid #eee;font-weight:bold;">内容</td><td style="padding:12px;border-bottom:1px solid #eee;white-space:pre-wrap;">${message}</td></tr>
          </table>
        `,
      })
    } else {
      // Development: log to console
      console.log('=== お問い合わせ受信 ===')
      console.log({ name, email, phone, company, subject, message })
      console.log('========================')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: '送信中にエラーが発生しました。時間を置いて再度お試しください。' },
      { status: 500 }
    )
  }
}
