import "./ImgGallery.css";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import galImage1 from './assets/image1.jpg';
import galImage2 from './assets/image2.jpg';
import galImage3 from './assets/image3.jpg';

function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel class="mx-5" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={galImage1} text="Hello" height = "600px" width = "100%"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={galImage2} text="Hello" height = "600px" width = "100%"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={galImage3} text="Hello" height = "600px" width = "100%"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
