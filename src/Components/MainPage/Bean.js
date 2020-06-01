import React from "react";
import styled, { keyframes } from "styled-components";
function Bean({ scroll }) {
  return (
    <div>
      <BackGroundContainer>
        {scroll > 380 && (
          <Container>
            <BeanImage scroll={scroll} />
            <TextContainer>
              <BeanText scroll={scroll} />
              <ButtonContainer>
                <DetailButton>자세히 보기</DetailButton>
              </ButtonContainer>
            </TextContainer>
          </Container>
        )}
      </BackGroundContainer>
    </div>
  );
}

export default Bean;
const BeanMove = keyframes`
from{
    transform:translateX(-500px);
    opacity:0;
}
to {
    transform:translateX(0px);
    opacity:1;
}
`;
const TextMove = keyframes`
from{
    transform:translateX(2500px);
    opacity:0;
}
to {
    transform:translateX(700px);
    opacity:1;
}
`;
const TextMove2 = keyframes`
from{
    transform:translateX(2500px);
    opacity:0;
}
to {
    transform:translateX(500px);
    opacity:1;
}
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${TextMove} 1s both;
  @media (max-width: 960px) {
    animation: ${TextMove2} 1s both;
  }
  @media (max-width: 640px) {
    animation: none;
  }
`;

const DetailButton = styled.a`
  display: flex;
  width: 121px;
  height: 34px;
  text-align: center;
  font-size: 15px;
  color: black;
  border: 2px solid black;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    background-color: black;
    color: white;
    text-decoration: underline;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
  height: 100%;
  background-color: transparent;
  @media (max-width: 960px) {
    max-width: 960px;
    overflow: hidden;
  }
  @media (max-width: 640px) {
    max-width: 640px;
    margin-right: 0;
    margin-left: 0;
  }
`;

const BackGroundContainer = styled.div`
  height: 573px;
  width: auto;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_coffee_bg.jpg");
`;

const BeanImage = styled.div`
  display: flex;
  width: 400px;
  height: 500px;
  position: absolute;
  z-index: 1;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_bean.png");
  background-repeat: no-repeat;
  background-position: right;

  animation: ${BeanMove} 1s backwards;
`;
const BeanText = styled.div`
  width: 400px;
  height: 200px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_bean_tit.png");
  background-repeat: no-repeat;
  background-position: left;
`;
