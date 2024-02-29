import Image from "next/image"

import handshakeImg from "../../public/assets/handshake.png"
import sbiImg from "../../public/assets/sbiImg.png"
import kotakImg from "../../public/assets/kotakImg.png"
import induslandImg from "../../public/assets/induslandbankImg.png"
import axisImg from "../../public/assets/axisImg.png"
import hdfcImg from "../../public/assets/hdfcImg.png"


// list of image src of partnering company.
const partners = [kotakImg, sbiImg, hdfcImg, axisImg, induslandImg];


export default function HeroSection() {
  return (
    <section className="intro-bg space-y-16 text-center py-24 bg-primary text-white">
      <div className='space-y-6'>
        <h1 className='font-bold text-4xl'>
          Collaborate, Thrive & Succeed <br />
          Explore Our Partnerships
        </h1>

        <p>
          Empower Every Household Financially with Our Platform. <br />
          Say Goodbye to Confusion and Secure Better Deals!
        </p>
      </div>


      <div className="space-y-5">
        <div className='w-44 bg-white px-5 py-3 rounded-[5rem] mx-auto relative'>
          <div className='text-left text-primary'>
            <p className='text-[0.5rem] font-thin'>
              LET&apos;S TALK
            </p>
            <p className=''>
              Be Our Partner
            </p>
          </div>

          <Image
            src={handshakeImg}
            alt="img"
            height={50}
            width={50}
            className="absolute -right-5 -top-5 rounded-full px-2 py-3 border-white border-2 bg-primary"
          />
        </div>

        <p className="text-sm">
          Your Trusted Partner in Finance
        </p>
      </div>


      <div className="flex items-center justify-around px-20">
        {partners.map(img => (
          <Image
            key={img.src}
            src={img}
            alt="img"
            height={100}
            width={100}
          />
        ))}
      </div>
    </section>
  )
}
