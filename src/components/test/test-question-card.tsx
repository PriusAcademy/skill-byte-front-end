import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { cn } from "../../lib/utils";
interface QuestionCardProps {
  questionId: string;
  question: string;
  code?: boolean;
  index: number;
  options: string[];
  ansIndex: number;
  onClickOption: (
    questionId: string,
    givenIndex: number,
    ansIndex: number
  ) => void;
  explanation: string;
  givenAnswer:
    | {
        questionId: string;
        selectedOption: string;
        ansIndex: string;
      }
    | undefined;
}

const TestQuestionCard = ({
  options,
  index: questionNumber,
  question,
  code = false,
  ansIndex,
  questionId,
  // explanation,
  onClickOption,
  givenAnswer,
}: QuestionCardProps) => {
  const [clicked, setClicked] = useState(false);
  const [clickedIndex, setClickedIndex] = useState<undefined | number>(
    (givenAnswer?.selectedOption && +givenAnswer.selectedOption) || undefined
  );

  useEffect(() => {
    if (givenAnswer) {
      setClicked(true);
      setClickedIndex(+givenAnswer.selectedOption);
    }
  }, [givenAnswer]);

  const onClick = (
    selectedOption: number,
    questionId: string,
    ansIndex: number
  ) => {
    setClicked(true);
    setClickedIndex(selectedOption);
    onClickOption(questionId, selectedOption, ansIndex);
  };

  return (
    <div>
      <div className="flex gap-2">
        <p>{questionNumber}.</p>
        {code ? (
          <SyntaxHighlighter style={docco}>{question}</SyntaxHighlighter>
        ) : (
          <h2 className="text-secondaryBlue text-lg font-semibold">
            {question}
          </h2>
        )}
      </div>
      <div className="mt-3 ml-7 cursor-pointer inline-block">
        <RadioGroup>
          {options.map((option, index) => (
            <div
              key={index}
              className={cn("flex items-center w-fit gap-x-2 font-semibold")}
            >
              <RadioGroupItem
                checked={
                  givenAnswer
                    ? +givenAnswer.selectedOption == index
                    : index == clickedIndex
                }
                disabled={clicked}
                onClick={() => !clicked && onClick(index, questionId, ansIndex)}
                className={cn(
                  clicked ? (ansIndex == index ? "text-green-500" : "") : "",
                  clicked &&
                    clickedIndex == index &&
                    ansIndex != index &&
                    "text-red-500"
                )}
                value={option}
              />
              <p
                className={cn(
                  clicked ? (ansIndex == index ? "text-green-500" : "") : "",
                  clicked &&
                    clickedIndex == index &&
                    ansIndex != index &&
                    "text-red-500"
                )}
              >
                {option}
              </p>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default TestQuestionCard;
