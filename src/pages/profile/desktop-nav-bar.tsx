import { useNavigate } from "react-router-dom";
import { cn } from "../../lib/utils";
import { getUser } from "../../utils/isAuthorized";
import { signOut } from "../../utils/utils";
import { ContentBody } from "./profile";

interface DesktopNavBarProps {
  data: {
    name: ContentBody;
    isActive: boolean;
  }[];
  onClick: (content: ContentBody) => void;
}

const DesktopNavbar = ({ data, onClick }: DesktopNavBarProps) => {
  const user = getUser();
  const firstLetter = user.name.charAt(0).toUpperCase();
  const navigate = useNavigate();

  const logout = () => {
    signOut();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="w-1/5 h-full gap-y-8   bg-violet-700 hidden md:flex md:flex-col">
      <div className="space-y-2 p-2">
        <h2 className="text-xl text-white font-semibold text-center">
          {user.name}
        </h2>
        <h2 className="text-sm text-white font-semibold text-center">
          {user.email}
        </h2>
      </div>
      <div className="flex justify-center">
        <div
          onClick={() => onClick("DEFAULT")}
          className="text-3xl w-16 h-16 cursor-pointer font-bold border-4 border-teal-400 bg-white text-teal-600 flex items-center justify-center  rounded-full"
        >
          {firstLetter}
        </div>
      </div>
      <div className="flex flex-col">
        {data.map((item) => (
          <p
            onClick={() => onClick(item.name)}
            key={item.name}
            className={cn(
              "text-white hover:bg-teal-500 hover:text-white p-2 animate-item relative duration-150 font-semibold cursor-pointer transition-all",
              item.isActive && "bg-teal-500"
            )}
          >
            {item.name}
          </p>
        ))}
      </div>
      <div className="px-2 mt-auto cursor-pointer hover:opacity-90">
        <p
          onClick={logout}
          className="text-lg w-full rounded-lg bg-black p-2  font-semibold mb-5 text-white text-center mt-auto"
        >
          Log out
        </p>
      </div>
    </div>
  );
};

export default DesktopNavbar;
