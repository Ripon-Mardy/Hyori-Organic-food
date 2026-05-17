"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import banner1 from "@/public/banner/banner1.webp";
import banner2 from "@/public/banner/banner2.webp";
import bannerContentImage from "@/public/banner/image-slide-01.png";

// -----------
// Banner data
// -----------
const banners = [
  {
    id: 1,
    name: "banner1",
    image: banner1,
    contentImage: bannerContentImage,
    title: "Feel good food",
    description: "Sale up to 40% all products",
  },
  {
    id: 2,
    name: "banner2",
    image: banner2,
    contentImage: bannerContentImage,
    title: "Fresh Organic Food",
    description: "Healthy and fresh products for your family",
  },
];

const BannerSlider = () => {
  const autoplay = Autoplay({
    delay: 4000,
    stopOnInteraction: false,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [autoplay],
  );

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };

  return (
    <section className="relative overflow-hidden">
      {/* slider */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="relative min-w-full h-75 sm:h-100 lg:h-137.5"
            >
              {/* background image */}
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                priority
                className="object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/35 z-10" />

              {/* content container */}
              <div className="absolute inset-0 z-20">
                <div className="max-w-(--container-width) mx-auto h-full">
                  <div className="flex items-center justify-between h-full">
                    {/* left content */}
                    <div className="max-w-xl text-white space-y-4 md:space-y-6">
                      <span className="inline-block text-xs sm:text-sm uppercase tracking-[4px] text-green-300 font-medium">
                        Organic & Fresh
                      </span>

                      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                        {banner.title}
                      </h2>

                      <p className="text-sm sm:text-base text-gray-200 max-w-md">
                        {banner.description}
                      </p>

                      <button className="bg-green-600 hover:bg-green-700 transition-all duration-200 px-5 sm:px-7 py-3 rounded-xl text-sm sm:text-base font-semibold">
                        Shop Now
                      </button>
                    </div>

                    {/* right image */}
                    <div className="hidden lg:block">
                      <Image
                        src={banner.contentImage}
                        width={450}
                        height={450}
                        alt="banner content"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* left button */}
      <button
        onClick={scrollPrev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white transition-all duration-200 shadow-lg w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5 text-black" />
      </button>

      {/* right button */}
      <button
        onClick={scrollNext}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white transition-all duration-200 shadow-lg w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
      >
        <ChevronRight className="w-5 h-5 text-black" />
      </button>
    </section>
  );
};

export default BannerSlider;
