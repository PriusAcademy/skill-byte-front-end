import { LucideIcon, Mail, Phone } from "lucide-react";
import ContactIcon from "./contact-icon";

interface ContactCardProps {
  Icon: LucideIcon;
  title: string;
  number: string;
  mail: string;
  content: string;
}

const ContactCard = ({
  Icon,
  title,
  number,
  mail,
  content,
}: ContactCardProps) => {
  return (
    <div className=" p-4 transition ease-out delay-150 group w-[400px] md:w-[270px] hover:bg-sky-500 rounded-md hover:border-transparent border border-dashed border-activeBlue">
      <div className="flex flex-col gap-6 items-center justify-center">
        <ContactIcon Icon={Icon} p="4" size={20} />
        <h2 className="text-center group-hover:text-white ease-out transition delay-150 text-lg font-bold text-blue-900">
          {title}
        </h2>
        <p className="text-center group-hover:text-white ease-out transition delay-150 text-lg text-gray-600">
          {content}
        </p>
        <div className="flex gap-1 items-center ">
          <ContactIcon p="2" Icon={Phone} size={18} />
          <p>{number}</p>
        </div>
        <div className="flex gap-1 items-center ">
          <ContactIcon p="2" Icon={Mail} size={18} />
          <p>{mail}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
