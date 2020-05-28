import React, { Fragment } from "react";
import Header from "./Header";
import DrinkPanel from "./DrinkPanel";
import Notice from "./Notice";
import Reward from "./Reward";
import Bean from "./Bean";
function MainPage() {
  return (
    <Fragment>
      <Header />
      <DrinkPanel />
      <Notice />
      <Reward />
      <Bean />
    </Fragment>
  );
}

export default MainPage;
