import React, { useEffect } from 'react'
import PackageDetails from '../../components/prices/PackageDetails'
import BannerSection from '../../components/common/BannerSection'
import { Banner } from '../../assets/images'
import Aos from 'aos';

export default function Prices() {
  useEffect(() => {
    // Initialize AOS for animations
    Aos.init({ duration: 1000 });

    // Scroll to top on initial load
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div dir='rtl' >
      <BannerSection backgroundImage={Banner} firstWord='باقاتنا' />
      <PackageDetails />
    </div>
  )
}
