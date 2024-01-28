import Image from "next/image"
import Button from "./Button"
import Element from "@/public/element-1.svg"
import FounderAvatar from "@/public/content-avatar.png"
import ServiceImage from "@/public/content-img.png"
import { SERVICES } from "@/constants"
import ServiceCard from "./ServiceCard"

const Service = () => {
  return (
    <section className="flex flex-col items-center px-12 lg:px-48 py-16 lg:py-32">
        <div className="w-[min(1300px,100%)] flex flex-col lg:flex-row items-center gap-32 lg:gap-12 mb-20">
            <div className="relative flex-1">
                <Image src={Element} alt="Element" width={60} height={50} className="absolute top-0 right-[32%] -z-[1]" />
                <p className="text-dark-slate-gray font-outfit font-semibold uppercase tracking-[1.28px]">Service</p>
                <h1 className="max-w-[500px] text-[48px] text-black font-outfit font-semibold leading-[57.5px] tracking-[-0.96px] mb-6">Flexible payment solutions tailored to your needs.</h1>
                <p className="max-w-[400px] text-[18px] text-black tracking-[-0.36px] mb-12">Choose a plan that fits your budget and unlocks the full potential of your business growth.</p>
                
                <Button type="button" text="Get Started" icon="ri-arrow-right-up-line" style="btn-primary mb-12" />
                
                <p className="text-sm text-dark-slate-gray tracking-[-0.28px] mb-4">Add an additional detail here.</p>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary rounded-full overflow-hidden">
                        <Image src={FounderAvatar} alt="Founder Image" width={45} height={45} className="object-cover" />
                    </div>
                    <div>
                        <p className="text-black font-medium tracking-[-0.32px]">John Smith</p>
                        <p className="text-sm text-dark-slate-gray font-medium tracking-[-0.28px]">Founder @ Lemon</p>
                    </div>
                </div>
            </div>
            
            <div className="relative flex-[1.2] h-full flex">
                <Image src={ServiceImage} alt="Payment Plan" width={900} height={900} className="object-contain m-auto" />
            </div>
        </div>
        
        <div className="w-[min(1800px,100%)] grid lg:grid-cols-3 bg-pattern-one bg-cover bg-no-repeat py-14">
            {SERVICES.map(service => 
                <ServiceCard key={service.icon} {...service} />
            )}
        </div>
    </section>
  )
}

export default Service