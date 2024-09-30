import tandilyans_logo from '@/assets/Tandilyans_logo.png'
import NavMenu from '../NavBar/NavMenu'
import { Mail, Phone } from 'lucide-react'
const Footer = () => {
    return (
        <div className="footer  bg-zinc-500 pt-[80px] pb-[50px] dark:bg-zinc-700">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px] pb-5">
                <div className="footer_logo_div flex flex-col items-start">
                    <img src={tandilyans_logo} alt="Tandilyans" />
                    <p className='paragraph-regular text-white opacity-75'>Ճաշակ, Էլեգանտություն, որակ մեկ տեղում</p>
                </div>

                <NavMenu direction="column" />

                <div className="lg:mx-auto">
                    <h3 className='h3-semibold text-white'>Կապ</h3>
                    <div className='flex items-center mt-[10px] space-x-2'>
                        <Mail className='w-[20px] h-[20px] text-yellow-300 ' />
                        <p className='text-[17px] font-normal text-white opacity-75'>ashotpoghosyan380@gmail.com</p>
                    </div>

                    <div className='flex items-center mt-[10px] space-x-2'>
                        <Phone className='w-[20px] h-[20px] text-yellow-300 ' />
                        <p className='text-[17px] font-normal text-white opacity-75'>+(374) 98 24 13 84</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Footer