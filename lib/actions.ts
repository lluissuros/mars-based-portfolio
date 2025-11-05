'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema, NewsletterFormSchema } from '@/lib/schemas'
import ContactFormEmail from '@/emails/contact-form-email'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>

let resend: Resend | null = null

try {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured')
  }
  resend = new Resend(process.env.RESEND_API_KEY)
} catch (error) {
  console.error('Failed to initialize Resend:', error)
}

export async function sendEmail(data: ContactFormInputs) {
  let resend: Resend | null = null

  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured')
    }
    resend = new Resend(process.env.RESEND_API_KEY)
  } catch (error) {
    console.error('Failed to initialize Resend:', error)
  }

  const result = ContactFormSchema.safeParse(data)

  if (!resend) {
    return {
      error:
        'Email service is not configured. Please contact the administrator.'
    }
  }

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { name, email, message } = result.data
    const { data, error } = await resend.emails.send({
      from: 'lluissuros@gmail.com',
      to: [email],
      cc: ['lluissuros@gmail.com'],
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message })
    })

    if (!data || error) {
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error) {
    return { error }
  }
}

export async function subscribe(data: NewsletterFormInputs) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return {
        error: 'No tinc API KEYS per enviar res, hehe'
      }
    }
    resend = new Resend(process.env.RESEND_API_KEY)
  } catch (error) {
    console.error('Failed to initialize Resend:', error)
  }

  if (!resend) {
    return {
      error:
        'Email service is not configured. Please contact the administrator.'
    }
  }

  const result = NewsletterFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { email } = result.data
    const { data, error } = await resend.contacts.create({
      email: email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string
    })

    if (!data || error) {
      throw new Error('Failed to subscribe')
    }

    // TODO: Send a welcome email

    return { success: true }
  } catch (error) {
    return { error }
  }
}
