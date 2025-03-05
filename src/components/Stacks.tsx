import React from "react";

const Stacks: React.FC = () => {
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-4">
      {["React", "TypeScript", "Tailwind CSS", "Next.js"].map(
        (stack, index) => (
          <span
            key={index}
            className="px-4 py-1 bg-gray-700 rounded-full text-sm text-gray-200"
          >
            {stack}
          </span>
        )
      )}
    </div>
  );
};

export default Stacks;
