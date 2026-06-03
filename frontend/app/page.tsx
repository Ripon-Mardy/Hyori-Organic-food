import Login from "@/components/Login";
import BannerBottom from "@/components/sections/BannerBottom";
import BannerSlider from "@/components/sections/BannerSlider";
import BestSeller from "@/components/sections/BestSeller";
import Blogs from "@/components/sections/Blogs";
import Brands from "@/components/sections/Brands";
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
      <Blogs />
      <Brands />
      {/* <Login /> */}
    </>
  );
}
