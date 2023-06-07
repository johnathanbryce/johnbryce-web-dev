'use client'
import { useState } from 'react';
import styles from './ContactModal.module.css'
// internal components
import Button from '../Button/Button';
// External Libraries
import { AiOutlineClose } from 'react-icons/ai';

interface ContactModalProps {
    onClickCloseModal: () => void,  
}

const EMAIL_CONTACT_EXTERNAL = "https://formsubmit.co/johnathanbryce@gmail.com";

function ContactModal({onClickCloseModal}:ContactModalProps) {
const [formSubmitted, setFormSubmitted] = useState(false);

const handleFormSubmit = () => {
    setTimeout(() => {
    setFormSubmitted(true);
    }, 100);
};

    // renders when form is submitted
  if (formSubmitted) {
    return (
      <div className={styles.contact_modal_container}>
        <div className={styles.modal_background} onClick={onClickCloseModal} />
        <div className={styles.form_submit_container}>
          <div className={styles.close_btn_container}>
             <AiOutlineClose onClick={onClickCloseModal} className={styles.close_btn} />
          </div>
          <h3> Thank you for reaching out! </h3>
          <p> I will respond to your email as soon as possible. </p>
          <p> - John Bryce</p>
        </div>
      </div>
    );
  }

  return (
    <aside className={styles.contact_modal_container}>
        <div className={styles.modal_background} onClick={onClickCloseModal} />
        <div className={styles.contact_form_container}>
            <div className={styles.close_btn_container}>
                    <AiOutlineClose onClick={onClickCloseModal} className={styles.close_btn} />
            </div>
            <h2 className={styles.title}><span className={styles.highlight_title}>Contact</span> Us</h2>
            <div className={styles.contact_info}>
                <p>Email: johnathanbryce@gmail.com </p>
                <div></div>
                <p>Phone: (604) 220 7425 </p>
            </div>
            <form className={styles.form} action={EMAIL_CONTACT_EXTERNAL} onSubmit={handleFormSubmit} method="post" target="_blank">
                <div className={styles.form_group}>
                    <input type="text" id="name" name="name" placeholder="Name" className={styles.input} required />
                    <input type="text" id="business" name="business" placeholder="Business" className={styles.input} required />
                </div>
                <div className={styles.form_group}>
                    <input type="email" id="email" name="email" placeholder="Email" className={styles.input} required />
                    <input type="tel" id="phone" name="phone" placeholder="Phone Number" className={styles.input} />
                </div>
                <textarea id="message" name="message" placeholder="Your Message" className={styles.textarea} required></textarea>
                <Button label={'Submit'} bgColorBlue={true} />
            </form>
        </div>
                
 
    </aside>
  )
}

export default ContactModal