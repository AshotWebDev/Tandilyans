"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAppDispatch } from "@/hooks"
import { getAdmin } from "@/features/admins/adminsApi/adminsApi"
import { useNavigate } from "react-router-dom"
import { setIsAuth } from "@/features/admins/slices/adminsSlise"
import { useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
        message: "Password must be at least 2 characters.",
    })
})

function AdminLoginPage() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [showAlert, setShowAlert] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {

        try {
            const res = await dispatch(getAdmin()) as { payload: { username: string; password: string }[] };

            res.payload.forEach((admin: { username: string; password: string }) => {
                if (admin.username === values.username && admin.password === values.password) {
                    dispatch(setIsAuth(true));
                    navigate('/admin/dashboard');
                    sessionStorage.setItem('isAuth', 'true');
                }
                else {
                    setShowAlert(true);
                }
            });
        } catch (error) {
            console.error('Error fetching admin data:', error);
        }
    }

    return (
        <div className="container flex flex-col items-center  mt-[150px] gap-8">
            <h2 className="h2-semibold text-center  text-yellow-700">Admin Login</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-sm:w-[300px] max-md:w-[400px] w-[500px]">
                    {/* Username Field */}
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="username" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Password Field */}
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit">Submit</Button>
                </form>
            </Form>

            {showAlert && (
                <Alert className="w-[500px] max-md:w-[300px] fixed right-3 top-24">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Tandilyans</AlertTitle>
                    <AlertDescription>Սխալ Մոտքանուն կամ Գատնաբառ</AlertDescription>
                </Alert>
            )}
        </div>
    )
}

export default AdminLoginPage
