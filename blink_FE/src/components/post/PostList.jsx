import React from "react";
import styled from "styled-components";
import MinWidthButtonGroup from "./MinWidthButtonGroup";
import Card from "@mui/joy/Card";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import SortStandard from "./SortStandard";

const PostListContainer = styled.div`
  width: 523px;
  height: 806px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 20px;
  background-color: white;
  color: black;
`;

const TopRow = styled.div`
  display: flex;
  width: 958px;
  justify-content: space-around;
`;

const Search = styled.div`
  height: 56px;
  width: 652px;
  border: 2px solid black;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Search2 = styled(Search)`
  width: 295px;
`;

const Lsquare = styled.div``;

const SquareBox = styled.div`
  width: 450px;
  height: 131px;
  border-radius: 16px;
  border: 2px solid black;
`;

const SquareBox2 = styled(SquareBox)`
  height: 250px;
`;

export default function PostList() {
  return (
    <>
      <PostListContainer>
        <MinWidthButtonGroup />
        <SortStandard />
        <TopRow>
          <Search>PostList 타이틀</Search>
          <Search2>PostList 입력칸</Search2>
        </TopRow>
        <Lsquare>
          <SquareBox>게시글창임</SquareBox>
        </Lsquare>
      </PostListContainer>
    </>
  );
}
