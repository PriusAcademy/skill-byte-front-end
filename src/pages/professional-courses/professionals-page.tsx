import Container from "../../components/container";
import CourseCard from "../../components/course-card";
import Header from "../../components/header";

const ProfesstionalsPage = () => {
  return (
    <Container>
      <div className="flex flex-col gap-6">
        <Header title="Courses for Professionals" />
        <CourseCard
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClI_IE2tUKoM1Wz8niy3owmC952q3sZN3Jw&s"
          title="Angular - The Complete Guide"
          time="55.5 total hours"
          description="Master Angular and build awesome, reactive web apps with successor of Angular.js"
        />
      </div>
    </Container>
  );
};

export default ProfesstionalsPage;
