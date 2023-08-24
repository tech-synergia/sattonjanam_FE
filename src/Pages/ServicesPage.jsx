import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CommonBanner from '../Components/CommonBanner'
import BreadCrumb from '../Components/BreadCrumb'
import ServiceCard from '../Components/ServiceCard'

function ServicesPage() {
    const breadcrumbPaths = [
        { name: 'Home', link: '>>' },
        { name: 'Services' },
      ];
  return (
    <>
        <Navbar/>
        <CommonBanner title="Services"/>
        <div>
            <BreadCrumb paths={breadcrumbPaths} />
        </div>
        <ServiceCard/>
        <Footer/>
    </>
  )
}

export default ServicesPage
