import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";

function Favorite({ scroll }) {
  return (
    <Fragment>
      <BackGroundContainer>
        <Container>
          {scroll > 1350 && (
            <TextAlignContainer>
              <TextContainer>
                <Text1 />
                <Text2 />
                <DetailButtonContainer>
                  <DetailButton>자세히 보기</DetailButton>
                </DetailButtonContainer>
              </TextContainer>
            </TextAlignContainer>
          )}
          <ImageContainer>
            <Image />
          </ImageContainer>
        </Container>
      </BackGroundContainer>
    </Fragment>
  );
}

export default Favorite;
const TextMove1 = keyframes`
from {
    transform:translateX(-500px);
}
to {
    transform:translateX(0px);

}
`;
const TextMove2 = keyframes`
from {
    transform:translateX(-700px);
}
to {
    transform:translateX(0px);

}
`;
const TextMove3 = keyframes`
from {
    transform:translateY(700px);
}
to {
    transform:translateY(0px);

}
`;
const TextMove4 = keyframes`
from {
    transform:translateY(-700px);
}
to {
    transform:translateY(0px);

}
`;
const ButtonOpacity = keyframes`
from {
    opacity:0;
}
to {
    opacity:1;

}`;
const TextAlignContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: solid 2px red; */
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 640px) {
    justify-content: center;
  }
`;

const Container = styled.div`
  display: flex;
  width: 1200px;
  margin-right: auto;
  margin-left: auto;
  /* border: 2px solid red; */
  @media (max-width: 640px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;
const BackGroundContainer = styled.div`
  background-image: url("https://www.starbucks.co.kr/common/img/main/fav_prod_bg_new.jpg");
  height: 800px;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  width: auto;
  background-attachment: fixed;
  display: flex;
  overflow: hidden;
  @media (max-width: 640px) {
    height: 700px;
    background-size: auto 100%;
    background-attachment: scroll;
  }
`;
const Text1 = styled.div`
  background-image: url("https://www.starbucks.co.kr/common/img/main/fav_prod_txt01.png");
  background-repeat: no-repeat;
  width: auto;
  height: 230px;
  position: relative;
  display: flex;
  background-position: right;
  /* animation: ${TextMove1} 2.5s backwards; */
  @media (max-width: 640px) {
    display:none;
  }
`;
const Text2 = styled.div`
  background-image: url("https://www.starbucks.co.kr/common/img/main/fav_prod_txt02.png");
  background-repeat: no-repeat;
  width: auto;
  height: 230px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  background-position: right;
  /* animation: ${TextMove2} 2.5s backwards; */
  @media (max-width: 640px) {
    width:400px;
    height:230px;
    position: static;
    justify-content: center;
    animation: ${TextMove3} 1.5s backwards;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: flex-end;
  /* border: 3px solid red; */
  width: 450px;
  @media (max-width: 640px) {
    flex-direction: row;
    display: flex;
    justify-content: center;
    height: 300px;
  }
`;

const DetailButton = styled.a`
  display: flex;
  width: 121px;
  height: 34px;
  font-size: 15px;
  color: white;
  border: 2px solid white;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-weight: bold;
  margin-left: 160px;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    background-color: white;
    color: black;
    text-decoration: underline;
  }
  /* animation: ${ButtonOpacity} 2s backwards; */
  @media (max-width: 640px) {
    position: static;
    display:none;
    
  }
`;
const DetailButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  /* border: 4px solid blue; */
`;

const Image = styled.div`
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20_summer_fav.png");
  background-repeat: no-repeat;
  background-position: center;
  width: 700px;
  height: 500px;
  @media (max-width: 640px) {
    width: 400px;
    height: 260px;
    position: static;
    /* border: 2px solid green; */
    background-size: 100%;
    display: flex;
    justify-content: center;
    animation: ${TextMove4} 1.5s backwards;
  }
`;
