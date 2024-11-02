import Link from "../link";
import NavItemForDesktop from "../nav-bar/nav-item";

interface NavLinkProps {
  title: string;
  isActive: boolean;
  href: string;
}

interface DesktopNavBarProps {
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

const DesktopNavBar = ({ data, links }: DesktopNavBarProps) => {
  return (
    <>
      <div className="hidden lg:flex  items-center z-40 gap-6 z-10]">
        <Link
          href={links[0].href}
          isActive={links[0].isActive}
          key={links[0].href}
          title={links[0].title}
        />
        <Link
          href={links[1].href}
          isActive={links[1].isActive}
          key={links[1].href}
          title={links[1].title}
        />

        {data.map((navItem) => (
          <NavItemForDesktop
            isActive={navItem.isActive}
            key={navItem.title}
            data={navItem.data}
            title={navItem.title}
          />
        ))}
        {links.slice(2).map((link) => (
          <Link
            href={link.href}
            isActive={link.isActive}
            key={link.href}
            title={link.title}
          />
        ))}
      </div>
    </>
  );
};

export default DesktopNavBar;
