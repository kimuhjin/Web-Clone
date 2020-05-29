import React, { useState } from "react";
import styled from "styled-components";
import { GrSearch } from "react-icons/gr";

function Header() {
  const [CMenu, setCMenu] = useState("off");
  const [MMenu, setMMenu] = useState("off");
  const [SMenu, setSMenu] = useState("off");
  const [RMenu, setRMenu] = useState("off");
  const [MYMenu, setMYMenu] = useState("off");
  const [WMenu, setWMenu] = useState("off");
  const LeaveMouseC = () => {
    setCMenu("off");
  };
  const onMouseC = () => {
    setCMenu("on");
  };
  const LeaveMouseM = () => {
    setMMenu("off");
  };
  const onMouseM = () => {
    setMMenu("on");
  };
  const LeaveMouseS = () => {
    setSMenu("off");
  };
  const onMouseS = () => {
    setSMenu("on");
  };
  const LeaveMouseR = () => {
    setRMenu("off");
  };
  const onMouseR = () => {
    setRMenu("on");
  };
  const LeaveMouseMY = () => {
    setMYMenu("off");
  };
  const onMouseMY = () => {
    setMYMenu("on");
  };
  const LeaveMouseW = () => {
    setWMenu("off");
  };
  const onMouseW = () => {
    setWMenu("on");
  };

  return (
    <Container>
      <UtilContainer>
        <LogoFlexBox>
          <Logo />
        </LogoFlexBox>
        <FlexBox>
          <NavContainer>
            <Nav href="http://localhost:3000">Sign In</Nav>
            <Bar>|</Bar>
            <Nav href="http://localhost:3000">My starbucks</Nav>
            <Bar>|</Bar>
            <Nav href="http://localhost:3000">Customer Service & Ideas</Nav>
            <Bar>|</Bar>
            <Nav href="http://localhost:3000">Find a Store</Nav>
            <Search>
              <GrSearch size={24} />
            </Search>
          </NavContainer>
          <MenuContainer>
            <Menu onMouseEnter={onMouseC} onMouseLeave={LeaveMouseC} On={CMenu}>
              COFFEE
            </Menu>
            <Menu onMouseEnter={onMouseM} onMouseLeave={LeaveMouseM} On={MMenu}>
              MENU
            </Menu>
            <Menu onMouseEnter={onMouseS} onMouseLeave={LeaveMouseS} On={SMenu}>
              STORE
            </Menu>
            <Menu onMouseEnter={onMouseR} onMouseLeave={LeaveMouseR} On={RMenu}>
              RESPONSIBILITY
            </Menu>
            <Menu
              onMouseEnter={onMouseMY}
              onMouseLeave={LeaveMouseMY}
              On={MYMenu}
            >
              MY STARBUCKS REWARDS
            </Menu>
            <Menu onMouseEnter={onMouseW} onMouseLeave={LeaveMouseW} On={WMenu}>
              WHAT'S NEW
            </Menu>
          </MenuContainer>
        </FlexBox>
      </UtilContainer>
      {CMenu === "on" && (
        <CoffeeMenu onMouseEnter={onMouseC} onMouseLeave={LeaveMouseC}>
          <OnMenuContainer>
            <MenuTab>
              <MenuTitle>커피</MenuTitle>
              <MenuItem>스타벅스 원두</MenuItem>
              <MenuItem>스타벅스 비아</MenuItem>
              <MenuItem>스타벅스 오리가미</MenuItem>
            </MenuTab>
            <MenuTab>
              <MenuTitle>나와 어울리는 커피</MenuTitle>
            </MenuTab>
            <MenuTab>
              <MenuTitle>스타벅스 리저브™</MenuTitle>
            </MenuTab>
            <MenuTab>
              <MenuTitle>에스프레소 음료</MenuTitle>
              <MenuItem>도피오</MenuItem>
              <MenuItem>에스프레소 마키아또</MenuItem>
              <MenuItem>아메리카노</MenuItem>
              <MenuItem>마끼아또</MenuItem>
              <MenuItem>카푸치노</MenuItem>
              <MenuItem>라떼</MenuItem>
              <MenuItem>모카</MenuItem>
              <MenuItem>리스트레또 비안코</MenuItem>
            </MenuTab>
            <MenuTab>
              <MenuTitle>최상의 커피를 즐기는 법</MenuTitle>
              <MenuItem>커피 프레스</MenuItem>
              <MenuItem>푸어 오버</MenuItem>
              <MenuItem>커피 메이커</MenuItem>
              <MenuItem>리저브를 매장에서 다양하게 즐기는 법</MenuItem>
            </MenuTab>
            <MenuTab>
              <MenuTitle>커피이야기</MenuTitle>
              <MenuItem>스타벅스 로스트 스팩트럼</MenuItem>
              <MenuItem>한 잔의 커피가 완성되기까지</MenuItem>
              <MenuItem>클로버® 커피 추출 시스템</MenuItem>
              <MenuItem>스타벅스 디카페인</MenuItem>
            </MenuTab>
          </OnMenuContainer>
        </CoffeeMenu>
      )}
      {MMenu === "on" && (
        <CoffeeMenu onMouseEnter={onMouseM} onMouseLeave={LeaveMouseM}>
          <OnMenuContainer>
            <MenuTab>
              <MenuTitle>음료</MenuTitle>
              <MenuItem>콜드브루</MenuItem>
              <MenuItem>브루드 커피</MenuItem>
            </MenuTab>
          </OnMenuContainer>
        </CoffeeMenu>
      )}
      {SMenu === "on" && (
        <CoffeeMenu onMouseEnter={onMouseS} onMouseLeave={LeaveMouseS}>
          <OnMenuContainer>
            <MenuTab>
              <MenuTitle>매장 찾기</MenuTitle>
            </MenuTab>
          </OnMenuContainer>
        </CoffeeMenu>
      )}
      {RMenu === "on" && (
        <CoffeeMenu onMouseEnter={onMouseR} onMouseLeave={LeaveMouseR}>
          <OnMenuContainer>
            <MenuTab>
              <MenuTitle>사회 공헌 캠패인 소개</MenuTitle>
            </MenuTab>
          </OnMenuContainer>
        </CoffeeMenu>
      )}
      {MYMenu === "on" && (
        <CoffeeMenu onMouseEnter={onMouseMY} onMouseLeave={LeaveMouseMY}>
          <OnMenuContainer>
            <MenuTab>
              <MenuTitle>마이 스타벅스 리워드</MenuTitle>
            </MenuTab>
          </OnMenuContainer>
        </CoffeeMenu>
      )}
      {WMenu === "on" && (
        <CoffeeMenu onMouseEnter={onMouseW} onMouseLeave={LeaveMouseW}>
          <OnMenuContainer>
            <MenuTab>
              <MenuTitle>프로모션&이벤트</MenuTitle>
            </MenuTab>
          </OnMenuContainer>
        </CoffeeMenu>
      )}
    </Container>
  );
}

