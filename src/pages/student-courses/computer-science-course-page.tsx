import ContainerWithBackground from "../../components/container-with-background";
import Header from "../../components/header";
// import TitleCards from "../../components/title-cards";
// import {
//   artificialIntelligence,
//   cloud,
//   coreTopics,
//   cyberSecurity,
//   devops_linux,
//   fullStack,
//   programmingLanguages,
//   ui_ux,
//   webDelevelopmentLanguages,
// } from "../../constansts";

const ComputerScienceCourses = () => {
  return (
    <ContainerWithBackground>
      <Header title="Courses for Computer Science Students" />
      <div className="bg-white shadow-md w-full  space-y-6 rounded-lg mt-8 p-4"></div>
    </ContainerWithBackground>
  );
};

export default ComputerScienceCourses;
