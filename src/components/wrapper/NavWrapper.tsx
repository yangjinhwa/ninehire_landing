import React, { useEffect, useState } from 'react';
import useWindowWidth from '@src/hooks/useWindowWidth';
import TopNav from '@src/components/navigation/TopNav/TopNav';
import HamburgerNav from '../navigation/HamburgerNav/HamburgerNav';

function NavWrapper() {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (windowWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowWidth]);

  return (
    <div style={{ width: '100%' }}>{!isMobile ? <TopNav fixed /> : <HamburgerNav />}</div>
  );
}

export default NavWrapper;
