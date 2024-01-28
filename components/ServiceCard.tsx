import Image from "next/image"
import Button from "./Button"

type ServiceCardProps = {
    background: string,
    icon: string,
    heading: string,
    subheading: string
}

const ServiceCard = ({ background, icon, heading, subheading }: ServiceCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center border-b last:border-b-0 lg:border-b-0 border-r-0 lg:border-r last:border-r-0 border-white/10 px-12 py-8">
        <div className={`w-16 h-16 grid place-items-center mb-6 ${background}`}>
            <Image src={icon} alt="Icon Image" width={45} height={45} className="object-contain" />
        </div>
        <h3 className="text-xl text-white font-outfit font-semibold mb-6">{heading}</h3>
        <p className="text-sm text-white text-center leading-[24px] tracking-[-0.32px] mb-6">{subheading}</p>
        <Button type="button" text="Learn more" icon="ri-arrow-right-up-line" style="btn-dark" />
    </div>
  )
}

export default ServiceCard