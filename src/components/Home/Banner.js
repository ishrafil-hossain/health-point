import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src="https://i.ibb.co/h12WFbr/g1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 >Not Just Better Care, But A Better Experience</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/yXSHj1j/g5.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Better doctor, Better treatement</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/cgjSzr6/g6.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-dark">Serving All People Through Exemplary Care</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;