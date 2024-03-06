import styles from './LineHeadingBreak.module.css'
import Image from 'next/image'
// internal assets
import logo from '../../../public/images/wavesLogoTransparentBlue.png'


function LineHeadingBreak() {
  return (
    <div className={styles.line_breaker}>
        <div className={styles.line}></div>
          <Image src={logo} className={styles.logo} alt="Blue Wave Dev's waves logo"/>
        {/* <p className={styles.text}>BWD</p> */}
        <div className={styles.line}></div>
    </div>
  )
}

export default LineHeadingBreak