import React, { useState } from "react";
import FadeInSection from "../FadeInSection";
import Card from "../components/card/Card";

const ContactPage: React.FC = () => {
  return (
    <div className="w-full h-[65vh] bg-black text-white">
      <div className="flex flex-col items-center justify-center">
        <FadeInSection>
          <div className="text-6xl font-extrabold my-20">Contact</div>
        </FadeInSection>
        <FadeInSection>
          <Card />
        </FadeInSection>
      </div>
    </div>
  );
};

export default ContactPage;
