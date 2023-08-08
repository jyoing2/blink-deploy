import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  width: 1030px;
  height: 806px;
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
  justify-content:space-around;
`;

const Search = styled.div`
  height:56px;
  width:652px;
  border: 2px solid black;
  border-radius:10px;
  margin-bottom: 10px;
  display: flex;
  justify-content:center;
  align-items:center;
`;

const Search2 = styled(Search)`
  width:295px;
`;

const Lsquare = styled.div`
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
    <HomeContainer>
      <TopRow>
        <Search>검색창임</Search>
        <Search2>두번째검색창임</Search2>
      </TopRow>
      <Lsquare>
        <SquareBox>게시글창임</SquareBox>
      </Lsquare>
      <Lsquare>
        <SquareBox2>업로드창임</SquareBox2>
      </Lsquare>
    </HomeContainer>
    </>
  );
}
