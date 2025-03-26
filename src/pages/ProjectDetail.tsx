import React, { useState, useEffect } from "react";
import ProjectImg from "../components/project/ProjectImg";
import Stacks from "../components/project/Stacks";
import FadeInSection from "../FadeInSection";
import { ProjectDetailProps } from "../interfaces/components/project/ProjectDetail.interface";
import { projectDetailStatics } from "../../statics/project/projectDetail.static";

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projects }) => {
  const [isMoreSectionOpen, setIsMoreSectionOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
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
            {/* 이미지 클릭 시 모달 띄우기 */}
            <ProjectImg images={projects.img} onClick={openModal} />
          </div>
        </FadeInSection>
        {/* 이미지 모달 */}
        {isModalOpen && (
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white p-4 rounded-xl"
              onClick={(e) => e.stopPropagation()} // 모달 클릭 시 닫히지 않도록 방지
            >
              <img
                src={selectedImage || ""}
                alt="Selected Project"
                className="max-w-[80vw] max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
