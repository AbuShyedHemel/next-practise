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

const formSchema = z.object({
  productId: z.string(),
});

const ProductsPage = () => {
  const route = useRouter();
  const form = useForm<{ productId: string }>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const onSubmit = (value: { productId: string }) => {
    return route.push(`product/${value.productId}`, { scroll: false });
  };

  return (
    <div className="flex justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="productId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product ID</FormLabel>
                <FormControl>
                  <Input placeholder="12" {...field} type="text" />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage title="Nice" />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default ProductsPage;
