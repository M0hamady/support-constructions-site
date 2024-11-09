import React from 'react'
import AboutUsSection from '../../components/Home/AboutUsSection'
import AboutUsSection1 from '../../components/about/AboutUsSection'
import OurTeamSection from '../../components/Home/OurTeamSection'
import FooterSection from '../../components/about/FooterSection'

export default function AboutUs() {
  return (
    <div>
      <AboutUsSection1/>
      <OurTeamSection />
      <FooterSection />
    </div>
  )
}
