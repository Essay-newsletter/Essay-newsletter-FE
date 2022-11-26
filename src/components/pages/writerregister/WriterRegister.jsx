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

  const DescText = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    margin: auto;
    backgroun-color: white;
    @media screen and (max-width: 768px) {
      margin: 30vh auto 8vh auto;
      // padding: 0 10px 0 10px;
    }
  `;

  const InputTitle = styled.input``;
  const InputContent = styled.input``;
  const InputUrl = styled.input``;

  return (
    <>
      <Navibar />
      <Page>
        <DescText>
          <InputTitle></InputTitle>
          <InputContent></InputContent>
          <InputUrl></InputUrl>
        </DescText>
      </Page>
    </>
  );
}
