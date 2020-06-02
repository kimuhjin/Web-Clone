import React, { Fragment, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import Footer_Copyright from "./Footer_Copyright";

function ResponsiveFooter() {
  const [MenuC, setMenuC] = useState(false);
  const onClickC = () => {
    setMenuC(!MenuC);
  };
  return (
    <Fragment>
      <Container>
        <MenuContainer>
          <Menu onClick={onClickC}>
            CUSTOMER SERVICE & IDEAS
            <FaAngleDown size={34} onClick={onClickC} />
          </Menu>
          {MenuC && (
            <UnderMenuContainer MenuC={MenuC}>
              <UnderMenu>자주하는 질문</UnderMenu>
              <UnderMenu>고객의 소리</UnderMenu>
              <UnderMenu>스타벅스 이용 팁</UnderMenu>
              <UnderMenu>고객경험 설문조사</UnderMenu>
              <UnderMenu>비회원 전자영수증 조회</UnderMenu>
            </UnderMenuContainer>
          )}
          <Menu>
            COMPANY
            <FaAngleDown size={34} />
          </Menu>
          <Menu>
            CORPORATE SALES
            <FaAngleDown size={34} />
          </Menu>
          <Menu>
            PARTNERSHIP
            <FaAngleDown size={34} />
          </Menu>
          <Menu>
            ONLINE COMMUNITY
            <FaAngleDown size={34} />
          </Menu>
          <Menu>
            RECRUIT
            <FaAngleDown size={34} />
          </Menu>
        </MenuContainer>
        <ButtonContainer>
          <Button>HOME</Button>
          <Button>Sign In</Button>
          <Button>Join Us</Button>
        </ButtonContainer>
        <AwardContainer>
          <Award1 />
        </AwardContainer>
      </Container>
    </Fragment>
  );
}

export default ResponsiveFooter;
const MenuTrans = keyframes`
from {
    height:0px;
}
to {
    height:200px;
}
`;
const MenuTransR = keyframes`
from {
    height:200px;
}
to {
    height:0px;
}
`;
const Award1 = styled.div`
  @media (max-width: 640px) {
    width: 190px;
    height: 40px;
    background-image: url("https://image.istarbucks.co.kr/common/img/footer/footer_award17_01.jpg");
    background-repeat: no-repeat;
    cursor: pointer;
  }
`;
const AwardContainer = styled.div`
  @media (max-width: 640px) {
    height: 64px;
    width: 100%;
    background-color: #282828;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const ButtonContainer = styled.div`
  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
    padding: 25px;
  }
`;
const Button = styled.button`
  @media (max-width: 640px) {
    width: 133px;
    height: 47.5px;
    font-size: 17px;
    color: white;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 3px;
    margin: 0px 5px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const UnderMenuContainer = styled.div`
  @media (max-width: 640px) {
    animation: ${MenuTrans} 0.5s backwards;

    position: relative;
    z-index: 3;
  }
`;
const UnderMenu = styled.div`
  @media (max-width: 640px) {
    width: 100%;
    height: 40px;
    color: #e6dbd3;
    background-color: #645952;
    padding: 0px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
  }
`;
const Container = styled.div`
  @media (max-width: 640px) {
    width: 100%;
    height: 810px;
    background-color: #2c2a29;
    position: relative;
    z-index: 4;
  }
  @media (min-width: 640px) {
    display: none;
  }
`;

const MenuContainer = styled.div`
  @media (max-width: 640px) {
  }
`;
const Menu = styled.div`
  @media (max-width: 640px) {
    padding: 0px 15px;
    height: 50px;
    background-color: #554c49;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: white;
    border: 1px solid #2c2a29;
    border-top: none;
    border-left: none;
    border-right: none;
    font-weight: bold;
    position: relative;
    z-index: 5;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
