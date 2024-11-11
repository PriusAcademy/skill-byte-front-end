import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useState } from "react";
import { cn } from "../lib/utils";

interface QuestionCardProps {
  question: string;
  code?: boolean;
  index: number;
  options: string[];
  ansIndex: number;
}

const QuestionCard = ({
  options,
  index,
  question,
  code = false,
  ansIndex,
}: QuestionCardProps) => {
  const [clicked, setClicked] = useState(false);
  const [clickedIndex, setClickedIndex] = useState<undefined | number>(
    undefined
  );

  const onClick = (index: number) => {
    setClicked(true);
    setClickedIndex(index);
  };

  //   clicked
  //   ? clickedIndex == index
  //     ? index == ansIndex
  //       ? "text-green-500"
  //       : "text-red-500"
  //     : ""
  //   : ""

  return (
    <div>
      <div className="flex gap-2">
        <p>{index}.</p>
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
              className={cn(
                "flex items-center w-fit gap-x-2 font-semibold",
                clicked ? (ansIndex == index ? "text-green-500" : "") : "",
                clicked &&
                  clickedIndex == index &&
                  ansIndex != index &&
                  "text-red-500"
              )}
            >
              <RadioGroupItem
                disabled={clicked}
                onClick={() => !clicked && onClick(index)}
                className={cn(
                  clicked ? (ansIndex == index ? "text-green-500" : "") : "",
                  clicked &&
                    clickedIndex == index &&
                    ansIndex != index &&
                    "text-red-500"
                )}
                value={option}
              />
              <p>{option}</p>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default QuestionCard;
