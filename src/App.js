import './App.css';
import HeaderSection from "./components/HeaderSection";
import SkillSection from "./components/SkillSection";
import EducationSection from "./components/EducationSection";
import ProjectSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import MembershipSection from "./components/MembershipSection";
import AwardSection from "./components/AwardSection";

import ControlPanel from './components/ControlPanel';

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
