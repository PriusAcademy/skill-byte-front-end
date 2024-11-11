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
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import toast from "react-hot-toast";

const FormSchema = z.object({
  name: z.string().min(4).max(20),
  email: z.string().email(),
  phoneNo: z.string().min(5),
  description: z.string().min(1),
  file: z.any(),
});

const CareerForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNo: "",
      description: "",
      file: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result?.toString().split(",")[1];
          form.setValue("file", base64 as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     const file = e.target.files[0];
  //     if (file) {
  //       form.setValue("file", file);
  //     }
  //   }
  // };

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      console.log(values);
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        to_email: "rajesh99ed@gmail.com",
        phoneNo: values.phoneNo,
        attachment: values.file,
      };

      // const reader = new FileReader();
      // reader.readAsDataURL(file as Blob);

      // reader.onload = async (e) => {
      //   const templateParams = {
      //     from_name: values.name,
      //     from_email: values.email,
      //     to_email: "rajesh99ed@gmail.com",
      //     phoneNo: values.phoneNo,
      //     file: reader.result,
      //   };

      //   emailjs
      //     .send(
      //       "service_ux1rtvd",
      //       "template_3ca4wqk",
      //       templateParams,
      //       "wlzYKSAQQhzR-rhtD"
      //     )
      //     .then((res) => {
      //       console.log(res);
      //       toast.success("Successfully Sent");
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //       toast.error("Something went wrong");
      //     });
      // };

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
              <div className="w-full space-y-2 ">
                <Label className="text-lg" htmlFor="picture">
                  Resume
                </Label>
                <Input
                  className="text-gray-600"
                  id="picture"
                  accept=".pdf,.docx,.doc"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
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
