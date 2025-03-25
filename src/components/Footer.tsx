import React from "react";
import { footerStatics } from "../../statics/footer.static";

const Footer: React.FC = () => {
  return (
    <div className="text-gray-400 font-pretendardExtraLight text-sm text-center pt-40 pb-12">
      {footerStatics.copyRight}
    </div>
  );
};

export default Footer;
