import Image from "next/image"
import BlogUser from "@/public/avatar-2.png"

type BlogCardProps = {
    image: string,
    time: string,
    heading: string
}

const BlogCard = ({ image, time, heading }: BlogCardProps) => {
  return (
    <article className="flex-1 bg-white">
        <Image src={image} alt="Blog Image" width={320} height={320} className="w-full object-cover" />
        <div className="flex flex-col p-6">
            <p className="text-xs text-light-slate-gray font-outfit font-semibold uppercase mb-4">{time} to read</p>
            <h3 className="max-w-[300px] text-2xl text-black font-outfit font-semibold tracking-[-0.24px] mb-6">{heading}</h3>
            <div className="flex items-center gap-4 mt-auto">
                <Image src={BlogUser} alt="Blog Poster" width={30} height={30} />
                <p className="text-sm text-black font-medium">Ewell Torphy</p>
            </div>
        </div>
    </article>
  )
}

export default BlogCard