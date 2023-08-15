import React, { useEffect, useState } from "react";
import * as S from "./style";

//image import
import LogoIcon from "../../assets/images/NuLogo.png";

export default function IntroScreen() {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [isFadingIn, setIsFadingIn] = useState(true);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = 20; // 조절 가능한 최대 스크롤 값

    // 스크롤 위치에 따라 투명도 계산
    const opacity = 1 - scrollY / maxScroll;
    setScrollOpacity(opacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.IntroContainer>
      <S.Logo isFadingIn={isFadingIn}>
        <S.NavLogoImage src={LogoIcon} alt="Logo" />
        <S.LogoText>
          내 블랙박스가 세상의 눈이 된다면 <br />
          지도 기반 블랙박스 영상 공유 플랫폼 <br />
          Blink
        </S.LogoText>
      </S.Logo>
      <S.ScrollIndicator style={{ opacity: scrollOpacity }}>
        Scroll Down
      </S.ScrollIndicator>
    </S.IntroContainer>
  );
}
