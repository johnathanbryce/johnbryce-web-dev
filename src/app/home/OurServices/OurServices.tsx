import styles from './OurServices.module.css'
// internal components
import Button from '@/components/Button/Button'
import SectionHeader from '@/components/SectionHeader/SectionHeader'

function OurServices() {
  return (
    <section className={styles.services}>
      <SectionHeader title={'EXPERTISE'} />
      <div className={styles.services_card_top}>
        <p>We specialize in creating accessible and mobile-friendly web designs and development specifically tailored for small businesses. Every line of code is written by hand to ensure exceptional performance.</p>
      </div>
      <Button label={'WHY HAND CODE?'} bgColorBlue={true}/>
      
        
    </section>
  )
}

export default OurServices