import React, { useState, useEffect } from "react";
import ScrollIndicator from "../components/ScrollIndicator";
import { introMessage } from "../../statics/intro.static";

const IntroPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [visibleChars, setVisibleChars] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [hasAppeared, setHasAppeared] = useState(false);
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
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (visibleChars === totalChars) {
      const timer = setTimeout(() => {
        setHasAppeared(true);
      });
      return () => clearTimeout(timer);
    }
  }, [visibleChars, totalChars]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-screen mb-40 pb-32 flex flex-col justify-center">
      <div className="font-pretendardBold text-[200px] font-extrabold leading-[200px] tracking-tight text-white text-stroke whitespace-pre-wrap relative">
        <div className="relative">
          {/* 첫 번째 파트 */}
          <div className="relative h-[200px] overflow-hidden flex justify-center">
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
                  fontSize: `${12 + Math.min(scrollY * 0.005, 5)}rem`,
                  filter: `blur(${Math.min(scrollY * 0.05, 4)}px)`,
                  transition: hasAppeared ? "font-size ease, filter ease" : "",
                }}
              >
                {char}
              </div>
            ))}
          </div>

          {/* 두 번째 파트 */}
          <div className="relative h-[200px] overflow-hidden flex justify-center">
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
                    fontSize: `${12 + Math.min(scrollY * 0.005, 5)}rem`,
                    filter: `blur(${Math.min(scrollY * 0.05, 4)}px)`,
                    transition: hasAppeared
                      ? "font-size ease, filter ease"
                      : "",
                  }}
                >
                  {char}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className="w-full font-ahn text-center tracking-wider text-4xl absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        // style={{
        //   fontSize: `${3 + Math.min(scrollY * 0.01, 5)}rem`,
        //   transition: "font-size ease",
        // }}
      >
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
