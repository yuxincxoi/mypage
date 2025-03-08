import React from "react";
import ProjectImg from "../components/project/ProjectImg";
import Stacks from "../components/project/Stacks";
import FadeInSection from "../FadeInSection";
import { ProjectDetailProps } from "../interfaces/components/project/ProjectDetail.interface";
import { projectDetailStatics } from "../../statics/project/projectDetail.static";
import { projectStatics } from "../../statics/project/project.static";

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projects }) => {
  const projectImages = ["사진1", "사진2", "사진3", "사진4", "사진5"];

  return (
    <div className="w-full bg-black text-white py-20">
      <div className="w-5/6 mx-auto text-center">
        <FadeInSection>
          <div>
            <div className="text-3xl">{projectStatics.project_1.title}</div>
            <Stacks />
            <div className="mt-4">{projectStatics.project_1.exp}</div>
            <ProjectImg images={projectImages} />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            {/* 주요 기능 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-center text-white">
                {projectDetailStatics.function}
              </h2>
              <div className="bg-gray-800 p-6 rounded-2xl text-start">
                <div>
                  <p className="text-lg font-medium text-white mb-2">
                    🎯 {projectDetailStatics.functionList[0]}
                  </p>
                  <p className="text-gray-300 text-start">
                    {projectStatics.project_1.function[0]}
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-medium text-white mb-2">
                    🕐 {projectDetailStatics.functionList[1]}
                  </p>
                  <p className="text-gray-300 text-start">
                    {projectStatics.project_1.function[1]}
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-medium text-white mb-2">
                    📚 {projectDetailStatics.functionList[2]}
                  </p>
                  <p className="text-gray-300 text-start">
                    {projectStatics.project_1.function[2]}
                  </p>
                </div>
              </div>
            </section>

            {/* 특징 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-center text-white">
                {projectDetailStatics.character}
              </h2>
              <div className="bg-gray-800 p-6 rounded-2xl text-start">
                <div>
                  <p className="text-white font-medium text-lg mb-2">
                    🥳 {projectDetailStatics.characterList[0]}
                  </p>
                  <p className="text-gray-300">
                    {projectStatics.project_1.character[0]}
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-medium text-white mb-2">
                    💪 {projectDetailStatics.characterList[1]}
                  </p>
                  <p className="text-gray-300 text-start">
                    {projectStatics.project_1.character[1]}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="mt-20">
            <div className="text-2xl font-semibold text-center text-white">
              {projectDetailStatics.troubleShooting.title}
            </div>
            <div className="bg-gray-800 p-10 rounded-2xl mt-4 text-start">
              <div>
                <div className="text-lg text-white mb-2">
                  {projectDetailStatics.troubleShooting.trouble}
                </div>
                <div>{projectStatics.project_1.troubleShooting.trouble}</div>
              </div>
              <div className="mt-4">
                <div className="text-lg text-white mb-2">
                  {projectDetailStatics.troubleShooting.shooting}
                </div>
                <div>{projectStatics.project_1.troubleShooting.shooting}</div>
              </div>
              <div className="mt-4">
                <div className="text-lg text-white mb-2">
                  {projectDetailStatics.troubleShooting.result}
                </div>
                <div>{projectStatics.project_1.troubleShooting.result}</div>
              </div>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="mt-20">
            <div className="text-2xl font-semibold text-center text-white">
              {projectDetailStatics.comment}
            </div>
            <div className="bg-gray-800 p-10 rounded-2xl mt-4 text-start">
              {projectStatics.project_1.comment}
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default ProjectDetail;
