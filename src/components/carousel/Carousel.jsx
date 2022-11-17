import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import marketing1 from "../assets/img/marketing1.jpeg";
import marketing2 from "../assets/img/marketing2.jpg";
import marketing3 from "../assets/img/marketing3.jpg";
import marketing4 from "../assets/img/marketing4.jpg";
import marketing5 from "../assets/img/marketing5.jpg";

const CarouselSection = styled.div`
  margin-right: 25px;
  margin-left: 25px;
`;

const PageImage = styled.img`
  width: 160px;
`;
const StyledSlider = styled(Slider)`
  .slick-list {
    width: auto;
    height: 200px;
  }

  .slick-slide div {
    display: flex;
    img {
      margin: auto;
    }
  }
`;

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };
  return (
    <CarouselSection>
      <h2> Single Item</h2>
      <StyledSlider {...settings}>
        <div>
          <PageImage src={marketing1}></PageImage>
        </div>
        <div>
          <PageImage src={marketing2}></PageImage>
        </div>
        <div>
          <PageImage src={marketing3}></PageImage>
        </div>
        <div>
          <PageImage src={marketing4}></PageImage>
        </div>
        <div>
          <PageImage src={marketing5}></PageImage>
        </div>
        <div>
          <PageImage src={marketing5}></PageImage>
        </div>
        <div>
          <PageImage src={marketing5}></PageImage>
        </div>
        <div>
          <PageImage src={marketing5}></PageImage>
        </div>
        <div>
          <PageImage src={marketing5}></PageImage>
        </div>
        <div>
          <PageImage src={marketing5}></PageImage>
        </div>
        <div>
          <PageImage src={marketing5}></PageImage>
        </div>
      </StyledSlider>
    </CarouselSection>
  );
}
