// import { Carousel, Card, Button } from 'antd';
// import React from 'react';
// import { Typography } from 'antd';
// import ring from '../assets/ring.png';
// import '../scss/HomeServices.scss'
// import { NavLink } from 'react-router-dom';

// const { Title } = Typography;

// const cardData = [
//   {
//     image: ring,
//     heading: "Punjabi Matrimonial Service",
//     paragraph:
//       "Punjabi weddings are renowned for being pompous and energetic. People hailing from the Punjabi ethnicity are joyous, playful and extremely...",
//   },
//   {
//     image: ring,
//     heading: "Sikh Matrimonial Service",
//     paragraph:
//       "Name given to a marriage ceremony in Sikh Culture is called “Anand Karaj” which means “Blissful Union”. Sikh matrimonial ceremonies..."
//   },
//   {
//     image: ring,
//     heading: "Hindu Matrimonial Service",
//     paragraph:
//       "The Hindu community is a diverse, colourful and enchanting ethnic group of people which make up for around 80% of...",
//   },
//   {
//     image: ring,
//     heading: "Jain Matrimonial Services",
//     paragraph:
//       "Jainsim is the sixth largest religion in India, and is mainly concentrated around the western states of Gujarat and Rajasthan...",
//   },
//   {
//     image: ring,
//     heading: "Elite Matrimonial Service",
//     paragraph:
//       "With India’s fast paced economic development, and the ever expanding upper middle and rich class, the demand for an elite...",
//   },
//   {
//     image: ring,
//     heading: "NRI Matrimonial Service",
//     paragraph:
//       "NRI’s, are people who are born in India but reside abroad in a different country. Despite living in foreign countries...",
//   },
//   {
//     image: ring,
//     heading: "Late Marriage Matrimony",
//     paragraph:
//       "In the Indian subcontinent, the ideal age for marriage falls in the range of twenties and early thirties. Most people...",
//   },
//   {
//     image: ring,
//     heading: "Re-Marriage Services",
//     paragraph:
//       "A marriage can fail because of reasons like communication gaps, adjustment issues, lack of compassion, domestic violence, or any other...",
//   },
// ];

// function HomeServices() {
//   // Calculate the number of slides needed
//   const numSlides = Math.ceil(cardData.length / 4);

//   // Create an array of slide indices
//   const slideIndices = Array.from({ length: numSlides }, (_, index) => index);

//   return (
//     <div className='carouselService'>
//       <Title level={1} style={{textAlign: "center"}}>Services</Title>
//       <Carousel dots autoplay>
//         {slideIndices.map((slideIndex) => (
//           <div key={slideIndex} className='carouselSlide'>
//             <div className='cardRow'>
//               {cardData.slice(slideIndex * 4, slideIndex * 4 + 4).map((card, index) => (
//                 <Card key={index} className='cardItem'>
//                   <img src={card.image} alt={`Image ${index}`} />
//                   <h3>{card.heading}</h3>
//                   <p>{card.paragraph}</p>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         ))}
//       </Carousel>
//       <Button className='buttonService'><NavLink to={'/service'}>View All Services</NavLink></Button>
//     </div>
//   );
// }

// export default HomeServices;


import { Carousel, Card, Button } from 'antd';
import React, {useState, useEffect} from 'react';
import { Typography } from 'antd';
import ring from '../assets/ring.png';
import '../scss/HomeServices.scss'
import { NavLink } from 'react-router-dom';

const { Title } = Typography;

const cardData = [
  {
    image: ring,
    heading: "Punjabi Matrimonial Service",
    paragraph:
      "Punjabi weddings are renowned for being pompous and energetic. People hailing from the Punjabi ethnicity are joyous, playful and extremely...",
  },
  {
    image: ring,
    heading: "Sikh Matrimonial Service",
    paragraph:
      "Name given to a marriage ceremony in Sikh Culture is called “Anand Karaj” which means “Blissful Union”. Sikh matrimonial ceremonies..."
  },
  {
    image: ring,
    heading: "Hindu Matrimonial Service",
    paragraph:
      "The Hindu community is a diverse, colourful and enchanting ethnic group of people which make up for around 80% of...",
  },
  {
    image: ring,
    heading: "Jain Matrimonial Services",
    paragraph:
      "Jainsim is the sixth largest religion in India, and is mainly concentrated around the western states of Gujarat and Rajasthan...",
  },
  {
    image: ring,
    heading: "Elite Matrimonial Service",
    paragraph:
      "With India’s fast paced economic development, and the ever expanding upper middle and rich class, the demand for an elite...",
  },
  {
    image: ring,
    heading: "NRI Matrimonial Service",
    paragraph:
      "NRI’s, are people who are born in India but reside abroad in a different country. Despite living in foreign countries...",
  },
  {
    image: ring,
    heading: "Late Marriage Matrimony",
    paragraph:
      "In the Indian subcontinent, the ideal age for marriage falls in the range of twenties and early thirties. Most people...",
  },
  {
    image: ring,
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
      <Title level={1} style={{textAlign: "center"}}>Services</Title>
      <div className="carouselSlide">
        {isMobile ? (
          <Carousel dots={true} >
             
                {cardData.map((card, index) => (
                  
                        <Card key={index} className='cardItem'>
                          <img src={card.image} alt={`Image ${index}`} />
                          <h3>{card.heading}</h3>
                          <p>{card.paragraph}</p>
                        </Card>
                  
                ))}
             
          </Carousel>
        ) : (
          <Carousel slidesToShow={4}>
               
                  {cardData.map((card, index) => (
                    
                    <Card key={index} className='cardItem'>
                      <img src={card.image} alt={`Image ${index}`} />
                      <h3>{card.heading}</h3>
                      <p>{card.paragraph}</p>
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


