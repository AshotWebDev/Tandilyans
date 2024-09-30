
import ProductCard from "@/features/products/components/ProductCard"
import { getProducts } from "@/features/products/productsApi.ts/productsApi"
import { productsSelector } from "@/features/products/productsSelectors"
import { useAppDispatch, useAppSelector } from "@/hooks"
import { useEffect } from "react"
import bannerImg1 from '@/assets/bannerImg1.jpg';


const ProductsPage = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(productsSelector)

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

  return (
    <div >
      <div
        className='products_top_div h-[300px] bg-center bg-cover'
        style={{ backgroundImage: `url(${bannerImg1})` }}
      >
        <div className='container flex flex-col items-center justify-center overflow-hidden h-full pb-[50px] max-sm:text-[35px] max-md:text-[60px] text-[120px]'>
          <h2 className="animText">Tandilyans</h2>
        </div>
      </div>

            <div className="products_items my-[70px] flex flex-col gap-[50px]">
        <h2 className='h2-semibold text-center text-yellow-700'>Մեր ՏԵսականին</h2>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] items-center">
          {
            products && products.map((el: any) => (
              <ProductCard key={el._id} item={el} type="product_page" />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProductsPage