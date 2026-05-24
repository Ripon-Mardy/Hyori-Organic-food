import BannerBottom from "@/components/sections/BannerBottom";
import BannerSlider from "@/components/sections/BannerSlider";
import BestSeller from "@/components/sections/BestSeller";
import ProductBottom from "@/components/sections/ProductBottom";
import Products from "@/components/sections/Products";

export default function Home() {
  return (
    <>
      <BannerSlider />
      <BannerBottom />
      <BestSeller />
      <Products />
      <ProductBottom />
    </>
  );
}
