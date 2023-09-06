import React from 'react'
import Navbar from '../Components/Navbar'
import CommonBanner from '../Components/CommonBanner'
import Maharastrian from '../assets/maharastrian.jpg'
import BreadCrumb from '../Components/BreadCrumb';
import ServiceComponent from '../Components/ServiceComponent';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';

function MaharastrianServices() {
    const breadcrumbPaths = [
        { name: 'Home', link: '>>' },
        { name: 'Services', link: '>>' },
        { name: 'Maharashtrian Matrimonial Services'}
      ];
  return (
    <div>
    <Navbar/>
    <Menu/>
    <CommonBanner title="Maharashtrian Matrimonial Services"/>
    <div>
      <BreadCrumb paths={breadcrumbPaths} />
    </div>
    <div>
      <ServiceComponent
          imageSrc={Maharastrian}
          heading="Maharashtrian Matrimonial Services"
          content="Like many other auspicious Maharashtrian occasions, the wedding day commences with the worship of Lord Ganesha. Ganpati Puja is performed for a bright future of the couple. The family deity is then invited at the wedding Mandap by Devdevak. In Gurihar Puja, the bride all dressed up in her wedding attire, worships to the goddess Parvati for her prosperous life. The maternal uncle of the bride gives her some rice which, she then offers to the Goddess."
      />
    </div>
    <Footer/>
  </div>
  )
}

export default MaharastrianServices
