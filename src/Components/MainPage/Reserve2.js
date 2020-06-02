import React, { Fragment, useState } from "react";
import styled from "styled-components";

function Reserve2() {
  const [Mouse, setMouse] = useState("on");
  const onMouse = () => {
    setMouse("off");
  };
  const MouseLeave = () => {
    setMouse("on");
  };
  return (
    <Fragment>
      <BackGroundContainer>
        <Container>
          <Image
            onMouseEnter={onMouse}
            onMouseLeave={MouseLeave}
            Mouse={Mouse}
          />
          <ImageBackFace
            onMouseEnter={onMouse}
            onMouseLeave={MouseLeave}
            Mouse={Mouse}
          >
            <ButtonContainer>
              <DetailButton>매장 찾기</DetailButton>
            </ButtonContainer>
          </ImageBackFace>
        </Container>
      </BackGroundContainer>
    </Fragment>
  );
}

export default Reserve2;
const ButtonContainer = styled.div`
  /* border: solid 3px red; */
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
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
  overflow: hidden;
`;

const Container = styled.div`
  width: 1100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 4px dashed red; */
`;

const Image = styled.div`
  background-image: url("https://www.starbucks.co.kr/common/img/main/reserve_medal01.png");
  width: 334px;
  height: 334px;
  transform: ${(props) =>
    props.Mouse === "off" ? "rotateY(-180deg)" : "rotateY(0deg)"};
  transform-style: preserve-3d;
  transition: 0.5s;
  backface-visibility: hidden;
  /* border: 4px dashed green; */
  position: absolute;
  cursor: pointer;
  z-index: 5;
`;
const ImageBackFace = styled.div`
  background-image: url("https://www.starbucks.co.kr/common/img/main/reserve_medal02.png");
  width: 334px;
  height: 334px;
  transform: ${(props) =>
    props.Mouse === "off" ? "rotateY(0deg)" : "rotateY(180deg)"};
  transform-style: preserve-3d;
  transition: 0.5s;
  backface-visibility: hidden;
  /* border: 4px dashed green; */
  cursor: pointer;
  position: absolute;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: flex-end;
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

  cursor: pointer;
  &:hover {
    transition: 0.5s;
    background-color: black;
    color: white;
    text-decoration: underline;
  }
`;
