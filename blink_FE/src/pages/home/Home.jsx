import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import KMap from "../../components/post/KMap";
import PostList from "../../components/post/PostList";

const HomeContainer = styled.div`
  /* margin-left: 200px; */
  width: 1920px;
  height: 1080px;
  background-color: green;
  display: flex;
  justify-content: flex-start;
`;

export default function Home() {
  return (
    <HomeContainer>
      <PostList />
      <KMap />
    </HomeContainer>
  );
}
