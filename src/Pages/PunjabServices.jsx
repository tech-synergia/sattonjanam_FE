import Navbar from '../Components/Navbar'
import CommonBanner from '../Components/CommonBanner'
import BreadCrumb from '../Components/BreadCrumb'
import ServiceComponent from '../Components/ServiceComponent';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';

function PunjabServices() {
    const breadcrumbPaths = [
        { name: 'Home', link: '>>' },
        { name: 'Services', link: '>>' },
        { name: 'Punjabi Matrimonial Services'}
      ];

  return (
   
    <div>
      <Navbar/>
      <Menu/>
      <CommonBanner title="Punjabi Matrimonial Services"/>
      <div>
        <BreadCrumb paths={breadcrumbPaths} />
      </div>
      <div>
        <ServiceComponent
            imageSrc="https://www.imperial.wedding/storage/cms_pages/thumb/310521014627-punjabi.jpg"
            heading="Punjabi Matrimonial Services"
            content="As a part of this, the bridegroom is made to wear a turban and a headgear or sehera, which covers his face. The traditional baraat includes the groom, who rides his horse (or rather mare) and reaches the wedding venue where the ceremonies take place, with his close family and friends dancing as a part of the baraat."

        />
      </div>
      <Footer/>
    </div>
   
  )
}

export default PunjabServices



