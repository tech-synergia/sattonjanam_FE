import Navbar from '../Components/Navbar'
import CommonBanner from '../Components/CommonBanner'
import BreadCrumb from '../Components/BreadCrumb'
import ServiceComponent from '../Components/ServiceComponent';
import Footer from '../Components/Footer';

function PunjabServices() {
    const breadcrumbPaths = [
        { name: 'Home', link: '>>' },
        { name: 'Services', link: '>>' },
        { name: 'Punjabi Matrimonial Services'}
      ];

  return (
   
    <div>
      <Navbar/>
      <CommonBanner title="Punjabi Matrimonial Services"/>
      <div>
        <BreadCrumb paths={breadcrumbPaths} />
      </div>
      <div>
        <ServiceComponent
            imageSrc="https://www.wedgatematrimony.com/wp-content/uploads/2019/09/punjabi-marriage-bureau-matrimonial-services-delhi.jpg"
            heading="Punjabi Matrimonial Services"
            content="Punjabi weddings are renowned for being pompous and energetic. People hailing from the Punjabi ethnicity are joyous, playful and extremely cultured towards their traditional values. No matter where a Punjabi goes, there’s always a tinge of his homeland in his nature and lifestyle. Since our agency is headquartered in the North Western, NCR region of India, we always have a geographic advantage at having the best Punjabi profiles in our database."
            summary="We have culminated an extensive assortment of Punjabi matrimonial profiles over time, which includes people from every caste, creed, and social status. Which include but are not limited to rishtey or matrimonial alliances of Arora, Bhatia, Ahluwalia, Punjabi Brahmin, Khatri, Malik, Anand, Kohli, Suri, Bhasin, Chaddha, Sawhney, Taneja, Sethi, Sabharwal, Mitra, Puri, or any other Punjabi castes.

            Whether you are looking for a businessman, a salaried employee, a self employed professional or a government servant. We always have the right match for you. Our services are not only limited to the Punjab, Haryana, North India or NCR region. Rather we use our extensive network to find matches across India and even abroad wherever Punjabis are working or doing businesses across the world."
        />
      </div>
      <Footer/>
    </div>
   
  )
}

export default PunjabServices
