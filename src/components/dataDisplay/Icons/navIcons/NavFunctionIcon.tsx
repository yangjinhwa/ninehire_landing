import { FunctionMenuType } from '@src/routes/navMenuList';
import React from 'react';
import styled from 'styled-components';

const SvgBox = styled.div`
  width: 64px;
  height: 64px;

  svg {
    .cls-1 {
      fill: #f7fafd;
    }
    .cls-2 {
      fill: #cad4dd;
    }
    .cls-3 {
      fill: #f9f9f9;
    }
    .cls-4 {
      fill: #2965ff;
    }
    .cls-5 {
      fill: #8e97a5;
    }
  }
`;

interface NavFunctionIconProps {
  iconType: FunctionMenuType;
}

function NavFunctionIcon({ iconType }: NavFunctionIconProps) {
  const functionIconMap = {
    [FunctionMenuType.RECEPTION]: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <g id="Layer_1" data-name="Layer 1">
    <rect class="cls-1" width="64" height="64" rx="10"/>
    <path class="cls-2" d="M51.81,20V52.43a4.33,4.33,0,0,1-4.33,4.33h-31a4.33,4.33,0,0,1-4.33-4.33V11.57a4.33,4.33,0,0,1,4.33-4.33H39Z"/>
    <path class="cls-4" d="M51.81,20H42.12A3.09,3.09,0,0,1,39,16.93V7.24Z"/>
    <path class="cls-4" d="M22.17,17.21a2.43,2.43,0,1,0-2.43-2.43A2.43,2.43,0,0,0,22.17,17.21Z"/>
    <path class="cls-4" d="M26.88,21.54v-.4A3.1,3.1,0,0,0,23.77,18H20.56a3.1,3.1,0,0,0-3.1,3.1v.4Z"/>
    <rect class="cls-3" x="16.46" y="25.39" width="30.46" height="4.44" rx="1"/>
    <rect class="cls-3" x="16.46" y="34.2" width="30.46" height="4.44" rx="1"/>
    <rect class="cls-3" x="16.46" y="42.96" width="24.03" height="4.44" rx="1"/>
    </g>
    </svg>`,
    [FunctionMenuType.MANAGE_BOARD]: `<svg viewBox="0 0 64 64">
    <g id="Layer_1" data-name="Layer 1">
    <rect class="cls-1" width="64" height="64" rx="10"/>
    <rect class="cls-2" x="11.71" y="8.23" width="17.79" height="47.55" rx="3"/>
    <rect class="cls-2" x="33.5" y="8.23" width="17.79" height="47.55" rx="3"/>
    <path class="cls-4" d="M14.71,8.23H26.5a3,3,0,0,1,3,3v1.54a0,0,0,0,1,0,0H11.71a0,0,0,0,1,0,0V11.23a3,3,0,0,1,3-3Z"/>
    <rect class="cls-5" x="14.41" y="17.65" width="12.4" height="8.11" rx="1"/>
    <path class="cls-5" d="M36.5,8.23H48.29a3,3,0,0,1,3,3v1.54a0,0,0,0,1,0,0H33.5a0,0,0,0,1,0,0V11.23a3,3,0,0,1,3-3Z"/>
    <rect class="cls-1" x="14.41" y="29.39" width="12.4" height="8.11" rx="1"/>
    <rect class="cls-1" x="14.41" y="41.13" width="12.4" height="8.11" rx="1"/>
    <rect class="cls-1" x="36.2" y="17.65" width="12.4" height="8.11" rx="1"/>
    <rect class="cls-1" x="36.2" y="29.39" width="12.4" height="8.11" rx="1"/>
    <rect class="cls-1" x="36.2" y="41.13" width="12.4" height="8.11" rx="1"/>
    <rect class="cls-1" x="17.94" y="14.92" width="13.8" height="8.11" rx="1"/>
    </g>
    </svg>`,
    [FunctionMenuType.COLLABORATION]: `<svg viewBox="0 0 64 64">
    <g id="Layer_1" data-name="Layer 1">
    <rect class="cls-1" width="64" height="64" rx="10"/>
    <circle class="cls-2" cx="20.23" cy="23.06" r="7.12"/>
    <path class="cls-2" d="M20.23,48.06A24.46,24.46,0,0,0,32.14,45,3.75,3.75,0,0,0,34,41.7h0a9.08,9.08,0,0,0-9.09-9.08H15.53A9.08,9.08,0,0,0,6.44,41.7h0A3.75,3.75,0,0,0,8.33,45,24.55,24.55,0,0,0,20.23,48.06Z"/>
    <circle class="cls-4" cx="43.77" cy="23.06" r="7.12"/>
    <path class="cls-4" d="M43.77,48.06A24.45,24.45,0,0,0,55.67,45a3.75,3.75,0,0,0,1.89-3.28h0a9.08,9.08,0,0,0-9.09-9.08H39.06A9.08,9.08,0,0,0,30,41.7h0A3.74,3.74,0,0,0,31.87,45,24.5,24.5,0,0,0,43.77,48.06Z"/>
    </g>
    </svg>`,
    [FunctionMenuType.COMMUNICATION]: `<svg viewBox="0 0 64 64">
    <g id="Layer_1" data-name="Layer 1">
    <rect class="cls-1" width="64" height="64" rx="10"/>
    <path class="cls-4" d="M55.56,39.06a11.58,11.58,0,0,0-3-7.68c-2.46,9.13-11.59,16-22.6,16.31a15.88,15.88,0,0,0,10.85,4.12A16.64,16.64,0,0,0,45,51.28,10,10,0,0,0,51,55.36a.69.69,0,0,0,.76-1c-.89-1.73-.8-4.43-.6-6.25A11.92,11.92,0,0,0,55.56,39.06Z"/>
    <path class="cls-2" d="M29.14,8.63c-11.43,0-20.7,8-20.7,17.85a16.7,16.7,0,0,0,6.13,12.68c.28,2.55.41,6.33-.83,8.76a1,1,0,0,0,1,1.39A13.91,13.91,0,0,0,23.3,43.6a23.71,23.71,0,0,0,5.84.74c11.42,0,20.69-8,20.69-17.86S40.56,8.63,29.14,8.63Z"/>
    <circle class="cls-1" cx="20.13" cy="26.48" r="2.49"/>
    <circle class="cls-1" cx="29.14" cy="26.48" r="2.49"/>
    <circle class="cls-1" cx="38.14" cy="26.48" r="2.49"/>
    </g>
    </svg>`,
    [FunctionMenuType.DASHBAORD]: `<svg viewBox="0 0 64 64">
    <g id="Layer_1" data-name="Layer 1">
    <rect class="cls-1" width="64" height="64" rx="10"/>
    <rect class="cls-2" x="10.6" y="15.03" width="42.8" height="37.87" rx="4"/>
    <path class="cls-4" d="M49.4,15H45.6V12.69a2.1,2.1,0,0,0-4.2,0V15H22.6V12.69a2.1,2.1,0,0,0-4.2,0V15H14.6a4,4,0,0,0-4,4v2.84H53.4V19A4,4,0,0,0,49.4,15Z"/>
    <rect class="cls-4" x="15.54" y="25.42" width="8.01" height="4.9" rx="1"/>
    <rect class="cls-1" x="27.23" y="25.42" width="21.23" height="4.9" rx="1"/>
    <rect class="cls-1" x="15.54" y="34.55" width="32.93" height="4.9" rx="1"/>
    <rect class="cls-1" x="15.54" y="43.68" width="22.86" height="4.9" rx="1"/>
    <rect class="cls-5" x="41.4" y="43.68" width="7.06" height="4.9" rx="1"/>
    </g>
    </svg>`,
    [FunctionMenuType.FUNCTIONS]: `<svg viewBox="0 0 64 64">
    <g id="Layer_1" data-name="Layer 1">
    <rect class="cls-1" width="64" height="64" rx="10"/>
    <rect class="cls-2" x="10.6" y="15.03" width="42.8" height="37.87" rx="4"/>
    <path class="cls-4" d="M49.4,15H45.6V12.69a2.1,2.1,0,0,0-4.2,0V15H22.6V12.69a2.1,2.1,0,0,0-4.2,0V15H14.6a4,4,0,0,0-4,4v2.84H53.4V19A4,4,0,0,0,49.4,15Z"/>
    <rect class="cls-4" x="15.54" y="25.42" width="8.01" height="4.9" rx="1"/>
    <rect class="cls-1" x="27.23" y="25.42" width="21.23" height="4.9" rx="1"/>
    <rect class="cls-1" x="15.54" y="34.55" width="32.93" height="4.9" rx="1"/>
    <rect class="cls-1" x="15.54" y="43.68" width="22.86" height="4.9" rx="1"/>
    <rect class="cls-5" x="41.4" y="43.68" width="7.06" height="4.9" rx="1"/>
    </g>
    </svg>`,
  };

  return (
    <SvgBox
      dangerouslySetInnerHTML={{
        __html: `${functionIconMap[iconType]}`,
      }}
    ></SvgBox>
  );
}

export default NavFunctionIcon;
