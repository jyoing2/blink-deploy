import React from "react";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import reset from "styled-reset";
import Home from "./pages/home/Home";
import { Layout } from "./components/Layout/Layout";
import Post from "./components/post/Post";
import Signin from "./pages/Login/signin";
import KMap from "./components/post/KMap";
import ExpertList from "./pages/Expert/ExpertList";

// Create a separate component for GlobalStyle to fix the hook error
const GlobalStyleComponent = createGlobalStyle`
  ${reset}
  /* 추가적인 리셋이나 스타일 조정을 여기에 추가할 수 있습니다. */
  width: 1920px;
  height: 1080px;
  background-color: blue;
`;

const Wrapper = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyleComponent />
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* <Route index element={<ExpertList />} /> */}
        {/* <Route index element={<KMap />} /> */}
        <Route index element={<Post />} />
        {/* <Route index element={<Signin />}></Route> */}
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
