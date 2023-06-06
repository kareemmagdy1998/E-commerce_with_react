import React from "react";
import { Carousel } from "react-bootstrap";
import "../css/slider.css";
export function Slider() {
  return (
    <div className="big-container">
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block"
            src="https://cdn.pixabay.com/photo/2017/03/27/14/17/christmas-tree-2179023_640.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src="https://cdn.pixabay.com/photo/2018/03/04/09/51/space-3197611_1280.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="https://cdn.pixabay.com/photo/2017/03/23/12/23/vintage-2168174_640.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
