import { Clock } from "lucide-react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

interface QuestionBundleProps {
  index: number;
}

const QuestionBundle = ({ index }: QuestionBundleProps) => {
  const { pathname } = useLocation();
  const onClick = () => {
    const parsed = queryString.parseUrl(pathname + "/test");
    parsed.query.index = `${index}`;
    const newPathname = queryString.stringifyUrl(parsed);
    window.location.href = newPathname;
  };
  return (
    <div
      onClick={onClick}
      className="border shadow-md hover:shadow-xl max-w-3xl ease-in mx-8 p-4 mb-8 relative w-full hover:-translate-y-2 transition duration-100 cursor-pointer"
    >
      <h1 className="text-xl font-bold">Test 1</h1>
      <div className="flex flex-wrap justify-between items-center">
        <p className="text-nowrap font-semibold text-gray-500">
          Number of Questions : 20
        </p>
        <div className="text-nowrap flex items-center gap-2">
          <Clock className="text-activeBlue" size={20} />
          <p className=" text-gray-500 font-semibold">30 minutes</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionBundle;
