"use client";
import { Button } from "@/components/ui/button";
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
      <Button>Go Next hi</Button>;
    </div>
  );
};

export default Dashboard;
