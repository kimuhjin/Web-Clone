import React, { Fragment } from "react";
import styled from "styled-components";
function DrinkPanel() {
  return (
    <Fragment>
      <Container>
        <Slogan></Slogan>
        <Image1></Image1>
        <Image2></Image2>
        <Image3></Image3>
        <Image4></Image4>
        <DetailButton>자세히 보기</DetailButton>
      </Container>
    </Fragment>
  );
}

export default DrinkPanel;

const DetailButton = styled.a`
  display: flex;
  position: absolute;
  top: 50%;
  left: 1.4%;
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
  left: 1.4%;
  width: 340px;
  height: 230px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_emblem.png");
  background-size: 100%;
  background-repeat: no-repeat;
`;

const Image2 = styled.div`
  position: absolute;
  top: 30%;
  left: 17%;
  width: 487px;
  height: 330px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_bev2_cup.png");
  background-size: 100%;
  background-repeat: no-repeat;
`;

const Image3 = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  width: 326px;
  height: 275px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_bev3_cup.png");
  background-size: 100%;
  background-repeat: no-repeat;
`;

const Image4 = styled.div`
  position: absolute;
  top: 45%;
  left: 45%;
  width: 486px;
  height: 323px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_bev4_cup_new_1.png");
  background-size: 100%;
  background-repeat: no-repeat;
`;

const Image1 = styled.div`
  position: absolute;
  top: 35%;
  left: 74%;
  width: 300px;
  height: 348px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_bev1_cup_new_1.png");
  background-size: 100%;
  background-repeat: no-repeat;
`;
