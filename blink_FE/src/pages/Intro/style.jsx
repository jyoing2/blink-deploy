import styled, { keyframes } from "styled-components";

export const IntroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1b2130;
  color: white;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  /* text-align: center; */
  font-size: 2rem;
  overflow: auto; // Hide overflow to prevent scrolling on this element
`;

export const Logo = styled.div`
  top: -20%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${({ isFadingIn }) => (isFadingIn ? fadeIn : fadeOut)} 2s
    ease-in-out;
`;

export const LogoText = styled.text`
  margin-top: 15rem;
  line-height: 2.5rem;
  text-align: center;
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1rem;
  color: #999;
`;

export const NavLogoImage = styled.img`
  width: 20rem;
  height: 20rem;
  top: 30%;
  position: relative;
`;

// Define keyframes animation
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }

`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;

  }
`;
