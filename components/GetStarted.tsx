import Image from "next/image"
import Button from "./Button"
import Element from "@/public/element-1.svg"
import GetStartedImage from "@/public/get-started-img.png"
import Input from "./Input"

const GetStarted = () => {
  return (
    <section className="flex flex-col items-center px-12 lg:px-48 py-16 lg:py-32">
      <div className="w-[min(1300px,100%)] flex flex-col lg:flex-row items-center gap-32 lg:gap-12">
          <div className="relative flex-1 h-full flex">
            <Image src={GetStartedImage} alt="Payment Plan" width={900} height={900} className="object-contain" />
          </div>
          <div className="relative flex-1">
            <Image src={Element} alt="Element" width={60} height={50} className="absolute top-2 right-[39%] -z-[1]" />
            <p className="text-dark-slate-gray font-outfit font-semibold uppercase tracking-[1.28px]">Get Started</p>
            <h1 className="max-w-[500px] text-[48px] text-black font-outfit font-semibold leading-[57.5px] tracking-[-0.96px] mb-6">Start your Lemon journey here.</h1>
            <p className="max-w-[400px] text-[18px] text-black tracking-[-0.36px] mb-12">Embark on a transformative journey: start your lemon experience here, building a better site for your business with us.</p>
            
            <form autoComplete="off" className="mb-4">
              <Input type="text" style="input-gray" placeholder="Your Name" />
              <Input type="email" style="input-gray" placeholder="Company Email" />
              <Button type="submit" text="Get Started" icon="ri-arrow-right-up-line" style="block w-[min(450px,100%)] btn-primary" />
            </form>
            
            <p className="text-sm text-light-slate-gray font-medium tracking-[-0.28px] mb-4">14 day trial – No credit card required</p>
          </div>
        </div>
    </section>
  )
}

export default GetStarted