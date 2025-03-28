import React, { useEffect } from "react";
import CloseModalBtn from "./CloseModalBtn";
import ChevronBtn from "../img/ChevronBtn";
import { ModalProps } from "../../../interfaces/components/project/modal/Modal.interface";

const Modal: React.FC<ModalProps> = ({
  images,
  selectedImageIndex,
  onClose,
  onPrev,
  onNext,
  comment,
}) => {
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
              className="top-[20vh] text-white hover:text-gray-300"
              strokeWidth={2}
            />
            <ChevronBtn
              direction="right"
              onClick={onNext}
              isHidden={selectedImageIndex >= images.length - 1}
              className="top-[20vh] text-white hover:text-gray-300"
              strokeWidth={2}
            />
          </>
        )}
        <img
          src={images[selectedImageIndex]}
          alt={`Project Image ${selectedImageIndex + 1}`}
          className="w-[50vw] h-[40vh] object-contain"
        />
        <div className="text-center h-28">
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
