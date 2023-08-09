// PostListScroll.jsx

import React from "react";
import styled from "styled-components";
import InnerPost from "./InnerPost";

const PostListSlideContainer = styled.div`
  overflow: auto;
  max-height: 900px;
  min-height: 600px;
  /* 스크롤 바 커스터마이징 */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f2f2f2;
  }
`;

// post에 들어갈 text내용
const postData = [
  {
    title: "첫 번째 포스트",
    content: "첫 번째 포스트 내용...",
  },
  {
    title: "두 번째 포스트",
    content: "두 번째 포스트 내용...",
  },
  {
    title: "세 번째 포스트",
    content: "세 번째 포스트 내용...",
  },
  {
    title: "네 번째 포스트",
    content: "네 번째 포스트 내용...",
  },
  {
    title: "다섯 번째 포스트",
    content: "다섯 번째 포스트 내용...",
  },
  {
    title: "여섯 번째 포스트",
    content: "여섯 번째 포스트 내용...",
  },
];

export default function PostListScroll() {
  return (
    <PostListSlideContainer>
      {postData.map((post, index) => (
        <InnerPost key={index} title={post.title} content={post.content} />
      ))}
    </PostListSlideContainer>
  );
}
