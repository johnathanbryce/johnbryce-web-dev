import styles from './PortfolioCard.module.css'
import Image from 'next/image'


interface PortfolioCardProps {
    image: any,
    header: string,
    location: string,
    description: string,
    buttonLabel: string,
    buttonSrc: string,
}

function PortfolioCard({image, header, location, description, buttonLabel, buttonSrc}: PortfolioCardProps) {
  return (
    <div className={styles.portfolio_card}>
        <Image src={image} alt='A preview of a website built by John Bryce'/>
        <div>
          <h6>{header}</h6>
          <p className={styles.location}>{location}</p>
        </div>
        <p> {description} </p>
        <button className={styles.portfolio_btn}>
            <a href={buttonSrc} target="_blank" rel="noreferrer"><p>VISIT {buttonLabel}</p></a>
        </button>
    </div>
  )
}

export default PortfolioCard