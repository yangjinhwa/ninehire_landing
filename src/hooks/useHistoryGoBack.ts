import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

function useHistoryGoBack(): [boolean, CallableFunction] {
  const history = useHistory();
  const [show, setShow] = useState(true);

  const handleHistoryBack = useCallback(() => {
    setShow(false);

    setTimeout(() => {
      history.goBack();
    }, 300);
  }, [history]);

  return [show, handleHistoryBack];
}

export default useHistoryGoBack;
