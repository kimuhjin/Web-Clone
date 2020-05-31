import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";

function Favorite() {
  return (
    <Fragment>
      <BackGroundContainer></BackGroundContainer>
    </Fragment>
  );
}

export default Favorite;

const BackGroundContainer = styled.div`
  background-image: url("https://www.starbucks.co.kr/common/img/main/fav_prod_bg_new.jpg");
  background-size: auto 100%;
  height: 800px;
  position: relative;
  background-repeat: no-repeat;
  width: 100%;
`;
