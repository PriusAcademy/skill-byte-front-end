import { Check } from "lucide-react";

interface CheckItemProps {
  title: string;
}

const CheckItem = ({ title }: CheckItemProps) => {
  return (
    <div className="flex gap-2">
      <Check className="text-activeBlue" size={26} />
      <p className="text-neutral-600 text-md">{title}</p>
    </div>
  );
};

export default CheckItem;
