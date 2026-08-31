import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import TechStack from '../components/TechStack'
import Projects from '../components/Projects'
import ContactSection from '../components/ContactSection'
import ScrollToTop from '../components/ScrollToTop'

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <TechStack />
      <Projects />
      <ContactSection />
      <ScrollToTop />
    </div>
  )
}
