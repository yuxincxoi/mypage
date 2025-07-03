import React, { useState, useEffect } from "react";
import ScrollIndicator from "../components/ScrollIndicator";
import SplashScreen from "../components/intro/SplashScreen";
import { introMessage } from "../../statics/intro.static";
import DotImages from "../components/intro/DotImages";

const IntroPage: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [currentSentence, setCurrentSentence] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const sentences = [
    introMessage.introFirst,
    introMessage.introSecond,
    introMessage.introThird,
    introMessage.introFourth,
    introMessage.introFifth,
  ];

  // 타이핑 효과
  useEffect(() => {
    if (currentSentence < sentences.length && !showSplash) {
      setIsTyping(true);
      setVisibleChars(0);

      const currentText = sentences[currentSentence];
      let currentChar = 0;

      const interval = setInterval(() => {
        if (currentChar < currentText.length) {
          setVisibleChars(currentChar + 1);
          currentChar++;
        } else {
          setIsTyping(false);
          clearInterval(interval);
        }
      }, 80);

      return () => clearInterval(interval);
    }
  }, [currentSentence, showSplash]);

  // 스플래시 화면이 끝나면 첫 번째 문장 시작
  useEffect(() => {
    if (!showSplash) {
      setCurrentSentence(0);
    }
  }, [showSplash]);

  // 키보드 이벤트 처리
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        if (isTyping) {
          // 타이핑 중이면 즉시 완성
          setVisibleChars(sentences[currentSentence].length);
          setIsTyping(false);
        } else if (currentSentence < sentences.length - 1) {
          // 다음 문장으로
          setCurrentSentence((prev) => prev + 1);
        } else if (!isComplete) {
          // 모든 문장 완료
          setIsComplete(true);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isTyping, currentSentence, sentences, isComplete]);

  // 스크롤 효과
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (showSplash) {
    return (
      <div className="w-full h-screen bg-white">
        <SplashScreen onFinish={() => setShowSplash(false)} />
      </div>
    );
  }

  const renderSentence = (text: string, sentenceIndex: number) => {
    if (sentenceIndex > currentSentence) return null;

    const isCurrentSentence = sentenceIndex === currentSentence;
    const displayLength = isCurrentSentence ? visibleChars : text.length;
    const opacity = isComplete ? 1 : sentenceIndex < currentSentence ? 0.6 : 1;

    return (
      <div
        key={sentenceIndex}
        className="relative flex justify-center"
        style={{ opacity }}
      >
        {text.split("").map((char, index) => {
          const shouldShow = index < displayLength;
          return (
            <div
              key={`${sentenceIndex}-${index}`}
              className={`relative transform transition-all duration-300 ease-out ${
                shouldShow ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 30}ms`,
              }}
            >
              {shouldShow ? char : ""}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full h-screen mb-40 pb-32 flex flex-col justify-center relative">
      <DotImages />

      {/* 메인 텍스트 영역 */}
      <div className="font-pretendardBold text-md tracking-tight whitespace-pre-wrap relative">
        <div className="relative">
          {sentences.map((sentence, index) => renderSentence(sentence, index))}
        </div>
      </div>

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
