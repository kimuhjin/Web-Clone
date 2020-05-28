import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Container>
      <Logo />
      <UtilContainer>
        <NavContainer>
          <Nav href="http://localhost:3000">Sign In</Nav>
          <Bar>|</Bar>
          <Nav href="http://localhost:3000">My starbucks</Nav>
          <Bar>|</Bar>
          <Nav href="http://localhost:3000">Customer Service & Ideas</Nav>
          <Bar>|</Bar>
          <Nav href="http://localhost:3000">Find a Store</Nav>
          <Search />
        </NavContainer>
        <MenuContainer>
          <Menu href="http://localhost:3000">COFFEE</Menu>
          <Menu href="http://localhost:3000">MENU</Menu>
          <Menu href="http://localhost:3000">STORE</Menu>
          <Menu href="http://localhost:3000">RESPONSIBILITY</Menu>
          <Menu href="http://localhost:3000">MY STARBUCKS REWARDS</Menu>
          <Menu href="http://localhost:3000">WHAT'S NEW</Menu>
        </MenuContainer>
      </UtilContainer>
    </Container>
  );
}

export default Header;

const Bar = styled.div`
  font-size: 10px;
  color: lightgray;
`;

const UtilContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  height: 120px;
  display: flex;
`;
const Logo = styled.div`
  padding: 17px 17px;
  width: 75px;
  height: 75px;
  background-image: url("https://www.starbucks.co.kr/common/img/common/logo.png");
  background-position: center;
  background-repeat: no-repeat;
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: flex-end;
`;
const Menu = styled.a`
  text-decoration: none;
  text-align: center;
  height: 66px;
  display: block;
  padding-top: 10px;
  font-size: 13px;
  color: #333333;
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
  width: 34px;
  height: 34px;
  border: 1px solid lightgray;
  box-sizing: border-box;
  border-radius: 5px;
  margin-right: 45px;
`;
