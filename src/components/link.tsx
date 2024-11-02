import { cn } from "../lib/utils";

interface LinkProps {
  href: string;
  isActive: boolean;
  title: string;
}

const Link = ({ href, isActive, title }: LinkProps) => {
  const onClickHandle = () => {
    window.location.href = href;
  };
  return (
    <button
      onClick={onClickHandle}
      className={cn(
        "font-semibold text-nowrap uppercase",
        "hover:text-activeBlue",
        isActive ? `text-activeBlue` : `text-secondaryBlue`
      )}
    >
      {title}
    </button>
  );
};

export default Link;
