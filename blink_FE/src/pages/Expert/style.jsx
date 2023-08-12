import styled from "styled-components";

export const Container = styled.div`
  width: 89%;
  height: 884px;
  margin-left: 200px;
`;

export const Explain = styled.p`
  padding: 40px;
  color: black;
  font-size: 30px;
  font-weight: 600;
`;

export const Range = styled.select`
  width: 100px;
  height: 30px;
  margin-left: 40px;
  font-size: 15px;
`;

export const Outline = styled.div`
  width: 96%;
  margin: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Card = styled.div`
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

export const CardImage = styled.img`
  width: 350px;
  height: 350px;
  margin-top: 15px;
  border-radius: 15px;
`;

export const CardJob = styled.p`
  font-size: 30px;
  margin-top: 20px;
  font-weight: 700;
  position: relative;
  right: 80px;
`;

export const CardEx = styled.p`
  font-size: 16px;
  margin-top: 10px;
  font-weight: 600;
`;

export const Wrap = styled.div`
  display: flex;
`;

export const Wrapping = styled.div`
  display: flex;
  position: relative;
  right: 45px;
  margin-top: 15px;
  font-size: 20px;
`;

export const Box = styled.div`
  width: 460px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  margin-left: 200px;
  background-color: #ebe6e6;
  display: flex;
  padding-top: 20px;
  padding-left: 40px;
  z-index: 2;
  flex-direction: column;
`;

export const DetailImg = styled.div`
  width: 210px;
  height: 200px;
  margin-top: 15px;
  border-radius: 15px;
  background-color: black;
  margin-left: auto;
  margin-right: auto;
`;
export const Section = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  display: flex;
`;

export const Major = styled.p`
  color: gray;
  font-size: 20px;
`;

export const DetailName = styled.p`
  color: black;
  font-size: 35px;
  font-weight: 600;
  line-height: 20px;
`;

export const RequestBtn = styled.input`
  width: 130px;
  height: 40px;
  border-radius: 10px;
  background-color: #34446d;
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
`;

export const Commentbox = styled.div`
  height: fit-content;
  width: auto;
  margin-top: 30px;
`;

export const CommentSub = styled.p`
  font-weight: 700;
  font-size: 25px;
`;

export const Commentmore = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  padding-bottom: 30px;
  border-bottom: 1px solid gray;
`;
