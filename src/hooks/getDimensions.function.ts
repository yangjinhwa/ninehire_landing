import { RefCallback, useCallback, useEffect, useState } from "react";

function useDimensions(): [
  RefCallback<HTMLElement | null>,
  DOMRect | undefined
] {
  const [dimensions, setDimensions] = useState<DOMRect | undefined>();
  const ref: RefCallback<HTMLElement | null> = useCallback(
    (node: HTMLElement | null) => {
      if (node) {
        setDimensions(node.getBoundingClientRect().toJSON());
      }
    },
    []
  );

  return [ref, dimensions];
}

export default useDimensions;
