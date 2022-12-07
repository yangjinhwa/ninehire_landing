import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { MenuType, navMenuList } from '@src/routes/navMenuList';
import scrollTop from '@src/hooks/resetScrollTop';

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  a {
    margin-right: 12px;
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
  margin-right: 12px;

  &:hover {
    cursor: pointer;
  }
`;

function TopNavList() {
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
                onClick={scrollTop}
              >
                <NavItemBtn>{title}</NavItemBtn>
              </NavLink>
            );
          }
          if (type === MenuType.DROPDOWN) {
            return (
              <NavDropdownBtn value={value} key={index}>
                {title}
              </NavDropdownBtn>
            );
          }
        })}
      </Wrapper>
    </>
  );
}
export default TopNavList;
