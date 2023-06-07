import styles from './Button.module.css'

interface ButtonProps {
    label: string,
    bgColorBlue?: boolean,
    onClick?: () => void,
}
function Button({label, bgColorBlue, onClick}: ButtonProps) {
  return (
    <button onClick={onClick} className={`${styles.hero_btn} ${bgColorBlue ? styles.hero_btn_blue : ''}`}>
        <p className={bgColorBlue ? styles.hero_font_white : ''}>{label}</p>
    </button>
  )
}

export default Button