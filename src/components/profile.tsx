import { Building2, Mail, User2Icon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { getUser } from "../utils/isAuthorized";
import SignOut from "./sign-out";

const Profile = () => {
  const userData = getUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="bg-gray-200 p-1 rounded-full">
          <User2Icon />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex gap-2 items-center">
          <Mail size={20} />
          <DropdownMenuItem>{userData.email}</DropdownMenuItem>
        </div>
        <div className="flex gap-2 items-center">
          <Building2 size={20} />
          <DropdownMenuItem className="w-full">
            {userData.institute}
          </DropdownMenuItem>
        </div>
        <SignOut />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
