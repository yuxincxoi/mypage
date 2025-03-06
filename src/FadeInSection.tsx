import React, { useEffect, useRef, useState } from "react";

// 페이드인 효과를 가진 섹션 컴포넌트
const FadeInSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 요소가 화면에 20% 이상 보이면 isVisible을 true로 설정
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 한 번 보여지면 관찰 중단
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      {
        // 요소가 20% 이상 보여야 isIntersecting이 true가 됨
        threshold: 0.2,
        // 뷰포트 상단에서 100px 위부터 감지 시작 (미리 준비)
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
