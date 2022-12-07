import styled from 'styled-components';
import Color from '@src/styles/Color';

const RadioBase = styled.input.attrs((props) => ({
  type: 'radio',
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

  /* ======== default ======== */
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
  border: 1px solid var(--bc, var(--border));
  border-radius: 50%;
  background: var(--b, var(--background));
  transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;

  /* ======== checked ======== */
  &:checked {
    --b: var(--active);
    --bc: var(--active);
    --d-o: 0.3s;
    --d-t: 0.6s;
    --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
    --s: 0.5;
  }

  /* ======== radio circle ====== */
  &:after {
    content: '';
    display: block;
    left: 0;
    top: 0;
    position: absolute;
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background: var(--active-inner);
    opacity: 0;
    transform: scale(var(--s, 0.7));
    transition: transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s);
  }

  /* ======== disabled ======== */
  &:disabled {
    --b: var(--disabled);
    cursor: not-allowed;
    opacity: 0.9;

    &:checked {
      --b: var(--disabled-inner);
      --bc: var(--border);
    }
    & + label {
      cursor: not-allowed;
    }
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

  /* ======== etc ======== */
  &:not(.switch) {
    &:after {
      opacity: var(--o, 0);
    }
    &:checked {
      --o: 1;
    }
  }

  /* ======== with label ======== */
  & + label {
    font-size: var(--textSize);
    line-height: 21px;
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    margin-left: 6px;

    &:hover {
      font-weight: 700;
    }
  }
`;

export default RadioBase;
