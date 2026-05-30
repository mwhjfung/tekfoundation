import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import CharityPartners from '@/components/CharityPartners'
import VolunteerProjects from '@/components/VolunteerProjects'
import GetInTouch from '@/components/GetInTouch'
import Testimonials from '@/components/Testimonials'
import Supporters from '@/components/Supporters'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <CharityPartners />
        <VolunteerProjects />
        <GetInTouch />
        <Testimonials />
        <Supporters />
      </main>
      <Footer />
    </>
  )
}
