import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mainimg from "../../assets/img/mainimage.png";

const Page = styled.div`
  display: flex;

  height: 100vh;
  width: 100%;
  background-color: #f8f6f0;

  @media screen and (max-width: 768px) {
    display: grid;
  }
`;
const DescText = styled.div`
  width: 100%;
  height: auto;

  margin: 36vh auto 8vh calc(10px + 12vw);

  @media screen and (max-width: 768px) {
    margin: 30vh auto 8vh auto;
    // padding: 0 10px 0 10px;
  }
`;
const Title = styled.h1`
  font-size: calc(24px + 0.4vw);

  margin-bottom: 16px;

  color: #292a34;
  @media screen and (max-width: 768px) {
    font-size: calc(20px + 0.4vw);
    text-align: center;
  }
`;
const Content = styled.p`
  font-size: calc(10px + 0.4vw);
  // text-align: center;

  color: #3a3c4e;
  @media screen and (max-width: 768px) {
    font-size: calc(10px + 0.4vw);
    text-align: center;
  }
`;

// const DescRegister = styled.div`
//   grid-row-gap: 80px;
//   display: grid;
//   width: 100%;
//   height: auto;
//   padding-bottom: 30vh;
// `;

const RegisterDesc = styled(Link)`
  @media screen and (max-width: 768px) {
    width: auto;
    display: flex;
    text-decoration: none;
  }
`;
const Register = styled.button`
  margin: 3vh auto auto auto;
  height: 8vh;
  width: calc(200px + 0.4vw);
  min-width: 80px;
  background-color: #98916d;
  cursor: pointer;
  border-radius: 80px;
  border: 0px;
  outline: 0px;
  @media screen and (max-width: 768px) {
    width: calc(200px + 0.4vw);
    margin: 6vh auto auto auto;

    border: 0px;
    outline: 0px;

  }
  &:hover {
    width: calc(200px + 0.4vw);
    background-color: #e2dcbd;
    color: black;
  }
`;

const RegisterText = styled.p`
  margin: auto;
  color: #fffff8;
  font-size: calc(14px + 0.4vw);
  font-weight: 400;
  height: auto;
  width: auto;
  text-align: center;
`;
const DescImg = styled.div`
  width: 100%;
  height: auto;
  margin: 24vh 8vw 8vh 0;

  @media screen and (max-width: 768px) {
    display: none;
    margin: 0 12vw 8vh 0;
  }
`;

const MainImg = styled.img`
  // display: block;
  width: calc(500px + 10vw);
  height: calc(480px + 10vh);

  margin: auto;

  align-items: center;
  justify-content: center;
  opacity: 0.9;
`;

export default function MainPage() {
  return (
    <>
      <Page>
        <DescText>
          <Title>
            원하는 작가의 작품을
            <br />
            이메일로 매주 간편하게
          </Title>
          <Content>
            에세이 메일링부터 작가님들의 블로그까지 다양한 글을 만나보세요.
            <br />
            누구나 작가가 될 수 있는 공간 글공간입니다.
          </Content>
          <RegisterDesc to="/register">
            <Register>
              <RegisterText>작가 등록하기</RegisterText>
            </Register>
          </RegisterDesc>
        </DescText>
        <DescImg>
          <MainImg src={mainimg}></MainImg>
        </DescImg>
      </Page>
    </>
  );
}
