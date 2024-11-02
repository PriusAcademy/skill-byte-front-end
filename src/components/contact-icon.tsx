import { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";

interface ContactIconProps {
  p: string;
  Icon: LucideIcon;
  size: number;
}

const ContactIcon = ({ p, Icon, size }: ContactIconProps) => {
  return (
    <div
      className={cn(
        `p-${p} border-dashed rounded-full group-hover:border-transparent border border-activeBlue rounded-blue bg-sky-100 group-hover:bg-white transition delay-150 ease-out`
      )}
    >
      <Icon size={size} />
    </div>
  );
};

export default ContactIcon;
