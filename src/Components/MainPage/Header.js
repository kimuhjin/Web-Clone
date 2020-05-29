import React, { useState } from "react";
import styled from "styled-components";
import { GrSearch } from "react-icons/gr";

function Header() {
  const [CMenu, setCMenu] = useState("off");
  const LeaveMouseC = () => {
    setCMenu("off");
    console.log("마우스 오프");
  };
  const onMouseC = () => {
    setCMenu("on");
    console.log("마우스 온");
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
            <CoffeeMenuButton
              onMouseEnter={onMouseC}
              onMouseLeave={LeaveMouseC}
              CMenu={CMenu}
            >
              COFFEE
            </CoffeeMenuButton>
            <Menu href="http://localhost:3000">MENU</Menu>
            <Menu href="http://localhost:3000">STORE</Menu>
            <Menu href="http://localhost:3000">RESPONSIBILITY</Menu>
            <Menu href="http://localhost:3000">MY STARBUCKS REWARDS</Menu>
            <Menu href="http://localhost:3000">WHAT'S NEW</Menu>
          </MenuContainer>
        </FlexBox>
      </UtilContainer>
      <CoffeeMenu />
    </Container>
  );
}

export default Header;

const CoffeeMenu = styled.div``;

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
  height: 120px;
  display: flex;
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
const Menu = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  text-decoration: none;
  text-align: center;
  height: 66px;
  display: block;
  padding-top: 10px;
  font-size: 13px;
  color: #333333;
  margin: 0px 17px;
`;

const CoffeeMenuButton = styled.button`
  cursor: pointer;
  background-color: ${(props) =>
    props.CMenu === "on" ? "#2c2a29" : "transparent"};
  border: none;
  text-decoration: none;
  text-align: center;
  height: 66px;
  display: block;
  padding-top: 10px;
  font-size: 13px;
  color: ${(props) => (props.CMenu === "on" ? "#669900" : "black")};
  margin: 0px 17px;
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
