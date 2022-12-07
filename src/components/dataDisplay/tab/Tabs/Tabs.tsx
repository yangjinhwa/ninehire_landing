// import React, { createRef, useRef, useState, useLayoutEffect } from 'react';
// import styled from 'styled-components';
// import Color from '@src/styles/Color';
// import { TabProps } from '../../../../typings/tapsList';
// import useWindowWidth from '@src/hooks/useWindowWidth';
// import { AnimateSharedLayout, motion } from 'framer-motion';

// const TabWrapper = styled.div<{
//   position: string;
// }>`
//   position: relative;
//   display: flex;
//   overflow-x: scroll;
//   scroll-behavior: smooth;
//   justify-content: ${({ position }) => position && position};
//   border-bottom: 1px solid ${Color.GRAY_4};
// `;

// const PageWrapper = styled(motion.div)`
//   width: 100%;
//   margin: 20px 0;
// `;

// const TabButton = styled.button`
//   color: ${Color.GRAY_9};
//   padding: 12px 16px;
//   margin: 12px;
//   transition: 0.2s;
//   position: relative;
//   font-size: 15px;
//   white-space: pre;
//   border-radius: 8px;

//   &:hover {
//     font-weight: 700;
//     background-color: #eeeeee;
//   }

//   &.tabActive {
//     font-weight: 700;
//   }
// `;

// const CountSpan = styled.span`
//   font-weight: 800;
//   color: ${Color.GRAY_9};
// `;

// const TabUnderLine = styled.div`
//   background-color: ${Color.GRAY_8};
//   position: absolute;
//   width: 30px;
//   height: 4px;
//   bottom: 0;
//   transition: 0.5s ease all;
//   z-index: 1;
// `;

// type TabsProps = {
//   position?: string;
//   TabList: TabProps[];
// };

// function Tabs({ TabList, position = 'flex-start' }: TabsProps) {
//   const windowWidth = useWindowWidth();
//   const tabRefs: any = useRef(Array.from({ length: TabList.length }, () => createRef()));
//   const sliderRef = useRef<HTMLDivElement>(null);

//   const [isShow, setIsShow] = useState(true);
//   const tabUnderLine = useRef<HTMLDivElement>(null);
//   const tabWrapRef = useRef<HTMLDivElement>(null);
//   const [isTabActiveIndex, setIsTabActiveIndex] = useState(0);
//   const [moveToLeftValue, setMoveToLeftValue] = useState<number | null>(null);
//   const [underlineWidth, setUnderlineWidth] = useState(50);

//   function handleClickTab(
//     e: any,
//     index: number,
//     moveToLeft: number,
//     underlineWidth: number
//   ) {
//     e.preventDefault();
//     setIsTabActiveIndex(index);
//     // setTabIndex(`${index}`);
//     setMoveToLeftValue(moveToLeft);
//     setUnderlineWidth(underlineWidth);

//     // 다른 버튼 눌렀을 때 컴포넌트 보이기
//     if (isShow && index !== isTabActiveIndex) {
//       setIsShow(false);

//       setTimeout(() => {
//         setIsShow(true);
//       }, 300);
//     }
//   }

//   useLayoutEffect(() => {
//     // 초기 탭 값 세팅
//     if (tabRefs.current) {
//       tabRefs.current.map((ref: any, index: number) => {
//         const currentNode = ref.current;
//         const distanceTargetToLeft: number = currentNode.getBoundingClientRect().left;
//         if (tabWrapRef.current !== null) {
//           const distanceMenuBoxToLeft: number =
//             tabWrapRef.current.getBoundingClientRect().left;
//           const startTargetLeft: number = distanceTargetToLeft - distanceMenuBoxToLeft;
//           TabList[index].moveToLeft = startTargetLeft;
//           TabList[index].underlineWidth = ref.current.offsetWidth;

//           // tab index 로컬 저장값 가져오기
//           // const lastTabIndex: number = getTabIndex();
//           // setIsTabActiveIndex(lastTabIndex);
//           // setMoveToLeftValue(TabList[lastTabIndex].moveToLeft);
//           // setUnderlineWidth(TabList[lastTabIndex].underlineWidth);
//         }
//       });
//     }
//   }, [isTabActiveIndex, windowWidth]);

//   //터치에도 반응하는 슬라이드
//   function handleSlideMouseDown(e) {
//     console.log('mouseDown');

//     // setTouchX(e.pageX - sliderRef.current.offsetLeft);
//     // setScrollLeft(sliderRef.current.scrollLeft);
//     // setIsDown(true);
//   }

//   function handleSlideMouseLeave(e) {
//     console.log('mouseLeave');

//     // setIsDown(false);
//   }

//   function handleSlideMouseUp(e) {
//     console.log('mouseUp');

//     // setIsDown(false);
//     // setIsNavClick(false);
//     // setPixelX(sliderRef.current.scrollLeft);
//     // if (walk < 0) {
//     //   console.log('next');
//     //   setPercentX(percentX === -100 * (slideLength - 1) ? 0 : percentX - 100);
//     // }
//     // if (walk > 0) {
//     //   console.log('prev');
//     //   setPercentX(percentX === 0 ? -100 * (slideLength - 1) : percentX + 100);
//     // }
//   }

//   function handleSlideMouseMove(e) {
//     console.log('mouseMove');

//     // if (!isDown) {
//     //   return;
//     // }
//     // e.preventDefault();
//     // const startX = e.pageX - sliderRef.current.offsetLeft;
//     // const walk = startX - touchX;
//     // sliderRef.current.scrollLeft = scrollLeft - walk;
//     // setWalk(walk);
//   }

//   function handleMoveSlide(index) {
//     // setPercentX(index === 0 ? 0 : index * -100);
//   }
//   //터치에도 반응하는 슬라이드 end

//   return (
//     <AnimateSharedLayout>
//       <div style={{ width: '100%' }}>
//         <TabWrapper ref={tabWrapRef} position={position}>
//           {TabList &&
//             TabList.map((list, index) => {
//               const { value, count, isCount, moveToLeft, underlineWidth } = list;
//               return (
//                 <div key={index}>
//                   <TabButton
//                     onClick={(e) => handleClickTab(e, index, moveToLeft, underlineWidth)}
//                     ref={tabRefs.current[index]}
//                     className={`${isTabActiveIndex === index && 'tabActive'}`}
//                   >
//                     {value}
//                     {isCount && <CountSpan>&nbsp;{count}</CountSpan>}
//                   </TabButton>
//                 </div>
//               );
//             })}

//           <TabUnderLine
//             ref={tabUnderLine}
//             style={{
//               width: underlineWidth,
//               left: moveToLeftValue || 0,
//               display: moveToLeftValue ? 'block' : 'none',
//             }}
//           />
//         </TabWrapper>

//         <PageWrapper
//           layout
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           ref={sliderRef}
//           onMouseDown={handleSlideMouseDown}
//           onMouseMove={handleSlideMouseMove}
//           onMouseUp={handleSlideMouseUp}
//           onMouseLeave={handleSlideMouseLeave}
//         >
//           {TabList.map((list, index) => {
//             if (isTabActiveIndex === index) {
//               return <div key={index}>{list.component}</div>;
//             }
//           })}
//         </PageWrapper>
//       </div>
//     </AnimateSharedLayout>
//   );
// }

// export default Tabs;
