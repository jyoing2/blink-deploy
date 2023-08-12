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
  height: 600px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #d9d9d9;
`;

const CardImage = styled.img`
  width: 350px;
  height: 350px;
  margin-top: 15px;
  border-radius: 15px;
`;

const CardName = styled.p`
  font-size: 29px;
  margin-top: 20px;
  margin-left: 10px;
  position: relative;
  right: 80px;
`;

const CardJob = styled.p`
  font-size: 30px;
  margin-top: 20px;
  font-weight: 700;
  position: relative;
  right: 80px;
`;

const CardEx = styled.p`
  font-size: 16px;
  margin-top: 10px;
  font-weight: 600;
`;

const Wrap = styled.div`
  display: flex;
`;

const Wrapping = styled.div`
  display: flex;
  position: relative;
  right: 45px;
  margin-top: 15px;
  font-size: 20px;
`;

// 경력문자열 엔터처리 함수
const formatExperience = (experience) => {
  const lines = experience.split(/\s(?=\d{4}~)/);
  return lines.map((line, index) => (
    <React.Fragment key={index}>
      {index !== 0 && <br />}
      {line}
    </React.Fragment>
  ));
};

// 변호사 데이터
export default function ExpertList() {
  const cardData = [
    {
      imageUrl: "img/lawyer5.jpg",
      job: "변호사",
      userId: "김지현",
      experience:
        "2023~ 멋쟁이 사자처럼 대학 입학 2023~ 피자스쿨 대학원 입학 2024~ 피자스쿨 마스터 예정",
    },
    {
      imageUrl: "img/lawyer7.jpg",
      job: "변호사",
      userId: "박민준",
      experience:
        "2023~ 멋쟁이 사자처럼 대학 입학 2023~ 피자스쿨 대학원 입학 2024~ 피자스쿨 마스터 예정",
    },
    {
      imageUrl: "img/lawyer8.jpg",
      job: "변호사",
      userId: "이서연",
      experience:
        "2023~ 멋쟁이 사자처럼 대학 입학 2023~ 피자스쿨 대학원 입학 2024~ 피자스쿨 마스터 예정",
    },
    {
      imageUrl: "img/lawyer6.jpg",
      job: "변호사",
      userId: "최준호",
      experience:
        "2023~ 멋쟁이 사자처럼 대학 입학 2023~ 피자스쿨 대학원 입학 2024~ 피자스쿨 마스터 예정",
    },
    {
      imageUrl: "img/lawyer9.jpg",
      job: "변호사",
      userId: "정유진",
      experience:
        "2023~ 멋쟁이 사자처럼 대학 입학 2023~ 피자스쿨 대학원 입학 2024~ 피자스쿨 마스터 예정",
    },
    {
      imageUrl: "img/lawyer1.jpg",
      job: "변호사",
      userId: "강도현",
      experience:
        "2023~ 멋쟁이 사자처럼 대학 입학 2023~ 피자스쿨 대학원 입학 2024~ 피자스쿨 마스터 예정",
    },
    {
      imageUrl: "img/lawyer2.png",
      job: "변호사",
      userId: "임아름",
      experience:
        "2023~ 멋쟁이 사자처럼 대학 입학 2023~ 피자스쿨 대학원 입학 2024~ 피자스쿨 마스터 예정",
    },
    {
      imageUrl: "img/lawyer3.jpg",
      job: "변호사",
      userId: "한성민",
      experience:
        "2023~ 멋쟁이 사자처럼 대학 입학 2023~ 피자스쿨 대학원 입학 2024~ 피자스쿨 마스터 예정",
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
