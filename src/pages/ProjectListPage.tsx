import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectIconGrid from "../components/project/ProjectIconGrid";
import TypeChechBox from "../components/project/TypeCheckBox";
import ProjectDetail from "./ProjectDetail";
import ScrollToProjectListBtn from "../components/ScrollToProjectListBtn";
import FadeInSection from "../FadeInSection";
import { projectStatics } from "../../statics/project/project.static";
import { Project } from "../interfaces/components/project/Project.interface";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

gsap.registerPlugin(ScrollTrigger);

const ProjectListPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectDetailVisible, setIsProjectDetailVisible] =
    useState<boolean>(false);
  const listRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
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
        top: 2400,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  };

  const isListVisible = useIntersectionObserver(listRef, 0.5);
  const isDetailVisible = useIntersectionObserver(detailRef, 0.2);

  return (
    <div>
      <FadeInSection>
        <TypeChechBox
          selectedType={selectedType}
          onTypeChange={handleTypeChange}
          isVisible={isListVisible}
        />
      </FadeInSection>
      <ProjectIconGrid
        projects={projects}
        selectedType={selectedType}
        onProjectClick={handleIconClick}
        sectionRef={sectionRef}
        listRef={listRef}
      />
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
