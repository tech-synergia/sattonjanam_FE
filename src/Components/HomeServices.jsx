import { Carousel, Card, Button } from 'antd';
import React, {useState, useEffect} from 'react';
import { Typography } from 'antd';
import ring from '../assets/ringService.png';
import '../scss/HomeServices.scss'
import { NavLink } from 'react-router-dom';

const { Title } = Typography;

const cardData = [
  {
    heading: "Punjabi Matrimonial Service",
    paragraph:
      "As a part of this, the bridegroom is made to wear a turban and a headgear or sehera, which covers his face. The traditional baraat includes the groom, who rides his horse (or rather mare) and reaches the wedding venue where the ceremonies take place, with his close family and friends dancing as a part of the baraat.",
  },
  {
    heading: "Sikh Matrimonial Service",
    paragraph:
      "The Sikh marriage is a very colourful and unique ceremony in which two individuals are joined in a partnership of two equals. The couple will marry in front of the Guru Granth Sahib while the guests gather around the couple, usually with men on one side and women on the other."
  },
  {
    heading: "Hindu Matrimonial Service",
    paragraph:
      "It is a religious necessity rather than a mere physical luxury. Hindu Marriage is a tie that can never be broken and it is a relation established from birth to birth.",
  },
  {
   
    heading: "Jain Matrimonial Services",
    paragraph:
      "Jain marriage is announced through a tilak. The bride's family visits the groom's family and gifts and sweets are exchanged along with a tilak ceremony of the groom.",
  },
  {
   
    heading: "Elite Matrimonial Service",
    paragraph:
      "With India’s fast paced economic development, and the ever expanding upper middle and rich class, the demand for an elite...",
  },
  {
   
    heading: "NRI Matrimonial Service",
    paragraph:
      "NRI marriages', as generally understood, are between an Indian woman from India and an Indian man residing in another country (thus NRI – non-resident Indian), either as Indian citizen (when he would legally be an 'NRI') or as citizen of that other country (when he would legally be a PIO – person of Indian origin).",
  },
  {
   
    heading: "Late Marriage Matrimony",
    paragraph:
      "Nowadays, both men and women prefer late marriage because they want economic empowerment in their life. Also, if these people study in universities or for master's or Ph. D., their marriage age would be late. On the other hand, career targets make people delay their marriages even if they have a partner in their life.",
  },
  {
  
    heading: "Re-Marriage Services",
    paragraph:
      "A marriage can fail because of reasons like communication gaps, adjustment issues, lack of compassion, domestic violence, or any other...",
  },
];

function HomeServices() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[])
 

  return (
    <div className='carouselService'>
      <Title level={1} className='titleService'>Services</Title>
      <div className="carouselSlide">
        {isMobile ? (
          <Carousel dots={true} >
             
                {cardData.map((card, index) => (
                  
                        <Card key={index} className='cardItem'>
                          <img src={ring} alt={`Image ${index}`} />
                          <h3 className="titleEllipsis">{card.heading}</h3>
                          <p className="contentEllipsis">{card.paragraph}</p>
                        </Card>
                  
                ))}
             
          </Carousel>
        ) : (
          <Carousel slidesToShow={4}>
               
                  {cardData.map((card, index) => (
                    
                    <Card key={index} className='cardItem'>
                      <img src={ring} alt={`Image ${index}`} />
                      <h3 className="titleEllipsis">{card.heading}</h3>
                      <p className="contentEllipsis">{card.paragraph}</p>
                    </Card>
                
                  ))}
              
          </Carousel>
        )}
      </div>
      <Button className='buttonService'><NavLink to={'/service'}>View All Services</NavLink></Button>
    </div>
  );
}

export default HomeServices;


