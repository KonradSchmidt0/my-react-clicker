// src/hooks/useCpsTracker.js
import { useEffect, useRef, useState } from 'react';

export default function useCpsTracker() {
  const [cps, setCps] = useState(0);
  const clickTimesRef = useRef([]);

  const registerClick = () => {
    clickTimesRef.current.push(Date.now());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const oneSecAgo = Date.now() - 1000;
      clickTimesRef.current = clickTimesRef.current.filter(t => t > oneSecAgo);
      setCps(clickTimesRef.current.length);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return { cps, registerClick };
}