import Navbar from '../Components/Navbar'
import CommonBanner from '../Components/CommonBanner'
import BreadCrumb from '../Components/BreadCrumb'
import ServiceComponent from '../Components/ServiceComponent';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';

function LateServices() {
    const breadcrumbPaths = [
        { name: 'Home', link: '>>' },
        { name: 'Services', link: '>>' },
        { name: 'Late Marriage Matrimony'}
      ];

  return (
    <div>
       <Navbar/>
       <Menu/>
      <CommonBanner title="Late Marriage Matrimony"/>
      <div>
        <BreadCrumb paths={breadcrumbPaths} />
      </div>
      <div>
        <ServiceComponent
            imageSrc="https://imarriages.com/m/images/m-free-matrimony.jpg"
            heading="Late Marriage Matrimony"
            content="Nowadays, both men and women prefer late marriage because they want economic empowerment in their life. Also, if these people study in universities or for master's or Ph. D., their marriage age would be late. On the other hand, career targets make people delay their marriages even if they have a partner in their life."
        />
      </div>
      <Footer/>
    </div>
  )
}

export default LateServices
