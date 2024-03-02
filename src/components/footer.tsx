import Image from "next/image"
import Link from "next/link"

import logoImg from "../../public/assets/logo.png"
import linkedInImg from "../../public/assets/LinkedIN.png"
import instaImg from "../../public/assets/Instagram.png"
import facebookImg from "../../public/assets/Facebook_black.png"
import mailImg from "../../public/assets/Mail.png"
import whatsappImg from "../../public/assets/WhatsApp.png"
import twitterImg from "../../public/assets/Twitter.png"


// PRODUCTS LIST
const products = ["Credit Card", "Personal loan", "Insurance", "banking", "investment", "demat account"];

// RESOURCE LIST
const resources = ["EMI Calculator", "CIBIL Score Calculator", "Insurance Calculator"];

// TOOLS LIST
const tools = ["article", "blogs", "videos",];

// COMPANY LIST
const company = ["About BankSathi", "contact us", "Careers", "privacy & policy"];

// SOCIAL LINKS IMG
const socialLinks= [facebookImg, instaImg, linkedInImg, mailImg, whatsappImg, twitterImg];



export default function Footer() {
  return (
    <footer className="py-10 px-4 lg:px-12 xl:px-20 flex flex-col justify-between gap-16 bg-gray-900 text-white">
      {/* LOGO WITH SOCIAL LINKS */}
      <div className="flex flex-row items-center justify-between gap-12">
        <div className="flex items-center justify-center gap-2 md:gap-5">
          <Image
            src={logoImg}
            alt="logo"
            height={30}
            width={30}
            loading="lazy"
            className="text-90 md:scale-125"
          />
          <p className="text-2xl md:text-4xl">
            BankSathi
          </p>
        </div>


        {/* SOCIAL LINKS */}
        <div className="hidden sm:flex flex-row items-center justify-between gap-5">
          {socialLinks.map((lnk, idx) => (
            <Link
              href={"/"}
              key={idx}
            >
              <Image 
                src={lnk}
                alt="lnk img"
                height={30}
                width={30}
                loading="lazy"
                className=""
              />
            </Link>
          ))}
        </div>
      </div>


      {/* SECTION TO HOLD FOOTER LINKS AND CONTACT INFO */}
      <div className="flex flex-flow flex-wrap flex-1 gap-y-16 justify-between items-start">
      {/* grid grid-cols-5 place-items-center */}

        {/* CONTACT INFO */}
        <div className="space-y-5">
          <p className="text-2xl underline">Address</p>

          <p>
            First Floor, Plot No 3/1, Attic Smart Square <br />
            Complex, Above 3M Care & LBB, 100 Feet <br />
            Rd, Binnamangala, Stage 1, Indiranagar,<br />
            Bengaluru, Karnataka - 560038, India
          </p>

          <p>
            <span className="text-xl">Phone: </span>+91 7026833933
          </p>

          <p>
            <span className="text-xl">Mail :</span> customer@banksathi.com
          </p>
        </div>


        {/* PRODUCTS */}
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-2xl underline">
            Products
          </h1>
          {products.map((prod, idx) => (
            <Link
              key={idx}
              href={"/"}
              className="capitalize"
            >
              {prod}
            </Link>
          ))}
        </div>


        {/* RESOURCES */}
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-2xl underline">
            Resources
          </h1>
          {resources.map((res, idx) => (
            <Link
              key={idx}
              href={"/"}
              className="capitalize"
            >
              {res}
            </Link>
          ))}
        </div>


        {/* TOOLS */}
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-2xl underline">
            Tools
          </h1>
          {tools.map((tool, idx) => (
            <Link
              key={idx}
              href={"/"}
              className="capitalize"
            >
              {tool}
            </Link>
          ))}
        </div>


        {/* COMPANY */}
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-2xl underline">
            Company
          </h1>
          {company.map((comp, idx) => (
            <Link
              key={idx}
              href={"/"}
              className="capitalize"
            >
              {comp}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
