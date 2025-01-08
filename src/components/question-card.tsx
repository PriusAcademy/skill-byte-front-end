import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useState } from "react";
import { cn } from "../lib/utils";

interface QuestionCardProps {
  questionId: string;
  question: string;
  code?: boolean;
  index: number;
  options: string[];
  ansIndex: number;
  onClickOption: (
    questionId: string,
    ansIndex: number,
    givenIndex: number
  ) => void;
  // explanation: string;
  givenAnswer:
    | {
        questionId: string;
        selectedOption: number;
        ansIndex: number;
      }
    | undefined;
}

const QuestionCard = ({
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
  const [clicked, setClicked] = useState(!!givenAnswer);
  const [clickedIndex, setClickedIndex] = useState<undefined | number>(
    givenAnswer?.selectedOption && givenAnswer.selectedOption
  );

  const onClick = (
    selectedOption: number,
    ansIndex: number,
    questionId: string
  ) => {
    setClicked(true);
    setClickedIndex(selectedOption);
    onClickOption(questionId, ansIndex, selectedOption);
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
                    ? givenAnswer.selectedOption == index
                    : index == clickedIndex
                }
                disabled={clicked}
                onClick={() => !clicked && onClick(index, ansIndex, questionId)}
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

export default QuestionCard;
