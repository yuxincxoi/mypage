import React from "react";
import CloseModalBtn from "./CloseModalBtn";
import ChevronBtn from "../img/ChevronBtn";

interface ModalProps {
  images: string[];
  selectedImageIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Modal: React.FC<ModalProps> = ({
  images,
  selectedImageIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black backdrop-blur-lg bg-opacity-30 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative max-w-[90%] max-h-[90%] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseModalBtn onClose={onClose} />
        {images.length > 1 && (
          <>
            <ChevronBtn
              direction="left"
              onClick={onPrev}
              isHidden={selectedImageIndex <= 0}
            />
            <ChevronBtn
              direction="right"
              onClick={onNext}
              isHidden={selectedImageIndex >= images.length - 1}
            />
          </>
        )}
        <img
          src={images[selectedImageIndex]}
          alt={`Project Image ${selectedImageIndex + 1}`}
          className="w-[60vw] h-[60vh] object-contain"
        />
      </div>
    </div>
  );
};

export default Modal;
