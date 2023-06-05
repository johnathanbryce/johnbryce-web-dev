import styles from './OurServices.module.css'
import Image from 'next/image'
// internal components
import Button from '@/components/Button/Button'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
// internal assets
import pageSpeed from '../../../../public/images/pageSpeed.png'
import responsive from '../../../../public/images/responsive.png'

function OurServices() {
  return (
    <section className={styles.services}>
      <SectionHeader title={'EXPERTISE'} />
      <div className={styles.services_card_top}>
        <p>We specialize in creating accessible and mobile-friendly web designs and development specifically tailored for small businesses. Every line of code is written by hand to ensure exceptional performance.</p>
      </div>
      <Button label={'WHY HAND CODE?'} bgColorBlue={true}/>

      <aside className={styles.services_card_container}>
        <div className={styles.services_card}>
          <Image src={responsive} className={styles.services_icon} alt="an icon of a computer and phone"/>
          <h5> Fully Responsive </h5>
          <p> Your website will have a responsive design that adapts seamlessly to different screen sizes, enabling visitors to access it effortlessly on mobile phones, tablets, and desktop computers.</p>
        </div>

        <div className={styles.services_card}>
          <Image src={pageSpeed} className={styles.services_icon} alt="an icon indicating website performance and optimization"/>
          <h5> Performance & Optimization </h5>
          <p> Manually writing the code for our websites and leveraging modern technology ensures better web performance and improved search engine optimization.</p>
        </div>
      </aside>

      
    
    </section>
  )
}

export default OurServices