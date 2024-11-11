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
    file?: undefined | string;
    subject?: string;
  }>;
  label: string;
  placeholder: string;
  type: "text" | "email";
  name: "name" | "email" | "phoneNo" | "description" | "subject";
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
            <Input
              accept=".doc, .docx,.pdf"
              multiple={false}
              type={type}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
