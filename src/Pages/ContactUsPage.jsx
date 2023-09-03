import React from "react";
import Breadcrumb from "../Components/BreadCrumb";
import ContactForm from "../Components/ContactForm";
import ConnectWithUs from "../Components/ConnectWithUs";
import CommonBanner from "../Components/CommonBanner";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import EnquireForm from "../Components/EnquireForm";

const ContactUsPage = () => {
  const breadcrumbPaths = [
    { name: "Home", link: ">>" },
    { name: "Contact Us" },
  ];

  return (
    <>
      <Navbar />
      <CommonBanner title="Contact Us" />
      <div>
        <Breadcrumb paths={breadcrumbPaths} />
      </div>
      <ContactForm />
      <ConnectWithUs />
      <Footer />
    </>
  );
};

export default ContactUsPage;
