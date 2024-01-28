"use client"

import { useState } from "react"
import Image from "next/image"
import Logo from "@/public/logo.svg"
import Link from "next/link"
import Button from "./Button"
import { NAV_LINKS } from "@/constants"

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  return (
    <header className="border-b-2 border-ash-gray/30 overflow-hidden px-12 xl:px-48 py-4">
        <nav className="flex items-center justify-between lg:justify-start gap-12">
            <Image src={Logo} alt="Lemon Logo" width={60} height={60} />
            
              <div className={`nav-menu ${toggleNav ? 'show' : ''}`}>
                <ul className="flex flex-col lg:flex-row gap-12">
                    {NAV_LINKS.map(item =>
                        <Link
                            href={item.path}
                            key={item.title}
                            className="text-black text-center lg:text-start font-medium"
                        >{item.title}</Link>
                    )}
                </ul>
                <Button type="button" text="Purchase Now" style="w-full lg:w-max btn-bordered-sm" />
            </div>
            
        <Button type="button" icon={toggleNav ? "ri-close-fill" : "ri-menu-line"} style="lg:hidden btn-bordered" onClick={() => setToggleNav(!toggleNav)} />
        </nav>
    </header>
  )
}

export default Navbar