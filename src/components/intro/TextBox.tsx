import { useState, useEffect, useRef } from "react";
import { introMessage } from "../../../statics/intro.static";
import SplashScreen from "./SplashScreen";

const TextBox = ({ onComplete }: { onComplete: () => void }) => {
  const [visibleChars, setVisibleChars] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [currentSentence, setCurrentSentence] = useState(0);
  const [showSplash, setShowSplash] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const sentences = [
    introMessage.introFirst,
    introMessage.introSecond,
    introMessage.introThird,
    introMessage.introFourth,
    introMessage.introFifth,
  ];

  // 스플래시 화면이 끝나면 첫 번째 문장 시작
  useEffect(() => {
    if (!showSplash) {
      setCurrentSentence(0);
    }
  }, [showSplash]);

  // intro에서 스크롤 방지
  useEffect(() => {
    if (!isComplete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isComplete]);

  // 키보드 이벤트 처리
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent | MouseEvent) => {
      if (
        (event instanceof KeyboardEvent &&
          (event.key === "Enter" || event.key === " ")) ||
        event instanceof MouseEvent
      ) {
        if (isTyping) {
          // interval 정리 후 문장 완성
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setVisibleChars(sentences[currentSentence].length);
          setIsTyping(false);
        } else if (currentSentence < sentences.length - 1) {
          // 다음 문장으로
          setCurrentSentence((prev) => prev + 1);
        } else if (!isComplete) {
          // 모든 문장 완료
          setIsComplete(true);
          onComplete();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("click", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("click", handleKeyPress);
    };
  }, [isTyping, currentSentence, sentences, isComplete, onComplete]);

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
          intervalRef.current = null;
        }
      }, 80);

      intervalRef.current = interval;

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
    }
  }, [currentSentence, showSplash]);

  const renderSentence = (text: string) => {
    const displayLength = visibleChars;
    const isFinished = !isTyping && !isComplete;

    return (
      <div className="mx-auto flex items-center justify-center relative overflow-hidden">
        <div className="font-dos text-lg tracking-tighter whitespace-pre-wrap relative text-center">
          {text.split("").map((char, index) => {
            const shouldShow = isTyping ? index < displayLength : true;
            return (
              <span
                key={index}
                className={`inline-block transition-opacity duration-300 ease-out ${
                  shouldShow ? "opacity-100" : "opacity-0"
                }`}
                style={isTyping ? { transitionDelay: `${index * 30}ms` } : {}}
              >
                {shouldShow ? char : ""}
              </span>
            );
          })}
          {isFinished && (
            <span className="inline-block ml-5 animate-pulse">▼</span>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {showSplash ? (
        <div className="w-full h-screen bg-white">
          <SplashScreen onFinish={() => setShowSplash(false)} />
        </div>
      ) : (
        <div
          className={`font-pretendardBold text-md tracking-tight whitespace-pre-wrap relative w-[800px] h-40 bg-white mx-auto border-2 border-zinc-100 transition-opacity duration-700 ${
            isComplete ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="relative top-[40%]">
            {renderSentence(sentences[currentSentence])}
          </div>
        </div>
      )}
    </>
  );
};

export default TextBox;
