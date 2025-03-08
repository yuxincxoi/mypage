import React, { useEffect, useState } from "react";
import ProjectIcon from "../components/project/ProjectIcon";
import TypeChechBox from "../components/project/TypeCheckBox";
import ProjectDetail from "./ProjectDetail";
import ScrollToProjectListBtn from "../components/ScrollToProjectListBtn";
import FadeInSection from "../FadeInSection";

const ProjectListPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [bubblePositions, setBubblePositions] = useState<any[]>([]);
  const [projects, setProjects] = useState([
    { id: 1, title: "프로젝트 1", type: "personal" },
    { id: 2, title: "프로젝트 2", type: "team" },
    { id: 3, title: "프로젝트 3", type: "personal" },
    { id: 4, title: "프로젝트 4", type: "personal" },
    { id: 5, title: "프로젝트 5", type: "team" },
    { id: 6, title: "프로젝트 6", type: "team" },
    { id: 7, title: "프로젝트 7", type: "personal" },
    { id: 8, title: "프로젝트 8", type: "personal" },
    { id: 9, title: "프로젝트 9", type: "personal" },
    { id: 10, title: "프로젝트 10", type: "team" },
  ]);
  const [isProjectDetailVisible, setIsProjectDetailVisible] =
    useState<boolean>(false);

  // 고정된 위치를 지정한 배열
  const fixedPositions = [
    { x: 120, y: 10 },
    { x: 280, y: 220 },
    { x: 5, y: 250 },
    { x: 460, y: 30 },
    { x: 500, y: 390 },
    { x: 780, y: 450 },
    { x: 680, y: 200 },
    { x: 850, y: 10 },
    { x: 160, y: 450 },
    { x: 980, y: 250 },
  ];

  // 각 프로젝트 아이콘 위치 및 애니메이션 설정
  const generateBubblePositions = () => {
    return projects.map((project, index) => {
      const { x, y } = fixedPositions[index];

      // 애니메이션
      const floatDuration = 3 + Math.random() * 4;
      const delay = Math.random() * 5;

      return {
        id: project.id,
        style: {
          left: `${x}px`,
          top: `${y}px`,
          animation: `float ${floatDuration}s ease-in-out ${delay}s infinite alternate`,
        },
      };
    });
  };

  useEffect(() => {
    setBubblePositions(generateBubblePositions());
  }, [projects.length]);

  const handleIconClick = (index: number) => {
    setIsProjectDetailVisible(true);
    window.scrollTo({
      top: 1500,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  };

  const shouldBlurIcon = (projectType: string) => {
    if (selectedType === "all") return false;
    return projectType !== selectedType;
  };

  return (
    <div>
      <FadeInSection>
        <TypeChechBox
          selectedType={selectedType}
          onTypeChange={handleTypeChange}
        />
      </FadeInSection>
      <FadeInSection>
        <div className="relative w-5/6 h-screen mx-auto mt-16">
          {bubblePositions.map((bubble, index) => (
            <ProjectIcon
              key={projects[index].id}
              projectTitle={projects[index].title}
              style={bubble.style}
              onClick={() => handleIconClick(index)}
              isBlurred={shouldBlurIcon(projects[index].type)}
              projectType={projects[index].type}
            />
          ))}
        </div>
      </FadeInSection>
      {isProjectDetailVisible && <ProjectDetail projects={projects} />}
      <ScrollToProjectListBtn />
    </div>
  );
};

export default ProjectListPage;
