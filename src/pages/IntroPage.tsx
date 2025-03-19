import React, { useState, useEffect } from "react";
import ScrollIndicator from "../components/ScrollIndicator";
import { introMessage } from "../../statics/intro.static";

const IntroPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [messageState, setMessageState] = useState({
    first: false,
    second: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const firstTimeout = setTimeout(() => {
      setMessageState((prev) => ({ ...prev, first: true }));
    }, 500);

    const secondTimeout = setTimeout(() => {
      setMessageState((prev) => ({ ...prev, second: true }));
    }, 1200);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(firstTimeout);
      clearTimeout(secondTimeout);
    };
  }, []);

  return (
    <div className="w-full h-screen mb-40 flex flex-col justify-center text-9xl font-extrabold">
      <div className="overflow-hidden">
        <div
          className={`transform transition-transform duration-1000 ease-out overflow-hidden ${
            messageState.first
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          {introMessage.first}
        </div>
        <div
          className={`transform transition-transform duration-1000 ease-out ${
            messageState.second ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {introMessage.second}
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
