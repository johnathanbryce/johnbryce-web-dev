import styles from './Button.module.css'

interface ButtonProps {
    label: string,
    bgColorBlue?: boolean,
    onClick?: () => void,
}
function Button({label, bgColorBlue, onClick}: ButtonProps) {
  return (
    <button onClick={onClick} className={`${styles.reusable_btn} ${bgColorBlue ? styles.reusable_btn_blue : ''}`}>
        <p className={bgColorBlue ? styles.reusable_font_white : styles.reusable_font_dark}>{label}</p>
    </button>
  )
}

export default Button