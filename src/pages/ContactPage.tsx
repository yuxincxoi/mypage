import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-full h-[65vh] bg-black text-white flex flex-col items-center justify-center">
      <div className="text-6xl font-extrabold mb-20">Contact</div>

      <div
        className="relative w-80 h-48 cursor-pointer animate-float"
        style={{ perspective: "1000px" }}
        onClick={handleFlip}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`relative w-full h-full transition-all duration-700`}
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped
              ? "rotateY(180deg)"
              : isHovered
              ? "rotateY(15deg)"
              : "rotateY(0deg)",
          }}
        >
          {/* Front side of card */}
          <div
            className="absolute w-full h-full rounded-lg shadow-lg p-6 flex flex-col justify-between bg-gradient-to-r from-indigo-500 to-purple-600"
            style={{
              backfaceVisibility: "hidden",
              boxShadow: isHovered
                ? "0 15px 30px rgba(0, 0, 0, 0.4)"
                : "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Choi Yu Jin</h2>
              <div className="mt-1 text-sm opacity-70">Front-end Developer</div>
            </div>

            <div className="w-full flex justify-end">
              <div className="h-4 w-16 bg-white bg-opacity-20 rounded-full"></div>
            </div>
          </div>

          {/* Back side of card */}
          <div
            className="absolute w-full h-full rounded-lg shadow-lg p-6 flex flex-col justify-between bg-gradient-to-r from-purple-600 to-indigo-500"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              boxShadow: isHovered
                ? "0 15px 30px rgba(0, 0, 0, 0.4)"
                : "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">최 유 진</h2>

              <div className="flex items-center space-x-2">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-sm">github.com/yuxincxoi</span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">yjyj774@gmail.com</span>
              </div>
            </div>

            <div className="w-full flex justify-end">
              <div className="h-4 w-16 bg-white bg-opacity-20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
