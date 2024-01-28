import { BLOGS } from "@/constants"
import BlogCard from "./BlogCard"


const Blog = () => {
  return (
    <section className="relative flex flex-col items-center bg-pattern-three bg-cover bg-no-repeat px-12 xl:px-48 py-24 lg:py-32">
      <p className="text-dark-slate-gray text-center font-outfit font-semibold uppercase tracking-[1.28px] mb-2">Business blog tips and tricks</p>
      <h1 className="max-w-[600px] text-[48px] text-black text-center font-outfit font-semibold leading-[57.5px] tracking-[-0.96px] mb-24">Our recent news & insights</h1>

      <div className="flex flex-col lg:flex-row gap-4 xl:gap-16">
        {BLOGS.map(blog => 
          <BlogCard key={blog.image} {...blog} />
        )}
      </div>
    </section>
  )
}

export default Blog