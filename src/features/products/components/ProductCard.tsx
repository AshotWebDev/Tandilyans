import { useAppDispatch } from "@/hooks";
import { deleteProducts } from "../productsApi.ts/productsApi";
import { setIsActivCart } from "../slices/productsSlice";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const ProductCard = ({ item, type }: { item: any, type: string }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const [alertOpen, setAlertOpen] = useState(false);


  const handleSave = () => {
    const savedItems = JSON.parse(localStorage.getItem('savedProducts') || '[]');
    const existingItemIndex = savedItems.findIndex((savedItem: any) => savedItem._id === item._id);

    if (existingItemIndex !== -1) {
      savedItems[existingItemIndex].quantity += 1;
      localStorage.setItem('savedProducts', JSON.stringify(savedItems));
      // alert(`${item.name} quantity increased!`);
      dispatch(setIsActivCart());
      setAlertOpen(false)
    } else {
      localStorage.setItem('savedProducts', JSON.stringify([...savedItems, { ...item, quantity: 1 }]));
      dispatch(setIsActivCart());
      setAlertOpen(false)
    }
  };

  return (
    <div className={`product_card group flex flex-col gap-1 ${type === 'product_page' ? "w-full" : "w-[350px]"} relative`}>
      <div className="w-full h-[300px]">
        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2 items-start justify-center shadow-md p-2 h-[130px]">
        <h3 className="h3-semibold text-yellow-700">{item.name}</h3>
        <p className="paragraph-regular text-zinc-600 w-[full]  overflow-hidden text-ellipsis line-clamp-1" title={item.description}>{item.description}</p>
        <span>{item.price} AMD</span>
      </div>

      {type !== 'admin_page' && (
        <div className="hover_div absolute top-0 left-0 right-0 bottom-0 backdrop-blur-md flex justify-center items-center h-[300px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-3">
          <button onClick={() => setAlertOpen(true)} className="small-regular bg-yellow-800 dark:bg-zinc-600 text-white px-3 py-2">Պահպանել</button>
          <button onClick={() => navigate(`/order-product/${item._id}`, { state: { type: 'product_page' } })} className="small-regular bg-yellow-800 dark:bg-zinc-600 text-white px-3 py-2">Պատվիրել</button>
        </div>
      )}

      {type === 'admin_page' && (
        <span className="absolute top-0 right-0 p-2 cursor-pointer monospace text-white" onClick={() => dispatch(deleteProducts(item._id))}>X</span>
      )}


      <AlertDialog open={alertOpen}>
        {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{item.name}</AlertDialogTitle>
            <AlertDialogDescription>
              Ընրված ապրանքը զանբյուղում է
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleSave}>Լավ</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  );
};

export default ProductCard;
