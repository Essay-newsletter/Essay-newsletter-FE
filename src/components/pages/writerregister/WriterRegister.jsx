// import React, { useState } from "react";
import styled from "styled-components";

// import { redirect } from "react-router-dom";
import Navibar from "components/navibar/Navibar";

export default function WriterRegister() {
  // alert("페이지 개발중입니다.");
  // redirect("/");
  //  id: 4,
  //   image: insta_hayne,
  //   title: "서해인",
  //   content: "작품 소개",
  //   instargram: "instargram",
  //   url: "https://www.instagram.com/browneyedseoul/?next=%2Fopendooropenit%2F",
  //   urlToImage: "https://via.placeholder.com/160",
  // const [id, setId] = useState(5);
  // const [image, setImage] = useState(null);
  // const [title, setTitle] = useState(null);
  // const [content, setContent] = useState("작품소개");
  // const [instargram, setInstargram] = useState("instargram");
  // const [url, setUrl] = useState("https://www.instagram.com");
  // const [urltoimage, setUrltotimage] = useState(
  //   "https://via.placeholder.com/160"
  // );

  const Page = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-color: #f8f6f0;

    @media screen and (max-width: 768px) {
      display: grid;
    }
  `;

  const Title = styled.h1``;
  const DescText = styled.div`
    // display: flex;
    // flex-direction: column;
    width: auto;
    height: auto;
    margin: auto;
    backgroun-color: white;
    text-align: center;
    @media screen and (max-width: 768px) {
      margin: 30vh auto 8vh auto;
      // padding: 0 10px 0 10px;
    }
  `;
  const InputBox = styled.div`
    margin-bottom: 20px;
  `;

  const RegisterButton = styled.button`
  height: 6vh;
  width: calc(100px + 0.4vw);
  min-width: 80px;
  background-color: #98916d;
  cursor: pointer;
  border-radius: 80px;
  border: 0px;
  outline: 0px;
  @media screen and (max-width: 768px) {
    width: calc(100px + 0.4vw);
    border: 0px;
    outline: 0px;
  }
  &:hover {
    width: calc(100px + 0.4vw);
    background-color: #e2dcbd;
    color: black;`;
  const InputTitle = styled.input``;
  const InputContent = styled.input``;
  const InputUrl = styled.input``;

  return (
    <>
      <Navibar />
      <Page>
        <DescText>
          <Title>작가등록</Title>
          <InputBox>
            <InputTitle placeholder="작가명"></InputTitle>
          </InputBox>
          <InputBox>
            <InputContent placeholder="작품 소개"></InputContent>
          </InputBox>
          <InputBox>
            <InputUrl placeholder="인스타그램 주소"></InputUrl>
          </InputBox>
          <RegisterButton>등록 완료</RegisterButton>
        </DescText>
      </Page>
    </>
  );
}
