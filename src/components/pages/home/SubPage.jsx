import React from "react";
import styled from "styled-components";
import Carousel from "../../carousel/Carousel";

const Page = styled.div`
  margin-top: ;
  height: 100vh;
  width: 100%;
  background-color: #white;
`;
const Desc = styled.div`
  width: 100%;
  height: auto;
  margin: 4% auto auto auto;
`;

const StyledCarousel = styled(Carousel)``;
export default function SubPage() {
  return (
    <>
      <Page>
        <Desc>
          <StyledCarousel />
        </Desc>
      </Page>
    </>
  );
}
