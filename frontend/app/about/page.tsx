"use client";
import Link from "next/dist/client/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// -------- images -------------
import about from "@/public/about.jpg";

import Brands from "@/components/sections/Brands";

const page = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);
  return (
    <section>
      {/* ------- breadcrum ----------  */}
      <div className=" shop-breadcrum-banner py-8 sm:py-16 px-2">
        <div className="max-w-(--container-width) mx-auto">
          <h2 className="text-xl sm:text-4xl text-(--text-green) font-bold flex items-center justify-center">
            About
          </h2>
          <div className="flex items-center justify-center gap-2">
            <Link
              href="/"
              className="hover:text-(--text-green) text-sm font-medium"
            >
              Home
            </Link>

            {paths.map((path, index) => {
              const href = "/" + paths.slice(0, index + 1).join("/");

              return (
                <div key={path} className="flex items-center gap-2">
                  <span>{">"}</span>
                  <Link
                    href={href}
                    className="capitalize hover:text-(--text-green) text-sm font-medium"
                  >
                    {path.replaceAll("-", " ")}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-(--container-width) mx-auto px-2">
        {/* ----------- about us -------------  */}
        <div className="text-center py-10 space-y-3">
          <h2 className="text-xl sm:text-4xl font-semibold text-(--heading-color)">
            About Us
          </h2>
          <p className="max-w-2xl mx-auto text-(--text-color) text-sm sm:text-base tracking-wide">
            A great About Us page helps builds trust between you and your
            customers. The more content you provide about you and your business,
            the more confident people will be when purchasing from your store.
          </p>
        </div>

        {/* ----------- about image -------------  */}
        <div>
          <Image
            src={about}
            alt="About us"
            width={100}
            height={100}
            layout="responsive"
            className="w-full"
          />
        </div>

        {/* --------------- mission and vission -------------  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-14">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-3xl text-(--heading-color) font-semibold">
              Our Mission
            </h2>
            <p className="text-(--text-color) text-sm sm:text-base tracking-wide leading-7">
              Fourth hath rule Evening Creepeth own lesser years itself so seed
              fifth for grass evening fourth shall you’re unto that. Had. Female
              replenish for yielding so saw all one to yielding grass you’ll air
              sea it, open waters subdue, hath.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl sm:text-3xl text-(--heading-color) font-semibold">
              Our Vision
            </h2>
            <p className="text-(--text-color) text-sm sm:text-base tracking-wide leading-7">
              Fourth hath rule Evening Creepeth own lesser years itself so seed
              fifth for grass evening fourth shall you’re unto that. Had. Female
              replenish for yielding so saw all one to yielding grass you’ll air
              sea it, open waters subdue, hath.
            </p>
          </div>
        </div>

        {/* ----------- brands ---------------  */}
        <Brands />
      </div>
    </section>
  );
};

export default page;
