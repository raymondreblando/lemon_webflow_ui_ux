import Image from "next/image"
import Element from "@/public/element-3.svg"
import { REVIEWS } from "@/constants"
import ReviewCard from "./ReviewCard"

const Review = () => {
  return (
    <section className="relative flex flex-col items-center bg-pattern-two bg-cover bg-no-repeat px-12 xl:px-48 py-16 lg:py-32">
      <Image src={Element} alt="Element" width={60} height={50} className="absolute top-[19%] right-[36%]" />
      <p className="text-dark-slate-gray text-center font-outfit font-semibold uppercase tracking-[1.28px] mb-2">Customer Review</p>
      <h1 className="max-w-[500px] text-[48px] text-black text-center font-outfit font-semibold leading-[57.5px] tracking-[-0.96px] mb-24">Customers love the ease and simplicity</h1>

      <div className="flex flex-col lg:flex-row items-center gap-4 xl:gap-16">
        {REVIEWS.map(review => 
          <ReviewCard key={review.id} review={review.review} />
        )}
      </div>
    </section>
  )
}

export default Review