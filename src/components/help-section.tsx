import { MoveRight } from 'lucide-react'


export default function HelpSection() {
  return (
    <section className='bg-gradient-to-r from-green-400 from-10% via-green-500 via-50% to-green-900 to-90% text-white text-4xl py-16 flex items-center justify-center gap-16'>
      <h1>
        Having trouble choosing a product? Let&apos;s connect
      </h1>

      <MoveRight className='scale-[2]' />
    </section>
  )
}
