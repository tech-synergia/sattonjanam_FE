import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CommonBanner from '../Components/CommonBanner'
import BreadCrumb from '../Components/BreadCrumb'
import HomeServices from '../Components/HomeServices'
import { Carousel, Card, Button } from 'antd';
import React, {useState, useEffect} from 'react';
import { Typography } from 'antd';
import logo from '../assets/sattonjanamLogo.svg';
import { Link } from 'react-router-dom';
import Menu from '../Components/Menu'

const {Title} = Typography;

const packageData = [
    {
      heading: "SJ Self Services"
    },
    {
      heading: "SJ Personalised Services"
    },
    {
      heading: "SJ Elite Services"
    },
    {
     heading: "SJ VIP Services"
    },
]
function Packages() {

    
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[])

    const breadcrumbPaths = [
        { name: "Home", link: ">>" },
        { name: "Packages" },
      ];
  return (
    <>
      <Navbar/>
      <Menu/>
        <CommonBanner title="Packages" />
        <div>
            <BreadCrumb paths={breadcrumbPaths} />
        </div>
        <div className='carouselService'>
      {/* <Title level={1} className='titleService'>Packages</Title> */}
      <div className="carouselSlide">
        {isMobile ? (
          <Carousel dots={true} >
             
                {packageData.map((card, index) => (
                        <Link to="/enquireform" key={index}>
                            <Card key={index} className='cardItem'>
                            <img src={logo} alt={`Image ${index}`} />
                            <h3 className="titleEllipsis">{card.heading}</h3>
                            <p className="contentEllipsis">{card.paragraph}</p>
                            </Card>
                        </Link>
                ))}
             
          </Carousel>
        ) : (
          <Carousel slidesToShow={3}>
               
                  {packageData.map((card, index) => (
                    <Link to="/enquireform" key={index}>
                        <Card key={index} className='cardItem'>
                        <img src={logo} alt={`Image ${index}`} />
                        <h3 className="titleEllipsis">{card.heading}</h3>
                        <p className="contentEllipsis">{card.paragraph}</p>
                        </Card>
                    </Link>
                  ))}
              
          </Carousel>
        )}
      </div>
    </div>
      <Footer/>
    </>
  )
}

export default Packages
