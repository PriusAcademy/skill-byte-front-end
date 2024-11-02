import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { LucideIcon } from "lucide-react";

interface CustomInputProps {
  form: UseFormReturn<{
    email: string;
    password: string;
    institute?: string;
  }>;
  name: "email" | "password" | "institute";
  placeholder: string;
  Icon: LucideIcon;
  type: "password" | "email" | "text";
}

const CustomInput = ({
  placeholder,
  form,
  name,
  Icon,
  type,
}: CustomInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="relative flex items-center">
              <div className="p-1 top-3 left-2 absolute rounded-full bg-gray-200">
                <Icon size={20} />
              </div>
              <Input
                className="py-6 text-md pl-11 border-gray-500 "
                placeholder={placeholder}
                {...field}
                type={type}
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
