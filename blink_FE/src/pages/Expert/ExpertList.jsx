import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 89%;
  height: 884px;
  margin-left: 200px;
`;

const Explain = styled.p`
  padding: 40px;
  color: black;
  font-size: 30px;
  font-weight: 600;
`;

const Range = styled.select`
  width: 100px;
  height: 30px;
  margin-left: 40px;
  font-size: 15px;
`;

const Outline = styled.div`
  width: 96%;

  margin: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #d9d9d9;
`;

const CardImage = styled.img`
  width: 80%;
  height: auto;
`;

const CardText = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;

// 변호사 데이터
export default function ExpertList() {
  const cardData = [
    {
      imageUrl: "image-url-2",
      userId: "변호사 김12",
      experience: "5년",
    },
    {
      imageUrl: "image-url-2",
      userId: "변호사 김23",
      experience: "3년",
    },
    {
      imageUrl: "image-url-2",
      userId: "변호사 김34",
      experience: "3년",
    },
    {
      imageUrl: "image-url-2",
      userId: "변호사 김45",
      experience: "3년",
    },
    {
      imageUrl: "image-url-2",
      userId: "user456",
      experience: "3년",
    },
    {
      imageUrl: "image-url-2",
      userId: "user456",
      experience: "3년",
    },
    {
      imageUrl: "image-url-2",
      userId: "user456",
      experience: "3년",
    },
    {
      imageUrl: "image-url-2",
      userId: "user456",
      experience: "3년",
    },
  ];

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
        {cardData.map((card, index) => (
          <Card key={index}>
            <CardImage src={card.imageUrl} alt="변호사 이미지" />
            <CardText>
              <p>변호사</p>
              {card.userId}
            </CardText>
            <CardText>경력: {card.experience}</CardText>
          </Card>
        ))}
      </Outline>
    </Container>
  );
}
