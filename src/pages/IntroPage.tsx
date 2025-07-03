import React, { useState, useEffect } from "react";
import ScrollIndicator from "../components/ScrollIndicator";
import DotImages from "../components/intro/DotImages";
import TextBox from "../components/intro/TextBox";

const IntroPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="w-full h-screen mb-40 pb-32 flex flex-col justify-center relative">
      {isComplete ? (
        <div className="absolute inset-0 flex top-[40%] justify-center pointer-events-none z-10">
          <h1 className="text-5xl font-dos text-zinc-700">
            Hello Yujin's world
          </h1>
        </div>
      ) : (
        ""
      )}
      <DotImages />

      {/* 메인 텍스트 영역 */}
      <TextBox onComplete={() => setIsComplete(true)} />

      {/* 스크롤 인디케이터 */}
      <div
        className={`transition-opacity duration-300 ${
          isComplete && isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <ScrollIndicator />
      </div>
    </div>
  );
};

export default IntroPage;
