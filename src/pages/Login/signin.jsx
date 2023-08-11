import React, { useState } from "react";
import {
  IdFormComponent,
  LoginButton,
  PwFormComponent,
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

//style import

function Signin() {
  const [loginData, setLoginData] = useState({
    id: "",
    pw: "",
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleLoginClick = () => {
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
      <SigninForm>
        <LoginTitleComponent LogintitleText="Login to Blink!" />
        <IdFormComponent
          handleInputChange={handleInputChange}
          loginData={loginData}
          idPlaceholder="아이디를 입력하세요"
          // handleLoginClick={handleLoginClick}
        />

        <PwFormComponent
          handleInputChange={handleInputChange}
          loginData={loginData}
          pwPlaceholder="비밀번호를 입력하세요"
          // handleLoginClick={handleLoginClick}
        />

        <LoginButton handleLoginClick={handleLoginClick} buttonText="로그인" />

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
