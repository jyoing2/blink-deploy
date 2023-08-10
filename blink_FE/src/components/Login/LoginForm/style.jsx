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
  width: 26rem;
  height: 4rem;
  background: rgb(248, 248, 250);
  border: none;
  border-radius: 10px;
  padding-left: 15px;
  margin-bottom: 1rem;
`;

export const PwForm = styled.input`
  display: flex;
  flex-direction: column;
  width: 26rem;
  height: 4rem;
  background: rgb(248, 248, 250);
  border: none;
  border-radius: 10px;
  padding-left: 15px;
  margin-bottom: 3.3rem;
`;

// export const LoginTitle = styled.div``;

export const StyledLoginButton = styled.button`
  background-color: #3865bf;
  color: white;
  width: 13rem;
  height: 3rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px rgba(25, 33, 48, 0.6); /* 강조 효과를 위한 그림자 */
    outline: none;
  }
`;

export const StyledLoginTitle = styled.div`
  color: rgb(52, 68, 109);
  position: relative;
  top: -50px;
  font-size: 300%;
  font-weight: bolder;
`;
