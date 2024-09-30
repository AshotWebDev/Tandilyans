import {responsive } from '@/dataFolder/dataFolder';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { productsSelector } from '../productsSelectors';
import { getProducts } from '../productsApi.ts/productsApi';

const ProductSlider = () => {

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

  const product = products?.map((el, index) => {
    return (
      <ProductCard
        key={index}
        item={el} 
        type=""
        />
    )
  });

  return (
    <div className="container mt-[100px] mb-[50px] flex flex-col gap-[100px]">
      <h2 className="h2-semibold text-center text-yellow-700">Մեր ՏԵսականին</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        itemClass='carousel-item-padding-40-px'
        showDots={true}
      >
        {product}
      </Carousel>
    </div>
  )
}

export default ProductSlider