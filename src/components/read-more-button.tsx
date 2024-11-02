import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const ReadMore = () => {
  return (
    <NavLink data-aos="zoom-in-up" to={"/company-profile"}>
      <div className="hover:bg-blue-900 transition ease-in delay-100 flex cursor-pointer gap-2 px-3 w-fit py-2 bg-activeBlue text-white font-semibold">
        <p className="text-lg">Read More</p>
        <div className="shrink-0 bg-white text-activeBlue rounded-full flex items-center justify-center">
          <ChevronRight />
        </div>
      </div>
    </NavLink>
  );
};

export default ReadMore;
