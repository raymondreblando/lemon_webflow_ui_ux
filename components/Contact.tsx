import Image from "next/image"
import Element from "@/public/element-3.svg"
import Input from "./Input"
import Button from "./Button"

const Contact = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="w-[min(1700px,100%)] flex flex-col lg:flex-row items-center bg-pattern-three bg-cover bg-no-repeat gap-4 px-12 lg:px-48 py-16 lg:py-20">
        <div className="relative flex-[1.5]">
          <Image src={Element} alt="Element" width={60} height={50} className="absolute top-0 right-[22%]" />
          <h3 className="max-w-[700px] text-[40px] text-army-green text-center lg:text-start font-outfit font-semibold">Subscribe to our newsletter for exclusive updates and offers.</h3>
        </div>
        
        <form className="flex-1 w-full lg:w-max flex flex-col" autoComplete="off">
          <Input type="email" style="w-full input-dark" placeholder="Email address" />
          <Button type="submit" text="Get Started" icon="ri-arrow-right-up-line" style="btn-dark" />
        </form>
      </div>
    </section>
  )
}

export default Contact