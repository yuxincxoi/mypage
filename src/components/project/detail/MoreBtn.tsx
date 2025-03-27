import React from "react";
import { MoreBtnProps } from "../../../interfaces/components/project/detail/MoreBtn.interface";

const MoreBtn: React.FC<MoreBtnProps> = ({
  isButtonVisible,
  handleMoreSectionOpen,
}) => {
  return (
    <div className="w-full mx-auto flex justify-center items-center">
      <button
        className={`text-center font-pretendardSemiBold bg-neutral-500 px-10 py-4 rounded-full text-white hover:bg-neutral-600 transition-opacity duration-600 ease-in-out ${
          isButtonVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleMoreSectionOpen}
      >
        트러블슈팅 및 회고
      </button>
    </div>
  );
};

export default MoreBtn;
