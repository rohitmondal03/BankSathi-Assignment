import Image from "next/image"
import Link from "next/link";
import { MoveUpRightIcon, User, Search } from "lucide-react"

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
    <nav className="py-5 px-3 lg:px-16 flex items-center justify-between md:justify-around gap-3 md:gap-0">
      <div className="flex items-center justify-center gap-3">
        <Image
          src={logoImg}
          alt="logo"
          height={30}
          width={30}
        />
        <p className="hidden sm:flex text-2xl">
          BankSathi
        </p>
      </div>


      <div className="hidden md:flex items-center gap-4 lg:gap-10">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm lg:text-base"
          >
            {link.title}
          </Link>
        ))}
      </div>


      <button className="hidden md:flex bg-green-500 py-2 px-3 lg:py-3 lg:px-5 rounded-xl text-white text-sm md:text-base">
        Download <MoveUpRightIcon className="ml-2" />
      </button>


      {/* FOR MOBILE VIEW */}
      <div className="flex md:hidden items-center gap-2 sm:gap-4">
        <SearchButton />
        <UserButton />
      </div>
    </nav>
  )
}




// user button for mobile
function UserButton() {
  return (
    <div className="bg-green-500 p-2 rounded-lg scale-90 md:scale-100">
      <User className="text-white" />
    </div>
  )
}

// Search button for mobile view
function SearchButton() {
  return (
    <div className="p-2 rounded-lg border-2 border-black scale-90 md:scale-100">
      <Search className="scale-95" />
    </div>
  )
}