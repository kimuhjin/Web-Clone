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

const MarginContainer = styled.div`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  height: 650px;
  /* border: dashed 3px green; */
  position: relative;
  @media (max-width: 960px) {
    max-width: 960px;
    margin-right: 0;
    margin-left: 0;
  }
  @media (max-width: 640px) {
    max-width: 640px;
    margin-right: 0;
    margin-left: 0;
  }
`;

const Container = styled.div`
  height: 650px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_bev_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  /* border: dashed 3px red; */
`;
const DetailButton = styled.a`
  display: flex;
  position: absolute;
  top: 42%;
  left: 1%;
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
  @media (max-width: 960px) {
    left: 1%;
  }
`;
const Slogan = styled.div`
  position: absolute;
  top: 13%;
  left: 1%;
  width: 370px;
  height: 227px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_emblem.png");
  background-size: 100%;
  background-repeat: no-repeat;
  animation: ${FadeIn} 1s backwards 2s;
  @media (max-width: 960px) {
    top: 25%;
    left: 1%;
  }
`;

const Image1CW = styled.div`
  position: absolute;
  top: 33%;
  left: 72%;
  width: 320px;
  height: 348px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_bev1_cup_new_1.png");
  background-size: 100%;
  background-repeat: no-repeat;
  animation: ${FadeIn} 1s backwards;
  @media (max-width: 960px) {
    top: 44%;
    left: 63%;
  }
`;

const Image2BW = styled.div`
  position: absolute;
  top: 26%;
  left: 18%;
  width: 487px;
  height: 330px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_bev2_cup.png");
  background-size: 100%;
  background-repeat: no-repeat;
  animation: ${FadeIn} 1s backwards 0.5s;
  z-index: 1;
  @media (max-width: 960px) {
    top: 53%;
    left: 1%;
  }
`;

const Image3P = styled.div`
  position: absolute;
  top: 11%;
  left: 50%;
  width: 326px;
  height: 275px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_bev3_cup.png");
  background-size: 100%;
  background-repeat: no-repeat;
  animation: ${FadeIn} 1s backwards 1s;
  z-index: 0;
  @media (max-width: 960px) {
    top: 23%;
    left: 35%;
  }
`;

const Image4CB = styled.div`
  position: absolute;
  top: 44%;
  left: 44%;
  width: 500px;
  height: 350px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_bev4_cup_new_1.png");
  background-size: 100% auto;
  background-repeat: no-repeat;
  animation: ${FadeIn} 1s backwards 1.5s;
  @media (max-width: 960px) {
    top: 70%;
    left: 25%;
    z-index: 5;
  }
`;
