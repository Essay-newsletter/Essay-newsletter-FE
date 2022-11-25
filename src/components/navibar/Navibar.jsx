import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavibarSection = styled.div`
  position: fixed;
  height: 8%;
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  padding: 4px 4px 0;
  background-color: white;
  z-index: 10;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

// const Bar = styled.div`
//   width: 100%;
//   height: 100%;
// `;

const NavBox = styled.ul`
  margin-left: 40%;

  list-style: none;

  width: 40%;
  justify-content: space-around;
  align-items: center;
  display: flex;
  float: left;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Nav = styled.li`
  height: 100%;
  width: 6vw;
  align-items: center;
  cursor: pointer;
  float: left;
  font-size: 1.2vw;
`;

const LogoBox = styled.div`
  width: 8vw;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

const Logo = styled(Link)`
  left: 50%;
  top: 50%;

  color: #292a34;
  text-decoration-line: none;


  font-size: calc(18px + 0.4vw);
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: calc(18px + 0.4vw);

  }
`;
const LoginBox = styled.button`
  // height: 5vh;
  // align-items: center;
  height: 30px;
  width: 5rem;
  text-aglin: center;

  border-radius: 16px;
  border: 0px;
  outline: 0px;
  // color: white;
  background-color: #cac4a7;
  color: black;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #e2dcbd;
    color: black;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default function Navibar() {
  return (
    <NavibarSection>
      <LogoBox>
        <Logo to="/">글공간</Logo>
      </LogoBox>

      <NavBox>
        <Nav>작품 보기</Nav>
        <Nav>기업 문의</Nav>
        <Nav>서비스 소개</Nav>
        <Nav>마이페이지</Nav>
      </NavBox>
      <Link to="/login">
        <LoginBox>로그인</LoginBox>
      </Link>
    </NavibarSection>
  );
}
//반응형 수정 필요
