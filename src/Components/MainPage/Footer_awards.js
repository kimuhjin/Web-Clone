import React, { Fragment } from "react";
import styled from "styled-components";
function Footer_awards() {
  return (
    <Fragment>
      <BackGroundContainer>
        <Container>
          <Award1 />
          <Award2 />
          <Award3 />
          <Award4 />
          <Award5 />
          <Award6 />
        </Container>
      </BackGroundContainer>
    </Fragment>
  );
}

export default Footer_awards;
const Container = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
`;
const BackGroundContainer = styled.div`
  background-color: #282828;
  width: 100%;
  height: 80px;
  /* border: solid red 3px; */
  margin-top: 40px;
  overflow: hidden;
`;
const Award1 = styled.a`
  background-image: url("https://image.istarbucks.co.kr/common/img/footer/footer_award17_01.jpg");
  width: 190px;
  height: 40px;
  background-repeat: no-repeat;
  cursor: pointer;
`;
const Award2 = styled.a`
  background-image: url("https://image.istarbucks.co.kr/common/img/footer/footer_award17_02.jpg");
  width: 190px;
  height: 40px;
  cursor: pointer;
  background-repeat: no-repeat;
`;
const Award3 = styled.a`
  background-image: url("https://image.istarbucks.co.kr/common/img/footer/footer_award17_03.jpg");
  width: 190px;
  height: 40px;
  cursor: pointer;
  background-repeat: no-repeat;
`;
const Award4 = styled.a`
  background-image: url("https://image.istarbucks.co.kr/common/img/footer/footer_award17_04.jpg");
  width: 190px;
  height: 40px;
  cursor: pointer;
  background-repeat: no-repeat;
`;
const Award5 = styled.a`
  background-image: url("https://image.istarbucks.co.kr/common/img/footer/footer_award17_05.jpg");
  width: 190px;
  height: 40px;
  cursor: pointer;
  background-repeat: no-repeat;
`;
const Award6 = styled.a`
  background-image: url("https://image.istarbucks.co.kr/common/img/footer/footer_award17_06.jpg");
  width: 190px;
  height: 40px;
  cursor: pointer;
  background-repeat: no-repeat;
`;
