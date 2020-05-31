import React, { Fragment } from "react";
import styled from "styled-components";

function Store() {
  return (
    <Fragment>
      <BackGroundContainer>
        <Container>
          <Image2 />
        </Container>
      </BackGroundContainer>
    </Fragment>
  );
}

export default Store;

const BackGroundContainer = styled.div`
  background-image: url("https://www.starbucks.co.kr/common/img/main/store_bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  width: 100%;
  height: 400px;
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
const Image2 = styled.div`
  background-image: url("https://www.starbucks.co.kr/common/img/main/store_exp_img02.png");
  width: 400px;
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
`;
