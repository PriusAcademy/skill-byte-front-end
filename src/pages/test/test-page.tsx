import { useParams } from "react-router-dom";
import Container from "../../components/container";
import TestContent from "./component/test-content";
import { questions } from "./data";
import {
  decryptData,
  encryptData,
  getDurationInMinutesAndSeconds,
  getItemFromLocalStorage,
} from "../../utils/utils";

import { useDate } from "../../hooks/get-time";
import ContentBeforeTest from "./component/content-before-test";
import ContentAfterTest from "./component/content-after-test";
import { useAppSelector } from "../../app/hooks";
import { useEffect } from "react";

const TestPage = () => {
  const { subTopicId } = useParams() as { subTopicId: string };

  const studentsData = useAppSelector((state) => state.learner).value.find(
    (item) => item.type == "students"
  );

  const subTopic = studentsData?.subTopics.find(
    (item) => item.id == subTopicId
  );

  const { today } = useDate();

  const startTime = new Date(getItemFromLocalStorage("startTime"));
  const endTime = new Date(getItemFromLocalStorage("endTime"));

  const durationToStart = getDurationInMinutesAndSeconds(today, startTime);
  const durationToEnd = getDurationInMinutesAndSeconds(today, endTime);

  useEffect(() => {
    if (durationToEnd.minutes < 0 && durationToEnd.seconds < 0) {
      localStorage.setItem("uZ8wGjS1oBv3YlX9F", "");
    }
  }, [durationToEnd]);

  let userAnswers: {
    questionId: string;
    selectedOption: number;
    ansIndex: number;
  }[] = [];

  if (localStorage.getItem("uZ8wGjS1oBv3YlX9F")) {
    userAnswers = decryptData(localStorage.getItem("uZ8wGjS1oBv3YlX9F"));
  }

  const TOTAL_MARKS = questions.length;

  const onClickOption = (
    questionId: string,
    ansIndex: number,
    selectedOption: number
  ) => {
    let answers = userAnswers;
    answers = [...answers, { questionId, selectedOption, ansIndex }];
    const encryptedData = encryptData(answers);
    localStorage.setItem("uZ8wGjS1oBv3YlX9F", encryptedData);
  };
  const showContentBeforeTest =
    durationToStart.minutes > 0 || durationToStart.seconds > 0;

  const showContentAfterTest =
    durationToEnd.minutes < 0 && durationToEnd.seconds < 0;
  return (
    <Container>
      <div className="relative">
        {showContentBeforeTest || showContentAfterTest ? (
          showContentBeforeTest ? (
            <ContentBeforeTest text={durationToStart.formattedDuration} />
          ) : (
            <ContentAfterTest
              totalMarks={TOTAL_MARKS}
              name="Test Name"
              obtainedMarks={
                userAnswers.filter(
                  (item) => item.ansIndex == item.selectedOption
                ).length || 0
              }
            />
          )
        ) : (
          <TestContent
            duration={durationToEnd.formattedDuration}
            givenAnswers={userAnswers}
            title={subTopic?.name.toUpperCase() || ""}
            subtitle={""}
            questions={questions}
            onClickOption={onClickOption}
          />
        )}
      </div>
    </Container>
  );
};

export default TestPage;
