import Image from "next/image"
import Button from "./Button"
import Element from "@/public/element-1.svg"
import ProjectImage from "@/public/content-img-2.png"

const Projects = () => {
  return (
    <section className="flex flex-col items-center px-12 lg:px-48 py-16 lg:py-40">
      <div className="w-[min(1300px,100%)] flex flex-col lg:flex-row items-center gap-32 lg:gap-12 mb-20">
        <div className="relative flex-1">
          <Image src={Element} alt="Element" width={60} height={50} className="absolute top-0 right-[26%] -z-[1]" />
          <p className="text-dark-slate-gray font-outfit font-semibold uppercase tracking-[1.28px]">Projects</p>
          <h1 className="max-w-[500px] text-[48px] text-black font-outfit font-semibold leading-[57.5px] tracking-[-0.96px] mb-6">Build beautiful sites without the stress.</h1>
          <p className="max-w-[400px] text-[18px] text-black tracking-[-0.36px] mb-12">Craft stunning websites effortlessly: transform your vision into reality, surpassing expectations, and enjoy a stress-free building experience with us.</p>

          <div className="max-w-[450px] flex flex-wrap border border-ash-gray gap-4 py-6 mb-6">
            <div className="flex-1 flex justify-center items-center border-r border-r-ash-gray gap-4 px-6">
              <h2 className="text-3xl text-black font-outfit font-semibold">100<span className="text-green-yellow">+</span></h2>
              <p className="text-sm font-medium">Successful <br /> Projects</p>
            </div>
            <div className="flex-1 flex justify-center items-center gap-4 px-6">
              <h2 className="text-3xl text-black font-outfit font-semibold">39<span className="text-green-yellow">+</span></h2>
              <p className="text-sm font-medium">Successful <br /> Projects</p>
            </div>
          </div>
          
          <Button type="button" text="Get Started" icon="ri-arrow-right-up-line" style="block w-[min(450px,100%)] btn-primary" />
        </div>
        
        <div className="relative flex-1 h-full flex">
          <Image src={ProjectImage} alt="Payment Plan" width={800} height={800} className="object-contain m-auto" />
        </div>
      </div>
    </section>
  )
}

export default Projects