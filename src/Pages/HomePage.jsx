import React from 'react';
import BreadcrumbComponent from '../Components/BreadCrumb';
import CarouselBanner from '../Components/CarouselBanner';
import AboutInfo from '../Components/AboutInfo';
import ProfileCard from '../Components/ProfileCard';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HomeServices from '../Components/HomeServices';
import HomeSuccess from '../Components/HomeSuccess';
import ConnectWithUs from '../Components/ConnectWithUs';

const HomePage = () => {
  const breadcrumbPaths = [
    { name: 'Home' },
  ];

  return (
    <>
      <Navbar/>
      <div>
        <BreadcrumbComponent paths={breadcrumbPaths} />
      </div>
      <CarouselBanner/>
      <ProfileCard/>
      <HomeServices/>
      <AboutInfo/>
      <HomeSuccess/>
      <ConnectWithUs/>
      <Footer/>
    </>
  );
};

export default HomePage;
