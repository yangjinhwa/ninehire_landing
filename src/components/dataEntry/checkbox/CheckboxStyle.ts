import Color from '@src/styles/Color';
import styled, { css } from 'styled-components';

const CheckboxBase = styled.input.attrs((props) => ({
  type: 'checkbox',
}))<{}>`
  --active: ${Color.GRAY_9};
  --active-inner: ${Color.WHITE};
  --focus: 2px ${Color.GRAY_4};
  --border: ${Color.GRAY_4};
  --border-hover: ${Color.GRAY_9};
  --background: ${Color.WHITE};
  --disabled: ${Color.GRAY_3};
  --disabled-inner: ${Color.GRAY_2};
  --disabled-label: ${Color.GRAY_6};

  /* ========  default ========= */
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 21px;
  height: 21px;
  outline: none;
  display: inline-block;
  vertical-align: top;
  position: relative;
  margin: 0;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid var(--bc, var(--border));
  background: var(--b, var(--background));
  transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;

  /* ======== checked ======= */
  &:checked {
    --b: var(--active);
    --bc: var(--active);
    --d-o: 0.3s;
    --d-t: 0.6s;
    --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
    --r: 43deg;
    --o: 1;
  }

  /* ======== check-mark ======== */
  &:after {
    content: '';
    display: block;
    left: 0;
    top: 0;
    position: absolute;
    opacity: var(--o, 0);
    width: 5px;
    height: 9px;
    border: 2px solid var(--active-inner);
    border-top: 0;
    border-left: 0;
    left: 6px;
    top: 3px;
    transform: rotate(var(--r, 20deg));
    transition: transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s);
  }

  /* ======== hover ======== */
  &:hover {
    &:not(:checked) {
      &:not(:disabled) {
        --bc: var(--border-hover);
      }
    }
  }

  /* ======== focus ======== */
  &:focus {
    box-shadow: 0 0 0 var(--focus);
  }

  /* ======== disabled ======== */
  &:disabled {
    --b: var(--disabled);
    cursor: not-allowed;
    color: var(--disabled-label);

    opacity: 0.9;
    --r: 43deg;
    &:after {
      border: 0;
    }

    & + label {
      cursor: not-allowed;
      font-weight: 400;
    }
  }
`;

export default CheckboxBase;
