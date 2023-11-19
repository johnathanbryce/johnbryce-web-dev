'use client'
import { useState } from 'react'
import styles from './NewProject.module.css'
import Image from 'next/image'
// internal components
import ContactModal from '@/components/ContactModal/ContactModal'
import Button from '@/components/Button/Button'
// internal assets
import newProject from '../../../../public/images/newProject.jpg'
// Image by pch.vector on Freepik
import Lottie from 'lottie-react';
import animationData from '../../../assets/jbwd-1.json'

/* interface Interactivity {
  mode: 'scroll' 
  actions: any[]
} */

function NewProject() {
  const [isContactModalActive, setIsContactModalActive] = useState(false);

  const onClickOpenModal = () => {
    setIsContactModalActive(true);                                               
  }

  const onClickCloseModal = () => {
    setIsContactModalActive(false);                                               
  }

/*   const interactivity: Interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.2],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0.2, 0.45],
        type: "seek",
        frames: [0, 45],
      },
      {
        visibility: [0.45, 1.0],
        type: "loop",
        frames: [45, 60],
      },
    ],
  }; */

  return (
    <section className={styles.new_project}>
        {isContactModalActive && <ContactModal onClickCloseModal={onClickCloseModal}/>}
        <div className={styles.main_content_left}>
            <h2 className={styles.new_project_title}> Start A New Project </h2>
            <p className={styles.white_font_bold}> Now that you&apos;re familiar with our process, let&rsquo;s get you going on your new project!</p>
            <div className={styles.contact_container}>
                <Button label={'REQUEST A QUOTE'} onClick={onClickOpenModal} />
                <p className={styles.white_font_bold}> or (604) 220 7425</p>
            </div>
        </div>
        <div className={styles.animation}>
          <Lottie animationData={animationData} /* loop={false} */ /* interactivity={interactivity} *//>
        </div>
    </section>
  )
}

export default NewProject