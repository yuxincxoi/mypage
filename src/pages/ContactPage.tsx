import React from "react";
import FadeInSection from "../FadeInSection";
import Card from "../components/card/Card";
import { ContactMessage } from "../../statics/contact.static";

const ContactPage: React.FC = () => {
  return (
    <div className="w-full h-[65vh] text-black">
      <div className="flex flex-col items-center justify-center">
        <FadeInSection>
          <div className="text-6xl font-extrabold my-20">
            {ContactMessage.title}
          </div>
        </FadeInSection>
        <FadeInSection>
          <Card />
        </FadeInSection>
      </div>
    </div>
  );
};

export default ContactPage;
