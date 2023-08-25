import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CommonBanner from '../Components/CommonBanner';
import BreadCrumb from '../Components/BreadCrumb';
import Success from '../Components/Success';
import ConnectWithUs from '../Components/ConnectWithUs';

function SuccessStoryPage() {
    const breadcrumbPaths = [
        { name: 'Home', link: '>>' },
        { name: 'Success Stories' },
      ];
  return (
    <>
      <Navbar/>
      <CommonBanner title="Success Stories"/>
        <div>
            <BreadCrumb paths={breadcrumbPaths} />
        </div>
        <Success/>
        <ConnectWithUs/>
      <Footer/>
    </>
  )
}

export default SuccessStoryPage