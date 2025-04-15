import { useEffect, useState } from "react";

const useIntersectionObserver = (
  elementRef: React.RefObject<HTMLElement>,
  threshold: number = 0.5
): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = elementRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, threshold]);

  return isVisible;
};

export default useIntersectionObserver;
