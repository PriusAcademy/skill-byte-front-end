import { useParams } from "react-router-dom";
import Container from "../components/container";
import QuestionBundle from "../components/question-bundle";
import { getTestPageTitle } from "../utils/utils";

const TestIndexPage = () => {
  const params = useParams() as {
    concept: string;
    learner: string;
    major: string;
    specialization: string;
  };

  const title = getTestPageTitle(params.concept);

  return (
    <Container>
      <h1 className=" [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] text-3xl font-semibold text-center text-secondaryBlue">
        {title}
      </h1>
      <div className="flex flex-col w-full py-8 items-center justify-center">
        <QuestionBundle index={1} key={1} />
        <QuestionBundle index={2} key={2} />
        <QuestionBundle index={3} key={3} />
      </div>
    </Container>
  );
};

export default TestIndexPage;
