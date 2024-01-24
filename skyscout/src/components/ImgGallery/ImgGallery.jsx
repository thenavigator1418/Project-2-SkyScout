import "./ImgGallery.css";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import galImage1 from "./assets/img1.jpg";
import galImage2 from './assets/img2.jpg';
import galImage3 from './assets/img3.jpg';
import galImage4 from './assets/img4.jpg';
import galImage5 from './assets/img5.jpg';
import galImage6 from './assets/img6.jpg';
import galImage7 from './assets/img7.jpg';
import galImage8 from './assets/img8.jpg';
import galImage9 from './assets/img9.jpg';
import galImage10 from './assets/img10.jpg';
import galImage11 from './assets/img11.jpg';
import galImage12 from './assets/img12.jpg';
import galImage13 from './assets/img13.jpg';
import galImage14 from './assets/img14.jpg';


function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
// 100% a more aesthetic way to do this but whatevs!
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
      <Carousel.Item>
        <img src={galImage4} text="Hello" height = "600px" width = "100%"/>
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={galImage5} text="Hello" height = "600px" width = "100%"/>
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={galImage6} text="Hello" height = "600px" width = "100%"/>
        <Carousel.Caption>
          <h3>Sixth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={galImage7} text="Hello" height = "600px" width = "100%"/>
        <Carousel.Caption>
          <h3>Seventh slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={galImage8} text="Hello" height = "600px" width = "100%"/>
        <Carousel.Caption>
          <h3>Eighth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={galImage9} text="Hello" height = "600px" width = "100%"/>
        <Carousel.Caption>
          <h3>Ninth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={galImage10} text="Hello" height = "600px" width = "100%"/>
        <Carousel.Caption>
          <h3>Tenth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={galImage11} text="Hello" height = "600px" width = "100%"/>
        <Carousel.Caption>
          <h3>Eleventh slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={galImage12} text="Hello" height = "600px" width = "100%"/>
        <Carousel.Caption>
          <h3>Twelfth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={galImage13} text="Hello" height = "600px" width = "100%"/>
        <Carousel.Caption>
          <h3>Thirteenth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={galImage14} text="Hello" height = "600px" width = "100%"/>
        <Carousel.Caption>
          <h3>Fourteenth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
