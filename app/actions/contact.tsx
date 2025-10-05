"use server"

import { Resend } from "resend"
import { getSupabase } from "@/lib/supabase"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: {
  name: string
  email: string
  message: string
}) {
  try {
    // Save to Supabase
    const supabase = getSupabase()
    const { error: dbError } = await supabase.from("contact_submissions").insert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        created_at: new Date().toISOString(),
      },
    ])

    if (dbError) {
      console.error("[v0] Supabase error:", dbError)
      throw new Error("Failed to save contact submission")
    }

    // Send notification email to you
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // You'll change this to your verified domain
      to: "rehanhussain4000@gmail.com",
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
      `,
    })

    // Send confirmation email to the sender
    await resend.emails.send({
      from: "Rehan Hussain <onboarding@resend.dev>", // You'll change this to your verified domain
      to: formData.email,
      subject: "Thanks for reaching out!",
      html: `
        <h2>Hi ${formData.name},</h2>
        <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
        <p>In the meantime, feel free to check out my work on <a href="https://github.com/Re7anu">GitHub</a> or connect with me on <a href="https://www.linkedin.com/in/rehan-hussain-31a6012a5/">LinkedIn</a>.</p>
        <br>
        <p>Best regards,</p>
        <p><strong>Rehan Hussain</strong></p>
        <p>Data Scientist</p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return { success: false, error: "Failed to send message" }
  }
}
