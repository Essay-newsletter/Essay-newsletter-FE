import React from "react";

import styled from "styled-components";
import Navibar from "../../navibar/Navibar";

const Sections = styled.div`
  display: grid;
  height: 100%;
  width: 100vw;
  background-color: white;
  text-align: center;
`;

const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #f8f6f0;
`;

const Desc = styled.div`
  display: grid;
  grid-row-gap: 12px;
  width: 450px;
  height: auto;
  border-radius: 72px;
  margin: 200px auto auto auto;
  text-align: center;
`;

const InputId = styled.input`
  width: 240px;
  height: 40px;
  margin: auto;
  padding-left: 16px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
`;
const InputPw = styled.input`
  width: 240px;
  height: 40px;
  margin: auto;
  padding-left: 16px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
`;
const LoginTitle = styled.h1`
  height: 3px;
  padding: none;
  margin: none;
  margin-bottom: 60px;
  color: ;
`;

const LoginButton = styled.button`
  width: 260px;
  height: 40px;
  margin: auto;
  border-radius: 8px;
  margin-top: 20px;
`;

const LoginTool = styled.div`
  width: 260px;
  height: 40px;
  margin: auto;
  background-color: gray;
`;

// const KakaoBox = styled.div`
//   width: 260px;
//   height: 40px;
//   margin: auto;
// `;

export default function Login() {
  return (
    <Sections>
      <Navibar></Navibar>
      <Page>
        <Desc>
          <LoginTitle>로그인</LoginTitle>
          <InputId placeholder="I D"></InputId>
          <InputPw placeholder="P W"></InputPw>
          <LoginButton>로그인</LoginButton>
          <LoginTool></LoginTool>
        </Desc>
      </Page>
    </Sections>
  );
}
