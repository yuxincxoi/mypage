import React, { useState, useEffect } from "react";
import ScrollIndicator from "../components/ScrollIndicator";
import { introMessage } from "../../statics/intro.static";

const IntroPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center text-9xl font-extrabold">
      <div>
        <div>{introMessage.first}</div>
        <div>{introMessage.second}</div>
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
