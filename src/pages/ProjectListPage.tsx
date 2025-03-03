import React, { useEffect, useState } from "react";
import ProjectIcon from "../components/ProjectIcon";

const ProjectListPage: React.FC = () => {
  const [bubblePositions, setBubblePositions] = useState<any[]>([]);
  const [projects, setProjects] = useState([
    { id: 1, title: "프로젝트 1" },
    { id: 2, title: "프로젝트 2" },
    { id: 3, title: "프로젝트 3" },
    { id: 4, title: "프로젝트 4" },
    { id: 5, title: "프로젝트 5" },
    { id: 6, title: "프로젝트 6" },
    { id: 7, title: "프로젝트 7" },
    { id: 8, title: "프로젝트 8" },
    { id: 9, title: "프로젝트 9" },
    { id: 10, title: "프로젝트 10" },
  ]);

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

  return (
    <div>
      <h1>Project</h1>
      {bubblePositions.map((bubble) => (
        <ProjectIcon projectTitle="프로젝트 이름" style={bubble.style} />
      ))}
    </div>
  );
};

export default ProjectListPage;
