import styles from '../styles/page.module.css'
// internal components
import Header from "@/components/Header/Header"
import LayoutContainer from "@/components/LayoutContainer/LayoutContainer"
// internal pages
import Hero from "./home/Hero/Hero"
import OurServices from "./home/OurServices/OurServices"
import NewProject from "./home/NewProject/NewProject"

export default function Home() {
  return (
    <main>
      <Header />
      <LayoutContainer>
        <Hero />
        <OurServices />
      </LayoutContainer>
      <NewProject />
      <LayoutContainer>

      </LayoutContainer>
    </main>
  )
}
