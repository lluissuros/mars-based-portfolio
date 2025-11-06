'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

interface LoomVideoProps {
  videoId?: string
  shareUrl?: string
  className?: string
}

export default function LoomVideo({
  videoId,
  shareUrl,
  className
}: LoomVideoProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Extract video ID from share URL if provided
  let id = videoId
  if (shareUrl && !videoId) {
    const match = shareUrl.match(/loom\.com\/share\/([a-f0-9-]+)/)
    if (match) {
      id = match[1]
    }
  }

  if (!id) {
    return <div>Invalid Loom video URL or ID</div>
  }

  const embedUrl = `https://www.loom.com/embed/${id}`

  return (
    <div className={`my-8 ${className || ''}`}>
      <div className='relative w-full' style={{ paddingBottom: '56.25%' }}>
        {isLoading && (
          <Card className='absolute top-0 left-0 h-full w-full overflow-hidden rounded-xl border p-0 shadow'>
            <Skeleton className='h-full w-full rounded-xl' />
          </Card>
        )}
        <iframe
          src={embedUrl}
          frameBorder='0'
          allowFullScreen
          className={`absolute top-0 left-0 h-full w-full rounded-xl transition-opacity ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          title='Loom video player'
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  )
}
