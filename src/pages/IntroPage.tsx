import React, { useState, useEffect } from "react";
import ScrollIndicator from "../components/ScrollIndicator";
import { introMessage } from "../../statics/intro.static";

const IntroPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [messageState, setMessageState] = useState({
    first: false,
    second: false,
    animationStage: 0, // 0: 기본 ".", 1: 콜론으로 변경 중, 2: 웃는 표정으로 변경 중
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    const firstTimeout = setTimeout(() => {
      setMessageState((prev) => ({ ...prev, first: true }));
    }, 500);

    const secondTimeout = setTimeout(() => {
      setMessageState((prev) => ({ ...prev, second: true }));
    }, 1500);

    // 두 번째 메시지가 표시된 후 애니메이션 시작
    const animStartTimeout = setTimeout(() => {
      setMessageState((prev) => ({ ...prev, animationStage: 1 }));
    }, 2800);

    // 콜론으로 변경 후 웃는 표정으로 변경
    const smileTimeout = setTimeout(() => {
      setMessageState((prev) => ({ ...prev, animationStage: 2 }));
    }, 3200);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(firstTimeout);
      clearTimeout(secondTimeout);
      clearTimeout(animStartTimeout);
      clearTimeout(smileTimeout);
    };
  }, []);

  // 애니메이션을 위한 텍스트 렌더링 함수
  const renderSecondMessage = () => {
    // 원본 텍스트에서 마지막 "." 부분을 제외한 부분
    const textWithoutDot = introMessage.second.slice(0, -1);

    // 애니메이션 단계에 따라 다른 내용 표시
    let animatedPart;

    switch (messageState.animationStage) {
      case 0:
        animatedPart = " "; // 기본 상태
        break;
      case 1:
        animatedPart = (
          <span className="animate-bounce-up bg-gradient-to-t from-cyan-500 to-amber-400 via-red-400 font-extrabold bg-clip-text text-transparent leading-none font-gumi">
            :
          </span>
        ); // 콜론으로 변경 애니메이션
        break;
      case 2:
        animatedPart = (
          <span>
            <span className="bg-gradient-to-t from-cyan-500 to-amber-400 via-red-400 font-extrabold bg-clip-text text-transparent leading-none font-gumi">
              :
            </span>
            <span className="animate-blind-reveal overflow-hidden bg-gradient-to-t from-cyan-500 to-amber-400 via-red-400 font-extrabold bg-clip-text text-transparent leading-none font-gumi">
              )
            </span>
          </span>
        ); // 웃는 표정으로 변경 애니메이션
        break;
      default:
        animatedPart = " ";
    }

    return (
      <>
        {textWithoutDot}
        <span className="inline-block w-6"></span>
        <span className="relative inline-flex">{animatedPart}</span>
      </>
    );
  };

  return (
    <div className="w-full h-screen mb-32 flex flex-col justify-center text-8xl font-bold">
      <div className="overflow-hidden font-pretendardSemiBold">
        <div
          className={`transform transition-transform duration-1000 ease-out ${
            messageState.first
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          {introMessage.first}
        </div>
        <div
          className={`transform transition-transform duration-1000 ease-out ${
            messageState.second
              ? "translate-y-0 opacity-100"
              : "opacity-0 invisible translate-y-full"
          }`}
        >
          {renderSecondMessage()}
        </div>
      </div>
      <div
        className={`transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <ScrollIndicator />
      </div>
    </div>
  );
};

export default IntroPage;
