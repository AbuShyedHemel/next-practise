"use client";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authAPI } from "@/service/api/apis/authAPI";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { QueryClient, QueryClientProvider, useMutation } from '@tanstack/react-query';
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    username: z.string(),
    password: z.string()
})

const UserLogin = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <LoginPage />
        </QueryClientProvider>
    )
}
export default UserLogin;

const LoginPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
        },
    })
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        return userLoginAPI.mutate(values)
    }
    const userLoginAPI = useMutation({
        mutationFn: (payload?: z.infer<typeof formSchema>) => authAPI.loginUser(payload),
        onSuccess: (data) => {
            console.log(data)
        }
    })

    return (
        <div className="flex justify-center items-center w-full h-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
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
                        <ReloadIcon className={userLoginAPI?.isPending ? 'mr-2 h-4 w-4 animate-spin' : 'hidden'} />
                        Submit</Button>
                </form>
            </Form>
        </div >
    );
};
