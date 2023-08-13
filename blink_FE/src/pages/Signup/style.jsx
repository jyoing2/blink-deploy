import styled from "styled-components";

export const SignupWhole = styled.div`
  width: 75vw;
  height: 90vh;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  left: 25%;
  border: 1px solid black;
`;

export const SignUpInputWrapper = styled.div``;

export const SignUpInput = styled.input`
  border: none;
  border: 1px solid black;
  border-radius: 10px;
  outline: none;
  padding: 5px;
  ::placeholder {
    color: #aeafb9;
  }
  /* Your styling here */
  border: ${(props) =>
    props.isvaild == "true" ? "1px solid black" : "1px solid red"};
  /* Additional styling based on validity */
`;

export const MessageText = styled.span`
  margin-top: 10px;
  color: ${(props) => (props.isvaild == "true" ? "#00C24E" : "#FF5D47")};
  font-size: 13px;
`;

export const SignUpInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 10%;
  position: relative;
`;

export const SocialLogin = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
