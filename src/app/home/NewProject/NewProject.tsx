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

function NewProject() {
  const [isContactModalActive, setIsContactModalActive] = useState(false);

  const onClickOpenModal = () => {
    setIsContactModalActive(true);                                               
  }

  const onClickCloseModal = () => {
    setIsContactModalActive(false);                                               
  }

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
        <Image src={newProject} className={styles.project_image} alt={'start a new project!'}/>
    </section>
  )
}

export default NewProject