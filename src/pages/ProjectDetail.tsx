import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectImg from "../components/project/ProjectImg";
import Stacks from "../components/project/Stacks";
import FadeInSection from "../FadeInSection";
import { ProjectDetailProps } from "../interfaces/components/project/ProjectDetail.interface";

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projects }) => {
  const [isMoreSectionOpen, setIsMoreSectionOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  // 모달 상태에 따른 스크롤 제어
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // 컴포넌트가 언마운트되거나 모달 상태 변경될 때 초기화
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  // 새로운 프로젝트 선택 시 상태 초기화
  useEffect(() => {
    setIsMoreSectionOpen(false);
    setIsButtonVisible(true);
  }, [projects]);

  const handleMoreSectionOpen = () => {
    setIsButtonVisible(false);
    setTimeout(() => {
      setIsMoreSectionOpen(true);
    });
  };

  const openModal = (image: string) => {
    const index = projects.img.indexOf(image);
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (
      selectedImageIndex !== null &&
      selectedImageIndex < projects.img.length - 1
    ) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  return (
    <div className="w-[95%] mx-auto bg-zinc-50 text-zinc-800 py-32 rounded-3xl">
      <div className="w-5/6 mx-auto text-center">
        <FadeInSection>
          <div className="w-[20%] h-[2px] mx-auto mb-4 bg-gradient-to-l from-cyan-300 to-amber-400 via-red-400"></div>
          <div>
            <div className="text-3xl font-pretendardSemiBold">
              {projects.title}
            </div>
            <Stacks stacks={projects.stack} />
            <div className="mt-4 whitespace-pre-wrap font-pretendard">
              {projects.exp}
            </div>
            <ProjectImg images={projects.img} onClick={openModal} />
          </div>
        </FadeInSection>
        {/* 이미지 모달 */}
        {isModalOpen && selectedImageIndex !== null && (
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="relative bg-white rounded-xl max-w-[90%] max-h-[90%] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()} // 모달 클릭 시 닫히지 않도록 방지
            >
              {/* 좌우 화살표 */}
              {projects.img.length > 1 && (
                <>
                  <button
                    aria-label="Previous Images"
                    className={`absolute left-[-50px] top-1/2 transform -translate-y-1/2 px-3 py-1 ${
                      selectedImageIndex <= 0 ? "hidden" : ""
                    }`}
                    onClick={handlePrevImage}
                    disabled={selectedImageIndex === 0}
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    aria-label="Next Images"
                    className={`absolute right-[-50px] top-1/2 transform -translate-y-1/2 px-3 py-1 ${
                      selectedImageIndex >= projects.img.length - 1
                        ? "hidden"
                        : ""
                    }`}
                    onClick={handleNextImage}
                    disabled={selectedImageIndex === projects.img.length - 1}
                  >
                    <ChevronRight />
                  </button>
                </>
              )}

              {/* 선택된 이미지 */}
              <img
                src={projects.img[selectedImageIndex]}
                alt={`Project Image ${selectedImageIndex + 1}`}
                className="w-[60vw] h-[60vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
