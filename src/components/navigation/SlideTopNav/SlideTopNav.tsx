import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import MainLogo from '@src/components/navigation/MainLogo/MainLogo';
import NavList from './NavList';
import { HrefLinks } from '@src/typings/hrefLink.enum';
import DropdownSec from './DropdownSec';
import Color from '@src/styles/Color';
import Button from '@src/components/dataEntry/button/Button';
import Theme from '@src/styles/Theme';
import useIsScrolledY from '@src/hooks/useIsScrolledY';

const Wrapper = styled.nav<{
  isFixed?: boolean;
}>`
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'inherit')};
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 1;
`;

const Header = styled.header`
  position: relative;
  top: 0px;
  width: 100%;
  height: 100%;
  max-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  background-color: transparent;

  @media (max-width: 1110px) {
    padding: 0 30px;
  }
`;

const HeaderBtnWrap = styled.header`
  display: flex;
  align-items: center;
`;

const HeaderListWrap = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BackgroundWrap = styled.section<{
  isScrolled: boolean;
  isHover: boolean;
}>`
  position: absolute;
  top: 0px;
  width: 100%;
  overflow: hidden;
  transition: padding-top 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  ${({ isScrolled, isHover }) =>
    !isScrolled && isHover ? 'box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px' : ''};
  ${({ isScrolled, isHover }) =>
    isScrolled && isHover ? 'box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px' : ''};
  background-color: ${Color.WHITE};
  z-index: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  width: 100%;
  max-width: ${Theme.landingGrid};
  padding: 0 16px;
  margin: 0 auto;
  /* border-bottom: 1px solid ${Color.BLUE_GRAY_4};
  background-color: ${Color.WHITE}; */
`;

interface SlideTopNavProps {
  fixed?: boolean;
}

function SlideTopNav({ fixed = false }: SlideTopNavProps) {
  const history = useHistory();
  const [isHover, setIsHover] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('');
  const [headerPaddingTop, setHeaderPaddingTop] = useState('0');
  const isScrolled: boolean = useIsScrolledY(300);

  useEffect(() => {
    if (isScrolled && !isHover) {
      return setHeaderPaddingTop('60px');
    }
    if (isScrolled || isHover) {
      return setHeaderPaddingTop('260px');
    }
    return setHeaderPaddingTop('0');
  }, [isScrolled, isHover]);

  function handleLeave() {
    setIsHover(false);
    setShowDropdown(false);
  }

  function goToMain() {
    history.push({
      pathname: '/',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Wrapper isFixed={fixed}>
      <Grid>
        <Header>
          <HeaderListWrap>
            <div onClick={goToMain}>
              <MainLogo />
            </div>
            <NavList
              showDropdown={showDropdown}
              setShowDropdown={setShowDropdown}
              selectedMenu={selectedMenu}
              setSelectedMenu={setSelectedMenu}
              setIsHover={setIsHover}
            />
          </HeaderListWrap>

          <HeaderBtnWrap>
            <a href={HrefLinks.ninehireLogin} style={{ marginRight: '12px' }}>
              <Button shape="stroke">로그인</Button>
            </a>
            <a href={HrefLinks.ninehireRegister}>
              <Button color="primary">무료로 시작하기</Button>
            </a>
          </HeaderBtnWrap>
        </Header>
      </Grid>

      <BackgroundWrap
        isHover={isHover}
        isScrolled={isScrolled}
        style={{ paddingTop: headerPaddingTop }}
        onMouseLeave={handleLeave}
      >
        <DropdownSec show={showDropdown} selectedMenu={selectedMenu} />
      </BackgroundWrap>
    </Wrapper>
  );
}

export default SlideTopNav;
