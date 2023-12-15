'use client'

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {name: 'Home', href:'/'},
  {name: 'Saudi', href:'/Saudi'},
  {name: 'Egypt', href:'/Egypt'},
  {name: 'Europe', href:'/Europe'},
]

export default function Navbar(){
  const pathname = usePathname();
  return(
    <header className="mb-8 border-b">
      <div className="flex justify-between items-center max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl bg-gray-100">
        <Link href="/">
          <h1 className="text-4xl font-bold text-primary">Barzat</h1>
        </Link>

        <nav className="hidden lg:flex gap-8">
        
        {links.map((link,idx)=>(
          <div key={idx}>
            {/* Active state  */}
            {pathname === link.href ? (
              <Link className="text-primary" href={link.href}>{link.name}</Link>
            ): (
              <Link className="text-gray-500" href={link.href}>{link.name}</Link>
            )}
          </div>
        ))}
        </nav>

        <div className="flex divide-x border-r sm:border-l">
          <Button variant={"outline"} className="gap-y-2.5 h-12"><ShoppingBag/><span className="hidden md:block ">Cart</span></Button>
        </div>

      </div>
    </header>
  )
}