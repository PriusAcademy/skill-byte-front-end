import { useParams } from "react-router-dom";
import Container from "../../components/container";
import { useAppSelector } from "../../app/hooks";
import SubTopicBundle from "../../components/sub-topic-bundle";

const SubTopicIndexPage = () => {
  const { topicId } = useParams() as { topicId: string };

  const studentsData = useAppSelector((state) => state.learner).value.find(
    (item) => item.type == "students"
  );

  const topic = studentsData?.topics.find((item) => item.id == topicId);

  const subTopics = studentsData?.subTopics.filter(
    (item) => item.topicId == topicId
  );

  return (
    <Container>
      <h1 className="text-xl [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] font-semibold text-secondaryBlue text-center sm:text-4xl">
        {topic?.name.toUpperCase()}
      </h1>
      <div className="flex flex-col w-full py-8 items-center justify-center">
        {subTopics?.map((item) => (
          <SubTopicBundle
            key={item.id}
            startTime={
              (item.testStartTime && new Date(item.testStartTime)) || undefined
            }
            endTime={
              (item.testEndTime && new Date(item.testEndTime)) || undefined
            }
            id={item.id}
            no_questions={10}
            title={item.name}
            subTopicId={item.id}
          />
        ))}
      </div>
    </Container>
  );
};

export default SubTopicIndexPage;
