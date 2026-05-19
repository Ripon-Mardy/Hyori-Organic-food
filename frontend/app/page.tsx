import BannerBottom from "@/components/BannerBottom";
import BannerSlider from "@/components/BannerSlider";
import BestSeller from "@/components/BestSeller";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <BannerSlider />
      <BannerBottom />
      <BestSeller />
      <Products />
    </>
  );
}
