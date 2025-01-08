import { useParams } from "react-router-dom";
import ContainerWithBackground from "../../components/container-with-background";
import Header from "../../components/header";
import TitleCards from "../../components/title-cards";
import { useAppSelector } from "../../app/hooks";

const ComputerScienceCourses = () => {
  const data = useAppSelector((state) => state.learner).value;

  function capitalizeWord(word: string) {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  const params = useParams() as { course: string };
  const courseId = params.course.split("&")[1];
  const title = params.course
    .split("&")[0]
    .split("-")
    .map((item) => capitalizeWord(item))
    .join(" ");

  const studentsData = data.find((item) => item.type == "students");
  const specializations = studentsData?.specializations.filter(
    (item) => item.majorId == courseId
  );

  return (
    <ContainerWithBackground>
      <Header title={`Courses for ${title} Students`} />
      <div className="bg-white shadow-md w-full  space-y-6 rounded-lg mt-8 p-4">
        {specializations?.map((item) => {
          const titleCardsContent = studentsData?.categories
            .filter((category) => category.specializationId == item.id)
            .map((category) => ({
              title: category.name,
              src: category.src,
              id: category.id,
            }));
          return (
            <TitleCards
              key={item.id}
              content={titleCardsContent || []}
              title={item.name}
            />
          );
        })}
      </div>
    </ContainerWithBackground>
  );
};

export default ComputerScienceCourses;
