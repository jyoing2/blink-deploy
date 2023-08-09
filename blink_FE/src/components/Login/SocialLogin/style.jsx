//socialLogin의 스타일 구현

import styled from "styled-components";

export const SocialLogin = styled.div`
  border: 1px solid ${(props) => props.borderColor || "black"};
  border-radius: 10%;
  width: 100px;
  height: 30px;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor || "none"};
`;

export const SocialLoginImg = styled.img`
  width: 25px;
  height: auto; // To maintain the aspect ratio
`;

export const SocialLoginText = styled.span`
  font-size: 16px;
  font-weight: 500;
  top: -16%;
  right: -7%;
  position: relative;
  color: ${(props) => props.color || "black"};
`;
