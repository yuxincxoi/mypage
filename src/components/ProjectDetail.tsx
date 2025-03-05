import React from "react";
import ProjectImg from "./ProjectImg";
import Stacks from "./Stacks";

interface Project {
  id: number;
  title: string;
  type: string;
}

interface ProjectDetailProps {
  projects: Project[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projects }) => {
  const projectImages = ["사진1", "사진2", "사진3", "사진4", "사진5"];

  return (
    <div className="w-full bg-black text-white py-20">
      <div className="w-5/6 mx-auto text-center">
        <div>
          <div className="text-3xl">프로젝트 이름</div>
          <Stacks />
          <div className="mt-4">
            프로젝트 설명입니다. 이렇고저런 프로젝트이고 이렇고저래서
            만들었습니다.
          </div>
          <ProjectImg images={projectImages} />
        </div>
        <div className="mt-12">
          <div className="text-2xl">주요 기능</div>
          <div className="mt-4">
            <div>주요 기능 1</div>
            <div className="mt-2">주요 기능 2</div>
            <div className="mt-2">주요 기능 3</div>
          </div>
        </div>
        <div className="mt-12">
          <div className="text-2xl">특징</div>
          <div className="mt-4">
            <div>특징 1</div>
            <div className="mt-2">특징 2</div>
            <div className="mt-2">특징 3</div>
          </div>
        </div>
        <div className="mt-12">
          <div className="text-2xl">트러블 슈팅</div>
          <div className="mt-4">
            <div className="mt-2">
              <div>[문제]</div>
              <div>이렇고 저런 문제가 있었습니다.</div>
            </div>
            <div className="mt-2">
              <div>[해결과정]</div>
              <div>
                이렇고 저런 문제를 해결하기 위해 이런 방법들을 시도했습니다.
                그래서 이러한 변화가 생겼습니다.
              </div>
            </div>
            <div className="mt-2">
              <div>[알게된 점]</div>
              <div>
                문제를 해결하면서 이런 점을 알게되었고 배우게 된 계기가
                되었습니다.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="text-2xl">회고</div>
          <div className="mt-2">
            회고입니다. 이 프로젝트를 통해 이러한 것들을 느꼈고
            이렇고저렇습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
