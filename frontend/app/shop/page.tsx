"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();

  const paths = pathname.split("/").filter(Boolean);

  return (
    <section className="shop-breadcrum-banner py-16">
      <div className="max-w-(--container-width) mx-auto px-2">
        {/* ------- breadcrum ----------  */}
        <h2 className="text-xl sm:text-2xl text-(--text-green) font-semibold flex items-center justify-center">
          Shop
        </h2>
        <div className="flex items-center justify-center gap-2 mt-2">
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
    </section>
  );
};

export default Breadcrumb;
