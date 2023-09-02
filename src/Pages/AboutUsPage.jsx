import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CommonBanner from '../Components/CommonBanner';
import BreadCrumb from '../Components/BreadCrumb';
import Matrimony from '../Components/Matrimony';
import WhyUs from '../Components/WhyUs';
import ConnectWithUs from '../Components/ConnectWithUs'
import EnquireNow from '../Components/EnquireNow';
import EnquireForm from '../Components/EnquireForm';

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
        {/* <EnquireNow>
          <EnquireForm/>
        </EnquireNow> */}
        <Matrimony/>
        <WhyUs/>
        <ConnectWithUs/>
      <Footer/>
    </>
  )
}

export default AboutUsPage
