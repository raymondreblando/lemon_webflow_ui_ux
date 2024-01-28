type ButtonProps = {
    type: "button" | "submit",
    text?: string,
    icon?: string,
    style: string,
    onClick?: () => void
}

const Button = ({ type, text, icon, style, onClick }: ButtonProps) => {
  return (
    <button type={type} className={style} onClick={onClick} >
        {text}
        <i className={icon}></i>
    </button>
  )
}

export default Button