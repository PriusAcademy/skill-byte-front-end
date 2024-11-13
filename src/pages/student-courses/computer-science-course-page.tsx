import ContainerWithBackground from "../../components/container-with-background";
import Header from "../../components/header";
import TitleCards from "../../components/title-cards";
import {
  artificialIntelligence,
  cloud,
  coreTopics,
  cyberSecurity,
  devops_linux,
  fullStack,
  programmingLanguages,
  ui_ux,
  webDelevelopmentLanguages,
} from "../../constansts";

const ComputerScienceCourses = () => {
  return (
    <ContainerWithBackground>
      <Header title="Courses for Computer Science Students" />
      <div className="bg-white shadow-md w-full  space-y-6 rounded-lg mt-8 p-4">
        <TitleCards
          title="Programming Languages"
          content={programmingLanguages}
        />
        <TitleCards title="CSE Core Topics" content={coreTopics} />
        <TitleCards
          title="Artificial Intelligence"
          content={artificialIntelligence}
        />
        <TitleCards
          title="Web Development Languages"
          content={webDelevelopmentLanguages}
        />
        <TitleCards title="Cloud" content={cloud} />
        <TitleCards title="Cyber security" content={cyberSecurity} />
        <TitleCards title="UI/ UX" content={ui_ux} />
        <TitleCards title="Devops And Linux" content={devops_linux} />
        <TitleCards title="Full Stack" content={fullStack} />
      </div>
    </ContainerWithBackground>
  );
};

export default ComputerScienceCourses;
