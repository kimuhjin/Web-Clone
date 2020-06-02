import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { BsPlus } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

function Notice() {
  const [Arrays, setArray] = useState([]);
  const NoticeArray = [
    {
      text: "SSG PAY 시스템 점검",
    },
    {
      text: "전자 영수증 시스템 점검",
    },
  ];

  return (
    <div>
      <Container>
        <Notices>
          <NTitle>공지사항</NTitle>
          <NoticeBar> SSG PAY 시스템 점검</NoticeBar>
          <NMore href="http://localhost:3000">
            <BsPlus size={28} />
          </NMore>
        </Notices>
        <Promotion>
          <PTitle>스타벅스 프로모션</PTitle>

          <PMore href="http://localhost:3000">
            <BsChevronDown size={28} />
          </PMore>
        </Promotion>
      </Container>
    </div>
  );
}

export default Notice;

const Move = keyframes`
from{
    margin-top:100px;
}
to{
    margin-top:0px;
}
`;
const NMore = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid white;
  border-radius: 50%;
  box-sizing: border-box;
  color: white;
  margin: 0 20px;
  @media (max-width: 640px) {
    width: 32px;
    height: 32px;
  }
`;
const PMore = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid black;
  border-radius: 50%;
  box-sizing: border-box;
  margin: 0 20px;
`;
const NoticeBar = styled.div`
  display: flex;
  font-size: 14px;
  width:470px;
  padding: 0px 15px;
  color: white;
  align-items: center;
  /* animation: ${Move} 1s infinite both linear; */
  @media (max-width: 640px) {
    width:400px;
  }
`;

const PTitle = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  font-weight: bold;
`;

const NTitle = styled.div`
  font-size: 16px;
  color: white;
  font-weight: bold;
  margin-left: auto;
  @media (max-width: 960px) {
    width: 130px;
  }
  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
  }
`;
const Container = styled.div`
  @media (max-width: 960px) {
    max-width: 960px;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    height: 130px;
  }
  height: 62px;
  width: auto;
  display: flex;
  overflow: hidden;
`;
const Promotion = styled.div`
  display: flex;
  width: 45%;
  justify-content: center;
  align-items: center;
  @media (max-width: 640px) {
    width: 100%;
    height: 50%;
  }
`;
const Notices = styled.div`
  display: flex;
  width: 55%;
  @media (max-width: 640px) {
    width: 100%;
    height: 50%;
  }
  background-color: black;
  justify-content: center;
  align-items: center;
`;
