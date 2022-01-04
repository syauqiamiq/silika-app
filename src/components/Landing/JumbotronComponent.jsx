import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import image1 from "../../assets/image/slider1.jpg";

const JumbotronComponent = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <img className="image-slider" src={image1} alt="" />
        </div>
        <div>
          <img className="image-slider" src={image1} alt="" />
        </div>
        <div>
          <img className="image-slider" src={image1} alt="" />
        </div>
        <div>
          <img className="image-slider" src={image1} alt="" />
        </div>
      </Slider>
    </>
  );
};

export default JumbotronComponent;
