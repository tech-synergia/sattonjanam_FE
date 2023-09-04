import Navbar from '../Components/Navbar'
import CommonBanner from '../Components/CommonBanner'
import BreadCrumb from '../Components/BreadCrumb'
import ServiceComponent from '../Components/ServiceComponent';
import Footer from '../Components/Footer';

function SikhServices() {
    const breadcrumbPaths = [
        { name: 'Home', link: '>>' },
        { name: 'Services', link: '>>' },
        { name: 'Sikh Matrimonial Services'}
      ];

  return (
    <div>
      <Navbar/>
      <CommonBanner title="Sikh Matrimonial Services"/>
      <div>
        <BreadCrumb paths={breadcrumbPaths} />
      </div>
      <div>
        <ServiceComponent
            imageSrc="https://www.imperial.wedding/storage/cms_pages/thumb/310521014336-sikh.jpg"
            heading="Sikh Matrimonial Services"
            content="The Sikh marriage is a very colourful and unique ceremony in which two individuals are joined in a partnership of two equals. The couple will marry in front of the Guru Granth Sahib while the guests gather around the couple, usually with men on one side and women on the other.We have Sikh alliances families based in Northern India, Delhi NCR, Punjab, other parts of India, overseas specially Canada, America, Europe, UK and other parts of the world where prospects are placed due to occupational or other reasons."
        />
      </div>
      <Footer/>
    </div>
  )
}

export default SikhServices
