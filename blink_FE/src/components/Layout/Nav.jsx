import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import * as S from "./Styled";

export default function Nav() {
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const nav1Ref = useRef(null);
  const nav2Ref = useRef(null);
  const nav3Ref = useRef(null);

  return (
    <S.NavContainer>
      <S.NavItem onClick={() => scrollToRef(nav1Ref)}>nav1</S.NavItem>
      <S.NavItem onClick={() => scrollToRef(nav2Ref)}>nav2</S.NavItem>
      <S.NavItem onClick={() => scrollToRef(nav3Ref)}>nav3</S.NavItem>
    </S.NavContainer>
  );
}
