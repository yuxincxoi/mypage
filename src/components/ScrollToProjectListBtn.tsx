import React, { useEffect, useState } from "react";

const ScrollToProjectListBtn: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [documentHeight, setDocumentHeight] = useState<number>(0);

  useEffect(() => {
    const updateDocumentHeight = () => {
      setDocumentHeight(document.documentElement.scrollHeight);
    };

    const handleScroll = () => {
      const isShortDocument = documentHeight <= 4000;
      const visibleRange = isShortDocument ? [0, 0] : [1600, 2900];

      if (
        window.scrollY > visibleRange[0] &&
        window.scrollY < visibleRange[1]
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    updateDocumentHeight();

    const resizeObserver = new ResizeObserver(updateDocumentHeight);
    resizeObserver.observe(document.documentElement);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, [documentHeight]);

  const scrollToTop = () => {
    window.scrollTo({ top: 780, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`w-16 h-16 fixed bottom-10 right-10 p-3 bg-white hover:bg-slate-100 text-black text-2xl rounded-full shadow-lg transition-opacity z-50 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      ↑
    </button>
  );
};

export default ScrollToProjectListBtn;
