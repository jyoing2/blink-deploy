import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export default function Nav() {
  return (
    <NavContainer>
      <div>nav1</div>
      <div>nav2</div>
      <div>nav3</div>
    </NavContainer>
  );
}
