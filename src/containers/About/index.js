import './about.less';
import logo from '../../images/rocket-kitchen-logo-white@4x.png';
import symbol1 from '../../images/rocket-kitchen-icon-company@2x.png';
import symbol2 from '../../images/rocket-kitchen-icon-group@2x.png';
import symbol3 from '../../images/rocket-kitchen-icon-support@2x.png';
import symbol4 from '../../images/rocket-kitchen-icon-authenticated@2x.png';
import symbol5 from '../../images/rocket-kitchen-icon-professional@2x.png';
import symbol6 from '../../images/rocket-kitchen-icon-office.png';
import symbol7 from '../../images/rocket-kitchen-icon-celebration.png';
import symbol8 from '../../images/rocket-kitchen-icon-campus.png';
import symbol9 from '../../images/rocket-kitchen-icon-concert.png';
import symbol10 from '../../images/rocket-kitchen-icon-studio.png';
import symbol11 from '../../images/rocket-kitchen-icon-community.png';
import symbol12 from '../../images/rocket-kitchen-icon-event.png';
import symbol13 from '../../images/rocket-kitchen-icon-party.png';



import React, { Component } from 'react';
import { Button, Col, Row, Steps } from 'antd';
import { SectionsContainer, Section } from 'react-fullpage';

let options = {
  anchors: ['intro', 'greetings', 'location', 'gallery', 'contact'],
  scrollBar: true,
  verticalAlign: true,
  delay: 1000
};

