import {
  RefCallback,
  useCallback,
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
} from 'react';
import useWindowWidth from '@src/hooks/useWindowWidth';

export function useOffsetTop(): [RefCallback<HTMLElement | null>, number] {
  const [offsetTop, setOffsetTop] = useState<number>(0);
  const windowWidth: number = useWindowWidth();
  const ref: RefCallback<HTMLElement | null> = useCallback(
    (node: HTMLElement | null) => {
      if (node) setOffsetTop(node.offsetTop);
    },
    [windowWidth]
  );

  return [ref, offsetTop];
}
