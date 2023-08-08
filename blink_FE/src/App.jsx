import React, { useRef, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
//reset css 적용
import { Reset } from "styled-reset";
import "./App.css";
import Home from "./pages/home/Home";
import { Layout } from "./components/Layout/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
