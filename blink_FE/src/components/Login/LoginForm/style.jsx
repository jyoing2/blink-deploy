import styled from "styled-components";

// 스타일 컴포넌트 정의
export const LoginFormWhole = styled.div`
  margin-left: 200px;
  width: 100vh;
  height: 100vh;
  border: 3px solid black;
`;

export const IdForm = styled.input`
  display: flex;
  flex-direction: column;
`;

export const PwForm = styled.input`
  display: flex;
  flex-direction: column;
`;

export const LoginTitle = styled.div``;

export const StyledLoginButton = styled.button`
  background-color: #3865bf;
  color: white;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px rgba(25, 33, 48, 0.6); /* 강조 효과를 위한 그림자 */
    outline: none;
  }
`;

export const StyledLoginTitle = styled.div`
  font-size: xx-large;
  color: #34446d;
  font-weight: 600;
`;
