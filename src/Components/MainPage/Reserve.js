import React from "react";
import styled from "styled-components";

function Reserve() {
  return (
    <Container>
      <BackGroundContainer>
        <TextContainer>
          <Text />
          <DetailButton>자세히 보기</DetailButton>
        </TextContainer>
        <Image />
      </BackGroundContainer>
    </Container>
  );
}

export default Reserve;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 689px;
  height: 200px;
`;
const BackGroundContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  max-width: 1330px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`;
const Container = styled.div`
  width: 100%;
  height: 400px;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 689px;
  height: 145px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_reserve_txt.png");
  background-size: 100%;
  background-repeat: no-repeat;
`;
const Image = styled.div`
  width: 600px;
  height: 400px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_reserve_bean.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;
const DetailButton = styled.a`
  display: flex;
  width: 121px;
  height: 34px;
  font-size: 15px;
  color: black;
  border: 2px solid black;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-weight: bold;
  margin-left: 160px;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    background-color: black;
    color: white;
    text-decoration: underline;
  }
`;
