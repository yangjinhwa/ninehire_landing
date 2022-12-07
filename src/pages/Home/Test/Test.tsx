import Carousel from '@src/components/dataDisplay/Carousel/Carousel';
import CustomTabs from '@src/components/dataDisplay/tab/CustomTabs/CustomTabs';
import ToggleTab from '@src/components/dataDisplay/tab/ToggleTab/ToggleTab';
import MultipleSwitch from '@src/components/dataEntry/switch/MultipleSwitch';
import React, { useState } from 'react';
import styled from 'styled-components';
import ScrollBackTop from './ScrollBackTop';
import Color from '@src/styles/Color';
import VerticalTab from '@src/components/dataDisplay/tab/VerticalTab/VerticalTab';
import Button from '@src/components/dataEntry/button/Button';
import ArrowBtn from './ArrowBtn/ArrowBtn';

const Div = styled.div`
  width: 100%;
  max-width: 600px;
  overflow-x: scroll;
  height: 500px;
  margin: 120px auto 0;
  background-color: ${Color.GRAY_8};
  padding: 16px;
`;

const TabWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

function makePhotoCardList() {
  const initialList = Array.from({ length: 16 }, (_, i) => i);
  const newMock = initialList.map((list, i) => {
    return {
      id: `item-${i}`,
      key: i,
      value: `category-${i}`,
    };
  });
  return newMock;
}

const tabList = [
  {
    order: 0,
    value: '탭1',
    contents: <TabWrap>하나</TabWrap>,
  },
  {
    order: 1,
    value: '두줄이넘어가는 탭이름2',
    contents: <TabWrap>둘</TabWrap>,
  },
  {
    order: 2,
    value: '또다른 탭3',
    contents: <TabWrap>셋</TabWrap>,
  },
  {
    order: 3,
    value: '또다른 탭4',
    contents: <TabWrap>4</TabWrap>,
  },
  {
    order: 4,
    value: '또다른 탭5',
    contents: <TabWrap>5</TabWrap>,
  },
  {
    order: 5,
    value: '또다른 탭6',
    contents: <TabWrap>6</TabWrap>,
  },
  {
    order: 6,
    value: '또다른 탭7',
    contents: <TabWrap>7</TabWrap>,
  },
];

function Test() {
  const [showWizard, setShowWizard] = useState(false);
  const switchMap = [
    { key: 'list', value: '리스트형' },
    { key: 'kanban', value: '칸반보드형' },
  ];
  function handleSwitch() {}
  return (
    <>
      <Div>
        <ArrowBtn />
        <ArrowBtn direction="right" />
        <Button
          onClick={() => {
            setShowWizard(!showWizard);
          }}
        >
          도움말 열기
        </Button>
        {/* <ScrollBackTop style={{ position: 'fixed', zIndex: 100 }} /> */}
        <div style={{ display: 'inline-block' }}>
          <ToggleTab gridFix>
            <div key="active">활성화</div>
            <div key="enable">비활성화</div>
            <div key="another">하나더 탭있습니다.</div>
          </ToggleTab>
        </div>
        <div style={{ width: '100%', height: 200 }}>
          <VerticalTab tabList={tabList} tabBtnWidth={200} />
        </div>

        <div style={{ width: '100%', display: 'flex' }}>
          <CustomTabs tabList={tabList} />
        </div>
        <iframe
          src="https://gomiwork.notion.site/Notion-Board-5b7cf7217f4244009c73c98829264d9b"
          name="프레임 이름"
          width="500px"
          height="500px"
          sandbox="allow-scripts allow-popups"
        >
          iframe를 지원하지 않는 브라우저인 경우 대체정보를 제공
        </iframe>

        {showWizard && <div>아이프레임줘</div>}

        {/* <MultipleSwitch
        setSelectedKey={setSelectedKey}
        list={switchMap}
        handleSwitch={handleSwitch}
      />
      <Carousel>
        <div style={{ width: 200, height: 200, background: '#0099FF' }} />
        <div style={{ width: 200, height: 200, background: '#6666FF' }} />
        <div style={{ width: 200, height: 200, background: '#0055FF' }} />
        <div style={{ width: 200, height: 200, background: '#777792' }} />
        <div style={{ width: 200, height: 200, background: '#f9f9f9' }} />
      </Carousel> */}
      </Div>
    </>
  );
}

export default Test;
