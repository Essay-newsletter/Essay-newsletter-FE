import React from "react";
import styled, { css } from "styled-components";

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "travel",
    text: "여행",
  },
  {
    name: "improvement",
    text: "자기계발",
  },
  {
    name: "love",
    text: "연애",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  //   border-top: 2px solid #98916d;
  padding: 1rem;
  width: 76%;
  margin: 0 auto 0 auto;
  @media screen and (max-width: 768px) {
    wdith: 100%;
    margin: 0 auto 0 auto;
    justify-content: center;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #98916d;
  }
  ${(props) =>
    props.active &&
    css`
            font-weight: 600;
            border-bottom: 2px solid #98916d;
            color; #98916d;
            &:hover {
                color: #98916d;
            }
        `}

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categories.map((v) => (
        <Category
          key={v.name}
          active={category === v.name}
          onClick={() => onSelect(v.name)}
        >
          {v.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
