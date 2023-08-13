import React from "react";
import * as S from "./style";

// 변호사 상세 파일
export default function ExpertDetail() {
  return (
    <S.Box>
      <S.DetailImg></S.DetailImg>
      <S.Section>
        <S.Major>형사 전문</S.Major>
        <S.DetailName>오오오</S.DetailName>
      </S.Section>
      <S.RequestBtn type="submit" value="상담요청" />
      <S.Commentbox>
        <S.CommentSub>
          전문가 상담요청
          <br />
          <S.Commentmore>니가 뭘알아</S.Commentmore>
        </S.CommentSub>
      </S.Commentbox>
      <S.Commentbox>
        <S.CommentSub>
          전문가 경력
          <br />
          <S.Commentmore>니가 뭘알아</S.Commentmore>
        </S.CommentSub>
      </S.Commentbox>
      <S.Commentbox>
        <S.CommentSub>
          전문가 가격 상담
          <S.Commentmore>니가 뭘알아</S.Commentmore>
        </S.CommentSub>
      </S.Commentbox>
      <S.Commentbox>
        <S.CommentSub>
          제공될 상담
          <br />
          <S.Commentmore>니가 뭘알아</S.Commentmore>
        </S.CommentSub>
      </S.Commentbox>
      <S.Commentbox>
        <S.CommentSub>
          사진
          <br />
          <S.Commentmore>사진 넣자~~</S.Commentmore>
        </S.CommentSub>
      </S.Commentbox>
    </S.Box>
  );
}
