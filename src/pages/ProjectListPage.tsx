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

  const handleIconClick = (index: number) => {
    window.scrollTo({
      top: 600,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <h1>Project</h1>
      <div className="relative w-5/6 h-screen mx-auto">
        {bubblePositions.map((bubble, index) => (
          <ProjectIcon
            projectTitle={projects[index].title}
            style={bubble.style}
            onClick={() => handleIconClick(index)}
          />
        ))}
      </div>
      {/* 프로젝트 정보 영역 */}
      <div className="w-full bg-black text-white py-10">
        <div className="w-5/6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="p-6 bg-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="mb-3">
                  프로젝트 설명: 이 프로젝트는 사용자 경험을 개선하기 위한
                  다양한 기능을 제공합니다.
                </p>
                <p className="mb-3">
                  기술 스택: React, TypeScript, Tailwind CSS
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">
                  자세히 보기
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectListPage;
