import { useEffect, useRef } from "react";

const useOnClickOutside = (onClickOutside, condition) => {
  const ref = useRef();

  const handleOutsideClick = (event) => {
    if (ref?.current) {
      const clickedContainer = ref.current.contains(event.target);
      if (!clickedContainer) onClickOutside();
    }
  };

  useEffect(() => {
    const addListener = () =>
      document.addEventListener("click", handleOutsideClick, false);
    const removeListener = () =>
      document.removeEventListener("click", handleOutsideClick, false);

    addListener();
    return removeListener;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return ref;
};

export default useOnClickOutside;
