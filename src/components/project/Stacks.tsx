import React, { useState } from "react";

const stackData = [
  { name: "React", description: "이래서 저래서 React를 사용했습니다." },
  {
    name: "TypeScript",
    description: "이래서 저래서 TypeScript를 사용했습니다.",
  },
  {
    name: "Tailwind CSS",
    description: "이래서 저래서 Tailwind CSS를 사용했습니다.",
  },
  { name: "Next.js", description: "이래서 저래서 Next.js를 사용했습니다." },
];

const Stacks: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="mt-4 flex flex-wrap justify-center gap-4">
      {stackData.map((stack, index) => (
        <div
          key={index}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <span className="px-4 py-1 bg-gray-700 hover:bg-gray-500 rounded-full text-sm text-gray-200 cursor-pointer">
            {stack.name}
          </span>
          {hoveredIndex === index && (
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-max px-3 py-1 text-xs bg-white text-black border-black rounded-md shadow-lg whitespace-nowrap">
              {stack.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stacks;
