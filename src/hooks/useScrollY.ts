import React, { useCallback, useEffect, useState, RefCallback, useRef } from 'react';

function useScrollY() {
  const [y, setY] = useState<number>(0);

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY || window.pageYOffset; // IE는 pageYOffset만 지원
      const scrollY: number = Math.round(y);
      // console.log('scrollY: ', scrollY);
      setY(scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return y;
}

export default useScrollY;
