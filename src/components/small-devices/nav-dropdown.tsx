import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "../../lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { HoverItem } from "../nav-bar/nav-item";
import { ChevronDown } from "lucide-react";

interface NavDropDownProps {
  isActive: boolean;
  title: string;
  data?: HoverItem[];
}

const NavDropDown = ({ isActive, title, data }: NavDropDownProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(pathname == "");

  const onClick = (href: string) => {
    navigate(href);
  };

  const items = data?.map((item) => {
    const hasCourses = item.courses;
    const accordion = (
      <Accordion type="multiple">
        <AccordionItem className="px-2 text-white  " value={title}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          {item?.courses?.map((course) => (
            <AccordionContent key={course.href}>
              <p
                key={course.href}
                onClick={() => onClick(course.href)}
                className={"hover:underline cursor-pointer"}
              >
                {course.course}
              </p>
            </AccordionContent>
          ))}
        </AccordionItem>
      </Accordion>
    );

    const noAccordion = (
      <p
        key={item.href}
        onClick={() => onClick(item.href)}
        className={"hover:underline cursor-pointer text-white  p-2"}
      >
        {item.title}
      </p>
    );
    return hasCourses ? accordion : noAccordion;
  });

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            "font-semibold flex items-center gap-2 ",
            "hover:text-activeBlue hover:cursor-pointer uppercase",

            isActive ? `text-activeBlue` : `text-secondaryBlue`
          )}
        >
          <p>{title}</p>
          <ChevronDown size={20} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-backgroundBlue p-0 w-[200px]">
          {items}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavDropDown;
