import { Typography } from "antd"
import '../scss/WhyUs.scss'

const {Title} = Typography

function WhyUs() {
  return (
    <div className='whyUs'>
        <Title level={1} className="title">Why Us</Title>
        <div className="whyUsContent">
            <img src="https://www.wedgatematrimony.com/wp-content/uploads/2019/12/bride.jpg" alt="no image" />
            <div className="whyUsInfo">
                <ul>
                    <li>100% verified profiles</li>
                    <li>Our largest number of profiles increases your chances of meeting the right person</li>
                    <li>Trusted service with quality and customer satisfaction</li>
                    <li>Free Registration</li>
                    <li>Providing 100% confidential services</li>
                    <li>Genuine Profile</li>
                    <li>Many Verified by Personal Calls</li>
                    <li>Secure Family Friendly</li>
                    <li>Strict Privacy Control</li>
                </ul>
                {/* <p>Marriage is an eternal bond. It isn’t just a celebration, but a decision that will complement your entire life to come. Since ancient times, marriages have been consummated in India by involving each and every member of a family. A very valued Indian trend which shall remain for centuries to come!</p>
                <p>At Wedgate Matrimony, we try to make ourselves a helping associate to you and your family, so we can acquire your moral and intellectual permission to find the ideal partner for you. Our attachment with our prospects is not just limited to monetary and experiential conjunction. Rather, we ensure that the bonds we help create last happily forever. Following our Indian values, we strongly believe that culminating wedding bonds is an act of sanctity.
                </p>
                <p>Even though we have been serving the matrimonial requirements of elites, upper class and service class families for more than a decade now, we make sure that nobody leaves our door unattended. We work with people belonging to almost every strata of the society, and have dedicated procedures and packages for each one of them.</p> */}
            
            </div>

        </div>
    </div>
  )
}

export default WhyUs
