import { MoveRight } from 'lucide-react'


export default function HelpSection() {
  return (
    <section className='bg-gradient-to-r from-green-400 from-10% via-green-500 via-50% to-green-900 to-90% text-white py-16 flex items-center justify-center gap-5 md:gap-10 lg:gap-16'>
      <p className='text-2xl lg:text-4xl w-[75%]'>
        Having trouble choosing a product? Let&apos;s connect
      </p>

      <MoveRight className='scale-[2] md:scale-[2]' />
    </section>
  )
}
