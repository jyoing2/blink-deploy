import * as React from 'react';
import styled from "styled-components";
import Post2 from'./Post2';

const PostContainer = styled.div`
  width: 1030px;
  height: 860px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 20px;
`;

const TopRow = styled.div`
  display: flex;
  width: 958px;
  justify-content:space-between;
`;

const Search = styled.div`
  height:56px;
  width:660px;
  border: 2px solid black;
  border-radius:10px;
  margin-bottom: 30px;
  display: flex;
  justify-content:center;
  align-items:center;
`;

const Search2 = styled(Search)`
  width:295px;
  margin-left:30px
`;

const Lsquare = styled.div`
margin-bottom: 30px;
`;

const SquareBox = styled.div`
  width: 958px;
  height: 371px;
  border-radius:10px;
  border: 2px solid black;
`;

const SquareBox2 = styled(SquareBox)`
  height: 250px;
`;

export default function Post() {
  return (
    <>
    <PostContainer>
      <TopRow>
        <Search>검색창임</Search>
        <Search2>두번째검색창임</Search2>
      </TopRow>
      <Lsquare>
        <SquareBox>
        <Post2></Post2>
        </SquareBox>
      </Lsquare>
      <Lsquare>
        <SquareBox2>업로드창임</SquareBox2>
      </Lsquare>
    </PostContainer>
    </>
  );
}
