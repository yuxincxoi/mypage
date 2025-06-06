import React from "react";
import { DetailBtnBarProps } from "../../../interfaces/components/project/detail/DetailBtn.interface";
import DetailBtn from "./DetailBtn";

const DetailBtnBar: React.FC<DetailBtnBarProps> = ({ project, openModal }) => {
  return (
    <div className="w-60 h-9 mb-10 bg-zinc-50 rounded-xl shadow-inner flex">
      {/* 프로젝트 사진 */}
      <DetailBtn onClick={() => openModal(project)} isFirst={true} />

      {/* 깃허브 */}
      <DetailBtn onClick={() => console.log("깃허브")} />

      {/* url */}
      <DetailBtn onClick={() => console.log("url")} />

      {/* 회고 */}
      <DetailBtn onClick={() => console.log("회고")} />

      {/* 문서 */}
      <DetailBtn onClick={() => console.log("문서")} isLast={true} />
    </div>
  );
};

export default DetailBtnBar;
