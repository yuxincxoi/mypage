import React, { useState, useEffect } from "react";
import ScrollIndicator from "../components/ScrollIndicator";
import DotImages from "../components/intro/DotImages";
import TextBox from "../components/intro/TextBox";

const IntroPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // 스크롤 효과
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-screen mb-40 pb-32 flex flex-col justify-center relative">
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
