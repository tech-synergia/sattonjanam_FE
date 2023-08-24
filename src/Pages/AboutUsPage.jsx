import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CommonBanner from '../Components/CommonBanner';
import BreadCrumb from '../Components/BreadCrumb';

function AboutUsPage() {
    const breadcrumbPaths = [
        { name: 'Home', link: '>>' },
        { name: 'About Us' },
      ];
  return (
    <>
      <Navbar/>
        <CommonBanner title="About Us"/>
        <div>
            <BreadCrumb paths={breadcrumbPaths} />
        </div>
      <Footer/>
    </>
  )
}

export default AboutUsPage