class About extends Component {
  render() {
    return(
      <SectionsContainer {...options} className="about">
        <Section className="section-01">
          <Row>
            <Col
              xs={{ offset: 4, span: 16 }}
              md={{ offset: 8, span: 8 }}
            >
              <img src={logo} />
              <Row className="sub-header">
                로켓키친은 고품격 푸드트럭 케이터링 서비스입니다.<br/>
                최상의 서비스를 위하여 최고의 푸드트럭들을 보유하고 있습니다.
              </Row>
            </Col>
          </Row>
        </Section>
        <Section className="section-02">
          <Row>
            <Col
              xs={{ offset: 2, span: 20 }}
              md={{ offset: 4, span: 16 }}
              className="division-group"
            >
              <Col
                xs={{ span: 24 }}
                md={{ span: 8 }}
                className="division"
              >
                <Row>
                  <img src={symbol1} className="symbol1" role="presentation" />
                </Row>
                <Row className="sub-title">
                  대기업 사회공헌팀
                </Row>
                <Row className="description">
                  케이터링 공간 및 기회 보유<br/>
                  홍보효과 NEEDS
                </Row>
              </Col>
              <Col
                xs={{ span: 24 }}
                md={{ span: 8 }}
                className="division"
              >
                <Row>
                  <img src={logo} className="logo" role="presentation" />
                </Row>
              </Col>
              <Col
                xs={{ span: 24 }}
                md={{ span: 8 }}
                className="division"
              >
                <Row>
                  <img src={symbol2} className="symbol2" role="presentation" />
                </Row>
                <Row className="sub-title">
                  사회적기업/취약계층<br/>
                  청년창업가
                </Row>
                <Row className="description">
                  운영능력 보유<br/>
                  운영공간 NEEDS
                </Row>
              </Col>
            </Col>
          </Row>
        </Section>
        <Section className="section-03">
          <Row className="title">
            왜 로켓키친인가?
          </Row>
          <Row>
            <Col
              xs={{ offset: 2, span: 20 }}
              md={{ offset: 4, span: 16 }}
              className="division-group"
            >
              <Col
                xs={{ span: 24 }}
                md={{ span: 8 }}
                className="division"
              >
                <Row className="sub-title">
                  상황에 따른 대처 및 지원
                </Row>
                <Row>
                  <img src={symbol3} className="symbol3" role="presentation" />
                </Row>
                <Row>
                  모든 이벤트 예약은 예기치 못한 상황이
                  발생할 수 있습니다. 우리가 보유한 최고의
                  푸드트럭들을 준비해 놓고 있습니다.
                </Row>
              </Col>
              <Col
                xs={{ span: 24 }}
                md={{ span: 8 }}
                className="division"
              >
                <Row className="sub-title">
                  검증된 업체
                </Row>
                <Row>
                  <img src={symbol4} className="symbol4" role="presentation" />
                </Row>
                <Row>
                  10대 이상의 푸드트럭 네트워크,
                  우리는 믿을 수 있고 맛있는 베스트
                  푸드트럭의 가장 검증된 선택을 제공합니다.
                </Row>
              </Col>
              <Col
                xs={{ span: 24 }}
                md={{ span: 8 }}
                className="division"
              >
                <Row className="sub-title">
                  우리는 프로
                </Row>
                <Row>
                  <img src={symbol5} className="symbol5" role="presentation" />
                </Row>
                <Row>
                  수백번의 행사와 연예인 케이터링 경험을
                  축적한 우리는 맛있고 성공적인 이벤트를
                  위해 무엇이 필요한지 알고 있습니다.
                </Row>
              </Col>
            </Col>
          </Row>
        </Section>
        <Section className="section-04">
          <Row className="title">
            다양한 이벤트 WITH 로켓키친
          </Row>
          <Row>
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              className="division"
            >
              <Row>
                <img src={symbol6} role="presentation" />
              </Row>
              <Row className="sub-title">
                기업 케이터링
              </Row>
              <Row className="description">
                오피스에서 식사 프로그램, 비즈니스 중식,<br/>
                직원 감사 회식, 클라이언트 감사, 홀리데이 파티 등
              </Row>
            </Col>
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              className="division"
            >
              <Row>
                <img src={symbol7} role="presentation" />
              </Row>
              <Row className="sub-title">
                축하 케이터링
              </Row>
              <Row className="description">
                쫑파티, 리허설 디너, 늦은밤 야식,
                브런치 등
              </Row>
            </Col>
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              className="division"
            >
              <Row>
                <img src={symbol8} role="presentation" />
              </Row>
              <Row className="sub-title">
                캠퍼스 케이터링
              </Row>
              <Row className="description">
                학생 단체, 오프 캠퍼스 이벤트, 졸업, 파티,<br/>
                학교 댄스, 학교 모금, 모집이벤트,  동창회 이벤트
              </Row>
            </Col>
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              className="division"
            >
              <Row>
                <img src={symbol9} role="presentation" />
              </Row>
              <Row className="sub-title">
                대규모 이벤트
              </Row>
              <Row className="description">
                스포츠 이벤트, 음악축제, 아레나 콘서트,<br/>
                국립 이벤트 ,  마라톤  등
              </Row>
            </Col>
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              className="division"
            >
              <Row>
                <img src={symbol10} role="presentation" />
              </Row>
              <Row className="sub-title">
                촬영 케이터링
              </Row>
              <Row className="description">
                영화 촬영장, 사진 촬영, 식사, 외식 등
              </Row>
            </Col>
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              className="division"
            >
              <Row>
                <img src={symbol11} role="presentation" />
              </Row>
              <Row className="sub-title">
                커뮤니티 이벤트
              </Row>
              <Row className="description">
                거리 전시회, 이웃 동네 파티, 벼룩 시장,<br/>
                자동차쇼, 부동산 오픈 하우스, 콘서트 등
              </Row>
            </Col>
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              className="division"
            >
              <Row>
                <img src={symbol12} role="presentation" />
              </Row>
              <Row className="sub-title">
                전문 이벤트
              </Row>
              <Row className="description">
                컨퍼런스, 컨벤션, 박람회 등
              </Row>
            </Col>
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              className="division"
            >
              <Row>
                <img src={symbol13} role="presentation" />
              </Row>
              <Row className="sub-title">
                개인 파티
              </Row>
              <Row className="description">
                생일, 휴일, 졸업식, 기념일 등
              </Row>
            </Col>
          </Row>
        </Section>
        <Section className="section-05">
          <Row className="title">
            예약절차
          </Row>
          <Row>
            <Col
              xs={{ offset: 2, span: 20 }}
              md={{ offset: 4, span: 16 }}
              className="division-group"
            >
              <Col
                xs={{ span: 24 }}
                md={{ span: 8 }}
                className="division"
              >
                <Row className="sequence">1</Row>
                <Row className="sub-title">온라인 예약 신청하기</Row>
              </Col>
              <Col
                xs={{ span: 24 }}
                md={{ span: 8 }}
                className="division"
              >
                <div className="arrow"/>
                <Row className="sequence">2</Row>
                <Row className="sub-title">전문가와 전화상담</Row>
              </Col>
              <Col
                xs={{ span: 24 }}
                md={{ span: 8 }}
                className="division"
              >
                <div className="arrow"/>
                <Row className="sequence">3</Row>
                <Row className="sub-title">최적의 푸드트럭 제안</Row>
              </Col>
            </Col>
          </Row>
          <Row className="reservation">
            <Button className="reservation-btn">예약하기</Button>
          </Row>
        </Section>
      </SectionsContainer>
    )
  }
}

export default About;