import Image from "next/image"

type FeatureProps = {
    icon: string,
    text: string
}

const Feature = ({ icon, text }: FeatureProps) => {
  return (
    <div className="flex items-center border-y lg:border-y-0 border-l lg:border-l-0 border-r lg:last:border-r-0 border-ash-gray">
        <div className="shrink-0 h-full grid place-items-center border-r border-ash-gray px-6 py-4">
            <Image src={icon} alt="Feature Icon" width={35} height={35} />
        </div>
        <div className="px-2 py-3">
            <p className="text-sm text-dark-slate-gray">{text}</p>
        </div>
    </div>
  )
}

export default Feature