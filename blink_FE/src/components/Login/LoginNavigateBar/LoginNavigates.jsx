import React from "react";
import * as S from "./style";

export function LoginNavigates({
  LoginNavigatetitle,
  LoginNavigatecotent,
  buttonText,
  onClick,
  width,
  position,
  top,
}) {
  return (
    <S.LoginNavigateContainer width={width}>
      <S.LoginNavigateText position={position} top={top}>
        <S.LoginNavigateTitle>{LoginNavigatetitle}</S.LoginNavigateTitle>
        <S.LoginNavigateContent>{LoginNavigatecotent}</S.LoginNavigateContent>
      </S.LoginNavigateText>
      <S.LoginNavigateButton onClick={onClick}>
        {buttonText}
      </S.LoginNavigateButton>
    </S.LoginNavigateContainer>
  );
}
