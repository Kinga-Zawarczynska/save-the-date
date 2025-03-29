'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsTelephone } from "react-icons/bs";
import { CiSquareCheck } from "react-icons/ci";
import { GiPartyPopper } from "react-icons/gi";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiChurchLight } from "react-icons/pi";

export function Navbar() {
const pathname = usePathname(); // Get current page URL

const navLinks = [
  { href: "/", icon: <IoIosHeartEmpty /> },
  { href: "/church", icon: <PiChurchLight /> },
  { href: "/venue", icon: <GiPartyPopper /> },
  { href: "/form", icon: <CiSquareCheck /> },
  { href: "/contact", icon: <BsTelephone />, size: "2xl" },
];

return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-black via-black/30 to-transparent text-white z-50 py-6 px-6">
    <div className="flex items-center justify-center space-x-8">
      {navLinks.map(({ href, icon, size }) => (
        <Link 
          key={href} 
          href={href} 
          className={`text-${size ? size : "3xl"} transition-colors duration-300 
            ${pathname === href ? "text-red-400" : "text-white hover:text-gray-400"}`}
        >
          {icon}
        </Link>
      ))}
    </div>
  </nav>
);
}

