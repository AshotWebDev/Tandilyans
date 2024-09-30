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
import { Textarea } from "@/components/ui/textarea"
import { postOrder } from "@/features/order/orderApi/orderApi"
import { orderMessageSelector } from "@/features/order/orderSelectors"
import { useAppDispatch } from "@/hooks"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import { z } from "zod"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"



const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Պարտադիր դաշտ",
  }),
  productName: z.string().min(2, {
    message: "Պարտադիր դաշտ",
  }),
  phone: z.string().min(2, {
    message: "Պարտադիր դաշտ",
  }),
  message: z.string().min(2, {
    message: "Պարտադիր դաշտ",
  }),
  email: z.string().min(2, {
    message: "Պարտադիր դաշտ",
  }),
})

const OrderPage = () => {
  const savedProducts = localStorage.getItem("savedProducts");
  const [parsedCards] = useState<any[]>(JSON.parse(savedProducts || "[]"));
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { state } = useLocation();
  const message: any = useSelector(orderMessageSelector)
  const [showAlert, setShowAlert] = useState(false);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      productName: '',
      phone: "",
      message: "",
      email: "",
    },
  })

  useEffect(() => {
    if (state?.type !== "product_page") {
      const product = parsedCards.find((product: any) => product._id === id)
      if (product) {
        const productInfo = `${product.name} - ${product.quantity} հատ`
        form.setValue("productName", productInfo)
      }
    }

  }, [id, parsedCards, form, state])


  async function onSubmit(values: z.infer<typeof formSchema>, e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const orderProduct = {
      fullName: values.fullName,
      productName: values.productName,
      phone: values.phone,
      message: values.message,
      email: values.email
    }

    await dispatch(postOrder(orderProduct))

    form.reset();
  }


  useEffect(() => {
    if (message) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => clearTimeout(timer); 
    }
  }, [message]);


  return (
    <div className="order_page px-3">
      <div className="container py-12 flex flex-col justify-center items-center">
        <h2 className="h2-semibold text-center text-yellow-700">Պատվիրել այստեղ</h2>


        <Form {...form} >
          <form onSubmit={form.handleSubmit((values, e) => onSubmit(values, e as React.FormEvent<HTMLFormElement>))} className="space-y-8 max-sm:w-[300px] max-md:w-[400px] w-[500px] mt-12">
            {/* Product Name Field */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Անուն Ազգանուն</FormLabel>
                  <FormControl>
                    <Input placeholder="Անուն Ազգանուն" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description Field */}
            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ապրանքի անուն և քանակ</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Ապրանքի անուն և քանակ" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Հեռախոս</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Հեռախոս" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Էլ. փոս</FormLabel>
                  <FormControl>
                    <Input type="mail" placeholder="Էլ. փոս" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Հաղորթագրություն </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Հաղորթագրություն" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Ուղարկել</Button>
          </form>
        </Form>

      </div>
      {showAlert && message.text && (
        <Alert variant={message?.variant} className="w-[500px] max-md:w-[300px] fixed right-3 top-24">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Tandilyans</AlertTitle>
          <AlertDescription>{message.text}</AlertDescription>
        </Alert>
      )}

    </div>
  )
}

export default OrderPage