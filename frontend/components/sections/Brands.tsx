import Image from "next/image";

import NotFound from "@/components/shared/NotFound";
import { brands } from "@/src/data/Brands";

const Brands = () => {
  return (
    <section className="max-w-(--container-width) mx-auto px-2 py-16">
      <div className="overflow-hidden">
        {brands.length > 0 ? (
          <div>
            <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap px-2 py-2">
              {brands.map((brand) => (
                <div
                  key={brand.id}
                  className="w-20 sm:w-32 shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-150"
                >
                  <Image
                    src={brand?.image}
                    width={120}
                    height={80}
                    className="w-full object-contain"
                    alt="brands"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    </section>
  );
};

export default Brands;
