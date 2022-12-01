import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Carousel from "components/carousel/Carousel";
import TextList from "components/category/TextList";
import Categories from "components/category/Categories";

const Page = styled.div`
  margin-top: 0px;
  height: 100%;
  width: 100%;
  background-color: white;
`;
const Desc = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto auto auto;
`;

const ListTitle = styled.h2`
  width: 76%;
  margin: 4% auto 0 auto;
  @media screen and (max-width: 768px) {
    // text-align:center;
    padding-left: 1.5rem;
    margin: 8% auto 0 auto;
    overflow-x: auto;
`;

const StyledCarousel = styled(Carousel)``;
export default function SubPage() {
  // 기본 카테고리 state 선언
  const [category, seCategory] = useState("all");
  // 콜백으로 사용 할 카테고리 함수
  const onSelect = useCallback((category) => seCategory(category), []);
  return (
    <>
      <Page>
        <Desc>
          <StyledCarousel />
        </Desc>
        <Desc>
          <ListTitle>작품보기</ListTitle>
          {/* props로 카테고리 state와 함수 넘겨줌 */}
          <Categories category={category} onSelect={onSelect} />
          <TextList category={category} />
        </Desc>
      </Page>
    </>
  );
}
