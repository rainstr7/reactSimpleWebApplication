import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import carouselImg1 from "../asserts/carouselImg1.webp";
import carouselImg2 from "../asserts/carouselImg2.webp";
class CarouselBox extends Component {
    render() {
        return (
           <>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselImg1}
                            alt="carouselImg1"
                        />
                        <Carousel.Caption>
                            <h3>Carousel Image </h3>
                            <p>Peritus zelus cito demittos gabalium est.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselImg2}
                            alt="carouselImg2"
                        />
                        <Carousel.Caption>
                            <h3>Carousel Image 2</h3>
                            <p>In paradise all therapists experience definition.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
           </>
        );
    }
}

export default CarouselBox;