import React, { useState, useEffect } from "react";
import ScrollIndicator from "../components/ScrollIndicator";
import { introMessage } from "../../statics/intro.static";

const IntroPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [visibleChars, setVisibleChars] = useState(0);
  const totalChars =
    introMessage.nameFirst.length + introMessage.nameSecond.length;

  useEffect(() => {
    let currentChar = 0;

    const interval = setInterval(() => {
      if (currentChar < totalChars) {
        setVisibleChars(currentChar + 1);
        currentChar++;
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen mb-40 pb-32 flex flex-col justify-center">
      <div className="font-pretendardBold text-[250px] font-extrabold leading-[230px] tracking-tight text-white text-stroke whitespace-pre-wrap relative">
        <div className="relative">
          {/* 첫 번째 파트 */}
          <div className="relative h-[230px] overflow-hidden flex justify-center">
            {introMessage.nameFirst.split("").map((char, index) => (
              <div
                key={`first-${index}`}
                className="relative transform transition-all duration-500 ease-out"
                style={{
                  opacity: index < visibleChars ? 1 : 0,
                  transform:
                    index < visibleChars
                      ? `translateX(${
                          index - (introMessage.nameFirst.length - 1) / 2
                        }px) scale(1)`
                      : `translateX(${
                          index - (introMessage.nameFirst.length - 1) / 2
                        }px) translateY(100px) scale(1.1)`,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {char}
              </div>
            ))}
          </div>

          {/* 두 번째 파트 */}
          <div className="relative h-[230px] overflow-hidden flex justify-center">
            {introMessage.nameSecond.split("").map((char, index) => {
              const totalIndex = index + introMessage.nameFirst.length;
              return (
                <div
                  key={`second-${index}`}
                  className="relative transform transition-all duration-500 ease-out"
                  style={{
                    opacity: index < visibleChars ? 1 : 0,
                    transform:
                      index < visibleChars
                        ? `translateX(${
                            index - (introMessage.nameSecond.length - 1) / 2
                          }px) scale(1)`
                        : `translateX(${
                            index - (introMessage.nameSecond.length - 1) / 2
                          }px) translateY(-100px) scale(1.1)`,
                    transitionDelay: `${totalIndex * 100}ms`,
                  }}
                >
                  {char}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="font-ahn text-center tracking-wider text-md text-5xl absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div>{introMessage.job}</div>
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
