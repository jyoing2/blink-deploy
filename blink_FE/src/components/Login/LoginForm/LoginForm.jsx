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
      placeholder={pwPlaceholder}
      type="password"
      id="pw"
      onChange={handleInputChange}
      value={loginData.pw}
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
