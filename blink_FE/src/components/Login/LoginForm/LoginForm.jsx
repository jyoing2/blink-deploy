// LoginForm.jsx

import React from "react";
import { IdForm, PwForm } from "./style";
import { StyledLoginButton } from "./style";

export function IdFormComponent({
  handleInputChange,
  idPlaceholder,
  loginData,
}) {
  return (
    <IdForm
      required
      placeholder={idPlaceholder}
      type="text"
      id="id"
      onChange={handleInputChange}
      value={loginData.id}
      minlength="4"
      maxlength="20"
      pattern="[a-z0-9]{4,20}"
      isValid={loginData.id ? true : false}
    />
  );
}

export function PwFormComponent({
  handleInputChange,
  pwPlaceholder,
  loginData,
}) {
  return (
    <PwForm
      required
      oninput="this.setCustomValidity('')"
      oninvalid="this.setCustomValidity('4~20자 이내의 숫자 혹은 영어 소문자만 작성할 수 있습니다.')"
      placeholder={pwPlaceholder}
      type="password"
      id="pw"
      onChange={handleInputChange}
      value={loginData.pw}
      minlength="4"
      maxlength="20"
      pattern="[a-z0-9]{4,20}"
      isValid={loginData.PW ? true : false}
    />
  );
}

export function LoginButton({ handleLoginClick, buttonText }) {
  return (
    <StyledLoginButton onClick={handleLoginClick}>
      {buttonText}
    </StyledLoginButton>
  );
}
