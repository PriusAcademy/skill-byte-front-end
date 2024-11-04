import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

interface FormInputProps {
  form: UseFormReturn<{
    name: string;
    email: string;
    phoneNo: string;
    description: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    file: any;
  }>;
  label: string;
  placeholder: string;
  type: "text" | "email" | "file";
  name: "name" | "email" | "phoneNo" | "description" | "file";
}

const FormInput = ({
  form,
  label,
  placeholder,
  type,
  name,
}: FormInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="text-lg">{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
