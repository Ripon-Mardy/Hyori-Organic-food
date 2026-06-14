import Image from "next/image";
import Link from "next/link";

// images
import bannerBottomImage1 from "@/public/banner-bottom/banner-01.webp";
import bannerBottomImage2 from "@/public/banner-bottom/banner-02.webp";
import bannerBottomImage3 from "@/public/banner-bottom/banner-03.webp";
import bannerBottomImage4 from "@/public/banner-bottom/banner-04.webp";

const banners = [
  {
    id: 1,
    image: bannerBottomImage1,
    title: "Super Health",
    description: "Flats 25% Discount",
  },
  {
    id: 2,
    image: bannerBottomImage2,
    title: "Daily Fresh Products",
    description: "Up to 50% Off",
  },
  {
    id: 3,
    image: bannerBottomImage3,
    title: "Best Quality Collection",
    description: "Limited Time Offer",
  },
  {
    id: 4,
    image: bannerBottomImage4,
    title: "Fresh Food Everyday",
    description: "Discover",
  },
];

const BannerBottom = () => {
  return (
    <section className="py-16">
      <div className="max-w-(--container-width) mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 sm:gap-8">
          {banners.map((banner, index) => {
            const isSmall = index === 0 || index === 3;

            return (
              <div
                key={banner.id}
                className={`${
                  isSmall ? "md:col-span-3" : "md:col-span-4"
                } relative h-40 md:h-52 rounded-xl overflow-hidden group`}
              >
                {/* background image */}
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-all duration-700"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/10 z-10" />

                {/* content */}
                <div className="absolute inset-0 z-20 flex items-center">
                  <div className="px-6 md:px-8 max-w-sm space-y-2 sm:space-y-3">
                    <h2 className="text-lg sm:text-xl text-(--heading-color) font-semibold sm:font-bold leading-tight">
                      {banner.title}
                    </h2>

                    <p className="text-sm sm:text-base font-medium text-(--text-color)">
                      {banner.description}
                    </p>

                    <Link
                      href={"/shop"}
                      className="mt-2 bg-green-600 hover:bg-green-700 transition-all duration-200 px-5 py-2.5 rounded-xl sm:text-sm text-xs font-medium text-white"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BannerBottom;
