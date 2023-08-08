import * as React from "react";
import { LoginFormWhole, LoginInput } from "./style";

export default function LoginForm({
  handleInputChange,
  loginData,
  idPlaceholder,
  pwPlaceholder,
}) {
  return (
    <LoginFormWhole>
      <LoginInput
        required
        placeholder={idPlaceholder}
        type="text"
        id="id" // 아이디 입력 필드의 name
        onChange={handleInputChange}
        // value={loginData.id}
      />
      <LoginInput
        required
        placeholder={pwPlaceholder}
        type="password"
        id="pw" // 비밀번호 입력 필드의 name
        onChange={handleInputChange}
        // value={loginData.pw} // loginData 객체의 password 프로퍼티 사용
      />
    </LoginFormWhole>
  );
}
