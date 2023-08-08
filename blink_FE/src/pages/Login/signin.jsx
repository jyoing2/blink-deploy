import React, { useState } from "react";
// import LoginForm from "./LoginForm"; // LoginForm 컴포넌트의 경로에 맞게 수정해야 합니다.
import {
  LoginFormWhole,
  LoginInput,
} from "../../components/Login/LoginForm/style";

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
    <div>
      <h1>로그인 페이지</h1>
      <LoginFormWhole>
        <LoginInput
          handleInputChange={handleInputChange}
          loginData={loginData}
          placeholder="아이디를 입력하세요"
          handleLoginClick={handleLoginClick}
        />

        <LoginInput
          handleInputChange={handleInputChange}
          loginData={loginData}
          placeholder="비밀번호를 입력하세요"
          handleLoginClick={handleLoginClick}
        />
      </LoginFormWhole>
    </div>
  );
}

export default Signin;
