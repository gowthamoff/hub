import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import resumeData from "./utils/res_primaryLanguage.json";
import sharedData from "./utils/portfolio_shared_data.json";

const App = () => {
  const [resumeDataState, setResumeData] = useState({});
  const [sharedDataState, setSharedData] = useState({});

  useEffect(() => {
    setResumeData(resumeData);
    setSharedData(sharedData);
  }, []);

  return (
    <div>
      <Header sharedData={sharedDataState.basic_info} />
      <About
        resumeBasicInfo={resumeDataState.basic_info}
        sharedBasicInfo={sharedDataState.basic_info}
      />
      <Projects
        resumeProjects={resumeDataState.projects}
        resumeBasicInfo={resumeDataState.basic_info}
      />
      <Skills
        sharedSkills={sharedDataState.skills}
        resumeBasicInfo={resumeDataState.basic_info}
      />
      <Experience
        resumeExperience={resumeDataState.experience}
        resumeBasicInfo={resumeDataState.basic_info}
      />
      <Footer sharedBasicInfo={sharedDataState.basic_info} />
    </div>
  );
};

export default App;
