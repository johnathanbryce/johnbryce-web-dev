import styles from './PortfolioCard.module.css'
import Image from 'next/image'


interface PortfolioCardProps {
    image: any,
    header: string,
    location: string,
    description: string,
    buttonLabel: string,
}

function PortfolioCard({image, header, location, description, buttonLabel}: PortfolioCardProps) {
  return (
    <div className={styles.portfolio_card}>
        <Image src={image} alt='A preview of a website built by John Bryce'/>
        <div>
          <h6>{header}</h6>
          <p className={styles.location}>{location}</p>
        </div>
        <p> {description} </p>
        <button className={styles.portfolio_btn}>
            <p>VISIT {buttonLabel}</p>
        </button>
    </div>
  )
}

export default PortfolioCard