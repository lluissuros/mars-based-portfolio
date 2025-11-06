import Intro from '@/components/intro'
import RecentPosts from '@/components/recent-posts'

export default function Home() {
  return (
    <section className='pt-40 pb-24'>
      <div className='container max-w-3xl'>
        <Intro />

        <RecentPosts />
      </div>
    </section>
  )
}
