import { useState } from "react";
import Modal from "./modal";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CustomInput from "../components/custom-input";
import { Form } from "../components/ui/form";
import { Building2Icon, LockKeyhole, UserRound } from "lucide-react";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";
import useLoginModal from "../hooks/login-modal-store";
// import { API } from "../utils/connection";
import toast from "react-hot-toast";
import setItem from "../actions/setItem";
import axios from "axios";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4).max(20),
  institute: z.string().optional(),
});

const LoginModal = () => {
  const loginModal = useLoginModal();
  const open = loginModal.open;

  const [signIn, setSignIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      institute: "",
    },
  });

  // const institute = form.watch("institute");

  const toggleSignIn = () => {
    form.setValue("institute", "");
    form.setValue("email", "");
    form.setValue("password", "");
    setSignIn(true);
  };

  const toggleSignUp = () => {
    form.setValue("institute", "");
    form.setValue("email", "");
    form.setValue("password", "");
    setSignIn(false);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      let res;
      let message;
      if (signIn) {
        res = await axios.post("http://localhost:8000/auth/signin", values);
        message = "Signed In";
      } else {
        res = await axios.post("http://localhost:8000/auth/signup", values);
        message = "Registered Succesffully";
      }
      setItem("profile", res.data as object);
      toast.success(message);
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Please Login To Continue"
      open={open}
      setOpen={loginModal.onClose}
    >
      <div className="bg-white p-3 shadow-sm">
        <div className="border">
          <div className="grid grid-cols-2">
            <h2
              onClick={toggleSignIn}
              className={cn(
                " border-sky-400 cursor-pointer p-3 font-semibold text-xl text-center",
                signIn && "border-t",
                !signIn && "bg-gray-200"
              )}
            >
              Sign In
            </h2>
            <h2
              onClick={toggleSignUp}
              className={cn(
                " border-sky-400 p-3 cursor-pointer font-semibold text-xl text-center",
                !signIn && "border-t",
                signIn && "bg-gray-200"
              )}
            >
              Sign Up
            </h2>
          </div>
          <Form {...form}>
            <form
              className="space-y-4 p-4 mt-2"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <CustomInput
                placeholder="Email"
                form={form}
                name="email"
                key={"email"}
                Icon={UserRound}
                type="email"
              />
              <CustomInput
                placeholder="Password"
                form={form}
                name="password"
                key={"password"}
                Icon={LockKeyhole}
                type="password"
              />
              {!signIn && (
                <CustomInput
                  placeholder="Institutes/Organizations"
                  form={form}
                  name="institute"
                  key={"institute"}
                  Icon={Building2Icon}
                  type="text"
                />
              )}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-sky-500 text-xl py-5 hover:bg-sky-500 hover:bg-opacity-85"
              >
                {signIn ? "Sign In" : "Sign Up"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
