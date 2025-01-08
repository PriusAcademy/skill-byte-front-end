import { MenuIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../../components/ui/sheet";
import { ContentBody } from "./profile";
import { cn } from "../../lib/utils";
import { getUser } from "../../utils/isAuthorized";
import { signOut } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

interface MobileNavBarProps {
  data: {
    name: ContentBody;
    isActive: boolean;
  }[];
  onClick: (content: ContentBody) => void;
}

const MobileNavBar = ({ data, onClick }: MobileNavBarProps) => {
  const user = getUser();
  const firstLetter = user.name.charAt(0).toUpperCase();
  const navigate = useNavigate();

  const logout = () => {
    signOut();
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="flex md:hidden p-2 items-center justify-between bg-secondaryBlue">
      <Sheet key={"top"}>
        <SheetTrigger asChild>
          <Button variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side={"top"}>
          <SheetHeader>
            <div className="flex gap-8 items-center pb-5 border-b">
              <SheetClose>
                <div
                  onClick={() => onClick("DEFAULT")}
                  className="text-3xl w-16 h-16 font-bold border-4 border-teal-400 bg-white text-teal-600 flex items-center justify-center cursor-pointer rounded-full"
                >
                  {firstLetter}
                </div>
              </SheetClose>
              <div className="space-y-1 p-2 flex-1">
                <h2 className="text-xl text-secondaryBlue font-semibold text-start">
                  {user.name}
                </h2>
                <h2 className="text-sm text-secondaryBlue font-semibold text-start">
                  {user.email}
                </h2>
              </div>
            </div>
          </SheetHeader>
          <div className="flex flex-col mt-8">
            {data.map((item) => (
              <SheetClose>
                <p
                  onClick={() => onClick(item.name)}
                  key={item.name}
                  className={cn(
                    "text-teal-500 p-2 animate-item relative duration-150 hover:bg-teal-500 hover:text-white font-semibold cursor-pointer transition-all",
                    item.isActive && "bg-teal-500 text-white"
                  )}
                >
                  {item.name}
                </p>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <div
        onClick={logout}
        className="p-2 bg-black text-white rounded-lg font-semibold cursor-pointer"
      >
        Logout
      </div>
    </div>
  );
};

export default MobileNavBar;
