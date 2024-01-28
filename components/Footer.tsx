import Image from "next/image"
import Logo from "@/public/logo.svg"
import { NAV_LINKS } from "@/constants"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-center md:justify-between border-t border-t-ash-gray gap-4 py-6 px-12 xl:px-28 mt-12">
      <div className="flex items-center gap-4">
        <Image src={Logo} alt="Lemon Logo" width={50} height={50} />
        <p className="text-sm text-black">Lemon Webflow</p>
      </div>
      <ul className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-12">
        {NAV_LINKS.map(item =>
            <Link
                href={item.path}
                key={item.title}
                className="text-sm text-black text-center lg:text-start"
            >{item.title}</Link>
        )}
    </ul>
    </footer>
  )
}

export default Footer