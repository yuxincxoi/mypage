import React, { useState, useRef, useEffect } from "react";
import ChevronBtn from "./img/ChevronBtn";
import Indicator from "./img/Indicator";

const ProjectImg: React.FC<{
  onClick: () => void;
  className?: string;
}> = ({ onClick, className }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [gapWidth, setGapWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`${className}`} ref={carouselRef} onClick={() => onClick()}>
      <div className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        이미지 보기
      </div>
    </div>
  );
};

export default ProjectImg;
