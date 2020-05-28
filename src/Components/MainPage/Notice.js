import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

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
          <NMore>+</NMore>
        </Notices>
        <Promotion>
          <PTitle>스타벅스 프로모션</PTitle>
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
const NMore = styled.div`
  width: 36px;
  height: 36px;
  border: 1px solid white;
  border-radius: 50%;
  box-sizing: border-box;
  color: white;
`;
const NoticeBar = styled.div`
  display: flex;
  font-size: 14px;
  width: 60%;
  padding: 0px 15px;
  color: white;
  align-items: center;
  /* animation: ${Move} 1s infinite both linear; */
`;

const PTitle = styled.div`
  font-size: 16px;

  font-weight: bold;
`;

const NTitle = styled.div`
  font-size: 16px;
  color: white;
  font-weight: bold;
`;
const Container = styled.div`
  height: 62px;
  width: auto;
  display: flex;
  overflow: hidden;
`;
const Promotion = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
`;
const Notices = styled.div`
  display: flex;
  width: 60%;
  background-color: black;
  justify-content: center;
  align-items: center;
`;
