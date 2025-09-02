import { type NextRequest, NextResponse } from "next/server"
import * as nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Email environment variables not set.")
      return NextResponse.json(
        { success: false, message: "Server configuration error." },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`, // Shows "Portfolio Contact" as the sender name
      to: process.env.EMAIL_USER,
      replyTo: email, // IMPORTANT: This allows you to reply directly to the sender
      subject: `New Message from ${name}: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f7; color: #333; margin: 0; padding: 20px; }
                .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); overflow: hidden; }
                .header { background: linear-gradient(90deg, #0891b2, #0d9488); color: white; padding: 24px; text-align: center; }
                .header h1 { margin: 0; font-size: 24px; }
                .content { padding: 24px; }
                .info-grid { display: grid; grid-template-columns: 100px 1fr; gap: 8px 16px; margin-bottom: 24px; font-size: 15px; }
                .info-grid strong { color: #555; }
                .message-box { background-color: #f8f9fa; border-left: 4px solid #0891b2; padding: 16px; border-radius: 6px; white-space: pre-wrap; word-wrap: break-word; font-size: 15px; line-height: 1.6; }
                .footer { text-align: center; padding: 16px; font-size: 12px; color: #888; background-color: #f8f9fa; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>New Portfolio Message</h1>
                </div>
                <div class="content">
                    <div class="info-grid">
                        <strong>From:</strong>
                        <span>${name}</span>
                        <strong>Email:</strong>
                        <span><a href="mailto:${email}">${email}</a></span>
                        <strong>Subject:</strong>
                        <span>${subject}</span>
                    </div>
                    <p style="margin-bottom: 12px; font-size: 16px; color: #333; font-weight: 600;">Message:</p>
                    <div class="message-box">
                        ${message}
                    </div>
                </div>
                <div class="footer">
                    Sent from your portfolio contact form.
                </div>
            </div>
        </body>
        </html>
      `,
      text: `
        You have received a new message from your portfolio contact form.\n\n
        From: ${name}\n
        Email: ${email}\n
        Subject: ${subject}\n\n
        Message:\n
        ${message}
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    )
  }
}