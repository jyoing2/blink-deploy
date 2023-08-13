//nav style
import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #1b2130;
  position: fixed;
  top: 0;
  width: 100px;
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

export const NavLogo = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavLogoImage = styled.img`
  width: 150px;
`;
