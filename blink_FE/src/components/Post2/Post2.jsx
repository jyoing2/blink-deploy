// Import necessary libraries
import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import HorizonLine from "./Line.jsx";
import React, { useState } from "react";

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

const CommentBox = styled.div`
  border: 1px solid black;
  width: 920px;
  height: 332px;
  border-radius: 10px;
  display: flex;
  background-color: beige;
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

const Comment = styled.div`
  border: 1px solid black;
`;

const CommentTitle = styled.div`
  border: 1px solid black;
  font-size: 25px;
  margin: 20px;
  font-weight: bold;
  `

const PostDate = styled.div`
  width: 250px;
  font-size: 25px;
  height: 30px;
  font-weight: 400;
  position: fixed; /* Fix the position */
  top: 28%;
  left: 63%;
`;

  const TitleBox = styled.div`
  display:flex;
  justify-content:space-between;
  `

  const CommentForm = styled.form`
  margin: 20px;
  `;

const CommentInput = styled.input`
width: 100%;
padding: 10px;
border: 1px solid #ccc;
border-radius: 5px;
`;

  const UploadButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
`;

const CommentFooter = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const UploadedComment = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

// Define your main functional component
const Post2 = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

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
        <TitleBox>
        <Title>제목</Title>
        <PostDate>2023.10.10</PostDate></TitleBox>
        <HorizonLine />
        <Context>
          내용
          <br />
          둘쨋줄
        </Context>
      </PostBox>

      <ClipBox>영상임베디드</ClipBox>
      <CommentBox>
        <CommentTitle>Comment</CommentTitle>
        <CommentForm onSubmit={handleSubmitComment}>
          <CommentFooter>
            <UploadButton type="submit">Upload!</UploadButton>
            <CommentInput
              type="text"
              placeholder="Write a comment..."
              value={newComment}
              onChange={handleCommentChange}
            />
          </CommentFooter>
        </CommentForm>
        {comments.map((comment, index) => (
          <UploadedComment key={index}>{comment}</UploadedComment>
        ))}
      </CommentBox>
    </Outer>
  );
};

// Export your component
export default Post2;
