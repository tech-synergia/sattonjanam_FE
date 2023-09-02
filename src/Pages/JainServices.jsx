import Navbar from '../Components/Navbar'
import CommonBanner from '../Components/CommonBanner'
import BreadCrumb from '../Components/BreadCrumb'
import ServiceComponent from '../Components/ServiceComponent';
import Footer from '../Components/Footer';

function JainServices() {
    const breadcrumbPaths = [
        { name: 'Home', link: '>>' },
        { name: 'Services', link: '>>' },
        { name: 'Jain Matrimonial Services'}
      ];

  return (
    <div>
      <Navbar/>
      <CommonBanner title="Jain Matrimonial Services"/>
      <div>
        <BreadCrumb paths={breadcrumbPaths} />
      </div>
      <div>
        <ServiceComponent
            imageSrc="https://www.wedgatematrimony.com/wp-content/uploads/2019/09/marriage-bureau-matrimonial-services-delhi-ncr.jpg"
            heading="Jain Matrimonial Services"
            content="Jainsim is the sixth largest religion in India, and is mainly concentrated around the western states of Gujarat and Rajasthan. Jains can be categorised into two different sects, namely Swetambara Jains and Digambara Jains. Their religion is almost similar to the Hindu religion with most practices and traditions being coincident. There are approx 110 different Jain communities in India, which can be further classified into six different groups based upon historical and geographical factors. The prominent Jain categories include Oswal, Khandelwal, Agarwal, Porwal, Jaiswal Jain, Dhariwal, Palliwal, etc."
            summary="We specialise in Jain matrimonial matchmaking, and have an extensive database of eligible Jain bachelors and bachelorettes. Jains are known to be extremely traditional when it comes to their rituals and practices. Moreover, they prefer to find matches in their own community. We have our experts who specialise in Jain marriages and matchmaking. Thus we make sure that you find the right match who exactly fits your desires."
        />
      </div>
      <Footer/>
    </div>
  )
}

export default JainServices
