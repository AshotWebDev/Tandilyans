import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { isActiveCart } from "@/features/products/productsSelectors";
import { setIsActivCart } from "@/features/products/slices/productsSlice";
import { useAppSelector } from "@/hooks";
import { ShoppingCart, X } from 'lucide-react';
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export function CardModal() {
  const savedProducts = localStorage.getItem("savedProducts");
  const [parsedCards, setParsedCards] = useState<any[]>([]);
  const isActiveCartStatus = useAppSelector(isActiveCart);
  const iconRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setParsedCards(JSON.parse(savedProducts || "[]"));
    console.log(isActiveCartStatus, 99);
    
    iconRef?.current?.click();
  }, [isActiveCartStatus]);

  const handleRemove = (itemId: string) => {
    const updatedCards = parsedCards.filter(item => item._id !== itemId);
    setParsedCards(updatedCards);
    localStorage.setItem("savedProducts", JSON.stringify(updatedCards));
  };

  const handleIncrease = (itemId: string) => {
    const updatedCards = parsedCards.map(item => 
      item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setParsedCards(updatedCards);
    localStorage.setItem("savedProducts", JSON.stringify(updatedCards));
  };

  const handleDecrease = (itemId: string) => {
    const updatedCards = parsedCards.map(item => 
      item._id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setParsedCards(updatedCards);
    localStorage.setItem("savedProducts", JSON.stringify(updatedCards));
  };

  const handleClear = () => {
    localStorage.removeItem("savedProducts");
    setParsedCards([]);
  };

  const handleOrder = (itemId: string) => {
    navigate(`/order-product/${itemId}`);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div ref={iconRef} className="relative" >
            <ShoppingCart className="text-yellow-700 cursor-pointer"  onClick={() => setIsActivCart()}/>
              <div className=" absolute top-[-5px] right-[-5px] bg-yellow-700 w-4 h-4 rounded-full text-[10px] flex items-center justify-center text-white">{parsedCards.length}</div>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Զամբյուղ</SheetTitle>
          <SheetDescription>
            Այստեղ կտեսնեք այն ապրանքները որոնք պահպանել եք․
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {
            parsedCards.length > 0 ? (
              parsedCards.map((item: any) => (
                <div className="flex items-center justify-between relative" key={item._id}>
                  <div className="flex items-end space-x-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-16 w-16"
                    />
                    <div className="space-y-1">
                      <p className="text-sm font-bold">{item.name}</p>
                      <p className="text-sm">{item.price} AMD</p>
                      <p className="text-sm">Քանակ: {item.quantity}</p>
                    </div>

                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleDecrease(item._id)}
                        className="bg-gray-300 px-2 py-1 text-[10px]">-</button>
                      <button 
                        onClick={() => handleIncrease(item._id)}
                        className="bg-gray-300 px-2 py-1 text-[10px]">+</button>
                    </div>

                    <SheetClose asChild>
                      <button className="bg-yellow-700 text-white px-2 py-1 text-[10px]" onClick={() => handleOrder(item._id)}>Պատվիրել</button>
                    </SheetClose>
                  </div>

                  <X 
                    onClick={() => handleRemove(item._id)} 
                    className="text-yellow-700 cursor-pointer absolute right-0 top-0 h-4 w-4"
                  />
                </div>
              ))
            ) : (
              <p>Զամբյուղը դատարկ է։</p>
            )
          }
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={handleClear}>Ջնջել բոլորը</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}