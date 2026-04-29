import data from '@/data/data.json'
import Navbar          from '@/components/layout/Navbar'
import Footer          from '@/components/layout/Footer'
import HeroSection     from '@/components/sections/HeroSection'
import AboutSection    from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import CompanyCarousel from '@/components/sections/CompanyCarousel'
import SkillsSection   from '@/components/sections/SkillsSection'
import ToolsSection    from '@/components/sections/ToolsSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import ContactSection  from '@/components/sections/ContactSection'

export default function App() {
  return (
    <>
      <Navbar navigation={data.site.navigation} siteName={data.site.name} />
      <main>
        <HeroSection      hero={data.hero} />
        <AboutSection     about={data.about} />
        <ServicesSection  services={data.services} />
        <CompanyCarousel />
        <SkillsSection    skills={data.skills_section} />
        <ToolsSection     tools={data.tools_section} />
        <PortfolioSection portfolio={data.portfolio} />
        <ContactSection   contact={data.contact} />
      </main>
      <Footer siteName={data.site.name} navigation={data.site.navigation} />
    </>
  )
}
