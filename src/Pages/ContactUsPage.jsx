import React from 'react';
import BreadcrumbComponent from '../Components/BreadCrumb';
import ContactForm from '../Components/ContactForm';
import ConnectWithUs from '../Components/ConnectWithUs';
import CommonBanner from '../Components/CommonBanner';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const ContactUsPage = () => {
  const breadcrumbPaths = [
    { name: 'Home', link: '>>' },
    { name: 'Contact Us' },
  ];

  return (
    <>
      <Navbar/>
      <CommonBanner/>
      <div>
        <BreadcrumbComponent paths={breadcrumbPaths} />
      </div>
      <ContactForm/>
      <ConnectWithUs/>
      <Footer/>
    </>
  );
};

export default ContactUsPage;
