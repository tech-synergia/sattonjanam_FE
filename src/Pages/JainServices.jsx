import Navbar from '../Components/Navbar'
import CommonBanner from '../Components/CommonBanner'
import BreadCrumb from '../Components/BreadCrumb'
import ServiceComponent from '../Components/ServiceComponent';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';

function JainServices() {
    const breadcrumbPaths = [
        { name: 'Home', link: '>>' },
        { name: 'Services', link: '>>' },
        { name: 'Jain Matrimonial Services'}
      ];

  return (
    <div>
      <Navbar/>
      <Menu/>
      <CommonBanner title="Jain Matrimonial Services"/>
      <div>
        <BreadCrumb paths={breadcrumbPaths} />
      </div>
      <div>
        <ServiceComponent
            imageSrc="https://www.imperial.wedding/storage/cms_pages/thumb/310521015221-Jain.jpg"
            heading="Jain Matrimonial Services"
            content="Jain marriage is announced through a tilak. The bride's family visits the groom's family and gifts and sweets are exchanged along with a tilak ceremony of the groom."
        />
      </div>
      <Footer/>
    </div>
  )
}

export default JainServices
