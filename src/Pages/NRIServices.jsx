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
                imageSrc="https://www.imperial.wedding/storage/blogs/290622040425-NRIMarriageBureau.jpg"
                heading="NRI Matrimonial Services"
                content="NRI marriages', as generally understood, are between an Indian woman from India and an Indian man residing in another country (thus NRI – non-resident Indian), either as Indian citizen (when he would legally be an 'NRI') or as citizen of that other country (when he would legally be a PIO – person of Indian origin)."
            />
        </div>
        <Footer/>
    </div>
  )
}

export default NRIServices
