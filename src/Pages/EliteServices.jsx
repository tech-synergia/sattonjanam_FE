import Navbar from '../Components/Navbar'
import CommonBanner from '../Components/CommonBanner'
import BreadCrumb from '../Components/BreadCrumb'
import ServiceComponent from '../Components/ServiceComponent';
import Footer from '../Components/Footer';

function EliteServices() {
    const breadcrumbPaths = [
        { name: 'Home', link: '>>' },
        { name: 'Services', link: '>>' },
        { name: 'Elite Matrimonial Services'}
      ];
  return (
    <div>
      <Navbar/>
      <CommonBanner title="Elite Matrimonial Services"/>
      <div>
        <BreadCrumb paths={breadcrumbPaths} />
      </div>
      <div>
        <ServiceComponent
            imageSrc="https://www.elitematrimony.com/revamp-images/elite-matchmaking-mobile-banner-2.png"
            heading="Elite Matrimonial Services"
            content="With India’s fast paced economic development, and the ever expanding upper middle and rich class, the demand for an elite matchmaking service was needed. That is where our Elite matrimonial service comes in. We have been helping elite businessman families, diplomats, celebrities, business tycoons, political families and other families of the like to find their ideal match for more than decade now. Our vast network of experts and collaborators gives us a clutch over the elite class either based-in, or with roots in India.  "
            summary="News associated with elite families can quickly become a gossip if not handled properly. So we ensure to maintain such operations exclusively discreet and confidential, unless the bondage begins to blossom."

        />
      </div>
      <Footer/>
    </div>
  )
}

export default EliteServices
