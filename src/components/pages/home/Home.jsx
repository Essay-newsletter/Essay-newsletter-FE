import React from "react";
import Navibar from "../../navibar/Navibar";
import styled from "styled-components";
import MainPage from "./MainPage";
import Fade from "react-reveal/Fade";
import SubPage from "./SubPage";

const Sections = styled.div`
  height: auto;
  width: 100%;
  background-color: white;
`;
//섹션안에 넣었을때랑 차이 ?
export default function Home() {
  return (
    <>
      <Navibar />
      <Sections>
        <MainPage />
        <SubPage />
      </Sections>
    </>
  );
}
