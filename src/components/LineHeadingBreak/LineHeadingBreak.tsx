import styles from './LineHeadingBreak.module.css'

function LineHeadingBreak() {
  return (
    <div className={styles.line_breaker}>
        <div className={styles.line}></div>
        <p className={styles.text}>jB</p>
        <div className={styles.line}></div>
    </div>
  )
}

export default LineHeadingBreak