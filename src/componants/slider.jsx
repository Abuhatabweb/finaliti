import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../styles/slider.css";
export function Slider() {
  let [index, setIndex] = useState(0);
  let images = [
    "https://cdn.prod.website-files.com/5d27c9116c864d2e3ab8eee3/5d27cac556124e167c4ef347_Love-Local-Post-thumb.jpg",
    "https://cdn.prod.website-files.com/5d27c9116c864d2e3ab8eee3/5d27cabd6c864d348eb8f52e_Eat-Local-Post-thumb.jpg",
    "https://cdn.prod.website-files.com/5d27c9116c864d2e3ab8eee3/5d27caafd295df9a9be8109c_Shop-Local-Post-thumb.jpg",
  ];

  let handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="slider-css">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        {images.map((img, i) => (
          <Carousel.Item key={i}>
            <img className="d-block" src={img} alt={`Slide ${i}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
