import React from "react";
import styled from "styled-components";

const TextItemBlock = styled.div`
  display: flex;
  border: 2px solid #d9d9d9;
  border-radius: 4px;
  height: 120px;
  box-shadow: 2px 2px 2px 1px #d9d9d9;

  .thumbnail {
    img {
      margin-right: 1rem;
      width: 120px;
      height: 120px;
      object-fit: cover;
    }
    a {
      color: black;
    }
  }
  .contents {
    h2 {
      margin: 0;
    }
    a {
      // color: black;

      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    span {
      line-height: 1.5;
      margin-top: 0.5rem;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 2rem;
  }
`;

export default function TextItem({ data }) {
  const { title, image, content, instargram, url, urlToImage } = data;
  return (
    <TextItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={image} alt="thumbnail"></img>
          </a>
        </div>
      )}
      <div className="contents">
        <h2>{title}</h2>
        <p>{content}</p>
        <span>{instargram}: </span>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <span>{url}</span>
        </a>
      </div>
    </TextItemBlock>
  );
}
