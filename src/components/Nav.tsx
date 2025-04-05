import React, { useState, useEffect, useRef } from "react";
import { navStatics } from "../../statics/nav.static";

const Nav: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [documentHeight, setDocumentHeight] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const calculateNavRanges = () => {
    const isShortDocument = documentHeight <= 4000;

    return [
      {
        label: navStatics.home.label,
        id: navStatics.home.id,
        range: [0, 600],
        scrollTo: 0,
      },
      {
        label: navStatics.projects.label,
        id: navStatics.projects.id,
        range: [600, isShortDocument ? 1500 : 3200],
        scrollTo: 780,
      },
      {
        label: navStatics.contact.label,
        id: navStatics.contact.id,
        range: [isShortDocument ? 1500 : 3200, Infinity],
        scrollTo: isShortDocument ? 1800 : 3300,
      },
    ];
  };

  const navItems = calculateNavRanges();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setIsScrolling(true);

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 600);
    };

    const updateDocumentHeight = () => {
      setDocumentHeight(document.documentElement.scrollHeight);
    };

    updateDocumentHeight();

    const resizeObserver = new ResizeObserver(updateDocumentHeight);
    resizeObserver.observe(document.documentElement);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const getActiveSection = () => {
    for (const item of navItems) {
      if (scrollPosition >= item.range[0] && scrollPosition < item.range[1]) {
        return item.id;
      }
    }
  };

  const handleScrollTo = (position: number) => {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`
        fixed right-8 top-1/2 transform -translate-y-1/2 z-50 
        flex flex-col items-center space-y-8 justify-center px-3 py-5 font-pretendard 
        transition-opacity duration-500 ease-in-out
        ${isScrolling ? "opacity-100" : "opacity-0"}
      `}
    >
      {navItems.map((item) => (
        <div
          key={item.id}
          className="relative flex flex-col items-center cursor-pointer"
          onMouseEnter={() => setActiveItem(item.id)}
          onMouseLeave={() => setActiveItem(null)}
          onClick={() => handleScrollTo(item.scrollTo)}
        >
          {(activeItem === item.id || getActiveSection() === item.id) && (
            <div className="absolute left-[-80px] text-gray-500 font-normal text-sm px-2 rounded transition-all duration-300 ease-in-out top-[-5px]">
              {item.label}
            </div>
          )}
          <div
            className={`
              rounded-full transition-all duration-300 ease-in-out
              ${
                getActiveSection() === item.id
                  ? "w-3 h-3 bg-zinc-100 scale-125 shadow-lg"
                  : "w-2 h-2 bg-zinc-200"
              }
            `}
          />
        </div>
      ))}
    </div>
  );
};

export default Nav;
