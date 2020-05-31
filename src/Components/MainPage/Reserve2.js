import React, { Fragment } from "react";
import styled from "styled-components";

function Reserve2() {
  return (
    <Fragment>
      <BackGroundContainer>
        <Container>
          <Image />
        </Container>
      </BackGroundContainer>
    </Fragment>
  );
}

export default Reserve2;

const BackGroundContainer = styled.div`
  background-image: url("https://www.starbucks.co.kr/common/img/main/reserve_bg.jpg");
  background-repeat: no-repeat;
  background-size: auto 100%;
  width: 100%;
  height: 590px;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 1100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px dashed red;
`;

const Image = styled.div`
  background-image: url("https://www.starbucks.co.kr/common/img/main/reserve_medal01.png");
  width: 334px;
  height: 334px;
`;
