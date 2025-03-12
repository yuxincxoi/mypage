import React from "react";
import { ScrollToProjectListBtnProps } from "../interfaces/components/ScrollToProjectListBtn.interface";

const ScrollToProjectListBtn: React.FC<ScrollToProjectListBtnProps> = ({
  isVisible,
}) => {
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
