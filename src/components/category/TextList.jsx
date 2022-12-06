import { React, useEffect, useState } from "react";
// import axios from "axios";
import styled from "styled-components";
import TextItem from "./TextItem";
import { dummy } from "dummy";
const TextItemBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 76%;
  margin: 0 auto;
  // margin-top: 2rem;

  @media screen and (max-width: 768px) {
    wdith: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sampleArticle = {
//   title: "제목",
//   description: "내용",
//   url: "https://google.com",
//   urlToImage: "https://via.placeholder.com/160",
// };
// 임시 board 생성 , 1. 파일명 바꾸기. 2. 카테고리 생성

const TextList = ({ category }) => {
  const [writer, setWriter] = useState(null);
  const [loading, setLoading] = useState(null);

  // setWriter(dummy);
  useEffect(() => {
    // async 비동기 함수호출
    const fetchData = async () => {
      // api 호출 시간동안 보여줄 로딩바
      setLoading(true);
      try {
        //props로 넘어온 state로
        // const query = category === "all" ? "" : `&category = ${category}`;
        // const response = await axios.get(
        //   "https://oyaphovd60.execute-api.ap-northeast-2.amazonaws.com/dev/api/v1/article/list/"
        // );

        // console.log(data);
        // console.log(response);
        setWriter(dummy); // dummy로 바꾸면 해결됨
      } catch (e) {
        console.log("error", e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);
  console.log(2);

  // 대기 중
  if (loading) {
    return <TextItemBlock>대기 중입니다...</TextItemBlock>;
  }
  // articles 값이 설정 안될경우
  if (!writer) {
    return null;
  }

  return (
    <TextItemBlock>
      {writer.data.map((v) => (
        <TextItem key={v.id} data={v} />
      ))}
    </TextItemBlock>
  );
};

export default TextList;
