import { useState } from "react";

/**
 * Hook that returns a boolean that indicates if the user had scrolled to the bottom content
 *
 * @returns {boolean} scrollPosition
 */
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<boolean>(false);

  window.addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setScrollPosition(true);
    } else {
      setScrollPosition(false);
    }
  });
  return scrollPosition;
};
export default useScrollPosition;
