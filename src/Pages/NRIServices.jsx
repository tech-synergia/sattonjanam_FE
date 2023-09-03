import Navbar from '../Components/Navbar'
import CommonBanner from '../Components/CommonBanner'
import BreadCrumb from '../Components/BreadCrumb'
import ServiceComponent from '../Components/ServiceComponent';
import Footer from '../Components/Footer';

function NRIServices() {
    const breadcrumbPaths = [
        { name: 'Home', link: '>>' },
        { name: 'Services', link: '>>' },
        { name: 'NRI Matrimonial Services'}
      ];

  return (
    <div>
       <Navbar/>
        <CommonBanner title="NRI Matrimonial Services"/>
        <div>
            <BreadCrumb paths={breadcrumbPaths} />
        </div>
        <div>
            <ServiceComponent
                imageSrc="https://www.wedgatematrimony.com/wp-content/uploads/2019/09/nri-marriage-bureau-matrimonial-services-delhi.jpg"
                heading="NRI Matrimonial Services"
                content="NRI’s, are people who are born in India but reside abroad in a different country. Despite living in foreign countries, NRI’s always wish to get their children married to a bride or a groom from their motherland. Obviously because of the rich cultural traditions which have an important role in keeping the marriage bond stable. Almost every NRI marriage is carried out based upon Indian traditions and NRI parents are always in search for educated and well-behaved life partners for their unmarried children."
                summary="Our NRI Matrimonial services are designed exclusively for those who are looking for future brides and grooms settled abroad, and for those NRIs who are searching for a life partner. We have an extensive database of NRI profiles with eligible matches spread all around the world.

                The profiles are categorized based upon various parameters like religion, country of residence, profession, family and educational background.
                
                Our dedicated panel of experts dealing with NRI matchmaking enquiries are extensively experienced and try their best to put extra efforts to bridge geographical barriers."
            />
        </div>
        <Footer/>
    </div>
  )
}

export default NRIServices
