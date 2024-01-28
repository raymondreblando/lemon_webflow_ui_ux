import { ABOUTS } from "@/constants"
import Button from "./Button"
import AboutList from "./AboutList"


const About = () => {
  return (
    <section className="flex flex-col items-center px-12 lg:px-48 py-16 lg:py-32">
      <div className="w-[min(900px,100%)] flex flex-col lg:flex-row items-center gap-32 lg:gap-12">
        <div className="relative flex-1">
          <p className="text-dark-slate-gray font-outfit font-semibold uppercase tracking-[1.28px]">Meet Lemon</p>
          <h1 className="max-w-[500px] text-[48px] text-black font-outfit font-semibold leading-[57.5px] tracking-[-0.96px] mb-6">Discover our story: Get to know us.</h1>
          <p className="max-w-[400px] text-[18px] text-black tracking-[-0.36px] mb-12">At Lemon, we're architects of digital transformation, crafting innovative solutions to redefine possibilities and drive business success.</p>
          <Button type="button" text="Get Started" icon="ri-arrow-right-up-line" style="btn-primary mb-12" />
        </div>
        <div className="flex-1">
          {ABOUTS.map(about => 
            <AboutList key={about.id} {...about} />
          )}
        </div>
      </div>
    </section>
  )
}

export default About