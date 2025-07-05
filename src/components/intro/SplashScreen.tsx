import React, { useEffect, useState } from "react";

type SplashScreenProps = {
  onFinish: () => void;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const appearTimer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    const finishTimer = setTimeout(() => {
      onFinish(); // 사라진 뒤 IntroPage로 전환
    }, 2500);

    return () => {
      clearInterval(progressInterval);
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
      <div className="text-2xl tracking-widest font-shirik font-extrabold animate-pulse scale-x-90 relative overflow-hidden">
        <div className="text-zinc-300">CHOiYUJiN</div>

        {/* 텍스트 오버레이 */}
        <div
          className="absolute top-0 left-0 text-black overflow-hidden"
          style={{
            height: `${progress}%`,
          }}
        >
          CHOiYUJiN
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
