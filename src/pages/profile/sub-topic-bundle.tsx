// import { useState } from "react";

import { useState } from "react";
import { getUser } from "../../utils/isAuthorized";

// import { Button } from "./ui/button";
// import { cn } from "../lib/utils";

// import { useLoaderData } from "react-router-dom";
// import useTestModal from "../../hooks/test-start-modal-store";
// import { isAuthorized } from "../../utils/isAuthorized";
// import useLoginModal from "../../hooks/login-modal-store";
// import { API } from "../../utils/connection";

interface SubTopicBundleProps {
  subTopicId: string;
  startTime?: Date;
  endTime?: Date;
  title: string;
  no_questions: number;
  id: string;
}

const SubTopicBundle = ({
  subTopicId,
  title,
  no_questions,
}: //   id,
SubTopicBundleProps) => {
  const user = getUser();

  const [testProgress, setTestProgress] = useState();
  console.log(subTopicId);
  // console.log(id);
  //   const testModal = useTestModal();

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
    //   if (!subTopicIds.includes(subTopicId)) {
    //     const progress = await API.post<{
    //       id: string;
    //       subTopicId: string;
    //       completed: boolean;
    //     }>(`/learner/test-progress/`, {
    //       subTopicId,
    //     });
    //     id = progress.data.id;
    //     console.log(id);
    //     setSubTopicIds((prev) => [...prev, subTopicId]);
    //   }
    //   testModal.onOpen({
    //     href: `/test/${subTopicId}/${id}`,
    //     actionString: "Start",
    //     title: title,
    //     subTitle: "",
    //   });
    // }
  };

  return (
    <>
      <div
        onClick={onTest}
        className="border bg-white shadow-md hover:shadow-xl max-w-3xl ease-in mx-8 p-4 mb-8 relative w-full hover:-translate-y-2 transition duration-100 cursor-pointer"
      >
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex flex-wrap justify-between items-center">
          <p className="text-nowrap font-semibold text-gray-500">
            Number of Questions : {no_questions}
          </p>
          <div className="text-nowrap flex items-center gap-2">
            <p className=" text-gray-500 font-semibold">Start</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubTopicBundle;
