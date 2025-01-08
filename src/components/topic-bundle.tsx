import { useLocation } from "react-router-dom";

interface TopicBundleProps {
  topicId: string;
  startTime?: Date;
  endTime?: Date;
  title: string;
  no_questions: number;
}

const TopicBundle = ({ topicId, title, no_questions }: TopicBundleProps) => {
  const { pathname } = useLocation();

  return (
    <div
      onClick={() => (window.location.href = pathname + `/${topicId}`)}
      className="border shadow-md hover:shadow-xl max-w-3xl ease-in mx-8 p-4 mb-8 relative w-full hover:-translate-y-2 transition duration-100 cursor-pointer"
    >
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex flex-wrap justify-between items-center">
        <p className="text-nowrap font-semibold text-gray-500">
          Number of Sub Topics : {no_questions}
        </p>
        {/* <div className="text-nowrap flex items-center gap-2">
          <Clock className="text-activeBlue" size={20} />
          <p className=" text-gray-500 font-semibold">30 minutes</p>
        </div> */}
      </div>
    </div>
  );
};

export default TopicBundle;
