import HoverItem from "../large-devices/hover-items";
import NavHoverCard from "../large-devices/nav-hover-card";

export interface HoverItem {
  title: string;
  href: string;
  courses?: { course: string; href: string }[];
}

export interface NavItemProps {
  title: string;
  data: HoverItem[];
  isActive: boolean;
}

const NavItemForDesktop = ({ title, data, isActive }: NavItemProps) => {
  return (
    <NavHoverCard isActive={isActive} data={data} title={title} key={title} />
  );
};

export default NavItemForDesktop;
