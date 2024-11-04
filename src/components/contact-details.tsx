import { LucideIcon, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "../lib/utils";
// import Container from "./container";

interface MediaCardProps {
  Icon: LucideIcon;
  title: string;
  body: string[];
}
const MediaCard = ({ Icon, title, body }: MediaCardProps) => {
  return (
    <div className="flex gap-3 group w-fit">
      <span className="inline-flex bg-[#f0d3b6] h-fit p-3 rounded-full items-center justify-center group-hover:shadow-xl shadow-black transition-all duration-150">
        <Icon className="text-secondaryBlue h-8 w-8" />
      </span>
      <div>
        <h2 className="font-semibold text-lg">{title}</h2>
        {body.map((item, index) => (
          <p className="text-slate-500 tracking-wide font-semibold" key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

interface ContactPageProps {
  address: string[];
  email: string[];
  phoneNumbers: string[];
  title?: boolean;
}

const ContactDetails = ({
  title,
  address,
  email,
  phoneNumbers,
}: ContactPageProps) => {
  return (
    <div className="mt-8 flex flex-col gap-y-6 mx-auto items-start w-full">
      <div
        className={cn(
          "border w-fit px-2 uppercase py-1 text-[11px] font-bold rounded-2xl bg-activeBlue bg-opacity-20 border-secondaryBlue text-secondaryBlue ",
          !title && "invisible"
        )}
      >
        Contact details
      </div>
      <h1 className={cn(" text-4xl font-bold", !title && "invisible")}>
        Our Contact
      </h1>
      <MediaCard title="Address:" Icon={MapPin} body={address} />
      <MediaCard title="Email:" Icon={Mail} body={email} />
      <MediaCard title="Phone:" Icon={Phone} body={phoneNumbers} />
    </div>
  );
};

export default ContactDetails;
