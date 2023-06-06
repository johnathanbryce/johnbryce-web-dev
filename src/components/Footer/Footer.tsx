'use client'
import styles from './Footer.module.css'
// internal components
import CurveBackgroundBottom from '../CurveBackgroundBottom/CurveBackgroundBottom'
// external libraries
import { Link } from 'react-scroll'

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
                <li><Link to="services" spy={true} smooth={true} duration={500} offset={-10} > Services </Link></li>
                <li><Link to="portfolio" spy={true} smooth={true} duration={500} offset={-10} > Portfolio </Link></li>     
                <li><Link to="about" spy={true} smooth={true} duration={500} offset={-10} > About </Link></li>
                <li><Link to="fadfsda"> Contact </Link></li>  
            </ul>
            </nav>
          </div>
      </section>
  )
}

export default Footer