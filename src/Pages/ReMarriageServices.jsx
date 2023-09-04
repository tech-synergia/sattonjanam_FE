import Navbar from '../Components/Navbar'
import CommonBanner from '../Components/CommonBanner'
import BreadCrumb from '../Components/BreadCrumb'
import ServiceComponent from '../Components/ServiceComponent';
import Footer from '../Components/Footer';

function ReMarriageServices() {
    const breadcrumbPaths = [
        { name: 'Home', link: '>>' },
        { name: 'Services', link: '>>' },
        { name: 'Re-Marriage Services'}
      ];


  return (
    <div>
       <Navbar/>
      <CommonBanner title="Re-Marriage Services"/>
      <div>
        <BreadCrumb paths={breadcrumbPaths} />
      </div>
      <div>
        <ServiceComponent
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGghJzhYmJvuBSC2BiQrsIJHGBYFa6xZT5jUiOvSicRrdLfQQ9QIcAGCgMQdVXUCt6idA&usqp=CAU"
            heading="Re-Marriage Services"
            content="A marriage can fail because of reasons like communication gaps, adjustment issues, lack of compassion, domestic violence, or any other detrimental causes. But that doesn’t mean that your life is decimated. You can always start afresh, and give a thought to another horizon. Remarriage or second marriage is still a topic that people choose to leave untouched. We emphatically understand the needs of people falling into this segment and offer the most genuine and hospitable second marriage matrimonial service in India and overseas to Resident Indians or NRIs."
            summary="Whether you are a divorced, separated, or widowed man/ woman, we will assist you in finding the perfect partner for you. We offer you an efficient platform and a streamlined process for concluding re-marriage and starting a new life.

            SattonJanam Matrimony is the Best Remarriage Matrimony in Delhi NCR specializes in matchmaking for second marriages and will assist you in getting a genuine understanding and a compatible life partner. A second marriage can be a very apprehensive decision, for women or men who have undergone mental harassment in their previous marriages. But we make sure that the matches we present to you are thoroughly researched and scrutinized personally by our experts before the presentation.
            
            We are highly committed to offering you the most customized and confidential services for second marriage as we’re the rank #1 second marriage brokers in Delhi, India."
        />
      </div>
      <Footer/>
    </div>
  )
}

export default ReMarriageServices
