'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { sendEmailToMyself_Test } from '@/lib/actions'

export default function SendEmailToMyselfButton() {
  const [isSending, setIsSending] = useState(false)

  async function handleClick() {
    try {
      setIsSending(true)
      const result = await sendEmailToMyself_Test()

      if (result?.error) {
        toast.error('Failed to send test email')
        return
      }

      toast.success(
        "Merci! Ja he rebut l'email avisant que has vist el portfolio"
      )
    } catch {
      toast.error('Unexpected error while sending')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <Button
      onClick={handleClick}
      disabled={isSending}
      variant='secondary'
      className='cursor-pointer'
    >
      {isSending
        ? 'Sending…'
        : `Ja m'ho estic mirant Lluis, no hi fotis mes hores`}
    </Button>
  )
}
