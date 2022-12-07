import React from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { MenuType, navMenuList } from '@src/routes/navMenuList';
import scrollTop from '@src/hooks/resetScrollTop';
import { openChannel } from '../../../utill/channel.function';
import { Link } from 'react-router-dom';
import { RootPath } from '@src/routes/routePath';

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  > * + * {
    margin-left: 12px;
  }
`;

const NavItemBtn = styled.button`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const NavDropdownBtn = styled.button`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ChannelBtn = styled.button`
  padding: 12px;
  border-radius: 8px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

interface NavListProps {
  setShowDropdown: any;
  setSelectedMenu: any;
  setIsHover: any;
  showDropdown: boolean;
  selectedMenu: string;
}

function NavList({
  setShowDropdown,
  showDropdown,
  selectedMenu,
  setSelectedMenu,
  setIsHover,
}: NavListProps) {
  const history = useHistory();
  const location = useLocation();

  function handleClickSubMenu(menu: string) {
    if (location.pathname === RootPath.Price) {
      console.log('트루');
      history.push('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 같은 버튼 눌렀을 때
    if (selectedMenu === menu) {
      setIsHover(true);
    }
    // 다른 버튼 눌렀을 때
    if (showDropdown && selectedMenu !== menu) {
      setShowDropdown(false);

      setTimeout(() => {
        setSelectedMenu(menu);
        setShowDropdown(true);
      }, 500);
    }

    // 처음 눌렀을 때
    if (!showDropdown) {
      setSelectedMenu(menu);
      setShowDropdown(true);
      setIsHover(true);
    }
  }

  function handleClickMenu() {
    console.log('click');
    scrollTop();
  }

  return (
    <>
      <Wrapper>
        {navMenuList.map((list, index) => {
          const { type, linkto, title, value } = list;
          if (type === MenuType.LINK && linkto) {
            return (
              <NavLink
                key={index}
                to={linkto}
                activeStyle={{ fontWeight: 800 }}
                onClick={handleClickMenu}
              >
                <NavItemBtn>{title}</NavItemBtn>
              </NavLink>
            );
          }
          if (type === MenuType.DROPDOWN) {
            return (
              <NavDropdownBtn
                value={value}
                key={index}
                onClick={() => handleClickSubMenu(value)}
              >
                {title}
              </NavDropdownBtn>
            );
          }
        })}
        <ChannelBtn onClick={openChannel}>문의하기</ChannelBtn>
      </Wrapper>
    </>
  );
}
export default NavList;
