type InputProps = {
  type: string,
  style: string,
  placeholder?: string,
}

const Input = ({ type, style, placeholder }: InputProps) => {
  return (
    <input type={type} placeholder={placeholder} className={`${style} w-[min(450px,100%)] h-14 text-sm tracking-[-0.28px] outline-0 px-6 mb-4`} />
  )
}

export default Input