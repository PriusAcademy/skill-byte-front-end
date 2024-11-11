import { NotepadTextDashed } from "lucide-react";
import { NavLink } from "react-router-dom";

interface CourseCardProps {
  src: string;
  title: string;
  nCategories: number;
  nQuestions: number;
  href: string;
}

const CourseCard = ({
  src,
  title,
  href,
  nCategories,
  nQuestions,
}: CourseCardProps) => {
  return (
    <div className="border p-2 shadow-md hover:shadow-lg rounded-lg overflow-hidden cursor-pointer group">
      <NavLink to={href}>
        <div className="space-y-4 overflow-hidden">
          <img
            className="h-[180px] w-[330px] group-hover:scale-110 transition duration-200 ease-out sm:h-[160px] sm:w-[300px] lg:h-[200px] lg:w-[375px] bg-cover"
            src={src}
            alt=""
          />
          <div className="flex flex-col gap-y-2">
            <h2 className="text-secondaryBlue font-semibold text-lg">
              {title}
            </h2>
            <div className="flex justify-between">
              <div className="flex gap-1 items-center">
                <NotepadTextDashed size={20} />
                <p className="text-sm font-semibold text-gray-600">
                  {nCategories} categories
                </p>
              </div>
              <div className="flex gap-1">
                <NotepadTextDashed size={20} />
                <p className="text-sm font-semibold text-gray-600">
                  {nQuestions} Questions
                </p>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default CourseCard;
