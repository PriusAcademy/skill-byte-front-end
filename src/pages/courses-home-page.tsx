import Container from "../components/container";
import CourseCard from "../components/course-card";
import { courseData } from "../data/course-data";

const CoursesHomePage = () => {
  return (
    <div>
      <div>
        <img
          src="/images/courses-banner.jpg"
          className="w-full  h-40 sm:h-60 lg:h-72 bg-cover"
        />
      </div>
      <Container>
        <h1 className="text-4xl lg:text-5xl font-bold lg:mb-12 text-secondaryBlue text-center mb-6">
          Courses for Students
        </h1>
        <div className="flex flex-wrap flex-row  sm:justify-start justify-center gap-6 items-center w-full h-full">
          {courseData.map((course) => (
            <CourseCard
              src={course.src}
              href={course.href}
              nCategories={course.nCategories}
              nQuestions={course.nQuestions}
              title={course.title}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CoursesHomePage;
