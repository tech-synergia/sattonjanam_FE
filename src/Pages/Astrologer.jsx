import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CommonBanner from '../Components/CommonBanner'
import BreadCrumb from '../Components/BreadCrumb'
import { Typography } from 'antd'
import AstrologerPic from '../assets/astrologer.jpeg'
import ConnectWithUs from '../Components/ConnectWithUs'

const {Title} = Typography;

function Astrologer() {
    const breadcrumbPaths = [
        { name: 'Home', link: '>>' },
        { name: 'Astrologer' },
      ];
  return (
    <>
      <Navbar/>
      <CommonBanner title="Astrologer"/>
        <div>
            <BreadCrumb paths={breadcrumbPaths} />
        </div>
        <div className="matrimony">
            <div className="sattojanamAbout">
                <img src={AstrologerPic} alt="no image" />
                <Title level={2} className="titleStyle">Acharya Vinod Bhardawaj</Title>
                <p>
                    He has a vast knowledge of Astrology, Numerology, Palmistry, Reki Healing, Vastu and his area of specialization is BUSINESS, CAREER, FINANCE, MARRIAGE, LOVE LIFE & RELATIONS. He has an experience of more than 20 years and in this span of time, most of his predictions, suggestions and horoscope readings have been found accurate. He has been providing suggestions and guidance to innumerable clients from all over the country and globe. He is a firm believer of destiny and the effect of planets on it. He provides remedies based on personal details like Date of birth, time, and place of birth as he believes in the planetary movements at the time of one’s birth. According to him, “Our past karma reflects in the planetary positions at the time of our birth which plays a deciding role in our present life”nnnAcharya purohit and jyotish with 20years of experience in the field from Sampurnanand sanskrit vishwavidyalaya,kashi(varanasi).Former astrologer at India news,news express and jansandesh Jyotish and dharmic anusthan visheshagya, There are hundreds of factors to be considered in any astrological chart, and the astrologer’s work becomes progressively more complex and intricate when looking at relationships between different people, or forecasting future trends. The art of the astrologer is one of synthesis – how to interpret this mass of data into a cohesive whole, which we can then use to provide guidance to the seeker. By understanding the basic nature of planetary energies, and how those energies are expressed through different signs and in different houses or areas of life, the astrologer can pinpoint strengths and weaknesses, and can foresee how a person is likely to react to any particular situation. It’s important to understand that astrology is not fortune telling – because you always retain free will – but astrologers can and do advise about forthcoming opportunities or potential problems, and help guide clients as to how to make the most of the good energies while minimizing the not so good.Vastu shastra (vāstu śāstra) is a traditional Hindu system of architecture,which literally translates to "science of architecture."These are texts found on the Indian subcontinent that describe principles of design, layout, measurements, ground preparation, space arrangement and spatial geometry. Vastu Shastras incorporate traditional Hindu and in some cases Buddhist beliefs. The designs are intended to integrate architecture with nature, the relative functions of various parts of the structure, and ancient beliefs utilizing geometric patterns (yantra), symmetry and directional alignments
                </p>
            </div>
        </div>
        <ConnectWithUs/>
      <Footer/>
    </>
  )
}

export default Astrologer
