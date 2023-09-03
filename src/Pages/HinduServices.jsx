import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CommonBanner from '../Components/CommonBanner'
import BreadCrumb from '../Components/BreadCrumb'
import ServiceComponent from '../Components/ServiceComponent'

function HinduServices() {
    const breadcrumbPaths = [
        { name: 'Home', link: '>>' },
        { name: 'Services', link: '>>' },
        { name: 'Hindu Matrimonial Services'}
      ];

  return (
    <div>
      <Navbar/>
      <CommonBanner title="Hindu Matrimonial Services"/>
      <div>
        <BreadCrumb paths={breadcrumbPaths} />
      </div>
      <div>
        <ServiceComponent
            imageSrc="https://www.wedgatematrimony.com/wp-content/uploads/2019/09/hindu-marriage-bureau-matrimonial-services.jpg"
            heading="Hindu Matrimonial Services"
            content="The Hindu community is a diverse, colourful and enchanting ethnic group of people which make up for around 80% of the population in India. Hindu weddings are one of the most revered marriage processions on this planet. Obviously because of the energetic aura, emotional involvement of families, diverse traditional practices and most of all, the duration of happy times."
            summary="Being a very large and diverse community, finding the right match by yourself can be tedious. However, we perfectly address this issue with the help of our immaculate database which contains thousands of pre-qualified matrimonial profiles of people hailing from the Hindu community.
                    Profiles registered with us belong to people coming from different castes in the Hindu community such as Brahmins, Khatri, Kshatriya, Kayastha, Vashishth, Rajput, Yadav, Jat, etc. We can help you find interesting matches based upon location, income, social status, physical features and almost every other differentiating factor you can think of."
        />
      </div>
      <Footer/>
    </div>
  )
}

export default HinduServices
