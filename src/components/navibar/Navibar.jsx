import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
const NavibarSection = styled.div`
  position: fixed;
  height: 10%;
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  padding: 4px 12px 0;
  background-color: white;
  z-index: 10;
`;

// const Bar = styled.div`
//   width: 100%;
//   height: 100%;
// `;

const NavBox = styled.ul`
  margin-left: 40%;
  list-style: none;
  height: auto;
  width: 40%;
  align-items: center;
  display: flex;
  float: left;
`;
const Nav = styled.li`
  margin-left: 10%;
  height: 100%;
  width: auto;
  align-items: center;
  cursor: pointer;
  float: left;
`;

const LogoBox = styled.div`
  height: auto;
  width: 100px;
  text-align: center;
  align-items: center;
  cursor: pointer;
  float: left;
`;

const Logo = styled(Link)`
  display: flex;
  left: 50%;
  top: 50%;
  color: black;
  text-decoration-line: none;
  text-decoration-line: none;
  font-size: 24px;
  font-weight: 600;
  font-family: 나눔고딕;
`;
const LoginBox = styled.button`
  height: 5vh;
  width: 7.5vw;
  align-items: center;
  text-aglin: center;

  border-radius: 16px;
  border: 0px;
  outline: 0px;
  color: white;
  background-color: #cac4a7;
  color: black;
  font-weight: 500;
  font-size:14px;
  cursor: pointer;
  
  &:hover{  
    background-color : #E2DCBD;
    color : black;
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
