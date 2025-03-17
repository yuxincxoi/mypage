import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectImg: React.FC<{ images: string[] }> = ({ images }) => {
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
              className="carousel-item flex-shrink-0 h-60 bg-cover flex items-center justify-center rounded-xl"
              style={{ width: `${itemWidth}px` }}
            >
              <img src={image} alt="project-image" />
            </div>
          ))}
        </div>
      </div>

      {/* 좌우 화살표 (4장 이상일 때만 표시) */}
      {images.length > 3 && (
        <>
          <button
            aria-label="Previous Images"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 px-3 py-1"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            <ChevronLeft />
          </button>
          <button
            aria-label="Next Images"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 px-3 py-1"
            onClick={handleNext}
            disabled={startIndex + 3 >= images.length}
          >
            <ChevronRight />
          </button>
        </>
      )}

      {/* 인디케이터 */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.ceil(images.length - 2) }).map(
          (_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === startIndex ? "bg-white" : "bg-gray-400"
              }`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ProjectImg;
