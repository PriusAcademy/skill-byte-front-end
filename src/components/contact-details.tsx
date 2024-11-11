import { LucideIcon, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "../lib/utils";
// import Container from "./container";

interface MediaCardProps {
  Icon: LucideIcon;
  title: string;
  body: string[];
  showIcon?: boolean;
}
const MediaCard = ({ Icon, title, body, showIcon = true }: MediaCardProps) => {
  return (
    <div className="flex gap-3 group w-fit">
      {
        <span
          className={cn(
            "inline-flex bg-[#f0d3b6] h-fit p-3 rounded-full items-center justify-center group-hover:shadow-xl shadow-black transition-all duration-150",
            !showIcon && "invisible"
          )}
        >
          <Icon className="text-secondaryBlue h-8 w-8" />
        </span>
      }
      <div>
        <h2 className="font-semibold text-lg">{title}</h2>
        {body.map((item, index) => (
          <p
            className={cn(
              "text-slate-500 tracking-wide font-semibold",
              item.startsWith("CIN") && "text-lg mt-2 text-secondaryBlue"
            )}
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

interface ContactPageProps {
  address: string[][];
  email: string[];
  phoneNumbers: string[];
}

const ContactDetails = ({ address, email, phoneNumbers }: ContactPageProps) => {
  return (
    <div className="mt-8 flex flex-col gap-y-6 mx-auto items-start w-full">
      <div
        className={cn(
          "border w-fit px-2 uppercase py-1 text-[11px] font-bold rounded-2xl bg-activeBlue bg-opacity-20 border-secondaryBlue text-secondaryBlue "
        )}
      >
        Contact details
      </div>
      <h1 className={cn(" text-4xl font-bold invisible")}>Our Contact</h1>
      <MediaCard
        title="Registered office Address:"
        Icon={MapPin}
        body={address[0]}
      />
      <MediaCard
        showIcon={false}
        title="Corporate office Address:"
        Icon={MapPin}
        body={address[1]}
      />
      <MediaCard title="Email:" Icon={Mail} body={email} />
      <MediaCard title="Phone:" Icon={Phone} body={phoneNumbers} />
    </div>
  );
};

export default ContactDetails;
