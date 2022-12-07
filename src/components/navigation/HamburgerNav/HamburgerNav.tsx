import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Color from '@src/styles/Color';
import { HrefLinks } from '@src/typings/hrefLink.enum';
import MainLogo from '@src/components/navigation/MainLogo/MainLogo';
import HamburgerIcon from '@src/components/dataDisplay/Icons/HamburgerIcon';

import { MenuType, navMenuList } from '@src/routes/navMenuList';
import Button from '@src/components/dataEntry/button/Button';
import scrollTop from '@src/hooks/resetScrollTop';
import SideModalWrapper from '@src/components/wrapper/SideModalWrapper';
import useIsScrolledY from '@src/hooks/useIsScrolledY';
import InquiryModal from '@src/pages/Inquiry/InquiryModal';
import RegisterModal from '@src/pages/Home/MainSec/RegisterModal';

const Wrapper = styled.nav`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 100;
`;

const MobileNavWrapper = styled.nav<{
  isScrolled: boolean;
}>`
  width: 100%;
  height: 60px;
  top: 40px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  transition: 0.5s ease background-color, border-bottom;
  background-color: ${({ isScrolled }) => (isScrolled ? '#ffffff' : 'transparent')};
  border-bottom: 1px solid
    ${({ isScrolled }) => (isScrolled ? Color.GRAY_3 : 'transparent')};
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 0 16px 24px 16px;

  a {
    width: 100%;
  }

  @media (max-width: 460px) {
    flex-direction: column;
  }
`;

const BetaInfo = styled.p`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  color: ${Color.GRAY_6};
  font-size: 14px;
  word-break: keep-all;

  /* border-bottom: 1px solid ${Color.GRAY_4}; */
`;

const MenuHeader = styled.div`
  text-align: left;
  padding: 12px 20px;
  color: ${Color.GRAY_7};
  font-weight: 700;
  font-size: 15px;
`;

const Item = styled.div`
  padding: 12px 20px;
  font-size: 14px;
  margin-left: 12px;
  &:hover {
    cursor: pointer;
    background-color: ${Color.GRAY_2};
    font-weight: 700;
  }
`;

function SubMenuSec({ subMenuList, setshowMenu, closeMenu }: any) {
  function handleSubMenuClick(scrollTop: number) {
    window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    closeMenu();
  }

  return (
    subMenuList &&
    subMenuList.map((list: any, i: number) => {
      const { title, scrollTop } = list;
      if (list.outLinkto) {
        return (
          <a href={list.outLinkto} target="_blank" key={i}>
            <Item>{list.title}</Item>
          </a>
        );
      }
      return (
        <Link key={i} to={list.linkto} onClick={() => handleSubMenuClick(scrollTop)}>
          <Item>{title}</Item>
        </Link>
      );
    })
  );
}

function HamburgerNav() {
  const history = useHistory();
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [showMenu, setshowMenu] = useState(false);
  const isScrolled: boolean = useIsScrolledY(60);
  const closeMenu = useCallback(() => setshowMenu(false), []);
  const resetMenu = useCallback(() => {
    closeMenu();
    window.scroll({ top: 0, behavior: 'smooth' });
  }, []);
  const [openModal, setOpenModal] = useState(false);

  const toggleMenu = useCallback(() => setshowMenu(!showMenu), [showMenu]);
  const openRegisterModal = useCallback(() => {
    closeMenu();
    setRegisterModalVisible(true);
  }, []);
  const closeRegisterModal = useCallback(() => setRegisterModalVisible(false), []);

  function handleClickLogo() {
    history.push('/');
    scrollTop();
  }

  return (
    <Wrapper>
      {/* <TopBanner /> */}
      <MobileNavWrapper isScrolled={isScrolled}>
        <div>
          <Link to="/" onClick={handleClickLogo}>
            <MainLogo />
          </Link>
        </div>
        <HamburgerIcon onClick={() => toggleMenu()} isActive={showMenu} />
        {/* 모바일 메뉴 오픈 시 */}
        {showMenu && (
          <SideModalWrapper show={showMenu} outsideClick={closeMenu}>
            <BetaInfo>
              {/* <span>
                  나인하이어가 <b style={{ color: Color.PURPLE_7 }}>정식 출시</b>{' '}
                  되었습니다. <br />
                </span> */}
            </BetaInfo>
            <ButtonWrap>
              <Button block color="primary" onClick={openRegisterModal}>
                무료로 체험하기
              </Button>
              <a href={HrefLinks.ninehireLogin}>
                <Button block shape="stroke">
                  로그인
                </Button>
              </a>
            </ButtonWrap>
            <ul>
              {navMenuList.map((navMenu, i) => {
                const { title, linkto } = navMenu;
                if (navMenu.type === MenuType.DROPDOWN) {
                  return (
                    <>
                      <MenuHeader>{title}</MenuHeader>
                      <SubMenuSec
                        subMenuList={navMenu.subMenu}
                        setshowMenu={setshowMenu}
                        closeMenu={closeMenu}
                      />
                    </>
                  );
                }
                if (navMenu.type === MenuType.LINK) {
                  return (
                    <Link key={i} to={linkto} onClick={resetMenu}>
                      <MenuHeader>{title}</MenuHeader>
                    </Link>
                  );
                }
              })}
            </ul>
          </SideModalWrapper>
        )}
      </MobileNavWrapper>
      {openModal && <InquiryModal onClose={() => setOpenModal(false)} />}
      {registerModalVisible && <RegisterModal onClose={closeRegisterModal} />}
    </Wrapper>
  );
}

export default HamburgerNav;
