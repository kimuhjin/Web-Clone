import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";

function DrinkPanel() {
  return (
    <Fragment>
      <Container>
        <MarginContainer>
          <Slogan></Slogan>
          <Image1CW></Image1CW>
          <Image2BW></Image2BW>
          <Image3P></Image3P>
          <Image4CB></Image4CB>
          <DetailButton>자세히 보기</DetailButton>
        </MarginContainer>
      </Container>
    </Fragment>
  );
}

export default DrinkPanel;
const FadeIn = keyframes`
from{
    opacity:0;
}
to {
    opacity:1;   
}
`;
const ColorChange = keyframes`
from{
    background-color:transparent;
}
to {
    background-color:#3a62ad;
    color:white;
}
`;
const Color = keyframes`
from{
    background-color:#3a62ad
}
to {
    background-color: transparent;
}
`;
const MarginContainer = styled.div`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
`;

const Container = styled.div`
  height: 646px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_bev_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;
const DetailButton = styled.a`
  display: flex;
  position: absolute;
  top: 45%;
  left: 15%;
  width: 121px;
  height: 34px;
  text-align: center;
  font-size: 15px;
  color: #3a62ad;
  border: 2px solid #3a62ad;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-weight: bold;
  animation: ${FadeIn} 1s backwards 2.5s;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    background-color: #3a62ad;
    color: white;
    text-decoration: underline;
  }
`;
const Slogan = styled.div`
  position: absolute;
  top: 23%;
  left: 15%;
  width: 373px;
  height: 230px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_emblem.png");
  background-size: 100%;
  background-repeat: no-repeat;
  animation: ${FadeIn} 1s backwards 2s;
`;

const Image1CW = styled.div`
  position: absolute;
  top: 38%;
  left: 66%;
  width: 300px;
  height: 348px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_bev1_cup_new_1.png");
  background-size: 100%;
  background-repeat: no-repeat;
  animation: ${FadeIn} 1s backwards;
`;

const Image2BW = styled.div`
  position: absolute;
  top: 30%;
  left: 28%;
  width: 487px;
  height: 330px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_bev2_cup.png");
  background-size: 100%;
  background-repeat: no-repeat;
  animation: ${FadeIn} 1s backwards 0.5s;
  z-index: 1;
`;

const Image3P = styled.div`
  position: absolute;
  top: 21%;
  left: 50%;
  width: 326px;
  height: 275px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_bev3_cup.png");
  background-size: 100%;
  background-repeat: no-repeat;
  animation: ${FadeIn} 1s backwards 1s;
  z-index: 0;
`;

const Image4CB = styled.div`
  position: absolute;
  top: 44%;
  left: 46%;
  width: 486px;
  height: 323px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_bev4_cup_new_1.png");
  background-size: 100%;
  background-repeat: no-repeat;
  animation: ${FadeIn} 1s backwards 1.5s;
`;
