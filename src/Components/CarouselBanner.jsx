import { Carousel } from 'antd';
import wedding1 from '../assets/wedding1.jpg'
import wedding2 from '../assets/wedding2.jpg'
import wedding3 from '../assets/wedding3.jpeg'
import '../scss/CarouselBanner.scss'


function CarouselBanner() {
  return (
    <Carousel autoplay className='carousel'>
    <div>
      <img src={wedding1} alt="" />
    </div>
    <div>
      <img src={wedding2} alt="" />
    </div>
    <div>
     <img src={wedding3} alt="" />
    </div>
  </Carousel>
  )
}

export default CarouselBanner


