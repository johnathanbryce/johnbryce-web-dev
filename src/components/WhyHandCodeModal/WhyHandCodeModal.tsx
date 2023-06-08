import styles from './WhyHandCodeModal.module.css'
import Image from 'next/image';
// External Libraries
import { AiOutlineClose } from 'react-icons/ai';
// interal assets
import whyHandCode from '../../../public/images/whyHandCode.png'


interface WhyHandCodeModalProps {
    onClickCloseModal: () => void,  
}

function WhyHandCodeModal({onClickCloseModal}: WhyHandCodeModalProps) {
  return (
    <aside className={styles.modal_container}>
        <div className={styles.modal_background} onClick={onClickCloseModal} />
        <div className={styles.content_container}>
          <div className={styles.close_btn_container}>
                <AiOutlineClose onClick={onClickCloseModal} className={styles.close_btn} />
          </div>
          <div className={styles.text_wrapper}>
            <h2><span className={styles.highlight_title}>Elevated</span> Web Design & Development</h2>
            <p>What sets us apart in the development realm is our distinct approach: no WordPress, frameworks, or page builders. We craft each line of code meticulously, granting us unparalleled control over design and lightning-fast website performance.</p>
            <p>Hand-built websites surpass most WordPress sites and drag-and-drop builders, delivering superior results without hefty price tags. In the realm of the web, speed and organization reign supreme.</p>
          </div>
          <Image src={whyHandCode} className={styles.why_hand_code_img} alt=''/>
        </div>
    </aside>
  )
}

export default WhyHandCodeModal