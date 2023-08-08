import React from "react";
import styled from "styled-components";

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

const PostListBox = styled.div`
  background-color: #e7e8ed;

  width: 450px;
  height: 131px;
  border-radius: 16px;
  border: 2px solid black;
`;

const CompleteBtn = styled.div`
  width: 90px;
  height: 30px;
  border: 1px solid blue;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  textalign: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CateBtn = styled(CompleteBtn)`
  background-color: inherit;
  border-color: #0f1e33;
  color: #0f1e33;
  margin-left: 10px;
`;

const PostListBtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px;
`;

const PostListTitle = styled.h1`
  font-weight: bold;
  font-size: 25px;
`;

const PostListContent = styled.p`
  margin-top: 5px;
  font-size: 15px;
`;

export default function PostListScroll() {
  return (
    <PostListSlideContainer>
      <PostListBox>
        <PostListBtnContainer>
          <CompleteBtn>진행 중</CompleteBtn>
          <CateBtn>찾아요</CateBtn>
        </PostListBtnContainer>
        <PostListTitle>인생이 힘들다</PostListTitle>
        <PostListContent>전 인생이 뭔지 모르겠어요...</PostListContent>
      </PostListBox>
    </PostListSlideContainer>
  );
}
