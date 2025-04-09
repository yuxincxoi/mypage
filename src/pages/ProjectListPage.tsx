import React, { useEffect, useState, useRef } from "react";
import ProjectIcon from "../components/project/ProjectIcon";
import TypeChechBox from "../components/project/TypeCheckBox";
import ProjectDetail from "./ProjectDetail";
import ScrollToProjectListBtn from "../components/ScrollToProjectListBtn";
import FadeInSection from "../FadeInSection";
import { projectStatics } from "../../statics/project/project.static";
import { Project } from "../interfaces/components/project/Project.interface";

const ProjectListPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectDetailVisible, setIsProjectDetailVisible] =
    useState<boolean>(false);
  const detailRef = useRef<HTMLDivElement>(null); // ProjectDetail 요소의 ref
  const listRef = useRef<HTMLDivElement>(null);
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [isListVisible, setIsListVisible] = useState(false);

  const [projects, setProjects] = useState<Project[]>(
    Object.keys(projectStatics).map((key) => {
      const project = projectStatics[key as keyof typeof projectStatics];

      return {
        id: project.id,
        title: project.title,
        subTitle: project.subTitle,
        type: project.type,
        stack: project.stack || [],
        exp: project.exp || "",
        img: project.img || [],
        function: project.function.map((item: string | string[]) =>
          Array.isArray(item) ? item : [item]
        ),
        character: project.character || [],
        troubleShooting: {
          trouble: project.troubleShooting?.trouble || "",
          shooting: project.troubleShooting?.shooting || "",
          result: project.troubleShooting?.result || "",
        },
        comment: project.comment || "",
      };
    })
  );

  const handleIconClick = (projectId: number) => {
    const projectData = projects.find((p) => p.id === projectId);
    if (projectData) {
      setSelectedProject(projectData);
      setIsProjectDetailVisible(true);
      window.scrollTo({
        top: 1500,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  };

  const shouldBlurIcon = (projectType: string) => {
    if (selectedType === "all") return false;
    return projectType !== selectedType;
  };

  // ProjectIcon을 감지하여 isListVisible 상태 업데이트
  // TypeCheckBox 표시 여부 제어
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsListVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // 50% 이상 보일 때
      }
    );

    if (listRef.current) {
      observer.observe(listRef.current); // ProjectIcon 관찰
    }

    return () => {
      if (listRef.current) {
        observer.unobserve(listRef.current); // 언마운트될 때 관찰 중지
      }
    };
  }, []);

  // ProjectDetail을 감지하여 isDetailVisible 상태 업데이트
  // ScrollToProjectListBtn 표시 여부 제어
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDetailVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // 20% 이상 보일 때
      }
    );

    if (detailRef.current) {
      observer.observe(detailRef.current); // ProjectDetail 관찰
    }

    return () => {
      if (detailRef.current) {
        observer.unobserve(detailRef.current); // 언마운트될 때 관찰 중지
      }
    };
  }, [isProjectDetailVisible]);

  return (
    <div>
      <FadeInSection>
        <TypeChechBox
          selectedType={selectedType}
          onTypeChange={handleTypeChange}
          isVisible={isListVisible}
        />
      </FadeInSection>
      <div
        ref={listRef}
        className="w-full flex flex-col items-center gap-4 my-16"
      >
        <FadeInSection>
          {/* 첫 번째 줄 */}
          <div className="flex justify-center gap-4">
            {projects.slice(0, 3).map((project) => (
              <ProjectIcon
                key={project.id}
                projectId={project.id}
                projectTitle={project.title}
                projectSubTitle={project.subTitle}
                onClick={() => handleIconClick(project.id)}
                isBlurred={shouldBlurIcon(project.type)}
                projectType={project.type}
              />
            ))}
          </div>
        </FadeInSection>
        <FadeInSection>
          {/* 두 번째 줄 */}
          <div className="flex justify-center gap-4">
            {projects.slice(3, 6).map((project) => (
              <ProjectIcon
                key={project.id}
                projectId={project.id}
                projectTitle={project.title}
                projectSubTitle={project.subTitle}
                onClick={() => handleIconClick(project.id)}
                isBlurred={shouldBlurIcon(project.type)}
                projectType={project.type}
              />
            ))}
          </div>
        </FadeInSection>
        <FadeInSection>
          {/* 세 번째 줄 */}
          <div className="flex justify-center gap-4">
            {projects.slice(6, 9).map((project) => (
              <ProjectIcon
                key={project.id}
                projectId={project.id}
                projectTitle={project.title}
                projectSubTitle={project.subTitle}
                onClick={() => handleIconClick(project.id)}
                isBlurred={shouldBlurIcon(project.type)}
                projectType={project.type}
              />
            ))}
          </div>
        </FadeInSection>
        <FadeInSection>
          {/* 네 번째 줄 */}
          <div className="flex justify-start gap-4">
            {projects.slice(9, 12).map((project) => (
              <ProjectIcon
                key={project.id}
                projectId={project.id}
                projectTitle={project.title}
                projectSubTitle={project.subTitle}
                onClick={() => handleIconClick(project.id)}
                isBlurred={shouldBlurIcon(project.type)}
                projectType={project.type}
              />
            ))}
          </div>
        </FadeInSection>
      </div>
      {isProjectDetailVisible && selectedProject && (
        <div ref={detailRef}>
          <ProjectDetail projects={selectedProject} />
        </div>
      )}
      <ScrollToProjectListBtn isVisible={isDetailVisible} />
    </div>
  );
};

export default ProjectListPage;
