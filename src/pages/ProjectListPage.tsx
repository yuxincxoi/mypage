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
  const [bubblePositions, setBubblePositions] = useState<
    {
      id: number;
      style: {
        left: string;
        top: string;
        animation: string;
      };
    }[]
  >([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectDetailVisible, setIsProjectDetailVisible] =
    useState<boolean>(false);
  const detailRef = useRef<HTMLDivElement>(null); // ProjectDetail 요소의 ref
  const listRef = useRef<HTMLDivElement>(null);
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [isListVisible, setIsListVisible] = useState(false);

  const [projects, setProjects] = useState(
    Array.from({ length: 10 }, (_, i) => {
      const key = `project_${i + 1}` as keyof typeof projectStatics;
      return projectStatics[key];
    })
  );

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
        threshold: 0.75, // 75% 이상 보일 때
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
      <FadeInSection>
        <div ref={listRef} className="relative w-5/6 h-screen mx-auto mt-16">
          {bubblePositions.map((bubble, index) => (
            <ProjectIcon
              key={projects[index].id}
              projectId={projects[index].id}
              projectTitle={projects[index].title}
              style={bubble.style}
              onClick={() => handleIconClick(projects[index].id)}
              isBlurred={shouldBlurIcon(projects[index].type)}
              projectType={projects[index].type}
            />
          ))}
        </div>
      </FadeInSection>
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
