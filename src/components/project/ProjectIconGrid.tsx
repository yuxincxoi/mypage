import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectIcon from "./ProjectIcon";
import { Project } from "../../interfaces/components/project/Project.interface";

gsap.registerPlugin(ScrollTrigger);

interface ProjectIconGridProps {
  projects: Project[];
  selectedType: string;
  onProjectClick: (projectId: number) => void;
  sectionRef: React.RefObject<HTMLDivElement>;
  listRef: React.RefObject<HTMLDivElement>;
}

const ProjectIconGrid: React.FC<ProjectIconGridProps> = ({
  projects,
  selectedType,
  onProjectClick,
  sectionRef,
  listRef,
}) => {
  const columnCounts = [1, 2, 2, 2, 2, 1];
  const yOffsets = [0, -90, 0, -180, -90, 0];

  const shouldBlurIcon = (projectType: string) => {
    return selectedType !== "all" && projectType !== selectedType;
  };

  useEffect(() => {
    const section = sectionRef.current;
    const container = listRef.current;
    if (!section || !container) return;

    const scrollWidth = container.scrollWidth - window.innerWidth;

    gsap.to(container, {
      x: () => `-${scrollWidth}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const columns: Project[][] = [];
  let currentIndex = 0;

  for (let i = 0; i < columnCounts.length; i++) {
    const count = columnCounts[i];
    columns.push(projects.slice(currentIndex, currentIndex + count));
    currentIndex += count;
  }

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden py-5 my-20"
    >
      <div className="text-center">
        <div className="font-pretendardSemiBold text-xl">프로젝트</div>
        <div className="font-pretendardExtraLight text-3xl">
          저는 이런 것들을 좋아합니다
        </div>
      </div>
      <div ref={listRef} className="flex gap-5 h-full pt-52 pl-80">
        {columns.map((column, colIdx) => (
          <div
            key={colIdx}
            className="flex flex-col gap-2 shrink-0"
            style={{
              transform: `translateY(${yOffsets[colIdx]}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {column.map((project) => (
              <ProjectIcon
                key={project.id}
                projectId={project.id}
                projectTitle={project.title}
                projectSubTitle={project.subTitle}
                onClick={() => onProjectClick(project.id)}
                isBlurred={shouldBlurIcon(project.type)}
                projectType={project.type}
              />
            ))}
          </div>
        ))}
        <div className="w-[300px] shrink-0" />
      </div>
    </div>
  );
};

export default ProjectIconGrid;
