import React, { useEffect } from 'react';

function useEventListener(eventName: string, eventHandler = () => null, element = window) {
  useEffect(() => {
    // Check if the element supports the addEventListener method
    const checked = element && element.addEventListener;
    if (!checked) return;
    element.addEventListener(eventName, eventHandler);

    return () => element.removeEventListener(eventName, eventHandler);
  }, [eventName, element, eventHandler]);
}

export default useEventListener;
