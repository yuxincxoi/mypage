import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ChevronBtnProps {
  direction: "left" | "right";
  onClick: () => void;
  isHidden: boolean;
  className?: string;
  strokeWidth: number;
}

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
      } top-1/2 transform -translate-y-1/2 px-3 py-1 transition-colors duration-100 ${className}`}
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
