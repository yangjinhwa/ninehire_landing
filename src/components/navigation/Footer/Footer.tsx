import React from 'react';
import styled from 'styled-components';

import scrollTop from '@src/hooks/resetScrollTop';
import Color from '@src/styles/Color';
import NinehireLogo from '@src/components/dataDisplay/Icons/NinehireLogo';
import { Link } from 'react-router-dom';
import Cta from '@src/pages/common/Cta/Cta';
import { useHistory } from 'react-router-dom';
import { navMenuList } from '@src/routes/navMenuList';
import SNSSec from './SNSSec';
import { RootPath } from '@src/routes/routePath';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${Color.GRAY_2};
  color: ${Color.GRAY_6};
  font-size: 14px;
`;

const FooterContentGrid = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 12px;
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px 0;
  border-top: 1px solid ${Color.GRAY_4};
  color: ${Color.GRAY_6};

  .copyright {
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .hr {
      display: none;
    }
    .copyright {
      margin-bottom: 8px;
    }
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;

  @media (max-width: 768px) {
    padding: 24px 0;
  }
`;

const FooterLinkBtn = styled.button`
  color: ${Color.GRAY_6};

  &:hover {
    font-weight: 700;
    text-decoration: underline;
  }
`;

const ServiceWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;

  @media (max-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`;

const MenuWrap = styled.div`
  a {
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

const MenuTitle = styled.div`
  font-weight: 700;
  margin-bottom: 24px;
`;

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MenuUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

const MenuLi = styled.li`
  margin-bottom: 12px;
  &:hover {
    cursor: pointer;
    font-weight: 700;
    text-decoration: underline;
  }
`;

const LogoSec = styled.div`
  margin-bottom: 12px;
  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

interface Props {
  flat?: boolean;
  noCTA?: boolean;
}
function Footer({ flat, noCTA }: Props) {
  const history = useHistory();

  function handleSubMenuClick(subMenuScrollTop?: number) {
    if (location.pathname == RootPath.Price) {
      history.push('/');
    }
    if (subMenuScrollTop) {
      window.scrollTo({ top: subMenuScrollTop, behavior: 'smooth' });
    } else {
      scrollTop();
    }
  }

  return (
    <>
      {!noCTA && <Cta flat={flat} />}

      <FooterContainer>
        <FooterContentGrid>
          <FooterContent>
            <ContentWrap>
              {navMenuList.map((list, index) => {
                const { title, subMenu, footerId } = list;
                return (
                  <MenuWrap key={index}>
                    {list.linkto ? (
                      <Link to={list.linkto} onClick={scrollTop} id={footerId}>
                        <MenuTitle>{title}</MenuTitle>
                      </Link>
                    ) : (
                      <>
                        <MenuTitle>{title}</MenuTitle>
                      </>
                    )}

                    <MenuUl>
                      {subMenu &&
                        subMenu.map((subList, i) => {
                          if (subList.outLinkto) {
                            return (
                              <a
                                id={subList.footerId}
                                href={subList.outLinkto}
                                target="_blank"
                                key={i}
                              >
                                <MenuLi>{subList.title}</MenuLi>
                              </a>
                            );
                          }
                          return (
                            <Link id={subList.footerId} to={subList.linkto} key={i}>
                              <MenuLi
                                onClick={() => handleSubMenuClick(subList.scrollTop)}
                              >
                                {subList.title}
                              </MenuLi>
                            </Link>
                          );
                        })}
                    </MenuUl>
                  </MenuWrap>
                );
              })}

              <MenuWrap>
                <MenuTitle>문의</MenuTitle>
                <div style={{ marginBottom: 16 }}>
                  이메일 : &nbsp;
                  <a href="mailto:support@ninehire.com">
                    <strong>support@ninehire.com</strong>
                  </a>
                </div>
                <div style={{ marginBottom: 16 }}>전화 : &nbsp;070-8671-2254</div>
                <SNSSec />
                {/* <a
                  href="https://cdn.ninehire.com/document/service-introduction.pdf"
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                >
                  <Button shape="stroke" color="white">
                    <DownloadIcon color={Color.GRAY_2} />
                    서비스 소개서 다운받기
                  </Button>
                </a> */}
              </MenuWrap>

              <ServiceWrap>
                <LogoSec>
                  <NinehireLogo type="symbol" />
                </LogoSec>
                <p style={{ lineHeight: 1.6 }}>
                  주식회사 나인하이어 :: 대표: 정승현 <br />
                  사업자등록번호 308-86-02319 <br />
                  통신판매신고 제2021-부산금정-0911호 <br />
                  부산광역시 해운대구 센텀중앙로 97 센텀스카이비즈 A동 2811호
                </p>
              </ServiceWrap>
            </ContentWrap>
          </FooterContent>

          <FooterInfo>
            <div className="copyright">
              <strong>© 2021 Ninehire Corp. All Rights Reserved</strong>
            </div>
            <Link to="/terms" onClick={scrollTop}>
              <FooterLinkBtn>나인하이어 이용 약관</FooterLinkBtn>
            </Link>
            <div className="hr">&nbsp;&nbsp;|&nbsp;&nbsp;</div>

            <Link to="/policy" onClick={scrollTop}>
              <FooterLinkBtn> 개인정보처리방침</FooterLinkBtn>
            </Link>
          </FooterInfo>
        </FooterContentGrid>
      </FooterContainer>
    </>
  );
}

export default Footer;
