import React, { useState, useEffect } from "react";
import Stacks from "../components/project/Stacks";
import FadeInSection from "../FadeInSection";
import { ProjectDetailProps } from "../interfaces/components/project/ProjectDetail.interface";
import { projectDetailStatics } from "../../statics/project/projectDetail.static";
import DetailTitle from "../components/project/detail/DetailTitle";
import Explanation from "../components/project/detail/Explanation";
import Section from "../components/project/detail/section/Section";
import DetailBtn from "../components/project/detail/DetailBtn";
import Modal from "../components/project/modal/Modal";
import { Project } from "../interfaces/components/project/Project.interface";

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projects }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-auto text-zinc-800 py-32 rounded-3xl">
      {projects.map((project) => (
        <div className="w-[65%] mx-auto flex relative mb-40">
          <div className="w-[260px] pr-10 shrink-0 self-start sticky top-32">
            <div>
              {/* 프로젝트 제목 */}
              <DetailTitle projects={project} className="whitespace-pre-wrap" />
              <DetailBtn project={project} openModal={openModal} />
            </div>
          </div>
          <div className="w-auto pl-16 border-l">
            <FadeInSection>
              <Stacks stacks={project.stack} /> {/* 프로젝트 스택 */}
            </FadeInSection>
            <FadeInSection>
              <Explanation projects={project} /> {/* 프로젝트 설명 */}
            </FadeInSection>
            <FadeInSection>
              <div>
                {/* 특징 */}
                <Section
                  sectionTitle={projectDetailStatics.character}
                  isBasic={true}
                  isChar={true}
                  para={project.character}
                  className="mt-14"
                />
              </div>
            </FadeInSection>
            <FadeInSection>
              {(project.troubleShooting || project.comment) && (
                <div>
                  {/* 트러블슈팅 */}
                  {project.troubleShooting && (
                    <Section
                      sectionTitle={projectDetailStatics.troubleShooting.title}
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
                      className="mt-14"
                    />
                  )}
                </div>
              )}
            </FadeInSection>
          </div>
        </div>
      ))}
      {isModalOpen && selectedProject && (
        <Modal
          images={selectedProject.img}
          onClose={closeModal}
          comment={selectedProject.function}
        />
      )}
    </div>
  );
};

export default ProjectDetail;
