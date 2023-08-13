import React from "react";
import {
  Container,
  Explain,
  Range,
  Outline,
  Card,
  CardJob,
  CardImage,
  CardEx,
  Wrap,
  Wrapping,
} from "./style";
import { CardData } from "../Expert/ExpertData";

// 경력 설명 부분 문자열 엔터처리 함수
const formatExperience = (experience) => {
  const lines = experience.split(/\s(?=\d{4}~)/);
  return lines.map((line, index) => (
    <React.Fragment key={index}>
      {index !== 0 && <br />}
      {line}
    </React.Fragment>
  ));
};

// 변호사 리스트업 컴포넌트
export default function ExpertList() {
  return (
    <Container>
      <Explain>당신에게 맞는 전문가를 찾아보세요!</Explain>
      <Range>
        <option value="latest">최신 순</option>
        <option value="relevant">관련도 순</option>
      </Range>
      <input type="submit" value="적용" />
      <button type="button">내 스크랩</button>
      <Outline>
        {CardData.map((card, index) => (
          <Card key={index}>
            <CardImage src={card.imageUrl} alt="변호사 이미지" />
            <Wrap>
              <CardJob>
                {card.job} {card.userId}
              </CardJob>
            </Wrap>
            <Wrapping>
              <CardEx>
                경력
                <br />
                {formatExperience(card.experience)}
              </CardEx>
            </Wrapping>
          </Card>
        ))}
      </Outline>
    </Container>
  );
}
