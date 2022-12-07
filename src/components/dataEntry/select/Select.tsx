import React, { useState, useCallback, createRef, useRef, useEffect } from 'react';
import { Options, SelectWrap } from './selectorStyle';
import SelectBtn from './SelectBtn';
import Scrollbar from './DropdownScrollbar';
import { Scrollbars } from 'react-custom-scrollbars';
import keyCode from '@src/typings/keyCode';
import Label from '../Input/Label/Label';
import DropdownWrapper from '@src/components/wrapper/DropdownWrapper';

type SelectProps = {
  selectedValue: string;
  setSelectedValue: any;
  selectList: ISelectList[] | undefined | null;
  setSelectedKeyValue?: any;
  defaultValue?: string;
  label?: string;
  disabled?: boolean;
  maxHeight?: number;
  style?: any;
  width?: string | number;
  placeholder?: string;
};

export interface ISelectList {
  value: string;
  key: string;
  order?: number;
  defaultValue?: boolean;
}

export function Select({
  label,
  selectList,
  setSelectedValue,
  selectedValue,
  setSelectedKeyValue,
  disabled,
  maxHeight = 160,
  style,
  width,
  placeholder,
}: SelectProps) {
  const [isOpen, setisOpen] = useState(false);
  const [activeIndex, setactiveIndex] = useState(0);

  const selectRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<Scrollbars>(null);
  const refs: any = useRef(Array.from({ length: selectList!.length }, () => createRef()));

  const handleClickTrigger = useCallback(
    (e: any) => {
      e.stopPropagation();
      setisOpen(!isOpen);
    },
    [isOpen]
  );

  function handleSelect(index: number) {
    const { value: selectedValue, key: selectedKeyVlaue } = selectList![index];
    setactiveIndex(index);
    setSelectedValue(selectedValue);
    setisOpen(false);
  }

  /*
   *
   *
   * 키보드의 위, 아래, 엔터 키 누를 때
   */
  function handleKeyDown(e: any) {
    const { key } = e;
    if (key === keyCode.ARROW_DOWN) {
      e.preventDefault();
      setactiveIndex((prevState) =>
        prevState < selectList!.length - 1 ? prevState + 1 : 0
      );
    }

    if (key === keyCode.ARROW_UP) {
      e.preventDefault();
      setactiveIndex((prevState) =>
        prevState > 0 ? prevState - 1 : selectList!.length - 1
      );
    }

    if (key === keyCode.ENTER || key === keyCode.TAB) {
      e.preventDefault();
      handleSelect(activeIndex);
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex]);

  /*
   *
   *
   * select 바깥 쪽 눌렀을 때
   */
  function handleClickOutside(e: any) {
    if (selectRef.current) {
      if (!selectRef.current.contains(e.target) && isOpen) {
        setisOpen(false);
      }
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  /*
   *
   *
   *  방향키 누를때 마다의 스크롤 변화
   */
  useEffect(() => {
    const scrollbar = document.getElementById('dropdown-scrollbar');

    if (scrollbar) {
      const heightOfPrevIndex = activeIndex * 36 + 4;
      const heightOfNowIndex = (activeIndex + 1) * 36 + 12;
      const heightofScrollStart = scrollbar.scrollTop;
      const heightOfScrollEnd = scrollbar.scrollTop + scrollbar.clientHeight;

      if (heightOfPrevIndex < heightofScrollStart) {
        scrollbar.scrollTop = heightOfPrevIndex;
      } else if (heightOfNowIndex > heightOfScrollEnd) {
        scrollbar.scrollTop =
          scrollbar.scrollTop + (heightOfNowIndex - heightOfScrollEnd);
      }
    }
  }, [activeIndex]);

  return (
    <SelectWrap ref={selectRef} style={{ width: width, ...style }}>
      {label && <Label>{label}</Label>}
      <SelectBtn
        onClick={handleClickTrigger}
        value={selectedValue || placeholder}
        open={isOpen}
        disabled={disabled}
      />
      <DropdownWrapper open={isOpen} style={{ width: width }}>
        <Scrollbar
          maxheight={maxHeight}
          autoHide={false}
          ref={scrollbarRef}
          renderView={(props) => <div {...props} id="dropdown-scrollbar" />}
        >
          {selectList &&
            selectList.map((list, index) => {
              const { value, key } = list;
              return (
                <Options
                  key={index}
                  ref={refs.current[index]}
                  isActiveIndex={activeIndex === index}
                  onClick={() => handleSelect(index)}
                  tabIndex={0}
                >
                  {value}
                </Options>
              );
            })}
        </Scrollbar>
      </DropdownWrapper>
    </SelectWrap>
  );
}

export default React.memo(Select);
