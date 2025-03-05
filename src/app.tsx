import React from "react";
import IntroPage from "./pages/IntroPage";
import ProjectListPage from "./pages/ProjectListPage";

const App: React.FC = () => {
  return (
    <div>
      <IntroPage />
      <ProjectListPage />
    </div>
  );
};

export default App;
