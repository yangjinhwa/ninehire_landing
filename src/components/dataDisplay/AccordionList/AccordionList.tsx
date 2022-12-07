import React, { createRef, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Color from '@src/styles/Color';

const Wrap = styled.div`
  width: 100%;
`;

const ItemWrap = styled.div`
  border-top: 1px solid ${Color.GRAY_3};
  line-height: 1.4;

  &:first-child {
    border-top: 0;
  }
`;

const Title = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  padding: 24px 12px;
  line-height: 1.3;
  word-break: keep-all;

  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s;

  &:hover {
    background-color: ${Color.WHITE};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ArrowButton = styled.div`
  position: relative;
  padding: 12px;
  border-radius: 12px;
  background-color: ${Color.WHITE};
`;

const SelectArrow = styled.div<{
  isOpen: boolean;
}>`
  position: relative;
  height: 16px;
  width: 16px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0.24rem;
    height: 100%;
    transition: all 0.2s;
  }

  &::before {
    left: 11px;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(45deg)')};
    background-color: #000000;
  }

  &::after {
    left: 2px;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(-45deg)')};
    background-color: #000000;
  }
`;

const Contents = styled.div<{
  isShow: boolean;
}>`
  font-size: 16px;
  word-break: keep-all;
  padding: 16px 12px 32px;
  transition: all 0.2s;
  animation: 0.2s ease-in-out both alternate
    ${({ isShow }) => (isShow ? 'accordionOpen' : 'accordionClose')};

  @keyframes accordionOpen {
    0% {
      /* max-height: 0; */
      transform: translateY(-10px);
      opacity: 0;
    }
    100% {
      /* max-height: inherit; */
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes accordionClose {
    0% {
      /* max-height: inherit; */
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      /* max-height: 0; */
      transform: translateY(-10px);
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

type AccordionListProps = {
  list: any;
};

interface IAccordionList {
  id: number;
  title: string;
  contents: JSX.Element | JSX.Element[] | string;
}

const DemoList: IAccordionList[] = [
  {
    id: 0,
    title: '언제까지 무료인가요?',
    contents: (
      <>
        정식 출시 전까지 현재 베타 버전에서 <strong>모든 기능은 무료</strong>로
        제공됩니다.
        <br /> - 자동 공고 게시(사람인, 잡코리아, 인크루트, 잡플래닛 총 4개 사이트)
        <br /> - 지원자 평가(칸반 보드, 코멘트 작성)
      </>
    ),
  },
  {
    id: 1,
    title: '앞으로 연동할 수 있는 채용 사이트가 늘어나나요?',
    contents:
      '네, 지원하는 채용 사이트를 보다 늘릴 예정입니다. 더욱 많은 지원자를 모집할 수 있도록 직군별로 전문화된 채용사이트, SNS의 채용 게시판, 각 대학의 채용 게시판 등 다양한 채용 사이트를 연동하기 위해 준비하고 있습니다.',
  },
  {
    id: 2,
    title: '앞으로 어떤 기능들이 업데이트 되나요?',
    contents: '답변3',
  },
  {
    id: 3,
    title: '정식 출시는 언제 되나요?',
    contents:
      '올해 하반기 중 정식출시를 목표로 현재 베타 버전에서 제공하는 기능의 고도화와 신규 기능 개발을 진행하고 있습니다. 빠른 시일내로 정식출시 소식을 전해드리도록 하겠습니다.',
  },
];

function AccordionList({ list }: AccordionListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setRender] = useState(isOpen);
  const [isListActiveIndex, setIsListActiveIndex] = useState(0);
  const listWrapRef: any = useRef(Array.from({ length: list.length }, () => createRef()));

  function handleOpenList(e: any, index: number) {
    setIsListActiveIndex(index);
    setIsOpen(!isOpen);

    // 다른 list를 눌렀을 때
    if (index !== isListActiveIndex) {
      setIsOpen(true);
      setRender(true);
    }
  }

  useLayoutEffect(() => {
    if (isOpen) {
      setRender(true);
    }
  }, [isOpen]);

  const onAnimationEnd = () => {
    if (!isOpen) {
      setRender(false);
    }
  };

  return (
    <Wrap>
      {list.map((item: IAccordionList, index: number) => {
        const { id, title, contents } = item;
        return (
          <ItemWrap key={id} ref={listWrapRef.current[index]}>
            <Title onClick={(e) => handleOpenList(e, index)}>
              <span>{title}</span>
              <ArrowButton>
                <SelectArrow isOpen={isListActiveIndex === index && isOpen} />
              </ArrowButton>
            </Title>
            {isListActiveIndex === index && shouldRender && (
              <Contents isShow={isOpen} onAnimationEnd={onAnimationEnd}>
                {contents}
              </Contents>
            )}
          </ItemWrap>
        );
      })}
    </Wrap>
  );
}

export default AccordionList;
