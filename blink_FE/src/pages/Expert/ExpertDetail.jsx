import React from "react";
import * as S from "./style";
import { useParams } from "react-router-dom";

// 변호사 상세 파일
export default function ExpertDetail({ CardData }) {
  let { Id } = useParams();

  // Id를 기반으로 전문가 데이터 찾기
  let findItem = CardData.find((item) => {
    return item.Id === parseInt(Id);
  });

  if (!findItem) {
    // 전문가를 찾지 못한 경우 처리
    return <div>전문가를 찾을 수 없습니다.</div>;
  }

  return (
    <S.Box>
      <S.DetailImg src={findItem.imageUrl} alt="전문가" />
      <S.Section>
        <S.Major>{findItem.job}</S.Major>
        <S.DetailName>{findItem.userId}</S.DetailName>
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
          <S.Commentmore>{findItem.experience}</S.Commentmore>
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
