import React from 'react';
import img1 from '../../assets/daniel-frank-wKbWAMlHgNo-unsplash.jpg'
import img2 from '../../assets/shutterstock_217218478.jpg'
import im3 from '../../assets/jesper-aggergaard-CEM52sAHR80-unsplash.jpg'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div>
            <h1 className="text-black text-5xl text-center p-5 "><Link to="/">Portfolio</Link></h1>
            <Carousel className="container " variant="dark">
  <Carousel.Item className= "h-100">
    <img className="d-block  w-100  "
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5 className="text-black text-3xl">Veterinary Applications of Lactate Testing</h5>
      <p className="text-black">B-Hydroxybutyrate and Ketosis Overview</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={im3}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5 className="text-black text-3xl">Easy Home-Based Health Checks You Can Do Today</h5>
      <p className="text-black">Healthcare Applications of Lactate Testing</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5 className="text-black text-3xl">Using ALD Films to Coat Medical Devices and Implants</h5>
      <p className="text-black">Incineration of Biological Hazard Waste</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
            
    );
};

export default Portfolio;