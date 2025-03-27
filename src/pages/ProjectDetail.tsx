import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import ProjectImg from "../components/project/ProjectImg";
import Stacks from "../components/project/Stacks";
import FadeInSection from "../FadeInSection";
import { ProjectDetailProps } from "../interfaces/components/project/ProjectDetail.interface";
import { projectDetailStatics } from "../../statics/project/projectDetail.static";
import DetailTitle from "../components/project/detail/DetailTitle";
import Explanation from "../components/project/detail/Explanation";
import Section from "../components/project/detail/Section";
import MoreBtn from "../components/project/detail/MoreBtn";

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
      <div className="w-5/6 mx-auto">
        <FadeInSection>
          <div className="w-[20%] h-[2px] mx-auto mb-4 bg-gradient-to-l from-cyan-300 to-amber-400 via-red-400"></div>
          <div>
            <DetailTitle projects={projects} />
            <Stacks stacks={projects.stack} />
            <Explanation projects={projects} />
            <ProjectImg images={projects.img} onClick={openModal} />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="mx-auto mt-32 w-[80%]">
            {/* 주요 기능 */}
            <section className="grid grid-cols-[1fr_5fr] gap-10">
              <h2 className="text-3xl font-pretendardSemiBold text-black">
                {projectDetailStatics.function}
              </h2>
              <div className="p-1">
                {projects.function?.map((func: string, idx: number) => (
                  <div key={idx} className="mt-1">
                    <p className="font-pretendard text-black mb-2">{func}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 특징 */}
            <section className="grid grid-cols-[1fr_5fr] gap-10 mt-20">
              <h2 className="text-3xl font-pretendardSemiBold text-black">
                {projectDetailStatics.character}
              </h2>
              <div className="p-1">
                {projects.character?.map((char: string, idx: number) => (
                  <div key={idx} className="mt-1">
                    <p className="font-pretendard text-black mb-2">{char}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </FadeInSection>
        {(projects.troubleShooting || projects.comment) && (
          <FadeInSection>
            <div className="mt-28">
              {!isMoreSectionOpen && (
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
              )}
              {isMoreSectionOpen && (
                <div className="w-[80%] mx-auto transition-all duration-300">
                  {projects.troubleShooting && (
                    <section className="grid grid-cols-[1fr_5fr] gap-10">
                      <h2 className="text-3xl font-pretendardSemiBold text-black">
                        {projectDetailStatics.troubleShooting.title}
                      </h2>
                      <div className="font-pretendard p-1">
                        <div>
                          <p className="font-pretendardSemiBold text-black text-lg mb-2">
                            {projectDetailStatics.troubleShooting.trouble}
                          </p>
                          <p className="mb-4 font-pretendard">
                            {projects.troubleShooting.trouble}
                          </p>
                          <p className="font-pretendardSemiBold text-black text-lg mb-2">
                            {projectDetailStatics.troubleShooting.shooting}
                          </p>
                          <p className="mb-4 font-pretendard">
                            {projects.troubleShooting.shooting}
                          </p>
                          <p className="font-pretendardSemiBold text-black text-lg mb-2">
                            {projectDetailStatics.troubleShooting.result}
                          </p>
                          <p className="font-pretendard">
                            {projects.troubleShooting.result}
                          </p>
                        </div>
                      </div>
                    </section>
                  )}
                  {projects.comment && (
                    <section className="grid grid-cols-[1fr_5fr] gap-10 mt-20">
                      <h2 className="text-3xl font-pretendardSemiBold text-black">
                        {projectDetailStatics.comment}
                      </h2>
                      <div className="font-pretendard p-1">
                        <p className="">{projects.comment}</p>
                      </div>
                    </section>
                  )}
                </div>
              )}
            </div>
          </FadeInSection>
        )}
        {/* 이미지 모달 */}
        {isModalOpen && selectedImageIndex !== null && (
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black backdrop-blur-lg bg-opacity-30 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="relative max-w-[90%] max-h-[90%] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()} // 모달 클릭 시 닫히지 않도록 방지
            >
              {/* 닫기 버튼 */}
              <button
                aria-label="Close Modal"
                className="absolute -top-7 right-0 text-white hover:text-gray-300 transition-colors duration-100"
                onClick={closeModal}
              >
                <X size={22} strokeWidth={2} />
              </button>

              {/* 좌우 화살표 */}
              {projects.img.length > 1 && (
                <>
                  <button
                    aria-label="Previous Images"
                    className={`absolute left-[-50px] top-1/2 transform -translate-y-1/2 px-3 py-1 text-white hover:text-gray-300 transition-colors duration-100 ${
                      selectedImageIndex <= 0 ? "hidden" : ""
                    }`}
                    onClick={handlePrevImage}
                    disabled={selectedImageIndex === 0}
                  >
                    <ChevronLeft size={32} strokeWidth={2} />
                  </button>
                  <button
                    aria-label="Next Images"
                    className={`absolute right-[-50px] top-1/2 transform -translate-y-1/2 px-3 py-1 text-white hover:text-gray-300 transition-colors duration-100 ${
                      selectedImageIndex >= projects.img.length - 1
                        ? "hidden"
                        : ""
                    }`}
                    onClick={handleNextImage}
                    disabled={selectedImageIndex === projects.img.length - 1}
                  >
                    <ChevronRight size={32} strokeWidth={2} />
                  </button>
                </>
              )}

              {/* 선택된 이미지 */}
              <img
                src={projects.img[selectedImageIndex]}
                alt={`Project Image ${selectedImageIndex + 1}`}
                className="w-[60vw] h-[60vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
