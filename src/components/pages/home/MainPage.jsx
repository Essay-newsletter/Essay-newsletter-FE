import React from "react";
import styled from "styled-components";

const Page = styled.div`
  display: grid;

  height: 100vh;
  width: 100%;
  background-color: #f8f6f0;
`;
const Desc = styled.div`
  width: 100%;
  height: auto;
  margin: 30vh auto 8vh auto;
`;
const Title = styled.h1`
  font-size: calc(20px + 0.4vw);
  margin-bottom: 16px;
  text-align: center;
  color: #292a34;
`;
const Content = styled.p`
  font-size: calc(10px + 0.4vw);
  text-align: center;
  color: #3a3c4e;
`;

// const DescImg = styled.div`
//   width: 100%;
//   height: auto;
// `;
// const MainImg = styled.img`
//   display: block;
//   width: 700px;
//   height: 400px;
//   border-radius: 8px;
//   margin: auto;

//   align-items: center;
//   justify-content: center;
//   opacity: 0.5;
// `;

const DescRegister = styled.div`
  grid-row-gap: 80px;
  display: grid;
  width: 100%;
  height: auto;
  padding-bottom: 30vh;
`;

const Register = styled.button`
 
    
  margin: 0 auto auto auto;
  height: 8vh;
  width: 24%;
  min-width:80px;
  
  background-color:#98916D;
  color: #FFFFF8;
  font-size: calc(14px + 0.4vw);
  font-weight: 400;
  cursor: pointer;
  border-radius: 80px;
   

   border: 0px;
  outline: 0px;

  &:hover{  
    background-color : #E2DCBD;
    color : black;
`;

const RegisterText = styled.p`
  margin: auto;

  height: auto;
  width: auto;
  text-align: center;
`;

// const ButtonImg = styled.img`
//   width: 24px;
//   color: #fffff8;
//   font-size: 20px;
//   font-weight: 100;
// `;

export default function MainPage() {
  return (
    <>
      <Page>
        <Desc>
          <Title>
            원하는 작가의 작품을 <br /> 이메일로 매주 간편하게
          </Title>
          <Content>
            에세이 메일링부터 작가님들의 블로그까지 다양한 글을 만나보세요.
            <br />
            누구나 작가가 될 수 있는 공간 글공간입니다.
          </Content>
        </Desc>
        <DescRegister>
          <Register
            onClick={() => {
              alert("개발 중");
            }}
          >
            <RegisterText>작가 등록하기</RegisterText>
          </Register>
        </DescRegister>
      </Page>
    </>
  );
}
