'use client'
import { useState } from 'react'
import styles from './Footer.module.css'
// internal components
import CurveBackgroundBottom from '../CurveBackgroundBottom/CurveBackgroundBottom'
import ContactModal from '../ContactModal/ContactModal'
// external libraries
import { Link } from 'react-scroll'

function Footer() {
  // open and close contact modal
  const [isContactModalActive, setIsContactModalActive] = useState(false);

  const onClickOpenModal = () => {
    setIsContactModalActive(true);                                               
  }

  const onClickCloseModal = () => {
    setIsContactModalActive(false);                                               
  }
  return (
      <footer className={styles.footer}>
          {/* toggle contact modal */}
          {isContactModalActive && <ContactModal onClickCloseModal={onClickCloseModal}/>}
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
                <li><Link to="fadfsda" onClick={onClickOpenModal}> Contact </Link></li>  
            </ul>
            </nav>
          </div>
      </footer>
  )
}

export default Footer