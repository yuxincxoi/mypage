import React from "react";
import ProjectImg from "../ProjectImg";
import { Project } from "../../../interfaces/components/project/Project.interface";

interface DetailBtnProps {
  project: Project;
  openModal: (project: Project) => void;
}

const DetailBtn: React.FC<DetailBtnProps> = ({ project, openModal }) => {
  return (
    <div className="w-full h-9 mt-4 bg-zinc-50 rounded-xl shadow-inner flex">
      {/* 프로젝트 사진 */}
      <ProjectImg
        onClick={() => openModal(project)}
        className="flex-1 px-2 py-2 hover:bg-zinc-100 cursor-pointer border-r border-zinc-200 last:border-r-0 flex items-center justify-center"
      />

      {/* 깃허브 */}
      <div className="flex-1 px-2 py-1 hover:bg-zinc-100 cursor-pointer border-r border-zinc-200 last:border-r-0 flex items-center justify-center">
        .
      </div>

      {/* url */}
      <div className="flex-1 px-2 py-1 hover:bg-zinc-100 cursor-pointer border-r border-zinc-200 last:border-r-0 flex items-center justify-center">
        .
      </div>

      {/* 회고 */}
      <div className="flex-1 px-2 py-1 hover:bg-zinc-100 cursor-pointer border-r border-zinc-200 last:border-r-0 flex items-center justify-center">
        .
      </div>

      {/* 문서 */}
      <div className="flex-1 px-2 py-1 hover:bg-zinc-100 cursor-pointer border-r border-zinc-200 last:border-r-0 flex items-center justify-center">
        .
      </div>
    </div>
  );
};

export default DetailBtn;
