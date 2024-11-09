import React from 'react'
import PackageDetails from '../../components/prices/PackageDetails'
import BannerSection from '../../components/common/BannerSection'
import { Banner } from '../../assets/images'

export default function Prices() {
  return (
    <div dir='rtl' >
      <BannerSection backgroundImage={Banner} firstWord='hgfhrhj' />
      <PackageDetails />
    </div>
  )
}
