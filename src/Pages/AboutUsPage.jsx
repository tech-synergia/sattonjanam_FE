import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CommonBanner from "../Components/CommonBanner";
import BreadCrumb from "../Components/BreadCrumb";
import Matrimony from "../Components/Matrimony";
import WhyUs from "../Components/WhyUs";
import ConnectWithUs from "../Components/ConnectWithUs";
import Menu from "../Components/Menu";

function AboutUsPage() {
  const breadcrumbPaths = [{ name: "Home", link: ">>" }, { name: "About Us" }];
  return (
    <>
      <Navbar />
      <Menu/>
      <CommonBanner title="About Us" />
      {/* <div>
        <BreadCrumb paths={breadcrumbPaths} />
      </div> */}
      <Matrimony />
      <WhyUs />
      <ConnectWithUs />
      <Footer />
    </>
  );
}

export default AboutUsPage;
