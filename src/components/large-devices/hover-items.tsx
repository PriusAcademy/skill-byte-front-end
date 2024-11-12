import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { cn } from "../../lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface HoverItemProps {
  title: string;
  href: string;
  courses?: { course: string; href: string }[];
}

const HoverItem = ({ title, href, courses }: HoverItemProps) => {
  const { pathname } = useLocation();
  console.log(pathname == "");
  const navigate = useNavigate();
  const onClick = () => {
    navigate(href);
  };

  const itemWithCourses = (
    <Accordion type="multiple">
      <AccordionItem className="px-2 text-white " value={title}>
        <AccordionTrigger>{title}</AccordionTrigger>
        {courses?.map((course) => (
          <AccordionContent key={course.course}>
            <NavLink className={"hover:underline"} to={course.href}>
              {course.course}
            </NavLink>
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  );

  const itemWithoutCourses = (
    <p
      className={cn("text-white cursor-pointer p-2 hover:underline border-b")}
      onClick={onClick}
    >
      {title}
    </p>
  );

  return courses ? itemWithCourses : itemWithoutCourses;
};

interface HoverItemsProps {
  data: HoverItemProps[];
}

const HoverItems = ({ data }: HoverItemsProps) => {
  console.log(data);
  return (
    <div className="flex flex-col gap-2 z-10 ">
      {data.map((item) => (
        <HoverItem
          courses={item.courses}
          href={item.href}
          key={item.title}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default HoverItems;
