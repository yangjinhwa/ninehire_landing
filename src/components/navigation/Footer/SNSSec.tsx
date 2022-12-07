import React from 'react';
import styled from 'styled-components';
import Icon from '@src/components/icon/Icon';
import Color from '@src/styles/Color';
import { FooterIdMap } from '@src/typings/idMap';
import icons from '@src/components/icon/Icons';

const SNSItem = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Color.GRAY_4};
  border-radius: 12px;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: inline-block;
`;

// interface IsnsItem {
//   [key: string]: {
//     iconName: string;
//     url: string;
//     id?: FooterIdMap;
//   };
// }

interface IsnsItem {
  iconName: keyof typeof icons;
  url: string;
  id?: FooterIdMap;
}

const snsList: IsnsItem[] = [
  {
    iconName: 'Naver',
    url: 'https://blog.naver.com/ninehire',
    id: FooterIdMap.NAVERBLOG,
  },
];

function SNSSec() {
  return (
    <Wrapper>
      {snsList.map((item) => {
        const { iconName, url, id } = item;
        return (
          <a id={id} key={id} href={url} target="_blank">
            <SNSItem>
              <Icon name={iconName} color={Color.WHITE} />
            </SNSItem>
          </a>
        );
      })}
    </Wrapper>
  );
}

export default SNSSec;
