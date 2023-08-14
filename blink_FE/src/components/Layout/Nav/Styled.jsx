//nav style
import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  background-color: rgb(27, 33, 48);
  position: fixed;
  top: 0px;
  width: 100px;
  height: 100%;
  z-index: 10;
  align-items: center;

  .search {
    width: 43px;
    height: 44.84px;
    color: white;
  }

  .line {
    color: white;
    size: 88px;
  }

  .chat {
    width: 31px;
    height: 31px;
    color: white;
    margin-top: 3px;
  }
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
