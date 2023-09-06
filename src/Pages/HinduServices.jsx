import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CommonBanner from '../Components/CommonBanner'
import BreadCrumb from '../Components/BreadCrumb'
import ServiceComponent from '../Components/ServiceComponent'
import Menu from '../Components/Menu'

function HinduServices() {
    const breadcrumbPaths = [
        { name: 'Home', link: '>>' },
        { name: 'Services', link: '>>' },
        { name: 'Hindu Matrimonial Services'}
      ];

  return (
    <div>
      <Navbar/>
      <Menu/>
      <CommonBanner title="Hindu Matrimonial Services"/>
      <div>
        <BreadCrumb paths={breadcrumbPaths} />
      </div>
      <div>
        <ServiceComponent
            imageSrc="https://www.hindumatrimony.net/assets/story/15525766862070646525.jpg"
            heading="Hindu Matrimonial Services"
            content="It is a religious necessity rather than a mere physical luxury. Hindu Marriage is a tie that can never be broken and it is a relation established from birth to birth."
        />
      </div>
      <Footer/>
    </div>
  )
}

export default HinduServices
