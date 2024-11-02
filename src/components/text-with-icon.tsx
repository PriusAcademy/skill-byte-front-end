import { LucideIcon } from "lucide-react";

interface TextWithIconProps {
  title: string;
  Icon: LucideIcon;
  href?: string;
  aosAnimate: string;
}

const TextWithIcon = ({ title, Icon, href, aosAnimate }: TextWithIconProps) => {
  return (
    <div
      data-aos={aosAnimate}
      className="flex items-center gap-2 text-white font-semibold"
    >
      <Icon />
      {!href ? <p>{title}</p> : <a href={href}>{title}</a>}
    </div>
  );
};

export default TextWithIcon;
