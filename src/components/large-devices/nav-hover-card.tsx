import { cn } from "../../lib/utils";
import HoverItems from "./hover-items";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { HoverItem } from "../nav-bar/nav-item";
import { ChevronDown } from "lucide-react";

interface NavHoverCardProps {
  title: string;
  isActive: boolean;
  data?: HoverItem[];
}

const NavHoverCard = ({ isActive, title, data }: NavHoverCardProps) => {
  return (
    <HoverCard openDelay={50} closeDelay={50}>
      <HoverCardTrigger
        className={cn(
          "font-semibold hidden group md:flex items-center gap-2 uppercase ",
          "hover:text-activeBlue hover:cursor-pointer",

          isActive ? `text-activeBlue` : `text-secondaryBlue`
        )}
      >
        <p>{title}</p>
        <ChevronDown
          className="group-hover:rotate-180 transition duration-100"
          size={20}
        />
      </HoverCardTrigger>
      <HoverCardContent className="bg-secondaryBlue z-30 ">
        <HoverItems data={data!} />
      </HoverCardContent>
    </HoverCard>
  );
};

export default NavHoverCard;
