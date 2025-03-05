import React from "react";
import IntroPage from "./pages/IntroPage";
import ProjectListPage from "./pages/ProjectListPage";
import ContactPage from "./pages/ContactPage";
import Footer from "../src/components/Footer";
import Nav from "./components/Nav";

const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <IntroPage />
      <ProjectListPage />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default App;
