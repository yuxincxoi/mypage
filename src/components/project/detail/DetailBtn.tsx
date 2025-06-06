import React, { useRef } from "react";

interface DetailBtnProps {
  onClick: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

const DetailBtn: React.FC<DetailBtnProps> = ({ onClick, isFirst, isLast }) => {
  return (
    <div
      onClick={onClick}
      className={`flex-1 px-2 py-1 hover:bg-zinc-100 cursor-pointer border-r border-zinc-200 last:border-r-0 flex items-center justify-center ${
        isFirst ? "rounded-tl-xl rounded-bl-xl" : ""
      } ${isLast ? "rounded-tr-xl rounded-br-xl" : ""}`}
    >
      .
    </div>
  );
};

export default DetailBtn;
