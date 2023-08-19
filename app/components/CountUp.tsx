"use client";

import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const AnimatedCounter = ({ start, end }: any) => {
  const [count, setCount] = useState(start);
  const pathname = usePathname();

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const startCountUp = () => {
      if (count < end) {
        interval = setInterval(() => {
          setCount((prevCount: any) => prevCount + 1);
        }, 50);
      }
    };

    startCountUp();

    return () => {
      clearInterval(interval);
    };
  }, [count, pathname]);

  return <span>{count}</span>;
};

export default AnimatedCounter;
