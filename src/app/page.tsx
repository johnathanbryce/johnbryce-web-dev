
// internal components
import Header from "@/components/Header/Header"
import LayoutContainer from "@/components/LayoutContainer/LayoutContainer"
// internal pages
import Hero from "./home/Hero/Hero"
import OurServices from "./home/OurServices/OurServices"

export default function Home() {
  return (
    <main>
      <Header />
      <LayoutContainer>
        <Hero />
        <OurServices />
      </LayoutContainer>
    </main>
  )
}
