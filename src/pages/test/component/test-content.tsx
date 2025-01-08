import QuestionCard from "../../../components/question-card";

interface TestContentProps {
  title: string;
  subtitle: string;
  questions: {
    ansIndex: number;
    options: string[];
    index: number;
    question: string;
    code?: boolean;
  }[];
  onClickOption: (
    questionId: string,
    ansIndex: number,
    givenIndex: number
  ) => void;
  givenAnswers: {
    questionId: string;
    selectedOption: number;
    ansIndex: number;
  }[];
  duration: string;
}

const TestContent = ({
  title,
  subtitle,
  questions,
  onClickOption,
  givenAnswers,
  duration,
}: TestContentProps) => {
  return (
    <>
      <span className="absolute top-4  text-center text-red-500 font-semibold text-md right-10 bg-white px-2 py-2 border-2 border-red-500 ">
        {duration}
      </span>
      <h1 className="text-3xl font-semibold text-center [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] text-secondaryBlue">
        {title}
      </h1>
      <h2 className="text-center mt-6 uppercase font-semibold text-2xl text-activeBlue">
        {subtitle}
      </h2>
      <div className="flex flex-col items-start gap-5 mt-6 p-2">
        {questions.map((question, index) => (
          <QuestionCard
            givenAnswer={givenAnswers.find(
              (item) => `${item.questionId}` == `${index}`
            )}
            ansIndex={question.ansIndex}
            index={question.index}
            options={question.options}
            question={question.question}
            code={question.code}
            key={index}
            onClickOption={onClickOption}
            questionId={`${index}`}
          />
        ))}
      </div>
    </>
  );
};

export default TestContent;
