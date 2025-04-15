import React, { useEffect, useState, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectIcon from "../components/project/ProjectIcon";
import TypeChechBox from "../components/project/TypeCheckBox";
import ProjectDetail from "./ProjectDetail";
import ScrollToProjectListBtn from "../components/ScrollToProjectListBtn";
import FadeInSection from "../FadeInSection";
import { projectStatics } from "../../statics/project/project.static";
import { Project } from "../interfaces/components/project/Project.interface";

gsap.registerPlugin(ScrollTrigger);

const ProjectListPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectDetailVisible, setIsProjectDetailVisible] =
    useState<boolean>(false);
  const detailRef = useRef<HTMLDivElement>(null); // ProjectDetail 요소의 ref
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [isListVisible, setIsListVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [projects, setProjects] = useState<Project[]>(
    Object.keys(projectStatics).map((key) => {
      const project = projectStatics[key as keyof typeof projectStatics];

      return {
        id: project.id,
        title: project.title,
        subTitle: project.subTitle,
        type: project.type,
        stack: project.stack || [],
        exp: project.exp || "",
        img: project.img || [],
        function: project.function.map((item: string | string[]) =>
          Array.isArray(item) ? item : [item]
        ),
        character: project.character || [],
        troubleShooting: {
          trouble: project.troubleShooting?.trouble || "",
          shooting: project.troubleShooting?.shooting || "",
          result: project.troubleShooting?.result || "",
        },
        comment: project.comment || "",
      };
    })
  );

  const handleIconClick = (projectId: number) => {
    const projectData = projects.find((p) => p.id === projectId);
    if (projectData) {
      setSelectedProject(projectData);
      setIsProjectDetailVisible(true);
      window.scrollTo({
        top: 1900,
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
        threshold: 0.5, // 50% 이상 보일 때
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

  const columnCounts = [1, 2, 2, 2, 2, 1];
  const yOffsets = [0, -90, 0, -180, -90, 0];
  const baseOffset = 20;
  const centerOffset = 400;

  const columns = [];
  let currentIndex = 0;

  for (let i = 0; i < columnCounts.length; i++) {
    const count = columnCounts[i];
    columns.push(projects.slice(currentIndex, currentIndex + count));
    currentIndex += count;
  }

  return (
    <div>
      <FadeInSection>
        <div className="mb-14 text-center">
          <div className="font-pretendardSemiBold text-xl">프로젝트</div>
          <div className="font-pretendardExtraLight text-3xl">
            저는 이런 것들을 좋아합니다
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <TypeChechBox
          selectedType={selectedType}
          onTypeChange={handleTypeChange}
          isVisible={isListVisible}
        />
      </FadeInSection>
      <FadeInSection>
        <div
          ref={sectionRef}
          className="relative w-full h-screen overflow-hidden"
        >
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
                {column.map((project, idx) => (
                  <ProjectIcon
                    key={idx}
                    projectId={project.id}
                    projectTitle={project.title}
                    projectSubTitle={project.subTitle}
                    onClick={() => handleIconClick(project.id)}
                    isBlurred={shouldBlurIcon(project.type)}
                    projectType={project.type}
                  />
                ))}
              </div>
            ))}
            {/* 여백용 요소 */}
            <div className="w-[400px] shrink-0" />
          </div>
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
