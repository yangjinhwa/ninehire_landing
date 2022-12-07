import { RefObject, useLayoutEffect, useRef, useState } from 'react';
import useWindowWidth from '@src/hooks/useWindowWidth';

function useFlexibleHeight(): [RefObject<HTMLImageElement>, number] {
  const [flexibleHeight, setHeight] = useState(0);
  const windowWidth = useWindowWidth();
  const ref = useRef<HTMLImageElement>(null);

  function handleHeight() {
    if (ref.current) {
      setHeight(ref.current.height);
    }
  }

  useLayoutEffect(() => {
    // very first height set
    window.addEventListener('load', handleHeight);
    return () => window.removeEventListener('load', handleHeight);
  }, []);

  useLayoutEffect(() => {
    handleHeight();
    return () => handleHeight();
  }, [windowWidth]);

  return [ref, flexibleHeight];
}

export default useFlexibleHeight;
