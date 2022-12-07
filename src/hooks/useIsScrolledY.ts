import React, { useEffect, useState } from 'react';

function useIsScrolledY(minScrollY: number): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleNavScroll() {
      const y = window.scrollY || window.pageYOffset; // IE는 pageYOffset만 지원
      const scrollY: number = Math.round(y);

      setIsScrolled(scrollY > minScrollY);
    }
    window.addEventListener('scroll', handleNavScroll);
    return () => window.removeEventListener('scroll', handleNavScroll);
  }, [minScrollY]);

  return isScrolled;
}

export default useIsScrolledY;
