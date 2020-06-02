import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";

function Store({ scroll }) {
  return (
    <Fragment>
      <BackGroundContainer>
        {scroll > 2700 && (
          <Container>
            <ImageContainer>
              <Image2>
                <Image1 />
              </Image2>
            </ImageContainer>
            <TextContainer>
              <Text1 />
              <Text2 />
              <DetailButton>매장 찾기</DetailButton>
            </TextContainer>
          </Container>
        )}
      </BackGroundContainer>
    </Fragment>
  );
}

export default Store;
const ImageOpacity = keyframes`
from {
    opacity:0;
}
to {
    opacity:1;

}`;
const TextMove1 = keyframes`
from {
    transform:translateX(700px);
}
to {
    transform:translateX(0px);

}
`;
const TextMove2 = keyframes`
from {
    transform:translateX(1000px);
}
to {
    transform:translateX(0px);

}`;
const ButtonMove = keyframes`
from {
    transform:translateX(1200px);
}
to {
    transform:translateX(0px);

}`;
const Container = styled.div`
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  /* border: 3px dashed blue; */
  display: flex;
  justify-content: space-between;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 3px dashed black; */
  justify-content: center;
  align-items: center;
`;

const BackGroundContainer = styled.div`
  background-image: url("https://www.starbucks.co.kr/common/img/main/store_bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const ImageContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* border: 4px dashed red; */
  height: auto;
  animation: ${ImageOpacity} 2s backwards;
`;
const Image2 = styled.div`
  background-image: url("https://www.starbucks.co.kr/common/img/main/store_exp_img02.png");
  width: 450px;
  height: 370px;
  background-position: left top;
  background-repeat: no-repeat;
  position: relative;
  /* border: 3px dashed yellowgreen; */
`;

const Image1 = styled.div`
  background-image: url("https://www.starbucks.co.kr/common/img/main/store_exp_img01.png");
  width: 450px;
  height: 370px;
  background-position: right bottom;
  background-repeat: no-repeat;
  position: relative;
  z-index: 6;
  /* border: 3px dashed yellowgreen; */
`;
const Text1 = styled.div`
  background-image: url("https://www.starbucks.co.kr/common/img/main/store_txt01.png");
  width: 400px;
  height: 80px;
  background-position: left;
  background-repeat: no-repeat;
  /* border: 3px dashed yellowgreen; */
  animation: ${TextMove1} 2.5s backwards;
`;
const Text2 = styled.div`
  background-image: url("https://www.starbucks.co.kr/common/img/main/store_txt02.png");
  width: 400px;
  height: 80px;
  background-position: left;
  background-repeat: no-repeat;
  /* border: 3px dashed yellowgreen; */
  animation: ${TextMove2} 2.5s backwards;
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
  margin-top: 30px;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    background-color: black;
    color: white;
    text-decoration: underline;
  }
  animation: ${ButtonMove} 2.5s backwards;
`;
