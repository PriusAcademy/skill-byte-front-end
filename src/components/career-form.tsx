import { useForm } from "react-hook-form";
import Container from "./container";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import FormInput from "./form-input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const FormSchema = z.object({
  name: z.string().min(4).max(20),
  email: z.string().email(),
  phoneNo: z.string().min(5),
  description: z.string().min(1),
  file: z.instanceof(File),
});

const CareerForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNo: "",
      description: "",
      file: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <Container>
      <div className="bg-white p-8 rounded-md w-full shadow-md">
        <h1 className="font-semibold text-4xl text-center mb-8 text-secondaryBlue">
          Post Your Resume
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-6 items-center"
          >
            <div className="flex md:flex-row flex-col gap-6 w-full">
              <FormInput
                label="Name"
                name="name"
                placeholder="Name"
                type="text"
                form={form}
                key={"name"}
              />
              <FormInput
                label="Email"
                name="email"
                placeholder="Email"
                type="email"
                form={form}
                key={"email"}
              />
            </div>
            <div className="flex md:flex-row flex-col gap-6 w-full">
              <FormInput
                label="Phone No"
                name="phoneNo"
                placeholder="Phone Number"
                type="text"
                form={form}
                key={"phoneNo"}
              />
              <FormInput
                label="Upload Resume"
                name="file"
                placeholder="Email"
                type="file"
                form={form}
                key={"email"}
              />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-lg">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Job Description"
                      className="resize-none "
                      rows={8}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="bg-secondaryBlue hover:bg-opacity-90 text-lg hover:bg-secondaryBlue sm:w-fit w-full"
              type="submit"
            >
              Submit Resume
            </Button>
          </form>
        </Form>
      </div>
    </Container>
  );
};

export default CareerForm;
