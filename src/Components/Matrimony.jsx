import {Typography} from 'antd'
import '../scss/Matrimony.scss'

const {Title } = Typography;

function Matrimony() {
  return (
    <div className='matrimony'>
      {/* <div className="wedGate">
            <div className="wedGateContent">
                <Title level={1} className="titleStyle">Wedgate Matrimony</Title>
                <p>
                    Our Matrimonial venture, Wedgate Matrimony has been successfully building and nurturing matrimonial relationships for 16 years, bringing countless smiles and happy times to thousands of families.
                </p>
                <p>
                    Wedgate Matrimony’s management team has been associated with top service companies like SAMSUNG, NOKIA, COX & KINGS, etc. for 20 years at multiple locations.
                </p>
                <p>
                    We have renowned specialists with us who have pioneered in understanding human behaviour, psychology and remedial measures. This helps us in achieving quicker and desirable results. Altogether, we are serving about 600+ walk-in customers on a daily basis.
                </p>
                <p>
                Our research and findings have helped us put together various processes at Wedgate Matrimony with a balanced combination of human efforts and technology. Understanding varied & complex needs, preferences and psychologies which go behind the brains searching for a so-called perfect alliance requires determined, focused and emotional handling.
                </p>
            </div>
            <div className="wedgateImage">
                <img src="https://www.wedgatematrimony.com/wp-content/uploads/2020/01/wedgate-matrimonial-services-delhi-ncr.jpg" alt="no image" />
            </div>
      </div> */}
      <div className="sattojanamAbout">
          <Title level={3} className="titleStyle" style={{textAlign: "center"}}>Most Trusted Matrimony Brand In India</Title>
          <p>Our Matrimonial venture, Sattonjanam.com has been successfully building and nurturing matrimonial relationships , bringing countless smiles and happy times to thousands of families. SattonJanam.com is a by-ivite and exclusive Matrimony service provider. We are professionaly Managed company and our team comes with a very deep and exclusive network.</p>
          <p>SattonJanam.com Matrimonial is a matchmaking service created for parents/relatives/family and friends, who are looking for a life partner for their loved ones. Unlike other Matrimonial services, we focus on providing detailed family and background information to help you take the next step with confidence.  Sattonjanam.com Matrimonial is one of the best Matchmaking service. We offer membership options to suit different needs and budgets. Clients can choose from a range of packages that include different levels of services and support.</p>
          <p><strong>Vision:</strong> Over vision to help you to find the one who completes you and say yes to a lifetime of love.</p>
          <p><strong>Mission:</strong> Our mission is to create the most suitable platform for all castes, age groups, genders and income groups, which helps people to find the right match and culminate an everlasting wedding bond. We promise to spread our services all over the world through user experience feedback, constant innovation, teamwork, and integrity. We will work our customers to understand their needs and provide the perfect solutions that meet those needs. Premium Matrimony is an excellent choice for affluent individuals who are looking for a personalized and high-quality matchmaking service.</p>
      </div>
    </div>
  )
}

export default Matrimony
