import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectIconGrid from "../components/project/ProjectIconGrid";
import TypeChechBox from "../components/project/TypeCheckBox";
import ProjectDetail from "./ProjectDetail";
import ScrollToProjectListBtn from "../components/ScrollToProjectListBtn";
import FadeInSection from "../FadeInSection";
import { Project } from "../interfaces/components/project/Project.interface";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { getNormalizedProjects } from "../utils/normalizeProjects";

gsap.registerPlugin(ScrollTrigger);

const ProjectListPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectDetailVisible, setIsProjectDetailVisible] =
    useState<boolean>(false);
  const listRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<Project[]>(getNormalizedProjects());

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
      <FadeInSection>
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
      </FadeInSection>
    </div>
  );
};

export default ProjectListPage;
