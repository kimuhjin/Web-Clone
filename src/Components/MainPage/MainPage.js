import React, { Fragment, useState } from "react";
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
import Footer from "./Footer";
function MainPage() {
  const [scroll, setscroll] = useState(0);
  setInterval(() => {
    setscroll(window.pageYOffset);
  }, 200);

  return (
    <Fragment>
      <FloatingBanner href="http://localhost:3000" />
      <Header />
      <DrinkPanel />
      <Notice />
      <Reward />
      <Bean scroll={scroll} />
      <Reserve scroll={scroll} />
      <Favorite scroll={scroll} />
      <Reserve2 />
      <Store scroll={scroll} />
      <Footer />
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
