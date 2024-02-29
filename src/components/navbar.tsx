import Image from "next/image"
import Link from "next/link";
import { MoveUpRightIcon } from "lucide-react"

import logoImg from "../../public/assets/logo.png"


type TNavLinks = {
  title: string;
  href: string;
}


const navLinks: TNavLinks[] = [
  {
    title: "Products",
    href: "/prod",
  },
  {
    title: "How  it works?",
    href: "/how-it-works",
  },
  {
    title: "About Us",
    href: "/about"
  },
  {
    title: "Contact us",
    href: "/contact"
  },
  {
    title: "Partners",
    href: "/partners"
  },
]


export default function Navbar() {
  return (
    <nav className="py-5 px-16 flex items-center justify-around">
      <div className="flex items-center justify-center gap-3">
        <Image
          src={logoImg}
          alt="logo"
          height={30}
          width={30}
        />
        <p className="text-2xl">
          BankSathi
        </p>
      </div>

      <div className="flex items-center gap-10">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <button className="bg-green-500 py-3 px-5 rounded-xl text-white flex">
        Download <MoveUpRightIcon className="ml-2" />
      </button>
    </nav>
  )
}
