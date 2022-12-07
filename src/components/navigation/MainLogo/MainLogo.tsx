import React from 'react';
import styled from 'styled-components';
import NinehireLogo from '@src/components/dataDisplay/Icons/NinehireLogo';

const LogoSec = styled.div`
  padding-right: 20px;
  margin-right: 12px;
`;

interface MainLogoProps {
  [propName: string]: any;
}

function MainLogo(props: MainLogoProps) {
  return (
    <LogoSec {...props}>
      <NinehireLogo type="default" size="120px" />
    </LogoSec>
  );
}

export default MainLogo;
