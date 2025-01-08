import Container from "../components/container";
import CourseCard from "../components/course-card";
import { CourseType } from "../types";
import { useAppSelector } from "../app/hooks";

const CoursesHomePage = () => {
  const existingData = useAppSelector((state) => state.learner).value;
  const coursesData =
    existingData.find((item) => item.type == "students")?.majors ||
    ([] as CourseType[]);

  if (!existingData.length) {
    return <div>LOADING</div>;
  }

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
          {coursesData.map((course) => (
            <CourseCard
              key={course.src}
              src={course.src}
              href={`/courses/students/${course.name
                .toLowerCase()
                .split(" ")
                .join("-")}&${course.id}`}
              nCategories={20}
              nQuestions={200}
              title={course.name}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CoursesHomePage;
