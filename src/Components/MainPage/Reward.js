import React, { Fragment } from "react";
import styled from "styled-components";
function Reward() {
  return (
    <Fragment>
      <BackgroundContainer>
        <BackgroundContainer1 />
        <BackgroundContainer2 />
      </BackgroundContainer>

      <Container>
        <LeftPannel></LeftPannel>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Container>
    </Fragment>
  );
}

export default Reward;

const BackgroundContainer = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  position: absolute;
  z-index: 0;
`;
const BackgroundContainer1 = styled.div`
  flex: 1;
  width: 100%;
  height: 260px;
  background-color: #272727;
`;
const BackgroundContainer2 = styled.div`
  flex: 3;
  width: 100%;
  height: 260px;
  background-color: #d6c798;
`;
const LogoContainer = styled.div`
  width: 500px;
  height: 260px;
`;

const Container = styled.div`
  height: 260px;
  width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;
const LeftPannel = styled.div`
  position: absolute;
  z-index: 3;
  width: 500px;
  height: 260px;
  background-image: url("https://www.starbucks.co.kr/common/img/main/reward_star_bg_w.png");
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 0;
`;

const Logo = styled.div`
  margin-top: 115px;
  margin-left: 80px;
  position: absolute;
  z-index: 4;
  width: 220px;
  height: 50px;
  background-image: url("https://image.istarbucks.co.kr/common/img/main/reward_logo.png");
  background-repeat: no-repeat;
  background-size: contain;
`;
