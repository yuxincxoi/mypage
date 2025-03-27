import React, { useState } from "react";
import { stackStatics } from "../../../statics/project/stack.static";
import { StacksProps } from "../../interfaces/components/project/Stacks.interface";

const Stacks: React.FC<StacksProps> = ({ stacks }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getStackInfo = (stackName: string) => {
    const stackKey = Object.keys(stackStatics).find(
      (key) =>
        stackStatics[key as keyof typeof stackStatics].name.toLowerCase() ===
        stackName.toLowerCase()
    );

    if (stackKey) {
      return stackStatics[stackKey as keyof typeof stackStatics];
    }

    // 스택 정보가 없는 경우 기본 정보 제공
    return {
      name: stackName,
      description: `${stackName} 기술 스택입니다.`,
    };
  };

  return (
    <div className="mt-4 flex flex-wrap justify-center gap-4">
      {stacks.map((stackName, index) => {
        const stack = getStackInfo(stackName);

        return (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="px-4 py-1 bg-neutral-200 text-stone-700 hover:bg-neutral-300 rounded-md text-sm cursor-pointer">
              {stack.name}
            </span>
            {hoveredIndex === index && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-max px-3 py-1 text-xs bg-white text-black border-black rounded-md shadow-lg whitespace-nowrap">
                {stack.description}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stacks;
