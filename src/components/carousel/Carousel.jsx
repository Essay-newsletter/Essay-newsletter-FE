import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import marketing1 from "../assets/img/marketing1.jpeg";
import marketing2 from "../assets/img/marketing2.jpg";
import marketing3 from "../assets/img/marketing3.jpg";
import marketing4 from "../assets/img/marketing4.jpg";
import marketing5 from "../assets/img/marketing5.jpg";
import marketing6 from "../assets/img/marketing6.png";

//width를 auto로
const CarouselSection = styled.div`
  margin: auto;
  width: 80%;
  margin-right: 25px;
  margin-left: 25px;
  margin: auto;
  // @media screen and (max-width: 768px) {
  //   position: fixed;
  // }
`;
// z-index: 순서 부여
const PageImage = styled.img`
  height: 200px;
  width: 160px;

  margin: auto;
  border-radius: 12px;
  box-shadow: 2px 2px 2px 2px #d9d9d9;
  z-index: 0;
  @media screen and (max-width: 768px) {
    height: calc(120px+12vh);
    width: calc(92px + 10vw);
  }
`;
const StyledSlider = styled(Slider)`
  .slick-list {
    width: auto;
    height: 220px; /*리스트 사이즈 조절, 아래 점들과 높이차이*/
  }

  .slick-slide {
    cursor: pointer;
  }
  // .slick-track div {
  //   width: 100%;
  // }
  // .slick-slide div {
  //   width: auto;
  // }

  // .slick-slide {
  //   // 슬라이드 사각형
  //   padding: 0px 12px 0 12px;
  //   width: auto;
  //   height: 100%;
  //   margin: 0 5px 0px 5px;
  //   // border: 1px solid #d9d9d9;
  //   .d {
  //     //사각형 안에 실제 슬라이드 객체

  //     height: 80%;
  //     // width: 10px;
  //     margin: auto;
  //     // margin-left: 60px; // 시작 슬라이드 왼쪽 간격
  //     padding-top: 0px;
  //     padding-bottom: 40px; // 박스 아래 간격 -> 다른 요소와 간격

  //     // // background-color: #f4f4f4; //박스에 색상 없애기.
  //     // border-radius: 16px;
  //     // // border: 1px solid #d9d9d9;
  //     text-align: center;
  //   }
  //   img {
  //   }
  //   span {
  //   }
  // }
`;

const Title = styled.h2`
  padding-left: 1.5rem;
  margin-bottom: 24px;
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
    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 960, //화면 사이즈 960px
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, //화면 사이즈 768px
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <CarouselSection>
      <Title>금주 인기 에세이</Title>
      <StyledSlider {...settings}>
        <div className="d">
          <PageImage src={marketing1}></PageImage>
        </div>
        <div className="d">
          <PageImage src={marketing2}></PageImage>
        </div>
        <div className="d">
          <PageImage src={marketing3}></PageImage>
        </div>
        <div className="d">
          <PageImage src={marketing4}></PageImage>
        </div>
        <div className="d">
          <PageImage src={marketing5}></PageImage>
        </div>
        <div className="d">
          <PageImage src={marketing2}></PageImage>
        </div>
        <div className="d">
          <PageImage src={marketing3}></PageImage>
        </div>
        <div className="d">
          <PageImage src={marketing4}></PageImage>
        </div>
        <div className="d">
          <PageImage src={marketing5}></PageImage>
        </div>
        <div className="d">
          <PageImage src={marketing6}></PageImage>
        </div>
      </StyledSlider>
    </CarouselSection>
  );
}
