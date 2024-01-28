type AboutListProps = {
    id: number,
    styling: string,
    content: string
}

const AboutList = ({ id, styling, content }: AboutListProps) => {
  return (
    <li className="flex flex-wrap md:flex-nowrap items-center lg:items-start gap-4 mb-12 last:mb-0">
        <div className={`shrink-0 w-16 h-16 grid place-items-center ${styling}`}>
          <p className="text-xl font-outfit font-semibold">{id}</p>
        </div>
          <p className="text-base text-black">{content}</p>
    </li>
  )
}

export default AboutList