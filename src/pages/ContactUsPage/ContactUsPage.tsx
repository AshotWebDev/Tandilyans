import { postOrder } from "@/features/order/orderApi/orderApi";
import { useAppDispatch } from "@/hooks";
import { Facebook, Instagram, Mail, Phone } from "lucide-react"
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"
import { useSelector } from "react-redux";
import { orderMessageSelector } from "@/features/order/orderSelectors";

const contactImg = "src/assets/bannerImg2.jpg"
const ContactUsPage = () => {
    const dispatch = useAppDispatch();
    const [showAlert, setShowAlert] = useState(false);
    const [alertText, setAlertText] = useState("");
    const message: any = useSelector(orderMessageSelector)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const form = e.target as HTMLFormElement;
        const message = {
            fullName: (form[0] as HTMLInputElement).value,
            email: (form[1] as HTMLInputElement).value,
            message: (form[2] as HTMLTextAreaElement).value,
            phone: '',
            productName: ''
        };
    
        if (!message.fullName || !message.email || !message.message) {
            setAlertText("Խնդրում ենք մուտքագրել բոլոր դաշտեր։");
            setShowAlert(true);
            return;
        }
    
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(message.email)) {
            setAlertText("Խնդրում ենք մուտքագրել վավեր էլ. հասցե։")
            setShowAlert(true);
            return;
        }
     
        setShowAlert(false);
        await dispatch(postOrder(message))

        form.reset();
    };

    
  return (
    <div className='contact_us_page bg-orange-100'>
        <div className="container flex justify-center items-start py-[100px] max-md:pt-[50px] flex-wrap max-md:gap-8">
            <div className="contact_img_div max-md:w-full w-[50%]">
                <img src={contactImg}  alt="bag" className="w-full h-[500px] object-cover"/>
            </div>

            <div className="contact_form_div max-md:w-full w-[50%] flex flex-col gap-14 ">
                <h1 className="max-sm:text-[30px] max-md:text-[50px] text-[70px] font-bold ml-14 ">Կապ Մեզ հետ</h1>

                <div className="flex ml-14 items-start gap-12 max-md:flex-col">
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Անուն Ազգանուն" className="contact-input" />
                        <input type="text" placeholder="Էլ․ հասցե" className="contact-input" />
                        <textarea placeholder="Հաղորթագրություն" className="contact-input"></textarea>

                        <button className="bg-black text-white py-2 px-4 mt-6 transition-all duration-500 hover:rounded-md ">Ուղարկել</button>
                    </form>

                    <div className="contact_info_div flex flex-col gap-2 ">
                        <h3 className="h3-bold">Կապ</h3>
                        <a href="mailto:zIj9@example.com" className="flex items-center gap-2 ">
                            <Mail className="h-4 w-4 text-yellow-500"/>
                            <span className="paragraph-regular">zIj9@example.com</span>
                        </a>

                        <a href="tel:+374 98 24 13 84" className="flex items-center gap-2 items-center">
                            <Phone className="h-4 w-4 text-yellow-500"/>
                            <span className="paragraph-regular">+374 98 24 13 84</span>
                        </a>

                        <div className="flex items-center gap-2">
                            <a href="#">
                                <Instagram/>
                            </a>

                            <a href="#">
                                <Facebook/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {showAlert &&  (
        <Alert  className="w-[500px] max-md:w-[300px] fixed right-3 top-24">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Tandilyans</AlertTitle>
          <AlertDescription>{alertText}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}

export default ContactUsPage