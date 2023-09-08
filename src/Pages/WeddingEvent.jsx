import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CommonBanner from '../Components/CommonBanner';
import BreadCrumb from '../Components/BreadCrumb';
import { Typography } from 'antd';
import ConnectWithUs from '../Components/ConnectWithUs';
import Menu from '../Components/Menu';

const { Title } = Typography;

function WeddingEvent() {

    const breadcrumbPaths = [
        { name: 'Home', link: '>>' },
        { name: 'Wedding Event Services' },
      ];

  return (
    <>
        <Navbar/>
        <Menu/>
        <CommonBanner title="Wedding Event Services"/>
        {/* <div>
            <BreadCrumb paths={breadcrumbPaths} />
        </div> */}
        <div className="matrimony">
            <div className="sattojanamAbout">
                <Title level={2} className="titleStyle">Wedding Events Services</Title>
                <div className="images">
                    <img src="https://www.hindumatrimony.net/assets/story/15525766862070646525.jpg" alt="" />
                    <img src="https://www.imperial.wedding/storage/cms_pages/thumb/310521014336-sikh.jpg" alt="" />
                    <img src="https://www.imperial.wedding/storage/cms_pages/thumb/310521015221-Jain.jpg" alt="" />
                </div>
                <p>"7X Weddings By" sattonJanam.com Matrimonial Services" is your one stop purveyor for all things related to designing, planning and perfectly executing the most enchanting events. We offer all wedding planning services in India under one roof, saving you the time and trouble of coordinating between various agencies. Our wedding planning packages are tailor made for each client taking into consideration their taste, preferences and budget. We guarantee “personal professionalism” meaning that when you choose us as your wedding event management company, we will efficiently and seamlessly carry out all our duties and cater to the smallest of your requirements so that each event reflects your family's heritage and traditions. Give us the privilege of managing your wedding so you can enjoy it as a guest.</p>
                <p>Weddings are an extremely busy affair in India. It can take months for a family to properly prepare for the ceremonies observed at a wedding function. A wedding can last for about a week, which is a herculean task to handle. Especially if you have no extra support and a few people to get help. That is where we feel obliged to extend our helping hand.</p>
                <p>We can assist you in organising, managing and successfully completing all arrangements prior and after the wedding ceremony. Our dedicated team of experts who handle wedding event management affairs are well versed and experienced in organising such events. We can help you find the ideal venue for the wedding, arranging the decoration, catering, designer clothing supplies, entertainment packages, bridal makeup and whichever else need pops up surprisingly.</p>
                <p>Before you plan on assigning us with all these meticulous tasks, we will arrange an extensive interview with you. This allows us to understand your requirements, expectations, and most of all your budget. With us, it doesn’t really matter how much money you plan to spend on your wedding. We always have a customised package for every individual case.</p>
                <p>Some of our wedding services include(but not limited to):</p>
                <ol>
                    <li>Arranging the venue of the wedding</li>
                    <li>Allowing you to choose the decorations and layout of the event</li>
                    <li>Presenting you with options for catering. Including food trials for an informed decision</li>
                    <li>Coming up with a professional entertainment package for your guests</li>
                    <li>Supplying tailor-fit designer clothes for any in-house performances or guests</li>
                    <li>Arranging a make-up and Mehndi team for the beautification of the couple, guests and family members.</li>
                    <li>Wedding Gifts</li>
                    <li>PRE WEDDING CELEBRATIONS</li>
                </ol>
            </div>
        </div>
        <ConnectWithUs/>
        <Footer/>
    </>
  )
}

export default WeddingEvent
