import React from 'react'
import Carousel from 'react-bootstrap/esm/Carousel'
import firstImg from '../../assets/kti tiles.jpg'
import second from '../../assets/kti tiles 2.jpg'
import third from '../../assets/kti tiles 3.jpg'

export default function Carosual() {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={firstImg}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={second}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={third}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