export default Header;
const OnMenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1100px;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
`;
const MenuTab = styled.div`
  width: 220px;
  margin-bottom: 20px;
`;
const MenuItem = styled.div`
  font-size: 14px;
  color: #666;
  margin: 5px 0;
`;
const MenuTitle = styled.div`
  font-size: 16px;
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
`;
const CoffeeMenu = styled.div`
  width: 100%;

  padding: 20px 20px;
  background-color: #2c2a29;
`;

const LogoFlexBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;

const Bar = styled.div`
  font-size: 10px;
  color: lightgray;
`;

const UtilContainer = styled.div`
  width: 1100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;
const Container = styled.div`
  width: 100%;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 10;
  background-color: white;
`;
const Logo = styled.div`
  display: inline-flex;
  padding: 17px 17px;
  width: 75px;
  height: 75px;
  background-image: url("https://www.starbucks.co.kr/common/img/common/logo.png");
  background-position: center;
  background-repeat: no-repeat;
  justify-content: flex-start;
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: flex-end;
`;
// const Menu = styled.button`
//   cursor: pointer;
//   background-color: transparent;
//   border: none;
//   text-decoration: none;
//   text-align: center;
//   height: 66px;
//   display: block;
//   padding-top: 10px;
//   font-size: 13px;
//   color: #333333;
//   margin: 0px 17px;
// `;

const Menu = styled.button`
  cursor: pointer;
  background-color: ${(props) =>
    props.On === "on" ? "#2c2a29" : "transparent"};
  border: none;
  text-decoration: none;
  text-align: center;
  height: 66px;
  display: block;
  padding: 10px 0 0 0;
  width: auto;
  align-items: flex-start;
  padding: 0 20px;
  font-size: 13px;
  line-height: 20px;
  color: ${(props) => (props.On === "on" ? "#669900" : "black")};
`;

const NavContainer = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Nav = styled.a`
  text-decoration: none;
  text-align: center;
  margin: 0px 10px;
  font-size: 13px;
  color: #555555;
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid lightgray;
  box-sizing: border-box;
  border-radius: 5px;
  margin-right: 45px;
`;
