import React from "react";
import { ChevronDown } from "lucide-react";

const ScrollIndicator: React.FC = () => {
  return (
    <div className="animate-bounce flex flex-col items-center justify-center mt-8">
      <div className="text-gray-400 mb-1 text-sm font-medium">Scroll</div>
      <div className="flex flex-col items-center">
        <ChevronDown className="text-gray-400" size={36} />
      </div>
    </div>
  );
};

export default ScrollIndicator;
