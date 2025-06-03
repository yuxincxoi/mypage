import React, { useEffect, useState } from "react";
import CloseModalBtn from "./CloseModalBtn";
import ChevronBtn from "../img/ChevronBtn";
import { ModalProps } from "../../../interfaces/components/project/modal/Modal.interface";

const Modal: React.FC<ModalProps> = ({ images, onClose, comment }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const handlePrevImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  // ESC 버튼 누르면 모달 닫기
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-white backdrop-blur-xl bg-opacity-10 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative w-[40vw] max-h-[90%] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseModalBtn onClose={onClose} />
        {images.length > 1 && (
          <>
            <ChevronBtn
              direction="left"
              onClick={handlePrevImage}
              isHidden={selectedImageIndex <= 0}
              className="top-[20vh] text-neutral-400 hover:text-neutral-500"
              strokeWidth={2}
            />
            <ChevronBtn
              direction="right"
              onClick={handleNextImage}
              isHidden={selectedImageIndex >= images.length - 1}
              className="top-[20vh] text-neutral-400 hover:text-neutral-500"
              strokeWidth={2}
            />
          </>
        )}
        <img
          src={images[selectedImageIndex]}
          alt={`Project Image ${selectedImageIndex + 1}`}
          className="w-[50vw] h-[40vh] object-contain"
        />
        <div className="w-[50vw] whitespace-pre-wrap text-center h-28">
          <div className="font-pretendard mt-1">
            {comment[selectedImageIndex][0]}
          </div>
          <div className="font-pretendardExtraLight mt-7">
            {comment[selectedImageIndex][1]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
