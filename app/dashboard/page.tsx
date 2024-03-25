"use client";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

type PageParams = {
  id: string;
};

const Dashboard = () => {
  const route = useRouter();
  const formSchema = z.object({
    id: z.string(),
  });
  const form = useForm<PageParams>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
    },
  });

  const onSubmit = (values: PageParams) => {
    route.push(`dashboard/${values.id}`);
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product ID</FormLabel>
                <FormControl>
                  <Input placeholder="pageParams" {...field} type="text" />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Go to Next</Button>
        </form>
      </Form>
    </div>
  );
};

export default Dashboard;
