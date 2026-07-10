import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { SkillsSection } from '@/components/sections/skills'
import { ExperienceSection } from '@/components/sections/experience'
import { ProjectsSection } from '@/components/sections/projects'
import { TechStackSection } from '@/components/sections/tech-stack'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { ContactSection } from '@/components/sections/contact'

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0F0F0F]">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechStackSection />
        {/* <TestimonialsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
