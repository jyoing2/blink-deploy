import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: skyblue;
  position: fixed;
  top: 0;
  width: 200px;
  height: 100%;
`;

const NavItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;

export default function Nav() {
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const nav1Ref = useRef(null);
  const nav2Ref = useRef(null);
  const nav3Ref = useRef(null);

  return (
    <NavContainer>
      <NavItem onClick={() => scrollToRef(nav1Ref)}>nav1</NavItem>
      <NavItem onClick={() => scrollToRef(nav2Ref)}>nav2</NavItem>
      <NavItem onClick={() => scrollToRef(nav3Ref)}>nav3</NavItem>
    </NavContainer>
  );
}
