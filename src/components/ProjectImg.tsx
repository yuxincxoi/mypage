import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectImg: React.FC<{ images: string[] }> = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleImages = images.slice(startIndex, startIndex + 3);

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + 3 < images.length) setStartIndex(startIndex + 1);
  };

  return (
    <div className="relative w-4/5 mx-auto mt-4">
      {/* 이미지 컨테이너 */}
      <div className="overflow-hidden">
        <div
          className="flex gap-2 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${startIndex * (100 / 3)}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-1/3 min-w-[33%] h-60 bg-slate-500 flex items-center justify-center rounded-xl"
            >
              {image}
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
