import React, { Fragment } from "react";
import styled from "styled-components";
import Footer_awards from "./Footer_awards";
import Footer_Copyright from "./Footer_Copyright";
function Footer() {
  return (
    <Fragment>
      <BackGroundContainer>
        <SiteMap>
          <Section>
            <SectionTitle>COMPANY</SectionTitle>
            <Link>한눈에 보기</Link>
            <Link>스타벅스 사명</Link>
            <Link>스타벅스 소개</Link>
            <Link>국내 뉴스룸</Link>
            <Link>세계의 스타벅스</Link>
            <Link>글로벌 뉴스룸</Link>
          </Section>
          <Section>
            <SectionTitle>CORPORATE SALES</SectionTitle>
            <Link>단체 및 기업 구매 안내</Link>
          </Section>
          <Section>
            <SectionTitle>PARTNERSHIP</SectionTitle>
            <Link>신규 입점 제의</Link>
            <Link>협력 고객사 등록신청</Link>
          </Section>
          <Section>
            <SectionTitle>ONLINE COMMUNITY</SectionTitle>
            <Link>페이스북</Link>
            <Link>트위터</Link>
            <Link>유튜브</Link>
            <Link>블로그</Link>
            <Link>인스타그램</Link>
          </Section>
          <Section>
            <SectionTitle>RECRUIT</SectionTitle>
            <Link>채용소개</Link>
            <Link>채용 지원하기</Link>
          </Section>
          <FooterLogo />
        </SiteMap>
        <Footer_awards />
        <Footer_Copyright />
      </BackGroundContainer>
    </Fragment>
  );
}

export default Footer;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* border: 3px dashed red; */
  font-weight: bold;
`;
const SectionTitle = styled.a`
  display: flex;
  width: 215px;
  height: 40px;
  font-size: 14px;
  color: white;
  align-items: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const Link = styled.a`
  display: flex;
  width: 215px;
  height: 24px;
  font-size: 12px;
  color: white;
  align-items: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const BackGroundContainer = styled.div`
  width: 100%;
  height: 555px;
  background-color: #2c2a29;
  padding: 35px 0;
`;
const SiteMap = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* border: 3px dashed red; */
`;
const FooterLogo = styled.div`
  background-image: url("https://www.starbucks.co.kr/common/img/footer/footer_logo.png");
  background-repeat: no-repeat;
  width: 15px;
  height: 150px;
  /* border: 3px dashed green; */
`;
