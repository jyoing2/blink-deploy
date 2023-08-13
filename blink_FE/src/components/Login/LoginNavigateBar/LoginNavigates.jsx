import React from "react";
import {
  LoginNavigateTitle,
  LoginNavigateContainer,
  LoginNavigateContent,
  LoginNavigateButton,
} from "./style";

export function LoginNavigates({
  LoginNavigatetitle,
  LoginNavigatecotent,
  buttonText,
  onClick,
}) {
  return (
    <LoginNavigateContainer>
      <LoginNavigateTitle>{LoginNavigatetitle}</LoginNavigateTitle>
      <LoginNavigateContent>{LoginNavigatecotent}</LoginNavigateContent>
      <LoginNavigateButton onClick={onClick}>{buttonText}</LoginNavigateButton>
    </LoginNavigateContainer>
  );
}
