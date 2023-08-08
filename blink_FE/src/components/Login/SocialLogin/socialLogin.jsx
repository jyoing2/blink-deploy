//소셜 로그인 버튼 (구글, 카카오, 네이버 예정)

import React from "react";

const socialLoginButton = ({ onClick, socialImg, socialText }) => {
  return (
    <socialLogin onClick={onClick}>
      <socialLoginImg src={socialImg} alt={socialImg} />
      <socialLogintext src={socialText} />
    </socialLogin>
  );
};

export default socialLoginButton;
