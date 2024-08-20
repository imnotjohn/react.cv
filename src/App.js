import './App.css';
import HeaderSection from "./components/HeaderSection";
import SkillSection from "./components/SkillSection";
import EducationSection from "./components/EducationSection";
import ProjectSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import MembershipSection from "./components/MembershipSection";
import AwardSection from "./components/AwardSection";

import ControlPanel from './components/ControlPanel';
import {useEffect, useState} from 'react';

function App() {
  const sections = {
    "HeaderSection": true,
    "SkillSection": true,
    "EducationSection": true,
    "ProjectSection": true,
    "ExperienceSection": true,
    "AwardSection": true,
    "MembershipSection": true,
  }
  // let [sections, setSections] = useState(null);

  // useEffect( () => {
  //   fetch("./data/sections.json")
  //     .then(res => res.json())
  //     .then(data => setSections(data))
  //     .catch(error => console.log(error));
  //   }, []);

  return (
    <div className="App">
      <ControlPanel cpInputs={Object.keys(sections)}/>
      <HeaderSection />
      <SkillSection />
      <EducationSection />
      <ProjectSection />
      <ExperienceSection />
      <MembershipSection />
      <AwardSection />
    </div>
  );
}

export default App;
