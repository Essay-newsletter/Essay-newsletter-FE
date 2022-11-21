import React from "react";
import styled from "styled-components";
import Carousel from "components/carousel/Carousel";
import TextList from "components/category/TextList";

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

const StyledCarousel = styled(Carousel)``;
export default function SubPage() {
  return (
    <>
      <Page>
        <Desc>
          <StyledCarousel />
        </Desc>
        <Desc>
          <TextList />
        </Desc>
      </Page>
    </>
  );
}
