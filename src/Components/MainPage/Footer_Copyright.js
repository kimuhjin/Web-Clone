import React, { Fragment } from "react";
import styled from "styled-components";

function Footer_Copyright() {
  return (
    <Fragment>
      <Container>
        <LinkContainer>
          <Link_a>개인정보처리방침</Link_a>
          <Link>영상정보처리기기 운영관리 방침</Link>
          <Link>홈페이지 이용약관</Link>
          <Link>위치정보 이용약관</Link>
          <Link>스타벅스 카드 이용약관</Link>
          <Link>비회원 이용약관</Link>
          <Link>윤리경영 핫라인</Link>
        </LinkContainer>
        <ButtonContainer>
          <Button>찾아오시는 길</Button>
          <Button>신규입점제의 </Button>
          <Button>사이트 맵</Button>
        </ButtonContainer>
        <InfoContainer>
          <Info>사업자등록번호 : 201-81-21515</Info>
          <Info>(주)스타벅스커피 코리아 대표이사 : 송 데이비드 호섭</Info>
          <Info>TEL : 1522-3232</Info>
          <Info>개인정보 책임자 : 장석현</Info>
        </InfoContainer>
        <Right>ⓒ 2020 Starbucks Coffee Company. All Rights Reserved.</Right>
      </Container>
    </Fragment>
  );
}

export default Footer_Copyright;
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 12px;
  color: #999999;
`;
const Info = styled.div`
  font-size: 12px;
  color: #999999;
  margin: 0px 7px;
`;
const InfoContainer = styled.div`
  display: flex;
  padding-top: 25px;
  padding-bottom: 5px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Link_a = styled.a`
  font-size: 12px;
  color: #00b050;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const Link = styled.a`
  cursor: pointer;
  font-size: 12px;
  color: #cccccc;
  &:hover {
    text-decoration: underline;
  }
`;
const LinkContainer = styled.div`
  width: 800px;
  height: 30px;
  /* border: 3px solid yellowgreen; */
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  /* border: 3px solid green; */
  padding-top: 30px;
  justify-content: center;
  align-items: center;
`;

const Button = styled.a`
  margin: 0px 5px;
  display: flex;
  width: 121px;
  height: 34px;
  font-size: 12px;
  color: white;
  border: 2px solid white;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
