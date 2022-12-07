import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Label from '../../Input/Label/Label';

import TextareaBase from '../TextareaStyle';

interface TextareaProps {
  value: string;
  isValid?: boolean;
  maxLength?: number;
  minRows?: number;
  maxRows?: number;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  label?: string;
  required?: boolean;
  block?: boolean;
  style?: any;
  [propsName: string]: any;
}

function AutoTextarea({
  isValid,
  maxLength = 500,
  minRows = 1,
  maxRows = 8,
  value,
  onChange,
  label,
  required,
  block = true,
  style,
  ...props
}: TextareaProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [rows, setRows] = useState(minRows);

  function onChangeHandler(e: any) {
    const textareaLineHeight = 24;

    const previousRows = e.target.rows;
    e.target.rows = minRows; // reset number of rows in textarea

    const currentRows = ~~(e.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      e.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      e.target.rows = maxRows;
      e.target.scrollTop = e.target.scrollHeight;
    }
    setRows(currentRows < maxRows ? currentRows : maxRows);

    onChange?.(e); // handleChange props가 있으면 실행
  }

  return (
    <>
      {label && <Label required={required}>{label}</Label>}
      <TextareaBase
        style={style}
        block={block}
        isValid={isValid}
        ref={textAreaRef}
        onChange={(e) => onChangeHandler(e)}
        rows={rows}
        maxLength={maxLength}
        {...props}
      />
    </>
  );
}

export default AutoTextarea;
