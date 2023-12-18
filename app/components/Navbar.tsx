'use client'
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: 'About', href: '/' },
  { name: 'Services', href: '/Saudi' },
  { name: 'Holiday Packages', href: '/Egypt' },
  { name: 'Contact Us', href: '/Europe' },
]


export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className=" absolute z-[10] w-full px-4  sm:px-6 ">
      <div className="h-[120px] max-w-2xl lg:max-w-7xl mx-auto flex justify-between items-center  ">
      <Link href="/">
        <h1 className="text-2xl font-semibold text-white">Barzat</h1>
      </Link>

      <nav className="hidden lg:flex gap-8">
        {links.map((link, idx) => (
          <div key={idx}>
            {/* Active state  */}
            {pathname === link.href ? (
              <Link className="text-yellow-500" href={link.href}>{link.name}</Link>
              ) : (
                <Link className="text-white" href={link.href}>{link.name}</Link>
                )}
          </div>
        ))}
      </nav>

      <a className="flex flex-col gap-1 cursor-pointer">
        <div className="w-[40px] h-[2px] bg-white"></div>
        <div className="w-[40px] h-[2px] bg-white"></div>
      </a>
        </div>

    </div>
  )
}