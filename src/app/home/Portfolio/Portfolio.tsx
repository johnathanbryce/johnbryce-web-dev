import styles from './Portfolio.module.css'
// internal components
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import PortfolioCard from '@/components/PortfolioCard/PortfolioCard'
// internal assets
import julienV from '../../../../public/images/julienV.jpeg'
import romp from '../../../../public/images/romp.jpeg'
import sollunnaEssence from '../../../../public/images/sollunnaEssence.jpeg'
import labridgeFarms from '../../../../public/images/labridgeFarms.png'

function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
        <SectionHeader title={'PORTFOLIO'} isOur={true} />
        <div className={styles.portfolio_card_container}>
            <PortfolioCard 
                image={julienV}
                header='Julien Verschooris'
                location=' Toronto, ON'
                description='This website showcases the latest personal and professional music compositions of Julien Verschooris, a multi-award-winning composer.'
                buttonLabel="JULIEN VERSCHOORIS"
                buttonSrc="https://www.julienverschooris.com/"
            />
            <PortfolioCard 
                image={romp}
                header='Romp'
                location='Salt Lake City, UT'
                description='Romp is an activity planning social platform that allows you to create and share activities and events.'
                buttonLabel="ROMP"
                buttonSrc="https://rompathlete.com/"
            />
            <PortfolioCard 
                image={labridgeFarms}
                header='Labridge Farms'
                location='Glenmount, NS'
                description='The digital gateway to Labridge Farms, highlighting their premium farm-raised meats and high-quality Labrador Retrievers.'
                buttonLabel="LABRIDGE FARMS"
                buttonSrc='https://labridgefarms.com/farm'
            />
            <PortfolioCard 
                image={sollunnaEssence}
                header='SolLuna Essence'
                location='Vancouver, BC'
                description='Sydney Fisher is a certified Bio-Energy Healing Practitioner, Yoga instructor, and Intuitive reader based in Vancouver, BC'
                buttonLabel="SOLLUNA ESSENCE"
                buttonSrc='https://www.sollunaessence.com/'
            />
        </div>
    </section>
  )
}

export default Portfolio