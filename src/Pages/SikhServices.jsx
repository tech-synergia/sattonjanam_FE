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
            imageSrc="https://www.wedgatematrimony.com/wp-content/uploads/2019/09/sikh-marriage-bureau-matrimonial-services-delhi.jpg"
            heading="Sikh Matrimonial Services"
            content="Name given to a marriage ceremony in Sikh Culture is called “Anand Karaj” which means “Blissful Union”. Sikh matrimonial ceremonies are the truly momentous times full of lifetime celebrations. Most of the ceremonies are done in a relaxed, energetic with age old traditional rituals under the guidance of family elders and all nears and dears."
            summary="We extensively deal in all Sikh castes such as Arora, Khatri castes like Khurana, Kohli, Bhasin, Chaddha, Ramgarhia, Ramdasia, Jat, Guru Sikh or Gur Sikh, Keshdhari, Naamdhari, Kukhrain, Dhillon, Saini, Kamboh, Mahton, Chhimba, Mohyal, etc.

            We have Sikh alliances families based in Northern India, Delhi NCR, Punjab, other parts of India, overseas specially Canada, America, Europe, UK and other parts of the world where prospects are placed due to occupational or other reasons."
        />
      </div>
      <Footer/>
    </div>
  )
}

export default SikhServices
