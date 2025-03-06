import React from "react";
import ScrollIndicator from "../components/ScrollIndicator";

const IntroPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-screen text-9xl font-extrabold">
      <div>반갑습니다</div>
      <div>최유진입니다.</div>
      {isVisible && <ScrollIndicator />}
    </div>
  );
};

export default IntroPage;
