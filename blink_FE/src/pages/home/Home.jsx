import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import PostList from "../../components/post/PostList";

const HomeContainer = styled.div`
  margin-left: 200px;
  width: 100%;
  height: 100%;
`;

export default function Home() {
  return (
    <HomeContainer>
      <PostList />
    </HomeContainer>
  );
}
