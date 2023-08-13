import React, { useState } from "react";
import {
  LoginInputComponent,
  LoginButton,
} from "../../components/Login/LoginForm/LoginForm";
import { SigninForm, SocialLogin, SigninWrapper } from "./style";
import { LoginTitleComponent } from "../../components/Login/LoginForm/LoginTitle";
import { SocialLoginButton } from "../../components/Login/SocialLogin/socialLogins";
import { LoginNavigates } from "../../components/Login/LoginNavigateBar/LoginNavigates";

//image import
import GoogleIcon from "../../assets/images/google.png";
import KakaoIcon from "../../assets/images/kakao.png";
import NaverIcon from "../../assets/images/naver.png";

import { Line } from "../../components/Login/LoginLine/Line";

import * as S from "./style";

//style import

function Signin() {
  const [loginData, setLoginData] = useState({
    id: "",
    pw: "",
  });

  //유효성 검증 위함
  const [isValid, setIsValid] = useState(false);

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
      // use try catch to handle errors for POST request user Info
      try {
        // axios.post("/accounts/signup", user);
        alert("로그인이 완료되었습니다.");
        navigate("/");
      } catch (error) {
        alert("로그인에 실패했습니다.");
      }
    } else {
      alert("모든 칸을 입력해주세요 :)");
    }
  };

  const handleLoginClick = () => {
    if (loginData.id === "") {
      alert("아이디를 입력해주세요.");
      return;
    }

    if (loginData.pw === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    // 여기에 로그인 처리 로직을 작성합니다.
    console.log("로그인 버튼이 클릭되었습니다.");
    console.log("아이디:", loginData.id);
    console.log("비밀번호:", loginData.pw);
  };

  return (
    // <SigninWhole>
    <SigninWrapper>
      <LoginNavigates
        LoginNavigatetitle="안녕하세요! Blink입니다!"
        LoginNavigatecotent="처음이신가요? 회원가입하고 멋진 블랙 박스 어쩌구 조정중"
        handleLoginClick={handleLoginClick}
        buttonText="Sign up"
      />
      <SigninForm onSubmit={handleSubmit}>
        <LoginTitleComponent LogintitleText="Login to Blink!" />
        <S.SignInInputWrapper>
          <LoginInputComponent
            required
            type="email"
            onChange={handleInputChange}
            placeholder="이메일을 입력하세요"
            isvaild="true"
            value={loginData.id}
            name="id"
          />
        </S.SignInInputWrapper>

        <S.SignInInputWrapper>
          <LoginInputComponent
            type="password"
            onChange={handleInputChange}
            placeholder="비밀번호를 입력하세요"
            isvaild="true"
            value={loginData.pw}
            name="pw"
            handleLoginClick={handleLoginClick}
          />
        </S.SignInInputWrapper>

        <LoginButton
          type="submit"
          onClick={handleLoginClick}
          buttonText="로그인"
        />

        <Line text="or" />
        {/* 소셜로그인 버튼 */}
        <SocialLogin>
          <SocialLoginButton
            onClick={() => {
              console.log("구글로그인");
            }}
            socialImg={GoogleIcon}
            socialalt="구글 아이콘"
            socialText="Google"
          />

          <SocialLoginButton
            backgroundColor="#FFE812"
            borderColor="none"
            onClick={() => {
              console.log("카카오톡 로그인");
            }}
            socialImg={KakaoIcon}
            socialalt="카카오 아이콘"
            socialText="kakao"
          />

          <SocialLoginButton
            backgroundColor="#06C755"
            borderColor="none"
            onClick={() => {
              console.log("네이버 로그인");
            }}
            socialImg={NaverIcon}
            socialalt="네이버 아이콘"
            socialText="Naver"
            color="white"
          />
        </SocialLogin>
      </SigninForm>
    </SigninWrapper>
    // </SigninWhole>
  );
}

export default Signin;
