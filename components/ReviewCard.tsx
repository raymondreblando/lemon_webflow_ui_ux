type ReviewCardProps = {
    review: string
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="bg-white shadow-black/60 p-10">
        <div className="flex text-green-yellow gap-3 mb-6">
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
        </div>
        <p className="text-lg text-black tracking-[-0.36px] mb-6">{review}</p>
        <p className="text-dark-slate-gray font-medium tracking-[-0.32px]">5/5</p>
        <p className="text-sm text-light-slate-gray tracking-[-0.28px]">from over 40 reviews</p>
    </div>
  )
}

export default ReviewCard