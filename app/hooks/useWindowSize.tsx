import { useEffect, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 1,
    height: 1,
  });

  useEffect(() => {
    function handleResize() {
      // Check if window exists before accessing its properties
      if (typeof window !== "undefined") {
        setWindowSize({
          width: window?.innerWidth,
          height: window?.innerHeight,
        });
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
