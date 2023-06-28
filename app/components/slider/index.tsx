import React from "react";
import Container from "../Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const index = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full h-[650px] bg-center bg-slider mb-40 relative">
      <div className="overlay-slider"></div>

      <Container>
        <div className="z-10 relative pt-20">
          <div className="text-white text-center">
            <span className="italic">Testimonial</span>
            <h2 className="text-[40px] font-bold mt-2">Happy Clients</h2>

            <Slider {...settings}></Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default index;
