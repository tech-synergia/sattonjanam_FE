import Navbar from '../Components/Navbar'
import CommonBanner from '../Components/CommonBanner'
import BreadCrumb from '../Components/BreadCrumb'
import ServiceComponent from '../Components/ServiceComponent';
import Footer from '../Components/Footer';

function AgarwalServices() {
    const breadcrumbPaths = [
        { name: 'Home', link: '>>' },
        { name: 'Services', link: '>>' },
        { name: 'Aggarwal | Gupta | Baniya Matrimonial Services'}
      ];
  return (
    <div>
      <Navbar/>
      <CommonBanner title="Aggarwal | Gupta | Baniya Matrimonial Services"/>
      <div>
        <BreadCrumb paths={breadcrumbPaths} />
      </div>
      <div>
        <ServiceComponent
            imageSrc="https://www.wedgatematrimony.com/wp-content/uploads/2019/09/elite-marriage-bureau-matrimonial-services-delhi.jpg"
            heading=" Aggarwal | Gupta | Baniya Matrimonial Services"
            content="Aggarwal / Gupta / Baniya caste hails from the Vaishya caste which is considered to be a mercantile clan of the Hindu community. Aggarwals are renowned for being pioneers in business and trading activities. with the most prominent livelihood activity in their case being trade. However, we have a large mix of Aggarwal / baniya matrimonial profiles in our database who work in different industries and roles across India and abroad. We cater to Aggarwal / baniya families hailing from all backgrounds and financial statuses, with no bound for geographical locations. We deal in matrimonial alliances for various Baniya castes like Garg, Bansal, Bindal, Goyal, Goel, Goyan (half gotra), Jindal, Singhal, Kansal, Mittal, etc."
            summary="An Aggarwal / baniya marriage follows the exact same ritual as any other Hindu marriage. The wedding processions start with a mudh-tikka ceremony which can also be called an engagement ceremony. This is followed by a god-bharai(gifts for bride) ceremony, ladies sangeet(singing traditional songs), naadi(pre-wedding puja), tel-baan(pious bathing), mehndi(applying myrtle on palms), tilak(gifts for the groom), jai mala(garland exchange), saat-phere(7 circumambulations) and vidaai(bride’s farewell)."
        />
      </div>
      <Footer/>
    </div>
  )
}

export default AgarwalServices
