import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@src/components/dataEntry/button/Button';
import MainLogo from '@src/components/navigation/MainLogo/MainLogo';
import { useHistory, useLocation } from 'react-router';
import { HrefLinks } from '@src/typings/hrefLink.enum';
import { MenuType, NavMenuList, navMenuList } from '@src/routes/navMenuList';
import { NavLink } from 'react-router-dom';
import scrollTop from '@src/hooks/resetScrollTop';
import DropdownWrapper from '@src/components/wrapper/DropdownWrapper';
import Color from '@src/styles/Color';
import useIsScrolledY from '@src/hooks/useIsScrolledY';
import FlexBox from '@src/components/flexbox/FlexBox';
import Body from '@src/styles/typhography/Body';
import InquiryModal from '@src/pages/Inquiry/InquiryModal';
import { RootPath } from '@src/routes/routePath';
import RegisterModal from '@src/pages/Home/MainSec/RegisterModal';

const NavList = styled.div`
  display: flex;
  align-items: center;
  > * + * {
    margin-left: 12px;
  }
`;

const NavWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItemBtn = styled.button`
  user-select: none;
  padding: 12px;
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: all 0.2s;
  font-weight: 700;
  font-size: 16px;
  color: ${Color.GRAY_8};

  &:hover {
    cursor: pointer;
    background-color: rgba(95, 60, 250, 0.1);
  }
`;

const SubMenuItem = styled.div<{
  height: number;
  isActiveNav?: boolean;
}>`
  user-select: none;
  border-radius: 6px;
  width: 100%;
  height: ${({ height }) => height}px;
  padding: 0 6px;
  display: flex;
  align-items: center;
  transition: 0.2s;
  ${({ isActiveNav }) => isActiveNav && `background-color: ${Color.PURPLE_1}`};

  &:hover {
    background-color: ${Color.PURPLE_1};
  }
`;
const HeaderBtnWrap = styled.header`
  display: flex;
  align-items: center;
`;
const Header = styled.header<{}>`
  position: relative;
  top: 0px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

const MainLogoSec = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.nav<{
  isFixed?: boolean;
  isScrolled: boolean;
}>`
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'inherit')};

  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 100;

  background-color: ${({ isScrolled }) => (isScrolled ? '#fff' : 'transparent')};
  box-shadow: ${({ isScrolled }) => isScrolled && '0px 8px 24px rgba(0, 0, 0, 0.06);'};
  transition: background-color 0.2s;
`;

const NewTag = styled.div`
  user-select: none;
  width: 18px;
  height: 18px;
  background-color: ${Color.ORANGE_6};
  border-radius: 8px;
  position: relative;
  margin-left: 6px;

  &::after {
    position: absolute;
    content: 'N';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    font-weight: 800;
    color: white;
  }
