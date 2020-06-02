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
const TextMove3 = keyframes`
from{
    transform:translateY(2500px);
    opacity:0;
}
to {
    transform:translateY(0px);
    opacity:1;
}`;
const TextMove4 = keyframes`
from{
    transform:translateY(-2500px);
    opacity:0;
}
to {
    transform:translateY(0px);
    opacity:1;
}`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 640px) {
    justify-content: center;
  }
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
  @media (max-width: 640px) {
    animation: ${TextMove3} 2s backwards;
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
    flex-direction: column;

    width: 100%;
  }
`;

const BackGroundContainer = styled.div`
  height: 573px;
  width: auto;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_coffee_bg.jpg");
  @media (max-width: 640px) {
    height: 800px;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
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
  background-size: 100%;

  animation: ${BeanMove} 1s backwards;
  @media (max-width: 640px) {
    width: 160px;
    height: 400px;
    animation: none;
    position: static;
    animation: ${TextMove4} 2s backwards;
  }
`;
const BeanText = styled.div`
  width: 400px;
  height: 200px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_bean_tit.png");
  background-repeat: no-repeat;
  background-position: left;
  @media (max-width: 640px) {
    width: 400px;
    height: 250px;
    background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/m_20_summer_bean_tit.png");
    background-position: center;
    animation: ${TextMove3} 2s backwards;
  }
`;
