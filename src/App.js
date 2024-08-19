import './App.css';
import HeaderSection from "./components/HeaderSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ProjectSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import MembershipSection from "./components/MembershipSection";
import AwardSection from "./components/AwardSection";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <SkillsSection />
      <EducationSection />
      <ProjectSection />
      <ExperienceSection />
      <MembershipSection />
      <AwardSection />
    </div>
  );
}

export default App;
