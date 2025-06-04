import React, { useState } from "react";
import CardSide from "./CardSide";
import { ContactMessage } from "../../../statics/contact.static";

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-80 h-48"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* 앞면 */}
        <CardSide isBack={false}>
          <div>
            <h2 className="text-3xl tracking-tight text-center">
              {ContactMessage.backComment.map((item, index) => {
                return (
                  <span
                    key={index}
                    className={
                      index % 2 === 0
                        ? "font-pretendardBold text-white"
                        : "font-pretendardExtraLight text-zinc-100"
                    }
                  >
                    {item}
                  </span>
                );
              })}
            </h2>
          </div>
        </CardSide>

        {/* 뒷면 */}
        <CardSide isBack={true}>
          <div className="text-white">
            <div className="flex mb-8">
              <h2 className="text-2xl font-pretendardSemiBold mr-4">
                {ContactMessage.koreanName}
              </h2>
              <h2 className="text-sm font-pretendardExtraLight leading-10">
                {ContactMessage.englishName}
              </h2>
            </div>

            <div className="flex items-center space-x-2">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <a
                href={`https://${ContactMessage.githubAddress}`}
                className="text-md font-pretendardExtraLight hover:underline"
              >
                {ContactMessage.githubAddress}
              </a>
            </div>

            <div className="flex space-x-2">
              <div className="h-4 w-4 text-center">B.</div>
              <a
                href={`https://${ContactMessage.blogAddress}`}
                className="text-md font-pretendardExtraLight hover:underline"
              >
                {ContactMessage.blogAddress}
              </a>
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
              <a
                href={`mailto:${ContactMessage.email}`}
                className="text-md font-pretendardExtraLight hover:underline"
              >
                {ContactMessage.email}
              </a>
            </div>
          </div>
        </CardSide>
      </div>
    </div>
  );
};

export default Card;
