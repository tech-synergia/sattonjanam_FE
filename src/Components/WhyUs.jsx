import { Typography } from "antd"
import '../scss/WhyUs.scss'

const {Title} = Typography

function WhyUs() {
  return (
    <div className='whyUs'>
        <Title level={1} className="title">Why Us sattonjanam.com</Title>
        <div className="whyUsContent">
            <img src="https://i.pinimg.com/736x/9d/06/12/9d06126192ab784ed8c7f1412f0ca8b2.jpg" alt="no image" />
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
               
            
            </div>

        </div>
    </div>
  )
}

export default WhyUs
