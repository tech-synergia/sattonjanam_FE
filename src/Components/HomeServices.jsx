import { Carousel, Card, Button } from 'antd';
import React from 'react';
import { Typography } from 'antd';
import ring from '../assets/ring.png';
import '../scss/HomeServices.scss'
import { NavLink } from 'react-router-dom';

const { Title } = Typography;

const cardData = [
  {
    image: ring,
    heading: 'Punjabi Matrimonial Service',
    paragraph: 'Punjabi weddings are renowned for being pompous and energetic. People hailing from the Punjabi ethnicity are joyous, playful and extremely...',
  },
  {
    image: ring,
    heading: 'Punjabi Matrimonial Service',
    paragraph: 'Punjabi weddings are renowned for being pompous and energetic. People hailing from the Punjabi ethnicity are joyous, playful and extremely...',
  },
  {
    image: ring,
    heading: 'Punjabi Matrimonial Service',
    paragraph: 'Punjabi weddings are renowned for being pompous and energetic. People hailing from the Punjabi ethnicity are joyous, playful and extremely...',
  },
  {
    image: ring,
    heading: 'Punjabi Matrimonial Service',
    paragraph: 'Punjabi weddings are renowned for being pompous and energetic. People hailing from the Punjabi ethnicity are joyous, playful and extremely...',
  },
  {
    image: ring,
    heading: 'Punjabi Matrimonial Service',
    paragraph: 'Punjabi weddings are renowned for being pompous and energetic. People hailing from the Punjabi ethnicity are joyous, playful and extremely...',
  },
  {
    image: ring,
    heading: 'Punjabi Matrimonial Service',
    paragraph: 'Punjabi weddings are renowned for being pompous and energetic. People hailing from the Punjabi ethnicity are joyous, playful and extremely...',
  },
  {
    image: ring,
    heading: 'Punjabi Matrimonial Service',
    paragraph: 'Punjabi weddings are renowned for being pompous and energetic. People hailing from the Punjabi ethnicity are joyous, playful and extremely...',
  },
  {
    image: ring,
    heading: 'Punjabi Matrimonial Service',
    paragraph: 'Punjabi weddings are renowned for being pompous and energetic. People hailing from the Punjabi ethnicity are joyous, playful and extremely...',
  },
];

function HomeServices() {
  // Calculate the number of slides needed
  const numSlides = Math.ceil(cardData.length / 4);

  // Create an array of slide indices
  const slideIndices = Array.from({ length: numSlides }, (_, index) => index);

  return (
    <div className='carouselService'>
      <Title level={1} style={{textAlign: "center"}}>Services</Title>
      <Carousel dots autoplay>
        {slideIndices.map((slideIndex) => (
          <div key={slideIndex} className='carouselSlide'>
            <div className='cardRow'>
              {cardData.slice(slideIndex * 4, slideIndex * 4 + 4).map((card, index) => (
                <Card key={index} className='cardItem'>
                  <img src={card.image} alt={`Image ${index}`} />
                  <h3>{card.heading}</h3>
                  <p>{card.paragraph}</p>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
      <Button className='buttonService'><NavLink to={'/service'}>View All Services</NavLink></Button>
    </div>
  );
}

export default HomeServices;
