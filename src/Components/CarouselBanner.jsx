import { Carousel } from "antd";
import wedding1 from "../assets/1-01.jpeg";
import wedding2 from "../assets/2-01.jpeg";
import wedding3 from "../assets/3-01.jpeg";
import wedding4 from "../assets/4-01.jpeg";
import wedding5 from "../assets/5-01.jpeg";
import "../scss/CarouselBanner.scss";

function CarouselBanner() {
  return (
    <Carousel autoplay className="carousel">
      <div>
        <img src={wedding1} alt="" />
      </div>
      <div>
        <img src={wedding2} alt="" />
      </div>
      <div>
        <img src={wedding3} alt="" />
      </div>
      <div>
        <img src={wedding4} alt="" />
      </div>
      <div>
        <img src={wedding5} alt="" />
      </div>
    </Carousel>
  );
}

export default CarouselBanner;
