import React, { useEffect, useState } from "react";

type SplashScreenProps = {
  onFinish: () => void;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const appearTimer = setTimeout(() => {
      setVisible(false);
    }, 1000); // 3초간 표시

    const finishTimer = setTimeout(() => {
      onFinish(); // 사라진 뒤 IntroPage로 전환
    }, 1500); // 1초 후 전환

    return () => {
      clearTimeout(appearTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 transition-opacity duration-1000 bg-white ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-2xl tracking-widest font-aggro font-extrabold animate-pulse">
        CHOiYUJiN
      </div>
    </div>
  );
};

export default SplashScreen;
