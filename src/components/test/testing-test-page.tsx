import { useEffect, useState } from "react";
import { getUser } from "../../utils/isAuthorized";
import Container from "../container";
import {
  useBlocker,
  useLoaderData,
  // useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
// import { io } from "socket.io-client";

import TestQuestionCard from "./test-question-card";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { API } from "../../utils/connection";
import { decryptData, encryptData } from "../../utils/utils";

const TestingTestPage = () => {
  const { testProgressId, subTopicId } = useParams() as {
    testProgressId: string;
    subTopicId: string;
  };
  const [selectedOptions, setSelectedOptions] = useState<
    { questionId: string; option: string; isCorrect: boolean }[]
  >([]);

  // const [testDataId, setTestDataId] = useState();
  // const [userAnswerData,setUserAnswerData] = useState([])

  const user = getUser();
  const navigate = useNavigate();

  const [showPrompt, setShowPrompt] = useState(false);
  const [nextLocation, setNextLocation] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  // const location = useLocation();

  const blocker = useBlocker(({ nextLocation }) => {
    // if (submitClicked) {
    //   return false;
    // }
    // location.pathname.includes("/test/") &&
    if (location.pathname.includes("/test/") && !isConfirmed) {
      setShowPrompt(true); // Show modal
      setNextLocation(nextLocation.pathname); // Store target location
      return true; // Block navigation
    }
    return false; // Allow navigation
  });

  const handleConfirmNavigation = () => {
    setIsConfirmed(true); // Allow navigation
    setShowPrompt(false);
    if (nextLocation) {
      navigate(nextLocation); // Perform navigation
    }
  };

  // Cancel navigation
  const handleCancelNavigation = () => {
    setShowPrompt(false); // Close modal
    setNextLocation(null); // Reset target location
  };

  const data = useLoaderData() as {
    ansIndex: string;
    answer: string;
    code: boolean;
    options: string[];
    question: string;
    id: string;
  }[];

  // "https://backend-pf3b.onrender.com/"
  // "http://localhost:8000/"
  // const socket = io("https://backend-pf3b.onrender.com/", {
  //   query: { testProgressId, userId: user.id },
  // });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!user?.id) {
      navigate("");
    }

    if (localStorage.getItem("uZ8wGjS1oBv3YlX9F")) {
      setSelectedOptions(
        decryptData(localStorage.getItem("uZ8wGjS1oBv3YlX9F"))
      );
    }
    // socket.on("testProgressData", (data) => {
    //   setTestDataId(data.id);
    //   setSelectedOptions(data.data);
    // });
    // return () => {
    //   socket.off("testProgressData");
    // };
  }, [user, navigate]);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault(); // Prevent the default behavior (page reload or navigation)
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [navigate]);

  // useEffect(() => {
  //   const handleBackButton = () => {
  //     if (!isConfirmed) {
  //       setShowPrompt(true); // Show confirmation prompt
  //       setNextLocation(window.location.pathname); // Store current path
  //       window.history.pushState(null, "", window.location.href); // Push state to prevent back
  //     }
  //   };

  //   // Listen for browser back button click
  //   window.addEventListener("popstate", handleBackButton);

  //   return () => {
  //     window.removeEventListener("popstate", handleBackButton);
  //   };
  // }, [isConfirmed, navigate]);

  const onClick = (
    questionId: string,
    givenIndex: number,
    ansIndex: number
  ) => {
    // socket.emit("onSelect", {
    //   questionId,
    //   option: givenIndex,
    //   id: testDataId,
    //   correct: ansIndex == givenIndex,
    // });

    const encryptedData = encryptData([
      ...selectedOptions,
      {
        isCorrect: givenIndex == ansIndex,
        option: `${givenIndex}`,
        questionId,
      },
    ]);
    setSelectedOptions((prev) => [
      ...prev,
      {
        isCorrect: givenIndex == ansIndex,
        option: `${givenIndex}`,
        questionId,
      },
    ]);
    localStorage.setItem("uZ8wGjS1oBv3YlX9F", encryptedData);
  };

  const onSubmit = async () => {
    setIsConfirmed(true);
    // socket.on("testProgressData", (data) => {
    //   console.log("CLICKED");
    //   console.log(data);
    // });
    await API.patch(`/learner/test-progress/${testProgressId}`, {
      totalMarks: selectedOptions.filter((item) => item.isCorrect).length,
      totalQuestions: data.length,
      email: user.email,
      subTopicId,
      testProgressId,
      // subTopicId : data
    });
    setShowModal(false);
    localStorage.removeItem("uZ8wGjS1oBv3YlX9F");

    blocker.state = "proceeding";
    // navigate("/");
  };

  return (
    <Container>
      <div className="flex flex-col gap-4 mb-4">
        {data.map((item, index) => {
          const givenAnswer = selectedOptions.find(
            (ans) => ans.questionId == item.id
          );
          return (
            <TestQuestionCard
              key={index}
              ansIndex={+item.ansIndex - 1}
              index={index + 1}
              onClickOption={onClick}
              options={item.options}
              question={item.question}
              questionId={item.id}
              code={item.code}
              explanation={item.answer}
              givenAnswer={
                (givenAnswer && {
                  questionId: givenAnswer.questionId,
                  selectedOption: givenAnswer.option,
                  ansIndex: `${+item.ansIndex}`,
                }) ||
                undefined
              }
            />
          );
        })}
      </div>
      <Button
        onClick={() => setShowModal(true)}
        className="w-full"
        variant={"destructive"}
      >
        Submit
      </Button>

      <Dialog open={showModal} onOpenChange={onSubmit}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
          <div className="flex flex-col mb-4">
            <h2 className="text-center text-secondaryBlue text-3xl font-semibold">
              Are you Sure?
            </h2>
            {/* <h4 className="text-xl font-semibold text-center mt-4">
              Your Score is{" "}
              <span>{`${
                selectedOptions.filter((item) => item.isCorrect).length
              } Out of ${selectedOptions.length}`}</span>
            </h4> */}
          </div>
          <DialogFooter>
            <Button
              variant={"default"}
              onClick={() => setShowModal(false)}
              type="submit"
            >
              Cancel
            </Button>
            <Button
              // disabled={selectedOptions.length != data.length}
              variant={"destructive"}
              onClick={onSubmit}
              type="submit"
            >
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={showPrompt && !isConfirmed}
        onOpenChange={handleCancelNavigation}
      >
        <DialogContent>
          <DialogTitle>
            <DialogHeader>
              <h2 className="text-lg font-semibold">Leave this page?</h2>
              <p className="text-sm text-gray-500">
                You have unsaved changes. Are you sure you want to leave this
                page? This will be counted as the test attempt.
              </p>
            </DialogHeader>
          </DialogTitle>
          <DialogFooter>
            <Button variant="secondary" onClick={handleCancelNavigation}>
              Stay
            </Button>
            <Button variant="destructive" onClick={handleConfirmNavigation}>
              Leave
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default TestingTestPage;
