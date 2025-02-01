import { useEffect, useState } from "react";
import { getUser } from "../../utils/isAuthorized";
import { API } from "../../utils/connection";

// import { Button } from "./ui/button";
// import { cn } from "../lib/utils";

// import { useLoaderData } from "react-router-dom";
import useTestModal from "../../hooks/test-start-modal-store";
import { cn } from "../../lib/utils";
// import { isAuthorized } from "../../utils/isAuthorized";
// import useLoginModal from "../../hooks/login-modal-store";

interface SubTopicBundleProps {
  subTopicId: string;
  startTime?: Date;
  endTime?: Date;
  title: string;
  no_questions: number;
  id: string;
  assignmentNumber: string;
  marks: number;
  completed: boolean;
}

interface TestProgress {
  id: string;
  subTopicId: string;
  userId: string;
}

const SubTopicBundle = ({
  subTopicId,
  title,
  no_questions,
  assignmentNumber,
  completed,
  marks,
}: //   id,
SubTopicBundleProps) => {
  const user = getUser();
  // console.log(user);

  // const [testProgress, setTestProgress] = useState<TestProgress>();
  const [testProgressId, setTestProgressId] = useState<string | null>("");

  useEffect(() => {
    const fetchTestProgress = async () => {
      const res = await API.get<TestProgress>(
        `/learner/test-progress/${user.id}/${subTopicId}`
      );
      // setTestProgress(res.data);
      setTestProgressId(res.data?.id);
    };
    fetchTestProgress();
  }, [user, subTopicId]);
  // console.log(subTopicId);
  // console.log(id);
  const testModal = useTestModal();

  //   const authorized = isAuthorized();
  //   const loginModal = useLoginModal();
  //   const data = useLoaderData() as {
  //     subTopicId: string;
  //     id: string;
  //     completed: boolean;
  //   }[];
  // //   console.log(data);
  //   const testProgressId = data.find((item) => item.subTopicId == id)?.id;

  //   console.log(data);
  //   // console.log(testProgress);

  //   const [subTopicIds, setSubTopicIds] = useState<string[]>(
  //     data.map((item) => item.subTopicId)
  //   );

  const onTest = async () => {
    let id = testProgressId;
    if (!testProgressId) {
      const progress = await API.post<{
        id: string;
        subTopicId: string;
        completed: boolean;
      }>(`/learner/test-progress/`, {
        subTopicId,
      });
      id = progress.data.id;
    }
    testModal.onOpen({
      href: `/test/${subTopicId}/${id}`,
      actionString: "Start",
      title: title,
      subTitle: "",
    });
  };

  const roundedWidth = ((marks / no_questions) * 100).toFixed(1);

  return (
    <>
      <div className="flex gap-1 bg-white items-start px-4 py-2">
        <div className="font-semibold text-sm mt-3">{assignmentNumber}</div>
        <div
          onClick={onTest}
          className="border bg-white shadow-md hover:shadow-xl w-full  ease-in mx-8 p-4 mb-2 relative hover:-translate-y-2 transition duration-100 cursor-pointer"
        >
          <h1 className="text-lg sm:text-xl mb-2 font-bold">{title}</h1>
          <div className="flex w-full gap-4 flex-wrap justify-between items-center">
            <p className="text-nowrap font-semibold text-gray-500">
              Number of Questions : {no_questions}
            </p>
            <div className="flex-1 border relative bg-white">
              {" "}
              <div
                style={{
                  width: marks > 0 ? `${roundedWidth}%` : "0%",
                }}
                className={cn(
                  `py-3`,
                  completed ? "bg-green-500" : "bg-red-500"
                )}
              />
              <p className="text-nowrap absolute text-sm top-0.5 font-semibold left-1/3">
                {((marks / no_questions) * 100).toFixed(2)} %
              </p>
            </div>
            <div className="text-nowrap flex items-center gap-2">
              <p className=" text-gray-500 font-semibold">Start</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubTopicBundle;
