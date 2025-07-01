import React, { useEffect, useState } from "react";

type SplashScreenProps = {
  onFinish: () => void;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const appearTimer = setTimeout(() => {
      setVisible(false);
    }, 3000); // 3초간 표시

    const finishTimer = setTimeout(() => {
      onFinish(); // 사라진 뒤 IntroPage로 전환
    }, 4000); // 1초 후 전환

    return () => {
      clearTimeout(appearTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black text-white z-50 transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-7xl font-bold tracking-widest">CHOiYUJiN</h1>
    </div>
  );
};

export default SplashScreen;
