import React from "react";
import ProjectImg from "./ProjectImg";
import Stacks from "./Stacks";
import FadeInSection from "../FadeInSection";
import { ProjectDetailProps } from "../interfaces/components/ProjectDetail.interface";

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projects }) => {
  const projectImages = ["사진1", "사진2", "사진3", "사진4", "사진5"];

  return (
    <div className="w-full bg-black text-white py-20">
      <div className="w-5/6 mx-auto text-center">
        <FadeInSection>
          <div>
            <div className="text-3xl">프로젝트 이름</div>
            <Stacks />
            <div className="mt-4">
              프로젝트 설명입니다. 이렇고저런 프로젝트이고 이렇고저래서
              만들었습니다.
            </div>
            <ProjectImg images={projectImages} />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            {/* 주요 기능 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-center text-white">
                주요 기능
              </h2>
              <div className="bg-gray-800 p-6 rounded-2xl text-start">
                <div>
                  <p className="text-lg font-medium text-white mb-2">
                    🎯 주요 기능 1
                  </p>
                  <p className="text-gray-300 text-start">
                    기능에 대한 상세 설명을 여기에 작성합니다. 어떤 문제를
                    해결하고 어떤 가치를 제공하는지 설명합니다.
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-medium text-white mb-2">
                    🕐 주요 기능 2
                  </p>
                  <p className="text-gray-300 text-start">
                    기능에 대한 상세 설명을 여기에 작성합니다. 어떤 문제를
                    해결하고 어떤 가치를 제공하는지 설명합니다.
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-medium text-white mb-2">
                    📚 주요 기능 3
                  </p>
                  <p className="text-gray-300 text-start">
                    기능에 대한 상세 설명을 여기에 작성합니다. 어떤 문제를
                    해결하고 어떤 가치를 제공하는지 설명합니다.
                  </p>
                </div>
              </div>
            </section>

            {/* 특징 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-center text-white">
                특징
              </h2>
              <div className="bg-gray-800 p-6 rounded-2xl text-start">
                <div>
                  <p className="text-white font-medium text-lg mb-2">
                    🥳 특징 1
                  </p>
                  <p className="text-gray-300">
                    특징에 대한 상세 설명을 여기에 작성합니다. 프로젝트의 독특한
                    점이나 혁신적인 부분을 강조합니다.
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-medium text-white mb-2">
                    💪 특징 2
                  </p>
                  <p className="text-gray-300 text-start">
                    특징에 대한 상세 설명을 여기에 작성합니다. 프로젝트의 독특한
                    점이나 혁신적인 부분을 강조합니다.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="mt-20">
            <div className="text-2xl font-semibold text-center text-white">
              트러블 슈팅
            </div>
            <div className="bg-gray-800 p-10 rounded-2xl mt-4 text-start">
              <div>
                <div className="text-lg text-white mb-2">[문제]</div>
                <div>이렇고 저런 문제가 있었습니다.</div>
              </div>
              <div className="mt-4">
                <div className="text-lg text-white mb-2">[해결과정]</div>
                <div>
                  이렇고 저런 문제를 해결하기 위해 이런 방법들을 시도했습니다.
                  그래서 이러한 변화가 생겼습니다.
                </div>
              </div>
              <div className="mt-4">
                <div className="text-lg text-white mb-2">[알게된 점]</div>
                <div>
                  문제를 해결하면서 이런 점을 알게되었고 배우게 된 계기가
                  되었습니다.
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="mt-20">
            <div className="text-2xl font-semibold text-center text-white">
              회고
            </div>
            <div className="bg-gray-800 p-10 rounded-2xl mt-4 text-start">
              회고입니다. 이 프로젝트를 통해 이러한 것들을 느꼈고
              이렇고저렇습니다.
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default ProjectDetail;
