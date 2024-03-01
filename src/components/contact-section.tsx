import Image from "next/image"
import { ChevronRight, ChevronLeft } from "lucide-react"

import contactImg from "../../public/assets/contact-section-img.png"
import contactInfoImg from "../../public/assets/contact-info-img.png"
import hiFiveImg from "../../public/assets/hi-five-img.png"
import starsImg from "../../public/assets/stars-img.png"
import avatarImg from "../../public/assets/avatar-img.png"


// for Input component
type TInputProps = {
  placeholder: string;
  classname?: string;
}


export default function ContactSection() {
  return (
    <>
      {/* UPPER SECTION WITH HAND IMAGE */}
      <section className="relative">
        <Image
          src={contactImg}
          alt="img"
          height={700}
          width={700}
          loading="lazy"
          className="w-full h-[45rem]"
        />

        {/* 'OUR VISION' BOX */}
        <div className="text-white space-y-10 absolute top-36 right-24 p-5 w-[35vw] bg-zinc-300 bg-opacity-40">
          <h1 className="text-2xl">
            Our Vision
          </h1>

          <p>
            At Banksathi, our mission revolves around enhancing awareness regarding financial products and simplifying the process of selecting and utilizing them. We provide a platform to our users to connect with financial institutions in order to access top-notch deals that facilitate the creation of wealth.
          </p>
        </div>


        {/* CONTACT FORM */}
        <div className="absolute top-[60%] right-24 bg-white p-10 rounded-2xl space-y-10 w-[40vw]">
          <div>
            <p className="capitalize text-zinc-400">
              send a message
            </p>

            <h1 className="text-2xl">
              Get in Touch with Us
            </h1>
          </div>


          <div className="grid grid-cols-2 gap-8">
            <Input placeholder="Your Name" />
            <Input placeholder="Your Mobile No." />
            <Input placeholder="Company Name" classname="col-span-2" />
            <Input placeholder="Designation" />
            <Input placeholder="Official e-mail" />
            <textarea
              placeholder="Your message"
              className="col-span-2 bg-zinc-100 p-2 border-b-2 border-zinc-300"
              rows={7}
            />
          </div>

          <button className="bg-[#14363D] text-white text-lg w-full rounded-2xl py-5">
            Send Message
          </button>
        </div>
      </section>



      {/* LOWER SECTION */}
      <section className="pt-16 pb-24 px-20 space-y-20">
        <div className="space-y-3">
          <div className="flex items-end">
            <div className="space-y-3">
              <h1 className="text-3xl">
                Contact Information: <br />
                Reach Us Here
              </h1>

              <p className="text-zinc-500">
                Feel free to contact us for inquiries, <br />
                collaboration opportunities, or any assistance <br />
                you may need
              </p>
            </div>

            <Image
              src={contactInfoImg}
              alt="img"
              height={125}
              width={125}
              loading="lazy"
            />
          </div>

          <div className="flex items-start justify-between gap-5 w-fit bg-white rounded-2xl px-5 py-10">
            <p>
              Official Mail <br />
              partner@banksathi.com
            </p>

            <Separator />

            <p>
              Phone Number <br />
              +91-88582 89224
            </p>
          </div>
        </div>


        <div className="flex items-center justify-between">
          <div className="space-y-6 w-96">
            {/* PARTNERS SECTION */}
            <div className="flex items-center gap-8">
              <Image
                src={hiFiveImg}
                alt="img"
                loading="lazy"
                height={50}
                width={50}
                className=""
              />

              <p>
                98 % Partner Satisfaction
              </p>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl">
                Check {" "}
                <span className="text-green-400">what our <span>Partners</span> </span>
                has to say
              </h1>

              <p>
                These partnerships can take many forms, but they typically involve one partner providing the technology or expertise, while the other partner provides the customer base or distribution channels.
              </p>
            </div>
          </div>


          {/* CAROUSEL SECTION */}
          <div className="relative">
            <div className="bg-white rounded-2xl flex flex-col items-center justify-center gap-10 py-10 px-12 max-w-[40rem] shadow-[0_0_10px] shadow-purple-100">
              <Image
                src={starsImg}
                alt="stars"
                loading="lazy"
                height={100}
                width={100}
              />

              <p className="text-zinc-700 text-xl">
                My experience has been great with BankSathi. It's a great organisation to collborate with.
              </p>

              <div className="flex items-center gap-5">
                <Image
                  src={avatarImg}
                  alt="avatar"
                  height={50}
                  width={50}
                  loading="lazy"
                />

                <div>
                  <h1 className="text-2xl">
                    Sanjeev D Kumar
                  </h1>

                  <p className="text-zinc-400">
                    AVP, Angel One
                  </p>
                </div>
              </div>
            </div>

            <ChevronRight className="rounded-full bg-white p-1 scale-[2] absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 border border-zinc-200" />
            <ChevronLeft className="rounded-full bg-white p-1 scale-[2] absolute top-1/2 right-full translate-x-1/2 -translate-y-1/2 border border-zinc-200" />

            <div className="absolute -bottom-10 h-full w-full scale-[0.90] rounded-2xl bg-white shadow-[0_0_10px] shadow-purple-100 -z-10" />

            <div className="absolute -bottom-20 h-full w-full scale-[0.80] rounded-2xl bg-white shadow-[0_0_10px] shadow-purple-100 -z-20" />
          </div>
        </div>
      </section>
    </>
  )
}



// input in the contact section
function Input({ placeholder, classname }: TInputProps) {
  return (
    <input
      placeholder={placeholder}
      className={`placeholder:text-zinc-400 border-b-2 border-zinc-400 py-4 ${classname}`}
    />
  )
}


// separator for mail and phone no. divider
function Separator() {
  return <div className="h-12 bg-zinc-300 w-[2px]" />
}