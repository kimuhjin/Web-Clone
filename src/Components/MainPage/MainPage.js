import React, { Fragment } from "react";
import Header from "./Header";
import DrinkPanel from "./DrinkPanel";
import Notice from "./Notice";
import Reward from "./Reward";
import Bean from "./Bean";
import styled from "styled-components";
import Reserve from "./Reserve";
import Favorite from "./Favorite";
import Reserve2 from "./Reserve2";
import Store from "./Store";
function MainPage() {
  return (
    <Fragment>
      <FloatingBanner href="http://localhost:3000" />
      <Header />
      <DrinkPanel />
      <Notice />
      <Reward />
      <Bean />
      <Reserve />
      <Favorite />
      <Reserve2 />
      <Store />
    </Fragment>
  );
}

export default MainPage;
const FloatingBanner = styled.a`
  position: fixed;
  right: 1%;
  top: 138px;
  width: 140px;
  height: 240px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2020/20200521_After_WEB.png");
  background-size: 100% auto;
  z-index: 999;
`;
