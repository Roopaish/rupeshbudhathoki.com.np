import { useState, useEffect } from 'react';
import type { RefObject } from 'react';

type Options = {
  rootMargin?: string;
  threshold?: number | number[];
};

const useOnScreen = <T extends Element>(
  ref: RefObject<T>,
  options?: Options
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      options
    );

    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
};

export default useOnScreen;