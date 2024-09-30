import BanerSlider from "@/components/shared/BanerSlider/BanerSlider";
import HomeAboutUsSection from "@/components/shared/HomeAboutUsSection/HomeAboutUsSection";
import ProductSlider from "@/features/products/components/ProductSlider";


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
