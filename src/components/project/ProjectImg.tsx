import React, { useState, useRef, useEffect } from "react";
import ChevronBtn from "./img/ChevronBtn";
import Indicator from "./img/Indicator";

const ProjectImg: React.FC<{
  images: string[];
  onClick: (image: string) => void;
}> = ({ images, onClick }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [gapWidth, setGapWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 아이템 너비와 gap 크기 계산
    const calculateWidths = () => {
      if (containerRef.current && carouselRef.current) {
        const container = containerRef.current;
        const carousel = carouselRef.current;
        const items = container.querySelectorAll(".carousel-item");

        if (items.length > 0) {
          const carouselWidth = carousel.offsetWidth;
          const gap = 8;

          const calculatedItemWidth = (carouselWidth - gap * 2) / 3;

          setItemWidth(calculatedItemWidth);
          setGapWidth(gap);
        }
      }
    };

    calculateWidths();

    window.addEventListener("resize", calculateWidths);
    return () => window.removeEventListener("resize", calculateWidths);
  }, [images.length]);

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + 3 < images.length) setStartIndex(startIndex + 1);
  };

  // 이동 거리
  const getTranslateX = () => {
    if (itemWidth === 0) return 0;
    return startIndex * (itemWidth + gapWidth);
  };

  return (
    <div className="relative w-4/5 mx-auto mt-4" ref={carouselRef}>
      {/* 이미지 컨테이너 */}
      <div
        className="overflow-hidden mx-auto"
        style={{
          width:
            images.length >= 3
              ? "100%"
              : `${
                  itemWidth * images.length + gapWidth * (images.length - 1)
                }px`,
        }}
      >
        <div
          ref={containerRef}
          className="flex gap-2 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${getTranslateX()}px)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => onClick(image)}
              className="carousel-item flex-shrink-0 h-44 bg-cover flex items-center justify-center rounded-xl cursor-pointer"
              style={{ width: `${itemWidth}px` }}
            >
              <img
                src={image}
                alt="project-image"
                className="transition-opacity duration-100 hover:opacity-70"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 좌우 화살표 (4장 이상일 때만 표시) */}
      {images.length > 3 && (
        <>
          <ChevronBtn
            direction="left"
            onClick={handlePrev}
            isHidden={startIndex === 0}
            className="top-1/2 text-black hover:text-gray-500"
            strokeWidth={1}
          />
          <ChevronBtn
            direction="right"
            onClick={handleNext}
            isHidden={startIndex + 3 >= images.length}
            className="top-1/2 text-black hover:text-gray-500"
            strokeWidth={1}
          />
        </>
      )}

      <Indicator
        total={Math.ceil(images.length - 2)}
        activeIndex={startIndex}
      />
    </div>
  );
};

export default ProjectImg;
