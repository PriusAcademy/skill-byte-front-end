import { useParams, useSearchParams } from "react-router-dom";
import Container from "../container";
import QuestionCard from "../question-card";

const TestPage = () => {
  const params = useParams() as {
    concept: string;
  };

  const searchParams = useSearchParams()[0];

  const title = params.concept
    .split("-")
    .join(" ")
    .replace("%26", "&")
    .toUpperCase();

  const subtitle = "Test " + searchParams.get("index");

  const code = `#include <stdio.h>
int main() {
    printf("Hello, World!");
    return 0;
}`;
  const options = ["Hello, World", "Goodbye, World", "Hello!", "World"];
  return (
    <Container>
      <h1 className="text-3xl font-semibold text-center [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] text-secondaryBlue">
        {title}
      </h1>
      <h2 className="text-center mt-6 uppercase font-semibold text-2xl text-activeBlue">
        {subtitle}
      </h2>
      <div className="flex flex-col gap-5 mt-6 p-2">
        <QuestionCard
          ansIndex={0}
          options={options}
          index={1}
          question={code}
          code
        />
        <QuestionCard
          ansIndex={3}
          index={2}
          question={"Which of the following is not a valid C variable name?"}
          options={[
            "int number",
            "float rate",
            "int variable_count",
            "int $main",
          ]}
        />
      </div>
    </Container>
  );
};

export default TestPage;
