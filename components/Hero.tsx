import Image from "next/image"
import Button from "./Button"
import HeroImage from "@/public/hero.png"
import { FEATURES } from "@/constants"
import Feature from "./Feature"

const Hero = () => {
  return (
    <section className="flex flex-col items-center px-12 lg:px-48 py-16 lg:py-32">
        <div className="w-[min(1200px,100%)] flex flex-col lg:flex-row items-center gap-32 lg:gap-12">
            <div className="flex-1">
                <p className="text-dark-slate-gray font-outfit font-semibold uppercase tracking-[1.28px]">Meet Lemon</p>
                <h1 className="max-w-[350px] text-[72px] text-black font-outfit font-semibold leading-[86.5px] tracking-[-1.44px] mb-6">Build a better site for your business.</h1>
                <p className="max-w-[350px] text-[18px] text-black tracking-[-0.36px] mb-12">Unlock the potential of your business with our comprehensive web Development services – Build a better site, boost your online presence, and drive success.</p>
                
                <div className="flex flex-wrap items-center gap-4 mb-12">
                    <Button type="button" text="Buy Lemon" style="btn-primary" />
                    <Button type="button" icon="ri-arrow-right-up-line" style="btn-bordered" />
                    <p className="text-sm text-black font-medium tracking-[-0.28px]">Or view in designer</p>
                </div>
                
                <div className="flex items-center gap-4">
                    <span className="w-12 h-12 grid place-items-center text-army-green bg-primary">
                        <i className="ri-star-fill"></i>
                    </span>
                    <p className="text-black font-medium tracking-[-0.32px]">Rated 4.9/5 from over 600 reviews.</p>
                </div>
            </div>
            
            <div className="flex-[1.2] h-full flex">
                <Image src={HeroImage} alt="Hero Image" width={900} height={900} className="object-contain m-auto" />
            </div>
        </div>
        
        <div className="w-[min(1300px,100%)] grid lg:grid-cols-3 lg:border border-ash-gray gap-4 lg:gap-0 mt-32">
            {FEATURES.map(feature => 
                <Feature key={feature.icon} icon={feature.icon} text={feature.content}  />
            )}
        </div>
    </section>
  )
}

export default Hero