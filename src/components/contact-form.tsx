import { useForm } from "react-hook-form";
import Container from "./container";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
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
import toast from "react-hot-toast";

const FormSchema = z.object({
  name: z.string().min(4).max(20),
  email: z.string().email(),
  phoneNo: z.string().min(5),
  description: z.string().min(1),
  subject: z.string().optional(),
  file: z.string().optional(),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNo: "",
      description: "",
      subject: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        to_email: "rajesh99ed@gmail.com",
        phoneNo: values.phoneNo,
        subject: values.subject,
        description: values.description,
      };

      emailjs
        .send(
          "service_ux1rtvd",
          "template_3ca4wqk",
          templateParams,
          "wlzYKSAQQhzR-rhtD"
        )
        .then((res) => {
          console.log(res);
          toast.success("Successfully Sent");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="bg-white p-8 rounded-md w-full shadow-md">
        <h1 className="font-semibold text-4xl text-center mb-8 text-secondaryBlue">
          Let's Talk With You
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
                label="Subject"
                name="subject"
                placeholder="Subject"
                type="text"
                form={form}
                key={"subject"}
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
                      placeholder="Please Provide details"
                      className="resize-none "
                      rows={8}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-gray-600 text-sm">
              By submitting This Form Your Are Agreeing To Our Privacy Policy
            </p>
            <Button
              className="bg-secondaryBlue hover:bg-opacity-90 text-lg hover:bg-secondaryBlue sm:w-fit w-full"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </Container>
  );
};

export default ContactForm;
