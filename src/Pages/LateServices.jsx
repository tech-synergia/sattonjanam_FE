import Navbar from '../Components/Navbar'
import CommonBanner from '../Components/CommonBanner'
import BreadCrumb from '../Components/BreadCrumb'
import ServiceComponent from '../Components/ServiceComponent';
import Footer from '../Components/Footer';

function LateServices() {
    const breadcrumbPaths = [
        { name: 'Home', link: '>>' },
        { name: 'Services', link: '>>' },
        { name: 'Late Marriage Matrimony'}
      ];

  return (
    <div>
       <Navbar/>
      <CommonBanner title="Late Marriage Matrimony"/>
      <div>
        <BreadCrumb paths={breadcrumbPaths} />
      </div>
      <div>
        <ServiceComponent
            imageSrc="https://www.wedgatematrimony.com/wp-content/uploads/2019/09/late-marriage-bureau-delhi.jpg"
            heading="Late Marriage Matrimony"
            content="In the Indian subcontinent, the ideal age for marriage falls in the range of twenties and early thirties. Most people get married when in this age group, however for some, time just flies by. There can be one or many straightforward or peculiar reasons for this delay. It can be associated with family responsibilities, career ambitions, health issues, personal preferences, and a myriad of other reasons. But there’s always a ray of hope, no matter how late you realize to get married."
            summary="We at SattonJanam Matrimony are experts in Late marriage matrimonial matchmaking, and count it as one of our core specialties. We cater to late marriage profiles from every caste including Brahmin, Rajput, Yadav, Kayastha, Sikh, Baniya, Punjabi, and any others you can think of. We pride ourselves in having successfully matched thousands of late marriage profiles in the past decade.

            We don’t judge you by your appearance, complexion, creed, or social status. We have an extensive and diverse database, which we are confident about, and can assure to try our best to find you the ideal match according to your preferences. Wedgate Matrimony is the Largest Late Marriage Site and Late Marriage Bureau in Delhi NCR."
        />
      </div>
      <Footer/>
    </div>
  )
}

export default LateServices
