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
          <img className="image-slider" src="https://infotech.umm.ac.id/assets/frontside/images/sliders/slide_1.png" alt="" />
        </div>
        <div>
          <img className="image-slider" src="https://infotech.umm.ac.id/assets/frontside/images/sliders/slide_2.png" alt="" />
        </div>
        <div>
          <img className="image-slider" src="https://infotech.umm.ac.id/assets/frontside/images/sliders/slider_ilab_2.png" alt="" />
        </div>
      </Slider>
    </>
  );
};

export default JumbotronComponent;
