import React, { ReactElement, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { navMenuList } from '@src/routes/navMenuList';
import { ISubMenu } from '../../../routes/navMenuList';
import Color from '@src/styles/Color';
import { Link, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { RootPath } from '@src/routes/routePath';

const Wrapper = styled.div<{
  show: boolean;
}>`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 80px;

  transition: all 1s ease-in-out;
  transform-origin: top center;
  animation: 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) both alternate
    ${({ show }) => (show ? 'ItemEnter' : 'ItemExit')};

  @keyframes ItemEnter {
    0% {
      transform: translateY(15%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes ItemExit {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(15%);
      opacity: 0;
    }
  }
`;

const ItemWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 32px;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    background-color: #f7fafd;
    border-radius: 16px;
  }
`;

const ItemText = styled.p`
  word-break: keep-all;
  text-align: center;
  margin-top: 12px;
`;

const NewTag = styled.span`
  background-color: ${Color.ORANGE_8};
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  padding: 2px 6px;
  border-radius: 8px;
  margin-left: 6px;
`;

interface DropdownSecProps {
  show: boolean;
  selectedMenu: string;
}

function DropdownSec({ show, selectedMenu }: DropdownSecProps) {
  const history = useHistory();
  const location = useLocation();
  const [shouldRender, setRender] = useState(show);
  const [currentSubMenuList, setCurrentSubMenuList] = useState([]);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) {
      setRender(false);
    }
  };

  useEffect(() => {
    // 현재 선택된 메뉴의 value 공유
    if (selectedMenu) {
      const findCurrentMenu: any = navMenuList.find(
        (list) => list.value === selectedMenu
      );
      setCurrentSubMenuList(findCurrentMenu.subMenu);
    }
  }, [selectedMenu]);

  function handleSubMenuClick(currnetSubMenu) {
    if (location.pathname === RootPath.Price) {
      history.push({
        pathname: '/',
      });
    }
    window.scrollTo({ top: currnetSubMenu.scrollTop, behavior: 'smooth' });
  }

  return shouldRender ? (
    <Wrapper show={show} onAnimationEnd={onAnimationEnd}>
      <ItemWrap>
        {currentSubMenuList &&
          currentSubMenuList.map((currnetSubMenu, i) => {
            const { title, icon, isNew } = currnetSubMenu;
            return (
              <Item key={i} onClick={() => handleSubMenuClick(currnetSubMenu)}>
                {icon}
                <ItemText style={{ marginTop: '16px' }}>
                  <b>{title}</b>
                  {isNew && <NewTag>N</NewTag>}
                </ItemText>
              </Item>
            );
          })}
      </ItemWrap>
    </Wrapper>
  ) : null;
}

export default DropdownSec;
