import { useParams } from "react-router-dom";
import Container from "../../components/container";
import TopicBundle from "../../components/topic-bundle";
import { useAppSelector } from "../../app/hooks";

const TestIndexPage = () => {
  const studentsData = useAppSelector((state) => state.learner).value.find(
    (item) => item.type == "students"
  );

  const params = useParams() as {
    categoryId: string;
    learner: string;
    major: string;
    specialization: string;
  };

  const title = studentsData?.categories.find(
    (item) => item.id == params.categoryId
  )?.name;

  const topics = studentsData?.topics.filter(
    (item) => item.categoryId == params.categoryId
  );

  return (
    <Container>
      <h1 className=" [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] text-3xl font-semibold text-center text-secondaryBlue">
        {title}
      </h1>
      <div className="flex flex-col w-full py-8 items-center justify-center">
        {topics ? (
          topics.map((item) => (
            <TopicBundle
              topicId={item.id}
              key={item.id}
              title={item.name}
              no_questions={
                studentsData?.subTopics.filter(
                  (subTopic) => subTopic.topicId == item.id
                ).length || 0
              }
            />
          ))
        ) : (
          <TopicBundle
            startTime={new Date("2024-11-14T18:52:00")}
            endTime={new Date("2024-11-14T19:00:00")}
            topicId=""
            key={1}
            title="Testing"
            no_questions={10}
          />
        )}

        {/* 
        <QuestionBundle index={2} key={2} />
        <QuestionBundle index={3} key={3} /> */}
      </div>
    </Container>
  );
};

export default TestIndexPage;
