import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";
function DrinkPanel() {
  return (
    <Fragment>
      <Container>
        <Slogan></Slogan>
        <Image1CW></Image1CW>
        <Image2BW></Image2BW>
        <Image3P></Image3P>
        <Image4CB></Image4CB>
        <DetailButton>자세히 보기</DetailButton>
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
const DetailButton = styled.a`
  display: flex;
  position: absolute;
  top: 50%;
  left: 10%;
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
`;

const Container = styled.div`
  width: auto;
  height: 646px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_bev_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Slogan = styled.div`
  position: absolute;
  top: 25%;
  left: 10%;
  width: 340px;
  height: 230px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_emblem.png");
  background-size: 100%;
  background-repeat: no-repeat;
  animation: ${FadeIn} 1s backwards 2s;
`;

const Image1CW = styled.div`
  position: absolute;
  top: 40%;
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
  top: 32%;
  left: 22%;
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
  top: 23%;
  left: 47%;
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
  top: 52%;
  left: 43%;
  width: 486px;
  height: 323px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_bev4_cup_new_1.png");
  background-size: 100%;
  background-repeat: no-repeat;
  animation: ${FadeIn} 1s backwards 1.5s;
`;
