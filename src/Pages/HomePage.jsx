import React, { useContext } from 'react';
import BreadcrumbComponent from '../Components/BreadCrumb';
import CarouselBanner from '../Components/CarouselBanner';
import AboutInfo from '../Components/AboutInfo';
import ProfileCard from '../Components/ProfileCard';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HomeServices from '../Components/HomeServices';
import HomeSuccess from '../Components/HomeSuccess';
import ConnectWithUs from '../Components/ConnectWithUs';
import { GlobalContext } from '../GlobalContext';

const HomePage = () => {
  // const context = useContext(GlobalContext)

  // const [isLogged] = context.useAuth.isLogged ? context.useAuth.isLogged : false;
  // const [isUser] = context.useAuth.isUser ? context.useAuth.isUser : false;
  // const [user] = context.useAuth.user ? context.useAuth.user : false;
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
      {/* {
                isLogged && isUser ? (
                    <Route element={<ProtectedRoute/>} >
                        <Route path={`/profileCard`} element={<ProfileCard/>} />
                    </Route>
                ) : null
            }  */}
      <HomeServices/>
      <AboutInfo/>
      <HomeSuccess/>
      <ConnectWithUs/>
      <Footer/>
    </>
  );
};

export default HomePage;
