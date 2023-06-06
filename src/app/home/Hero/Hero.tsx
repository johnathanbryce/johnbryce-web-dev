import styles from './Hero.module.css'
import Image from 'next/image'
// internal components
import CurveBackgroundTop from '@/components/CurveBackgroundTop/CurveBackgroundTop'
import Button from '@/components/Button/Button'
// internal assets
import heroImage from '../../../../public/images/heroImage.png'

function Hero() {
  return (
    <section className={styles.hero}>
            <CurveBackgroundTop />
            <div className={styles.hero_text_container}>
                <h1> Small Business Web Design + Development </h1>
                <p className={styles.hero_text}> We provide completely hand-coded websites with exceptional outcomes, without relying on page builders or WordPress.</p>
                <Button label="GET IN TOUCH"/>
            </div>
            <div className={styles.img_container}>
              <Image className={styles.hero_img} src={heroImage} alt=''/>
            </div>
            
    </section>
  )
}

export default Hero