import React from 'react'
import ServicesSection from '../../components/Home/ServiceCard'
import BannerSection from '../../components/common/BannerSection'
import { Banner } from '../../assets/images'

export default function Services() {
  return (
    <div>
      <BannerSection backgroundImage={Banner} firstWord="خدماتنا" />
      <ServicesSection />
    </div>
  )
}
