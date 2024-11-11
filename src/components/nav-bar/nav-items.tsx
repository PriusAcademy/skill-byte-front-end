import { useLocation } from "react-router-dom";
import MobileNavBar from "../small-devices/mobile-nav-bar";
import DesktopNavBar from "../large-devices/desktop-nav-bar";

const NavItems = () => {
  const { pathname } = useLocation();

  const links = [
    {
      title: "Home",
      href: "/",
      isActive: pathname == "/",
    },
    {
      title: "Events",
      href: "/events",
      isActive: pathname == "/events",
    },
    {
      title: "Gallery",
      href: "/gallery",
      isActive: pathname == "/gallery",
    },
    {
      title: "Career",
      href: "/career",
      isActive: pathname == "/career",
    },
    {
      title: "Contact",
      href: "/contact",
      isActive: pathname == "/contact",
    },
  ];

  const data = [
    {
      title: "About us",
      isActive: pathname == "/company-profile",
      data: [
        { title: "Company Profile", href: "/company-profile" },
        { title: "Our Mission, Vision & Core values", href: "/vision" },
      ],
    },
    {
      title: "Courses",
      isActive: pathname.includes("/courses"),
      data: [
        {
          title: "Working Professionals",
          href: "/courses/professionals",
        },
        {
          title: "Students",
          href: "/courses/students",
        },
      ],
    },
  ];

  return (
    <>
      <DesktopNavBar links={links} data={data} />
      <MobileNavBar links={links} data={data} />
    </>
  );
};

export default NavItems;
