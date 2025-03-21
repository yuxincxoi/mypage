import React, { useState } from "react";
import ProjectImg from "../components/project/ProjectImg";
import Stacks from "../components/project/Stacks";
import FadeInSection from "../FadeInSection";
import { ProjectDetailProps } from "../interfaces/components/project/ProjectDetail.interface";
import { projectDetailStatics } from "../../statics/project/projectDetail.static";

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projects }) => {
  const [isMoreSectionOpen, setIsMoreSectionOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleMoreSectionOpen = () => {
    setIsButtonVisible(false);

    setTimeout(() => {
      setIsMoreSectionOpen(true);
    });
  };

  return (
    <div className="w-[95%] mx-auto bg-zinc-50 text-zinc-800 py-32 rounded-3xl">
      <div className="w-5/6 mx-auto text-center">
        <FadeInSection>
          <div className="w-[20%] h-[2px] mx-auto mb-4 bg-gradient-to-l from-cyan-300 to-amber-400 via-red-400"></div>
          <div>
            <div className="text-3xl">{projects.title}</div>
            <Stacks stacks={projects.stack} />
            <div className="mt-4">{projects.exp}</div>
            <ProjectImg images={projects.img} />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            {/* 주요 기능 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-center text-black">
                {projectDetailStatics.function}
              </h2>
              <div className="bg-zinc-100 p-6 rounded-2xl text-start">
                {projects.function?.map((func: string, idx: number) => (
                  <div key={idx} className="mt-4">
                    <p className="text-lg font-medium text-black mb-2">
                      {func}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 특징 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-center text-black">
                {projectDetailStatics.character}
              </h2>
              <div className="bg-zinc-100 p-6 rounded-2xl text-start">
                {projects.character?.map((char: string, idx: number) => (
                  <div key={idx} className="mt-4">
                    <p className="text-lg font-medium text-black mb-2">
                      {char}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </FadeInSection>
        {(projects.troubleShooting || projects.comment) && (
          <FadeInSection>
            <div className="mt-32">
              {!isMoreSectionOpen && (
                <div className="h-16">
                  <button
                    className={`text-lg text-center font-semibold bg-neutral-500 w-3/12 p-4 rounded-full text-white hover:bg-neutral-600 transition-opacity duration-600 ease-in-out ${
                      isButtonVisible ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={handleMoreSectionOpen}
                  >
                    트러블슈팅 및 회고
                  </button>
                </div>
              )}
              {isMoreSectionOpen && (
                <div className="mt-8 space-y-16 transition-all duration-300">
                  {projects.troubleShooting && (
                    <section className="space-y-4">
                      <h2 className="text-2xl font-semibold text-center text-black">
                        {projectDetailStatics.troubleShooting.title}
                      </h2>
                      <div className="bg-zinc-100 p-6 rounded-2xl text-start">
                        <div>
                          <p className="text-lg font-medium text-black mb-2">
                            {projectDetailStatics.troubleShooting.trouble}
                          </p>
                          <p className="text-gray-300 mb-4">
                            {projects.troubleShooting.trouble}
                          </p>
                          <p className="text-lg font-medium text-black mb-2">
                            {projectDetailStatics.troubleShooting.shooting}
                          </p>
                          <p className="text-gray-300 mb-4">
                            {projects.troubleShooting.shooting}
                          </p>
                          <p className="text-lg font-medium text-black mb-2">
                            {projectDetailStatics.troubleShooting.result}
                          </p>
                          <p className="text-gray-300">
                            {projects.troubleShooting.result}
                          </p>
                        </div>
                      </div>
                    </section>
                  )}
                  {projects.comment && (
                    <section className="space-y-4">
                      <h2 className="text-2xl font-semibold text-center text-black">
                        {projectDetailStatics.comment}
                      </h2>
                      <div className="bg-zinc-100 p-6 rounded-2xl text-start">
                        <p className="text-gray-300">{projects.comment}</p>
                      </div>
                    </section>
                  )}
                </div>
              )}
            </div>
          </FadeInSection>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
