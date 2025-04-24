import React, { useState, useEffect } from "react";
import ScrollIndicator from "../components/ScrollIndicator";
import { introMessage } from "../../statics/intro.static";

const IntroPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="w-full h-screen mb-40 pb-32 flex flex-col justify-center">
      <div className="font-pretendardBold text-center text-[250px] font-extrabold leading-[230px] tracking-tight text-white text-stroke whitespace-pre-wrap">
        {introMessage.name}
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
