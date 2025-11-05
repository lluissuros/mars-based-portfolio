import Image from 'next/image'
import authorImage from '@/public/images/authors/lluis.png'
import { getIntroContent } from '@/lib/intro'
import MDXContent from '@/components/mdx-content'

export default async function Intro() {
  const content = await getIntroContent()

  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='prose prose-neutral dark:prose-invert mt-2 flex-1 md:mt-0'>
        <MDXContent source={content} />
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Lluis Suros'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
