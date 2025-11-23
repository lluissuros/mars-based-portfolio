import TypescriptTests from '@/components/typescript-tests/typescript-tests'

export default function Tests() {
  return (
    <section className='pt-40 pb-24'>
      <div className='container max-w-3xl'>
        <h2 className='title'>{`Let's test things out`}</h2>
      </div>

      <div className='prose container max-w-3xl'>
        <TypescriptTests />
      </div>
    </section>
  )
}
