import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";

function Reserve({ scroll }) {
  return (
    <Container>
      <BackGroundContainer>
        {scroll > 900 && (
          <Fragment>
            <TextContainer>
              <Text />
              <DetailButton>자세히 보기</DetailButton>
            </TextContainer>
            <Image />
          </Fragment>
        )}
      </BackGroundContainer>
    </Container>
  );
}

export default Reserve;
const FadeIn = keyframes`
from{
    opacity:0;
}
to {
    opacity:1;   
}
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 689px;
  height: 200px;
`;
const BackGroundContainer = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  max-width: 1330px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 960px) {
    max-width: 960px;
  }
  @media (max-width: 640px) {
    max-width: 640px;
  }
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
  @media (max-width: 960px) {
    background-size: 80%;
  }
  animation: ${FadeIn} 2s backwards;
`;
const Image = styled.div`
  width: 600px;
  height: 400px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_reserve_bean.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  animation: ${FadeIn} 2s backwards;
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
  animation: ${FadeIn} 2s backwards;
`;
