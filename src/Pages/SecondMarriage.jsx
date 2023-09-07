import Navbar from '../Components/Navbar'
import CommonBanner from '../Components/CommonBanner'
import BreadCrumb from '../Components/BreadCrumb'
import ServiceComponent from '../Components/ServiceComponent';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';

function SecondMarriage() {
    const breadcrumbPaths = [
        { name: 'Home', link: '>>' },
        { name: 'Services', link: '>>' },
        { name: 'Second Marriage Services'}
      ];

  return (
    <div>
       <Navbar/>
       <Menu/>
      <CommonBanner title="Second Marriage Services"/>
      <div>
        <BreadCrumb paths={breadcrumbPaths} />
      </div>
      <div>
        <ServiceComponent
            imageSrc="https://2.bp.blogspot.com/-CYn6hd-Xls4/WYc5UMLZdnI/AAAAAAAAIdg/B0JPled64lQN_MaXKfYUoZbypFCySk8egCLcBGAs/s640/Married-widows-free-matrimonial-sites-for-widows-Second-Marriage-Matrimonial-Sites.jpg"
            heading="Second Marriage Services"
            content="Second Marriage caste hails from the Vaishya caste, which is considered to be a mercantile clan of the Hindu social hierarchy, traditionally involved in trade and commerce."
        />
      </div>
      <Footer/>
    </div>
  )
}

export default SecondMarriage
