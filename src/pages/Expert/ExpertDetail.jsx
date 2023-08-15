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
  console.log(findItem);

  const formatExperience = (experience) => {
    const lines = experience.split(/\s(?=\d{4}~)/);
    return lines.map((line, index) => (
      <React.Fragment key={index}>
        {index !== 0 && <br />}
        {line}
      </React.Fragment>
    ));
  };

  function insertNewlinesBeforeNumbers(text) {
    const pattern = /(\D)(\d)/g;
    const newText = text.replace(pattern, "$1\n$2");

    return newText;
  }

  return (
    <S.Box>
      <S.Close>x</S.Close>
      <S.DetailImg src={findItem.imageUrl} alt="전문가" />

      <S.Section>
        <S.Major>{findItem.job}</S.Major>
        <S.DetailName>{findItem.userId}</S.DetailName>
      </S.Section>
      <S.RequestBtn>{findItem.email}</S.RequestBtn>

      <S.Commentbox>
        <S.CommentSub>
          전문가 자기소개
          <br />
          <S.Commentmore>{findItem.info}</S.Commentmore>
        </S.CommentSub>
      </S.Commentbox>
      <S.Commentbox>
        <S.CommentSub>
          전문가 경력
          <br />
          <S.Commentmore>{formatExperience(findItem.experience)}</S.Commentmore>
        </S.CommentSub>
      </S.Commentbox>
      <S.Commentbox>
        <S.CommentSub>
          전문가 상담 가격
          <S.Commentmore>{findItem.price}</S.Commentmore>
        </S.CommentSub>
      </S.Commentbox>
      <S.Commentbox>
        <S.CommentSub>
          제공될 상담
          <br />
          <S.Commentmore>
            {insertNewlinesBeforeNumbers(findItem.content)}
          </S.Commentmore>
        </S.CommentSub>
      </S.Commentbox>
      <S.Commentbox>
        <S.CommentSub>
          사진
          <br />
          <S.DetailImg src={findItem.imageUrl} alt="전문가" />
        </S.CommentSub>
      </S.Commentbox>
    </S.Box>
  );
}
