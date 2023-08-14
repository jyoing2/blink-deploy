// Import necessary libraries
import React from 'react';
import styled from 'styled-components';

// Define a styled component

const Outer = styled.div`
  width: 1150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin-left: 150px;
  font-size: 50px;
  font-weight: bold;
  gap: 0.5em;
`;

const HereBox = styled.div`
  border: 1px solid black;
  width: 920px;
  height: 56px;
  `

const PostBox = styled.div`
  border: 1px solid black;
  width: 920px;
  height: 371px;
  `

const CommentBox = styled.div`
  border: 1px solid black;
  width: 920px;
  height: 332px;
  `

  const ClipBox = styled.div`
  border: 1px solid black;
  width: 920px;
  height: 338px;
  `

// Define your main functional component
const Post2 = () => {
  return (
    <Outer>
      요청 상세 페이지
      <HereBox>위치박스</HereBox>
      <PostBox>게시글박스</PostBox>
      <ClipBox>유튜브임베디드</ClipBox>
      <CommentBox>댓글박스</CommentBox>
    </Outer>
  );
};

// Export your component
export default Post2;
