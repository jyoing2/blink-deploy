import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginInputComponent,
  LoginButton,
} from "../../../components/Login/LoginForm/LoginForm";
import { SigninForm, SocialLogin, SigninWrapper } from "./style";
import { LoginTitleComponent } from "../../../components/Login/LoginForm/LoginTitle";
import { LoginNavigates } from "../../../components/Login/LoginNavigateBar/LoginNavigates";

import * as S from "./style";

//style import

function Signin() {
  const [loginData, setLoginData] = useState({
    id: "",
    pw: "",
  });

  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  //유효성 검증 위함
  const [isValid, setIsValid] = useState(false);

  const isValidEmail = (email) => {
    // 정규 표현식을 사용하여 이메일 형식 검사
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("loginData.id:", loginData.id);
    console.log("loginData.pw:", loginData.pw);

    e.preventDefault();
    // 모든 필수 칸이 입력되었는지 확인
    if (loginData.id && loginData.pw) {
      if (!isValidEmail(loginData.id)) {
        alert("올바른 이메일 형식을 입력해주세요.");
        return;
      }
    }
  };
  // 비밀번호 확인 입력
  const handlePw = (e) => {
    const pw = e.target.value;
    setPw(pw);
    setLoginData({ ...loginData, pw: pw });
  };

  const handleLoginClick = async () => {
    if (loginData.id === "") {
      alert("아이디를 입력해주세요.");
      return;
    }

    if (loginData.pw === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    if (!isValidEmail(loginData.id)) {
      alert("올바른 이메일 형식을 입력해주세요.");
      return;
    }

    // 여기에 로그인 처리 로직을 작성합니다.
    try {
      const response = await axios.post("/accounts/signin", {
        // 백엔드로 보낼 데이터
        id: loginData.id,
        pw: loginData.pw,
      });

      if (response.status === 200) {
        // 로그인 성공
        alert("로그인이 완료되었습니다.");
        navigate("/");
      } else {
        // 로그인 실패
        alert("로그인에 실패했습니다.");
      }
    } catch (error) {
      // 예외 처리
      console.error("로그인 오류:", error);
      alert("로그인에 실패했습니다.");
    }
  };

  return (
    // <SigninWhole>
    <SigninWrapper>
      <LoginNavigates
        LoginNavigatetitle="안녕하세요! Blink입니다!"
        LoginNavigatecotent="처음이신가요? 회원가입하고 멋진 블랙 박스 어쩌구 조정중"
        handleLoginClick={handleLoginClick}
        buttonText="Sign up"
        width="200px"
      />
      <S.SigninForm onSubmit={handleSubmit}>
        <LoginTitleComponent LogintitleText="Login to Blink!" />
        <S.SignInInputWrapper>
          <LoginInputComponent
            required
            type="email"
            onChange={(e) => setLoginData({ ...loginData, id: e.target.value })}
            placeholder="이메일을 입력하세요"
            isvaild="true"
            value={loginData.id}
            name="id"
          />
        </S.SignInInputWrapper>

        <S.SignInInputWrapper>
          <LoginInputComponent
            type="password"
            onChange={handlePw}
            placeholder="비밀번호를 입력하세요"
            isvaild="true"
            value={loginData.pw}
            name="pw"
            handleLoginClick={handleLoginClick}
            required
          />
        </S.SignInInputWrapper>

        <LoginButton
          type="submit"
          onClick={handleLoginClick}
          buttonText="로그인"
        />
      </S.SigninForm>
    </SigninWrapper>
    // </SigninWhole>
  );
}

export default Signin;
