"use client";

import { loginUser } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoginBanner from "@/public/giphy.gif";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  username: z.string(),
  password: z.string(),
});

const LoginPage = () => {
  const route = useRouter();
  const form = useForm<API.LoginUserPayload>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  const onSubmit = (values: API.LoginUserPayload) => {
    return userLoginAPI.mutate(values);
  };
  const userLoginAPI = useMutation({
    mutationKey: ["login-user"],
    mutationFn: (payload: API.LoginUserPayload) => loginUser(payload),
    onError: () => {
      toast.error("Username or Password invalid");
    },
    onSuccess: (data) => {
      toast.success("Successfully Logged In");
      route.push("dashboard");
    },
  });

  return (
    <div className=" w-full h-full flex">
      <div className="w-5/6 flex justify-center items-center">
        <Image src={LoginBanner} alt="banner" />
      </div>
      <div className="w-full flex items-center justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="username" {...field} type="text" />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" {...field} type="password" />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">
              <ReloadIcon
                className={
                  userLoginAPI?.isPending
                    ? "mr-2 h-4 w-4 animate-spin"
                    : "hidden"
                }
              />
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default LoginPage;
