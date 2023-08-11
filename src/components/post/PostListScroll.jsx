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
    inProgress: true,
    isFound: true,
  },
  {
    title: "두 번째 포스트",
    content: "두 번째 포스트 내용...",
    inProgress: false,
    isFound: false,
  },
  {
    title: "세 번째 포스트",
    content: "세 번째 포스트 내용...",
    inProgress: true,
    isFound: false,
  },
  {
    title: "네 번째 포스트",
    content: "네 번째 포스트 내용...",
    inProgress: false,
    isFound: true,
  },
  {
    title: "다섯 번째 포스트",
    content: "다섯 번째 포스트 내용...",
    inProgress: true,
    isFound: false,
  },
  {
    title: "여섯 번째 포스트",
    content: "여섯 번째 포스트 내용...",
    inProgress: false,
    isFound: true,
  },
  {
    title: "일곱 번째 포스트",
    content: "일곱 번째 포스트 내용...",
    inProgress: true,
    isFound: true,
  },
  {
    title: "여덟 번째 포스트",
    content: "여덟 번째 포스트 내용...",
    inProgress: true,
    isFound: true,
  },
  {
    title: "아홉 번째 포스트",
    content: "아홉 번째 포스트 내용...",
    inProgress: false,
    isFound: false,
  },
  {
    title: "열 번째 포스트",
    content: "열 번째 포스트 내용...",
    inProgress: false,
    isFound: true,
  },
];

export default function PostListScroll() {
  return (
    <PostListSlideContainer>
      {postData.map((post, index) => (
        <InnerPost
          key={index}
          title={post.title}
          content={post.content}
          inProgress={post.inProgress}
          isFound={post.isFound}
        />
      ))}
    </PostListSlideContainer>
  );
}
