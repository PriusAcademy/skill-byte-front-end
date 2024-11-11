import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useEffect, useState } from "react";
import SignInButton from "../sign-in-button";
import Link from "../link";
import NavDropDown from "./nav-dropdown";
import { isAuthorized } from "../../utils/isAuthorized";
import Profile from "../profile";

interface NavLinkProps {
  title: string;
  isActive: boolean;
  href: string;
}

interface MobileNavBarProps {
  links: NavLinkProps[];
  data: (
    | {
        title: string;
        isActive: boolean;
        data: { title: string; href: string }[];
      }
    | {
        title: string;
        isActive: boolean;
        data: {
          title: string;
          href: string;
          courses: { course: string; href: string }[];
        }[];
      }
  )[];
}

const MobileNavBar = ({ data, links }: MobileNavBarProps) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    screenWidth < 1024 && (
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent className="w-[300px] sm:w-[540px] flex flex-col justify-start items-center ">
          <div>{!isAuthorized() ? <SignInButton /> : <Profile />}</div>
          <div className="h-[1px] bg-gray-200 w-full" />
          <div
            key={data[0].title}
            className="flex flex-col w-full  items-center z-40 gap-6 z-10]"
          >
            <Link
              href={links[0].href}
              isActive={links[0].isActive}
              title={links[0].title}
              key={links[0].href}
            />
            <div key={links[0].href} className="h-[1px] bg-gray-200 w-full" />

            <NavDropDown
              isActive={data[0].isActive}
              key={data[0].title}
              data={data[0].data}
              title={data[0].title}
            />
            <div key={data[0].title} className="h-[1px] bg-gray-200 w-full" />

            <Link
              href={links[1].href}
              isActive={links[1].isActive}
              title={links[1].title}
              key={links[1].href}
            />
            <div key={links[1].href} className="h-[1px] bg-gray-200 w-full" />

            <NavDropDown
              isActive={data[1].isActive}
              key={data[1].title}
              data={data[1].data}
              title={data[1].title}
            />
            <div className="h-[1px] bg-gray-200 w-full" />

            {links.slice(2).map((link, index) => (
              <>
                <Link
                  href={link.href}
                  isActive={link.isActive}
                  title={link.title}
                  key={`${link.href}-${index}`}
                />
                <div className="h-[1px] bg-gray-200 w-full" />
              </>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    )
  );
};

export default MobileNavBar;
