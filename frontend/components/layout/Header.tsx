"use client";

import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import { productCategories } from "@/src/data/ProductCategories"; // product category data
import { departments } from "@/src/data/Departments"; // departments data
import { products } from "@/src/data/Product"; // products data

// image
import logo from "@/public/logo.png";

// icons
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faXTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  Lock,
  Heart,
  Handbag,
  Menu,
  X,
  Search,
  Headset,
  ChevronDown,
} from "lucide-react";

import AuthModel from "@/components/auth/AuthModel";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { openCart } from "@/store/cartSlice"; //open cart from redux cartslice
import { RootState } from "@/store/store";

// menus
const menus = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Shop",
    link: "/shop",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/blogs",
  },
  {
    id: 5,
    name: "Login & Register",
    link: "#",
  },
];
const Header = () => {
  const { items } = useSelector((state: RootState) => state.cart);

  const [selectCategoryValue, setSelectCategoryValue] =
    useState("Select a Category");

  // ----- search input ----------
  const [categoryValue, setCategoryValue] = useState("");
  const [productValue, setProductValue] = useState("");

  // --------- popup state -------------
  const [openDepartmentsPopup, setOpenDepartmentsPopup] = useState(false);
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const [showProductPopup, setShowProductPopup] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const disPatch = useDispatch(); // import dispatch from redux

  // dropdown ref
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const departmentRef = useRef<HTMLDivElement>(null);
  const productPopupRef = useRef<HTMLDivElement>(null);

  // handle outside click
  useOutsideClick(dropdownRef, () => setShowCategoryPopup(false));
  useOutsideClick(departmentRef, () => setOpenDepartmentsPopup(false));
  useOutsideClick(productPopupRef, () => setShowProductPopup(false));

  // ------ filterd search category -----------
  const filterSearchCategory = useMemo(() => {
    if (!categoryValue.trim()) return productCategories;

    return productCategories.filter((cat) =>
      cat.name.toLowerCase().includes(categoryValue.toLowerCase()),
    );
  }, [categoryValue]);

  // ------- product search filterd ------------
  const filterdProducts = useMemo(() => {
    if (!productValue.trim()) return products;

    return products.filter((product) =>
      product.name.toLowerCase().includes(productValue.toLowerCase()),
    );
  }, [productValue]);

  // --------- login popup =--------------

  return (
    <div className="max-w-(--container-width) w-full mx-auto px-2">
      {/* ----------- login popup -----------  */}
      <AnimatePresence>
        {showAuthModal && (
          <AuthModel closeModal={() => setShowAuthModal(false)} />
        )}
      </AnimatePresence>

      {/* ==== desktop mode =======  */}
      <div className="hidden md:flex items-center justify-between gap-4 py-5">
        {/* ======= logo =======  */}
        <Link href={"/"} className="cursor-pointer">
          <Image src={logo} width={100} height={100} alt="logo" />
        </Link>

        {/* ======= search category  =========  */}
        <div
          ref={dropdownRef}
          className="relative flex items-center gap-5 border border-gray-200 rounded-2xl w-full max-w-2xl"
        >
          {/* category  */}
          <div className=" min-w-44 pl-3 cursor-pointer">
            <div
              onClick={() => setShowCategoryPopup(!showCategoryPopup)}
              className="flex items-center gap-7"
            >
              <span className="text-(--text-color) text-sm">
                {selectCategoryValue}
              </span>
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`w-2 h-2 text-(--text-color) transition-all duration-150 ${showCategoryPopup === false ? "rotate-0" : "rotate-180"} `}
              />
            </div>

            {/* category popup  */}
            {showCategoryPopup && (
              <div className="absolute left-0 top-full bg-white border border-gray-200 p-2 space-y-1 z-50">
                <input
                  type="text"
                  value={categoryValue}
                  onChange={(e) => setCategoryValue(e.target.value)}
                  className="w-full border border-gray-300 rounded text-sm outline-none text-(--text-color) py-1 px-2"
                  placeholder="search category..."
                />
                <div className="flex flex-col gap-2 text-(--text-color)">
                  {filterSearchCategory.length > 0 ? (
                    filterSearchCategory.map((cate) => (
                      <span
                        key={cate.id}
                        onClick={() => {
                          setSelectCategoryValue(cate.name);
                          setShowCategoryPopup(false);
                        }}
                        className="hover:bg-(--bg-hover-color) hover:text-white rounded pl-2 text-sm py-2 transition-all duration-100"
                      >
                        {cate.name}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-gray-500 py-2">
                      No category found
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ----------- search product -------  */}
          <div
            ref={productPopupRef}
            className="relative w-full text-sm outline-none text-(--text-color)"
          >
            <input
              type="text"
              value={productValue}
              onChange={(e) => {
                setProductValue(e.target.value);
                setShowProductPopup(true);
              }}
              className="w-full outline-none"
              placeholder="Search product..."
            />

            {/* ------------ product items popup -----------  */}
            {showProductPopup && (
              <div className="absolute left-0 top-7 z-50 bg-white p-2 py-5 border border-gray-200 w-full">
                {filterdProducts.length > 0 ? (
                  <div className="space-y-4">
                    {filterdProducts.map((product) => (
                      <div
                        key={product?.id}
                        className="flex gap-2 cursor-pointer"
                      >
                        <div className="w-10 h-10">
                          <Image
                            src={product.image}
                            alt={product?.name}
                            width={10}
                            height={10}
                            className="w-full object-cover"
                            layout="responsive"
                          />
                        </div>

                        {/* product details  */}
                        <div className="space-y-1">
                          <span className="text-(--text-green) text-xs font-semibold">
                            {product?.category}
                          </span>
                          <h2 className="text-sm font-medium">
                            {product.name}
                          </h2>
                          <span className="text-xs font-semibold">
                            ${product?.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>Product not found</div>
                )}
              </div>
            )}
          </div>

          {/* buton  */}
          <button className="bg-(--bg-color) hover:bg-(--bg-hover-color) transition-all duration-100 text-sm px-10 text-white py-2 rounded-2xl font-semibold cursor-pointer">
            Search
          </button>
        </div>

        {/* ==== cart =========  */}
        <div className="flex items-center justify-center gap-4">
          <span title="Login or Register">
            <Lock
              onClick={() => setShowAuthModal(true)}
              className="w-5 h-5 cursor-pointer text-(--text-color)"
            />
          </span>
          <Link
            href={"/wishlist"}
            className="relative cursor-pointer"
            title="Wishlist"
          >
            <Heart className="w-5 h-5  text-(--text-color)" />
            {/* show number  */}
            <span className="absolute -right-1 top-3 text-xs bg-(--bg-color) rounded-full w-4 text-white flex items-center justify-center font-semibold">
              0
            </span>
          </Link>
          <div
            onClick={() => disPatch(openCart())}
            className="relative cursor-pointer"
            title="Cart"
          >
            <Handbag className="w-5 h-5  text-(--text-color)" />
            {/* show number  */}
            <span className="absolute -right-1 top-3 text-xs bg-(--bg-color) rounded-full w-4 text-white flex items-center justify-center font-semibold">
              {items.length}
            </span>
          </div>
        </div>
      </div>

      {/* ======== mobile mode =========  */}
      <div className="md:hidden py-3 flex items-center justify-between gap-3">
        <Menu
          onClick={() => setShowMobileSidebar(!showMobileSidebar)}
          className="text-(--text-color) w-5 h-5 cursor-pointer"
        />
        <div className="w-20">
          <Image
            src={logo}
            width={50}
            height={50}
            className="w-full"
            alt="logo"
          />
        </div>
        <div className="flex items-center justify-center gap-6">
          <Link href={"/wishlist"} className="relative cursor-pointer">
            <Heart className="w-5 h-5  text-(--text-color)" />
            {/* show number  */}
            <span className="absolute -right-1 top-3 text-xs bg-(--bg-color) rounded-full w-4 text-white flex items-center justify-center font-semibold">
              0
            </span>
          </Link>
          <div
            onClick={() => disPatch(openCart())}
            className="relative cursor-pointer"
          >
            <Handbag className="w-5 h-5  text-(--text-color)" />
            {/* show number  */}
            <span className="absolute -right-1 top-3 text-xs bg-(--bg-color) rounded-full w-4 text-white flex items-center justify-center font-semibold">
              0
            </span>
          </div>
        </div>
      </div>

      {/* ==================== mobile mode side bar ========================  */}
      <AnimatePresence>
        {showMobileSidebar && (
          <div>
            {/* overlay  */}
            <motion.div
              onClick={() => setShowMobileSidebar(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 z-50"
            ></motion.div>
            {/* == side bar ==  */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                duration: 0.3,
              }}
              className="fixed bg-white left-0 top-0 py-5 p-3 w-2/3 h-screen z-50 shadow space-y-5 overflow-y-auto"
            >
              {/* logo and cart button  */}
              <div className="flex items-center justify-between gap-3">
                <X
                  onClick={() => setShowMobileSidebar(!showMobileSidebar)}
                  className="w-6 h-6 cursor-pointer text-(--text-color)"
                />
                <div className="w-16">
                  <Image
                    src={logo}
                    width={30}
                    height={30}
                    alt="logo"
                    className="w-full"
                  />
                </div>
                <div
                  onClick={() => {
                    setShowMobileSidebar(false);
                    disPatch(openCart());
                  }}
                  className="relative cursor-pointer"
                >
                  <Handbag className="w-5 h-5  text-(--text-color)" />
                  {/* show number  */}
                  <span className="absolute -right-1 top-3 text-xs bg-(--bg-color) rounded-full w-4 text-white flex items-center justify-center font-semibold">
                    {items.length}
                  </span>
                </div>
              </div>

              {/* search button  */}
              <div className="border border-gray-200 rounded-md flex items-center py-2 px-2">
                <input
                  type="text"
                  className="w-full outline-none text-sm text-(--text-color)"
                  placeholder="Search products here...."
                />
                <Search className="w-5 h-5 text-(--text-color)" />
              </div>

              {/* menu  */}
              <div className="flex flex-col gap-5">
                {menus.map((menu, index) => (
                  <Link
                    key={index}
                    href={menu.link}
                    className="text-sm uppercase font-medium text-(--text-color)"
                  >
                    {menu.name}
                  </Link>
                ))}
              </div>

              {/* hotline number and social icons  */}
              <div className="space-y-4 mt-10">
                {/* hotline  */}
                <div className="flex items-center gap-2">
                  <Headset className="w-5 h-5 text-(--text-color)" />
                  <div className="text-sm space-x-2 text-(--text-green) font-semibold">
                    <span className="uppercase">Hotline</span>
                    <span>+8801345454545</span>
                  </div>
                </div>

                {/* address  */}
                <span className="font-medium text-sm text-(--text-color) block">
                  Mirpur, Dhaka
                </span>

                {/* ==== social icons ====  */}
                <div className="flex items-center gap-5 text-(--text-green) font-bold">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="w-5 h-5 cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="w-5 h-5 cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="w-5 h-5 cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/*=========== department section ==================   */}
      <div className="hidden md:flex items-center justify-between gap-5">
        <div className="flex items-center gap-5 flex-1">
          {/* deparments  */}
          <div ref={departmentRef} className="relative max-w-62.5 w-full">
            <div
              onClick={() => setOpenDepartmentsPopup(!openDepartmentsPopup)}
              className=" bg-(--bg-color) flex items-center justify-between gap-2 py-3 px-2 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Menu className="text-white w-5 h-5" />
                <span className="text-white font-semibold text-sm">
                  All Departments
                </span>
              </div>
              <ChevronDown className="text-white w-5 h-5" />
            </div>

            {/* == departments menus popup ==  */}
            <AnimatePresence>
              {openDepartmentsPopup && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="absolute left-0 top-full bg-white border border-gray-200 rounded-b-xl py-3 w-full p-3 overflow-hidden shadow z-50"
                >
                  <div className="space-y-1">
                    {departments.map((department, index) => {
                      const Icon = department.icon;
                      return (
                        <Link
                          key={index}
                          href="#"
                          className="flex items-center gap-2 text-sm text-(--menu-text-color) hover:text-(--text-green) transition-all duration-150 border-b border-gray-200 last:border-b-0 py-2"
                        >
                          <Icon className="w-4 h-4" />
                          <span>{department.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/*----------- menus ---------------------  */}
          <div className="space-x-7">
            {menus.map((menu, index) => (
              <Link
                key={index}
                href={menu.link}
                onClick={() => {
                  if (menu.name === "Login & Register") {
                    setShowAuthModal(true);
                  }
                }}
                className="text-sm font-bold text-(--menu-text-color) hover:text-(--text-green) transition-all duration-150"
              >
                {menu?.name}
              </Link>
            ))}
          </div>
        </div>

        {/* call use  */}
        <div className="flex items-center gap-3 shrink-0">
          <Headset className="w-8 h-8 text-(--text-green)" />
          <div className="flex flex-col">
            <span className="text-sm text-(--text-color)">Call us:</span>
            <span className="text-(--menu-text-color) font-semibold">
              +880 1300110011
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
