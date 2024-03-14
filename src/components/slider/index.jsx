import { useState } from "react";
import "./slider.scss";

export const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="/arrow.png" alt="" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img className="right" src="/arrow.png" alt="" />
          </div>
          <div onClick={() => setImageIndex(null)} className="close">
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="bigImage" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, i) => (
          <img
            src={image}
            alt="smallImages"
            key={i}
            onClick={() => setImageIndex(i + 1)}
          />
        ))}
      </div>
    </div>
  );
};
