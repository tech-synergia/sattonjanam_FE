import React from 'react';
import BreadcrumbComponent from '../Components/BreadCrumb';
import CarouselBanner from '../Components/CarouselBanner';
import AboutInfo from '../Components/AboutInfo';
import ProfileCard from '../Components/ProfileCard';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

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
      <AboutInfo/>
      <Footer/>
    </>
  );
};

export default HomePage;
