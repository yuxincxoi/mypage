import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ChevronBtnProps } from "../../../interfaces/components/project/img/ChevronBtn.interface";

const ChevronBtn: React.FC<ChevronBtnProps> = ({
  direction,
  onClick,
  isHidden,
  className,
  strokeWidth,
}) => {
  if (isHidden) return null;
  return (
    <button
      aria-label={direction === "left" ? "Previous Images" : "Next Images"}
      className={`absolute ${
        direction === "left" ? "left-[-50px]" : "right-[-50px]"
      } transform -translate-y-1/2 px-3 py-1 transition-colors duration-100 ${className}`}
      onClick={onClick}
    >
      {direction === "left" ? (
        <ChevronLeft size={32} strokeWidth={strokeWidth} />
      ) : (
        <ChevronRight size={32} strokeWidth={strokeWidth} />
      )}
    </button>
  );
};

export default ChevronBtn;
