import React, { useState, useEffect } from "react";
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-auto text-zinc-800 py-32 rounded-3xl">
      {projects.map((project) => (
        <div className="w-[65%] mx-auto flex relative mb-40">
          <div className="w-[260px] pr-10 shrink-0">
            <DetailTitle
              projects={project}
              className="sticky top-32 whitespace-pre-wrap"
            />
            {/* 프로젝트 제목 */}
          </div>
          <div className="w-auto pl-10">
            <Stacks stacks={project.stack} /> {/* 프로젝트 스택 */}
            <Explanation projects={project} /> {/* 프로젝트 설명 */}
            <FadeInSection>
              <div>
                {/* 특징 */}
                <Section
                  sectionTitle={projectDetailStatics.character}
                  isBasic={true}
                  isChar={true}
                  para={project.character}
                  className="mt-20"
                />
              </div>
            </FadeInSection>
            <FadeInSection>
              {(project.troubleShooting || project.comment) && (
                <div>
                  {/* 트러블슈팅 */}
                  {project.troubleShooting && (
                    <Section
                      sectionTitle={projectDetailStatics.function}
                      isBasic={false}
                      isChar={false}
                      subTitle={[
                        projectDetailStatics.troubleShooting.trouble,
                        projectDetailStatics.troubleShooting.shooting,
                        projectDetailStatics.troubleShooting.result,
                      ]}
                      para={[
                        project.troubleShooting.trouble,
                        project.troubleShooting.shooting,
                        project.troubleShooting.result,
                      ]}
                      className="mt-20"
                    />
                  )}
                </div>
              )}
            </FadeInSection>
            <FadeInSection>
              <div>
                <ProjectImg onClick={openModal} /> {/* 프로젝트 사진 */}
                {/* 깃허브 */}
                {/* url */}
                {/* 회고 */}
              </div>
            </FadeInSection>
            {/* 이미지 모달 */}
            {isModalOpen && (
              <Modal
                images={project.img}
                onClose={closeModal}
                comment={project.function}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetail;
