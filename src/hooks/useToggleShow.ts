import { useState } from "react";

function useToggleShow(defaultBoolean?: boolean): [boolean, () => void] {
  const [isShow, setShow] = useState(defaultBoolean || false);
  function toggleShow() {
    setShow(!isShow);
  }

  return [isShow, toggleShow];
}

export default useToggleShow;
