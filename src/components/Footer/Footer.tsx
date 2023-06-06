import styles from './Footer.module.css'
import Link from 'next/link'
// internal components
import CurveBackgroundBottom from '../CurveBackgroundBottom/CurveBackgroundBottom'

function Footer() {
  return (
      <section className={styles.footer}>
          <CurveBackgroundBottom />
          <div className={styles.footer_content}>
            <div className={styles.logo_wrapper}>
              <h4> jB </h4>
              <p> WEB DEVELOPMENT </p>
            </div>
            <a href="mailto:johnathanbryce@gmail.com">johnathanbryce@gmail.com</a>
            <a href="tel:+6042207425"> (604) 220 7425</a>
          </div>
          <div className={styles.footer_content}>
            <h4> Navigation </h4>
            <nav className={styles.navbar}>
                <ul>
                    <li><Link href="" > Services </Link></li>
                    <li><Link href="" > Portfolio </Link></li>     
                    <li><Link href="" > About </Link></li>
                    <li><Link href="" > Contact </Link></li>  
                </ul>
            </nav>
          </div>
      </section>
  )
}

export default Footer