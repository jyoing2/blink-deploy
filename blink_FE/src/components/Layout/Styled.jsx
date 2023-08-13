//nav style
import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: skyblue;
  position: fixed;
  top: 0;
  width: 200px;
  height: 100%;
  z-index: 10;
`;

export const NavItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;
