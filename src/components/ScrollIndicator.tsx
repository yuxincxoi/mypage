import React from "react";
import { ChevronDown } from "lucide-react";
import { scrollStatics } from "../../statics/scrollIndecator.static";

const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center animate-bounce">
      <div className="text-gray-400 mb-1 text-sm font-pretendard">
        {scrollStatics.scroll}
      </div>
      <div className="flex flex-col items-center">
        <ChevronDown className="text-gray-400" size={36} />
      </div>
    </div>
  );
};

export default ScrollIndicator;
