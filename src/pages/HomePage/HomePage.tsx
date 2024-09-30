import BanerSlider from "@/components/shared/BanerSlider/BanerSlider";
import HomeAboutUsSection from "@/components/shared/HomeAboutUsSection/HomeAboutUsSection";
import ProductSlider from "@/features/products/components/ProductSlider";
import { usersSelector } from "@/features/users/selectors/usersSlectors";
import { getUsersData } from "@/features/users/usersApi/usersApi";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect } from "react";

const HomePage = () => {


  return (
    <div>
      <BanerSlider/>
      <ProductSlider/>
      <HomeAboutUsSection/>
    </div>
  );
};

export default HomePage;
