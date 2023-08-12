import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import KMap from "../../components/post/KMap";
import GMap from "../../components/post/GMap";
import Map from "../../components/post/Map";
import PostList from "../../components/post/PostList";

const HomeContainer = styled.div`
  margin-left: 220px;
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
      <GMap />
    </HomeContainer>
  );
}
