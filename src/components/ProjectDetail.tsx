import React from "react";

interface Project {
  id: number;
  title: string;
  type: string;
}

interface ProjectDetailProps {
  projects: Project[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projects }) => {
  return (
    <div className="w-full bg-black text-white py-10">
      <div className="w-5/6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="mb-3">
                프로젝트 설명: 이 프로젝트는 사용자 경험을 개선하기 위한 다양한
                기능을 제공합니다.
              </p>
              <p className="mb-3">기술 스택: React, TypeScript, Tailwind CSS</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">
                자세히 보기
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
