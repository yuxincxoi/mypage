import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import ProjectImg from "../components/project/ProjectImg";
import Stacks from "../components/project/Stacks";
import FadeInSection from "../FadeInSection";
import { ProjectDetailProps } from "../interfaces/components/project/ProjectDetail.interface";
import { projectDetailStatics } from "../../statics/project/projectDetail.static";
import DetailTitle from "../components/project/detail/DetailTitle";
import Explanation from "../components/project/detail/Explanation";
import Section from "../components/project/detail/section/Section";
import MoreBtn from "../components/project/detail/MoreBtn";
import Modal from "../components/project/modal/Modal";

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
            <DetailTitle projects={projects} /> {/* 프로젝트 제목 */}
            <Stacks stacks={projects.stack} /> {/* 프로젝트 스택 */}
            <Explanation projects={projects} /> {/* 프로젝트 설명 */}
            <ProjectImg images={projects.img} onClick={openModal} />{" "}
            {/* 프로젝트 사진 */}
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="mx-auto mt-32 w-[80%]">
            {/* 주요 기능 */}
            <Section
              sectionTitle={projectDetailStatics.function}
              isBasic={true}
              para={projects.function}
            />
            {/* 특징 */}
            <Section
              sectionTitle={projectDetailStatics.character}
              isBasic={true}
              para={projects.character}
              className="mt-20"
            />
          </div>
        </FadeInSection>
        {(projects.troubleShooting || projects.comment) && (
          <FadeInSection>
            <div className="mt-28">
              {/* 더보기 버튼 */}
              {!isMoreSectionOpen && (
                <MoreBtn
                  isButtonVisible={isButtonVisible}
                  handleMoreSectionOpen={handleMoreSectionOpen}
                />
              )}
              {isMoreSectionOpen && (
                <div className="w-[80%] mx-auto transition-all duration-300">
                  {/* 트러블슈팅 */}
                  {projects.troubleShooting && (
                    <Section
                      sectionTitle={projectDetailStatics.function}
                      isBasic={false}
                      subTitle={[
                        projectDetailStatics.troubleShooting.trouble,
                        projectDetailStatics.troubleShooting.shooting,
                        projectDetailStatics.troubleShooting.result,
                      ]}
                      para={[
                        projects.troubleShooting.trouble,
                        projects.troubleShooting.shooting,
                        projects.troubleShooting.result,
                      ]}
                    />
                  )}
                  {/* 회고 */}
                  {projects.comment && (
                    <Section
                      sectionTitle={projectDetailStatics.comment}
                      isBasic={true}
                      para={[projects.comment]}
                      className="mt-20"
                    />
                  )}
                </div>
              )}
            </div>
          </FadeInSection>
        )}
        {/* 이미지 모달 */}
        {isModalOpen && selectedImageIndex !== null && (
          <Modal
            images={projects.img}
            selectedImageIndex={selectedImageIndex}
            onClose={closeModal}
            onPrev={handlePrevImage}
            onNext={handleNextImage}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