`;

interface SlideTopNavProps {
  fixed?: boolean;
}

function TopNav({ fixed = false }: SlideTopNavProps) {
  const history = useHistory();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isScrolled = useIsScrolledY(100);
  const navListRef = useRef<HTMLDivElement>(null);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState<number>(0);
  const isStage = window.location.origin.includes('stage');
  const [currentRoute, setCurrentRoute] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location]);

  function goToMain() {
    history.push('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleClickOutside(e: any, dropdownNode) {
    if (navListRef.current) {
      const isContainTarget =
        navListRef.current.contains(e.target) || dropdownNode.contains(e.target);

      if (!isContainTarget && dropdownOpen) {
        setDropdownOpen(false);
      }
    }
  }

  function handleClickMenu() {
    scrollTop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openRegisterModal() {
    setRegisterModalVisible(true);
  }

  function closeRegisterModal() {
    setRegisterModalVisible(false);
  }

  return (
    <Wrapper isFixed={fixed} isScrolled={isScrolled}>
      {/* <TopBanner /> */}
      <Header>
        <NavWrap>
          <MainLogoSec onClick={goToMain}>
            <MainLogo />
          </MainLogoSec>
          <NavList ref={navListRef}>
            {navMenuList.map((list, index) => {
              const { type, linkto, title, value, subMenu, navId } = list;

              if (type === MenuType.LINK && linkto) {
                return (
                  <NavLink
                    key={index}
                    to={linkto}
                    activeStyle={{ fontWeight: 800 }}
                    onClick={handleClickMenu}
                    id={navId}
                  >
                    <NavItemBtn>{title}</NavItemBtn>
                  </NavLink>
                );
              }
              if (type === MenuType.DROPDOWN) {
                return (
                  <div style={{ position: 'relative' }}>
                    <NavItemBtn
                      value={value}
                      key={index}
                      onClick={() => {
                        setSelectedMenuIndex(index);
                        setDropdownOpen(!dropdownOpen);

                        // 기존과 다른 menu를 눌렀을 때
                        if (selectedMenuIndex !== index) {
                          setDropdownOpen(true);
                        }
                      }}
                    >
                      {title}
                      {list.isNew && <NewTag />}
                      <svg
                        width="9"
                        height="6"
                        viewBox="0 0 9 6"
                        fill="none"
                        style={{ paddingLeft: 8, userSelect: 'none' }}
                      >
                        <path
                          d="M1.17236 1.17383L4.22852 4.22974L7.28442 1.17383"
                          stroke={Color.GRAY_8}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </NavItemBtn>
                    <DropdownWrapper
                      style={{ width: 263, padding: 16 }}
                      open={selectedMenuIndex === index && dropdownOpen}
                      handleClickOutside={handleClickOutside}
                    >
                      {subMenu.map((subData, i) => {
                        if (value === NavMenuList.SOLUTION) {
                          return (
                            <a
                              href={subData.outLinkto}
                              target="_blank"
                              key={i}
                              id={subData.navId}
                            >
                              <SubMenuItem height={40}>
                                {subData.icon}
                                <Body
                                  size={15}
                                  bold
                                  color={Color.GRAY_9}
                                  style={{ marginLeft: 16 }}
                                >
                                  {subData.title}
                                </Body>
                              </SubMenuItem>
                            </a>
                          );
                        }

                        return (
                          <NavLink
                            to={subData.linkto}
                            id={subData.navId}
                            key={i}
                            onClick={() => {
                              setCurrentRoute(subData.linkto);
                              window.scrollTo(0, 0);
                            }}
                          >
                            <SubMenuItem
                              height={56}
                              isActiveNav={subData.linkto === currentRoute}
                            >
                              {subData.icon}
                              <FlexBox
                                direction="column"
                                align="flex-start"
                                style={{ marginLeft: 12, userSelect: 'none' }}
                              >
                                <Body size={15} bold color={Color.GRAY_9}>
                                  {subData.title}
                                </Body>
                                <Body size={12} color={Color.GRAY_7}>
                                  {subData.description}
                                </Body>
                              </FlexBox>
                            </SubMenuItem>
                          </NavLink>
                        );
                      })}
                    </DropdownWrapper>
                  </div>
                );
              }
            })}
          </NavList>
        </NavWrap>
        <HeaderBtnWrap>
          {/* <Button
            id="tnb-ask-btn"
            color="default"
            onClick={() => setOpenModal(true)}
            style={{ marginRight: 12 }}
          >
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              style={{ marginRight: 8, pointerEvents: 'none' }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.4167 9.57336C17.4167 10.6642 17.0133 11.7367 16.2892 12.6167L16.665 14.7709C16.7567 15.22 16.555 15.6692 16.1608 15.9167C15.9775 16.0267 15.7758 16.0817 15.5742 16.0817C15.3358 16.0817 15.1067 15.9992 14.905 15.8525L13.145 14.5234C10.89 15.0459 8.58 14.2759 7.22333 12.69C7.095 12.6992 6.9575 12.7084 6.82917 12.7084C6.22417 12.7084 5.61917 12.635 5.0325 12.4884L2.805 14.175C2.59417 14.34 2.3375 14.4225 2.08083 14.4225C1.87 14.4225 1.64083 14.3584 1.44833 14.2392C1.02667 13.9734 0.806667 13.4875 0.898333 12.9925L1.39333 10.2884C0.495 9.22503 0 7.91419 0 6.57586C0 3.19336 3.07083 0.443359 6.8475 0.443359C9.89083 0.443359 12.485 2.23086 13.365 4.70586C15.73 5.34753 17.4167 7.32752 17.4167 9.57336ZM5.09667 11.0675C5.665 11.2417 6.25167 11.3242 6.8475 11.3242C9.86333 11.3242 12.32 9.19753 12.32 6.57586C12.32 3.95419 9.86333 1.81836 6.8475 1.81836C3.83167 1.81836 1.375 3.94503 1.375 6.56669C1.375 7.67586 1.82417 8.74836 2.63083 9.59169L2.86917 9.84836L2.32833 12.8092L4.76667 10.9759L5.09667 11.0675ZM14.8133 12.2042L15.0517 11.9475C15.6933 11.2692 16.0417 10.4259 16.0417 9.57336C16.0417 8.16169 15.0883 6.88753 13.6767 6.27336C13.6858 6.37419 13.695 6.47503 13.695 6.57586C13.695 9.30753 11.6967 11.6267 8.9375 12.415C10.0467 13.24 11.605 13.5517 13.1175 13.1117L13.4475 13.0109L15.2075 14.34L14.8133 12.2042ZM4.18921 6.00757H9.22171C9.59754 6.00757 9.90921 6.31923 9.90921 6.69507C9.90921 7.0709 9.59754 7.38257 9.22171 7.38257H4.18921C3.81338 7.38257 3.50171 7.0709 3.50171 6.69507C3.50171 6.31923 3.81338 6.00757 4.18921 6.00757Z"
                fill={Color.WHITE}
              />
            </svg>
            도입 문의
          </Button> */}

          <a
            target="_blank"
            rel="noreferrer"
            style={{ marginRight: 12 }}
            href={isStage ? HrefLinks.ninehireStageLogin : HrefLinks.ninehireLogin}
          >
            <Button id="tnb-login-btn" shape="stroke">
              로그인
            </Button>
          </a>
          <Button id="tnb-signup-btn" color="primary" onClick={openRegisterModal}>
            무료로 체험하기
          </Button>
        </HeaderBtnWrap>
      </Header>
      {registerModalVisible && <RegisterModal onClose={closeRegisterModal} />}
      {openModal && (
        <InquiryModal
          onClose={() => {
            setOpenModal(false);
          }}
        />
      )}
    </Wrapper>
  );
}

export default TopNav;
