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
      <div className="hidden lg:flex  items-center z-10 gap-6 ]">
        <Link
          href={links[0].href}
          isActive={links[0].isActive}
          key={links[0].href}
          title={links[0].title}
        />
        <NavItemForDesktop
          isActive={data[0].isActive}
          key={data[0].title}
          data={data[0].data}
          title={data[0].title}
        />
        <Link
          href={links[1].href}
          isActive={links[1].isActive}
          key={links[1].href}
          title={links[1].title}
        />
        <NavItemForDesktop
          isActive={data[1].isActive}
          key={data[1].title}
          data={data[1].data}
          title={data[1].title}
        />
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
