import React from "react";
import { X } from "lucide-react";
import { CloseModalBtnProps } from "../../../interfaces/components/project/modal/CloseModalBtn.interface";

const CloseModalBtn: React.FC<CloseModalBtnProps> = ({ onClose }) => {
  return (
    <button
      aria-label="Close Modal"
      className="absolute -top-7 right-0 text-neutral-400 hover:text-neutral-500 transition-colors duration-100"
      onClick={onClose}
    >
      <X size={22} strokeWidth={2} />
    </button>
  );
};

export default CloseModalBtn;
