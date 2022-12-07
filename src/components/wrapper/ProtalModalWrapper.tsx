import { ReactPortal } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

type Props = {
  children: any;
};

function PortalModalWrapper({ children }: Props): any {
  const el = document.getElementById('portalModal');
  if (el != null) {
    return ReactDom.createPortal(children, el);
  }
}

export default PortalModalWrapper;
