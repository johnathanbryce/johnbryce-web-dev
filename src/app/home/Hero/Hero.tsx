'use client'
import { useState } from 'react'
import styles from './Hero.module.css'
import Image from 'next/image'
// internal components
import CurveBackgroundTop from '@/components/CurveBackgroundTop/CurveBackgroundTop'
import Button from '@/components/Button/Button'
import ContactModal from '@/components/ContactModal/ContactModal'
// internal assets
import heroImage from '../../../../public/images/heroImage.png'

function Hero() {
    // open and close contact modal
    const [isContactModalActive, setIsContactModalActive] = useState(false);

    const onClickOpenModal = () => {
      setIsContactModalActive(true);                                               
    }
  
    const onClickCloseModal = () => {
      setIsContactModalActive(false);                                               
    }

  return (
    <section className={styles.hero} id="home">
      {/* toggle contact modal */}
      {isContactModalActive && <ContactModal onClickCloseModal={onClickCloseModal}/>}
      <CurveBackgroundTop />
      <div className={styles.hero_text_container}>
          <h1> Blue Wave Dev  </h1>
          <h3 className={styles.subheader}> Web Design + Development </h3>
          <p className={styles.hero_text}> We provide completely hand-coded websites with exceptional outcomes, without relying on page builders or WordPress.</p>
          <Button label="GET IN TOUCH" onClick={onClickOpenModal}/>
      </div>
      <div className={styles.img_container}>
        <Image className={styles.hero_img} 
          src={heroImage} 
          alt="A laptop and phone showcasing one of Blue Wave Dev's projects" 
          width={500}
          height={500}
          priority
        />
      </div>
    </section>
  )
}

export default Hero