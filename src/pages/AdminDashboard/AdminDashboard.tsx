"use client"
import tandilyans_logo from '@/assets/Tandilyans_logo.png'
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
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getProducts, postProducts } from '@/features/products/productsApi.ts/productsApi'
import { productsSelector } from '@/features/products/productsSelectors'
import { useEffect } from 'react'
import ProductCard from '@/features/products/components/ProductCard'
import { useNavigate } from 'react-router-dom'

const formSchema = z.object({
    productName: z.string().min(2, {
        message: "Պարտադիր դաշտ",
    }),
    description: z.string().min(2, {
        message: "Պարտադիր դաշտ",
    }),
    price: z.string().min(2, {
        message: "Պարտադիր դաշտ",
    }),
    img: z.string().min(2, {
        message: "Պարտադիր դաշտ",
    })
})


function AdminDashboard() {
    const dispatch = useAppDispatch()
  const products = useAppSelector(productsSelector)
  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await dispatch(getProducts());
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };

    fetchProducts();
  }, [dispatch]);



    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            productName: "",
            description: "",
            price: '',
            img: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>, e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formElements = e.target as HTMLFormElement;
        const fileInput = formElements[3] as HTMLInputElement;
        const file: File | null = fileInput.files ? fileInput.files[0] : null;
    
        // Use FormData to handle file uploads
        const formData = new FormData();
        formData.append('productName', values.productName);
        formData.append('description', values.description);
        formData.append('price', values.price);
        
        // Append file only if it exists
        if (file) {
            formData.append('img', file);
        }
    
        try {
            // Adjust dispatch to handle FormData if necessary
            await dispatch(postProducts(formData));
        } catch (error) {
            console.log(error);
        }

        form.reset();
    }


    const handleLogOut = () => {
        localStorage.removeItem('isAuth')
        navigate('/admin/login')
    }
    
    return (
        <div className="admin_dashboard">
            <nav className="admin_nav border-b border-zinc-200 dark:border-zinc-700">
                <div className="container flex h-[60px] items-center justify-between">
                    <div className="flex items-center gap-1">
                        <img src={tandilyans_logo} alt="Tandilyans.am" className="w-[60px]" />
                    </div>

                    <h1 className="text-3xl font-semibold text-yellow-700 ">Tandilyans Admin Dashboard</h1>

                    <div className='flex items-center gap-5'>
                        <p>Admin</p>
                        <img src={tandilyans_logo} alt="avatar" className='w-[40px] h-[40px] rounded-full' />
                        <Button variant='outline' onClick={handleLogOut}>Դուրս Գալ</Button>
                    </div>
                </div>
            </nav>

            <div className="container flex justify-center mt-[70px] flex-col items-center">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit((values, e) => onSubmit(values, e as React.FormEvent<HTMLFormElement>))} className="space-y-8 max-sm:w-[300px] max-md:w-[400px] w-[500px]">
                        {/* Product Name Field */}
                        <FormField
                            control={form.control}
                            name="productName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ապրանքի Անուն</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ապրանքի Անուն" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Description Field */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Նկարագրություն</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Նկարագրություն" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Գին</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Գին" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="img"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Լուսանկար</FormLabel>
                                    <FormControl>
                                        <Input type="file" accept='image/*' placeholder="Լուսանկար" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit">Ավելացնել</Button>
                    </form>
                </Form>


                <div className="products_div_admin_page grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] items-center mt-12">
                    {
                        products?.map((el: any) => (
                            <ProductCard key={el.id} item={el} type="admin_page"/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
