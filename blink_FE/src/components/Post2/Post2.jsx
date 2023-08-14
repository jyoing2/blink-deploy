// Import necessary libraries
import React from "react";
import styled from "styled-components";
// import { MdLocationOn } from "react-icons/md";
import HorizonLine from "./Line";

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

const Text = styled.div`
  margin-top: 30px;
  width: 920px;
  display: flex;
  justify-content: left;
`;

const HereBox = styled.div`
  border: 1px solid black;
  width: 920px;
  height: 56px;
  border-radius: 10px;
  font-size: 25px;
  display: flex;
  align-items: center;
  gap: 0.1em;
`;

const Here = styled.div`
  width: 700px;
  height: 38px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-weight: 500;
  border-radius: 10px;
`;

const PostBox = styled.div`
  border: 1px solid black;
  width: 920px;
  height: 371px;
  border-radius: 10px;
  font-size: 38px;
`;

const CommentBox = styled(HereBox)`
  border: 1px solid black;
  width: 920px;
  height: 332px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const ClipBox = styled.div`
  border: 1px solid black;
  width: 920px;
  height: 338px;
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 38px;
  margin: 30px;
`;

const Context = styled.div`
  font-size: 23px;
  font-weight: 500;
  margin: 30px 40px 20px 32px;
  line-height: 1.4em;
`;

const Comment = styled.div``;

// Define your main functional component
const Post2 = () => {
  return (
    <Outer>
      <Text>요청 상세 페이지</Text>
      <HereBox>
        <>
          &nbsp; <MdLocationOn size={30} />
          요청 위치
        </>
        <Here>: 실제위치</Here>
      </HereBox>

      <PostBox>
        <Title>제목</Title>
        <HorizonLine />
        <Context>
          내용
          <br />
          둘쨋줄
        </Context>
      </PostBox>

      <ClipBox>영상임베디드</ClipBox>
      <CommentBox>
        댓글
        <Comment>eot</Comment>
      </CommentBox>
    </Outer>
  );
};

// Export your component
export default Post2;
