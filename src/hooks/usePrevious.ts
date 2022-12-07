import { useEffect, useRef } from 'react';

export function usePrevious(state: number | any) {
  const ref = useRef();

  useEffect(() => {
    ref.current = state;
  });

  return ref.current;
}
