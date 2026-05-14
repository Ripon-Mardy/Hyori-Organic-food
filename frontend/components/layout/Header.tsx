"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "motion/react";

import Link from "next/link";

import { useOutsideClick } from "@/hooks/useOutsideClick";

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
  Salad,
  Ham,
  Vegan,
  Apple,
  Ship,
  Egg,
  Hamburger,
  IceCreamBowl,
  Banana,
} from "lucide-react";
import { useRef, useState } from "react";

// menus
const menus = [
  {
    id: 1,
    name: "Home",
    link: "/home",
  },
  {
    id: 2,
    name: "Shop",
    link: "/shop",
  },
  {
    id: 3,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 4,
    name: "About",
    link: "/about",
  },
  {
    id: 5,
    name: "Login & Register",
    link: "/login",
  },
];

// departments
const departments = [
  {
    id: 1,
    name: "Vegetables",
    link: "/vegetables",
    icon: <Salad className="w-5 h-5" />,
  },
  {
    id: 2,
    name: "Fresh Meat",
    link: "/fresh-meat",
    icon: <Ham className="w-5 h-5" />,
  },
  {
    id: 3,
    name: "Fruit & Nut Gifts",
    link: "fruit-nut-gifts",
    icon: <Vegan className="w-5 h-5" />,
  },
  {
    id: 4,
    name: "Fresh Berries",
    link: "fresh-berries",
    icon: <Apple className="w-5 h-5" />,
  },
  {
    id: 5,
    name: "Ocean Foods",
    link: "ocean-foods",
    icon: <Ship className="w-5 h-5" />,
  },
  {
    id: 6,
    name: "Butter & Eggs",
    link: "butter-eggs",
    icon: <Egg className="w-5 h-5" />,
  },
  {
    id: 7,
    name: "Fastfood",
    link: "fastfood",
    icon: <Hamburger className="w-5 h-5" />,
  },
  {
    id: 8,
    name: "Fresh Onion",
    link: "fresh-onion",
    icon: <IceCreamBowl className="w-5 h-5" />,
  },
  {
    id: 9,
    name: "Fresh Bananas",
    link: "fresh-bananas",
    icon: <Banana className="w-5 h-5" />,
  },
];

const Header = () => {
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [openDepartmentsPopup, setOpenDepartmentsPopup] = useState(false);

  // dropdown ref
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const departmentRef = useRef<HTMLDivElement>(null);

  // handle outside click
  useOutsideClick(dropdownRef, () => setShowCategoryPopup(false));
  useOutsideClick(departmentRef, () => setOpenDepartmentsPopup(false));

  return (
    <div className="max-w-(--container-width) w-full mx-auto px-2">
      {/* ==== desktop mode =======  */}
      <div className="hidden md:flex items-center justify-between gap-4 py-5">
        {/* ======= logo =======  */}
        <div>
          <Image src={logo} width={100} height={100} alt="logo" />
        </div>

        {/* ======= search area =========  */}
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
                Select a Category
              </span>
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`w-2 h-2 text-(--text-color) transition-all duration-150 ${showCategoryPopup === false ? "rotate-0" : "rotate-180"} `}
              />
            </div>

            {/* category popup  */}
            {showCategoryPopup && (
              <div className="absolute left-0 top-full bg-white border border-gray-200 p-2 space-y-1">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded text-sm outline-none text-(--text-color) py-1 px-2"
                  placeholder="search category..."
                />
                <div className="flex flex-col gap-2 text-(--text-color)">
                  <span className="hover:bg-(--bg-hover-color) hover:text-white rounded pl-2 text-sm py-2 transition-all duration-100">
                    Food
                  </span>
                  <span className="hover:bg-(--bg-hover-color) hover:text-white rounded pl-2 text-sm py-2 transition-all duration-100">
                    Food
                  </span>
                  <span className="hover:bg-(--bg-hover-color) hover:text-white rounded pl-2 text-sm py-2 transition-all duration-100">
                    Food
                  </span>
                  <span className="hover:bg-(--bg-hover-color) hover:text-white rounded pl-2 text-sm py-2 transition-all duration-100">
                    Food
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* input  */}
          <input
            type="text"
            className="w-full text-sm outline-none text-(--text-color)"
            placeholder="Search product..."
          />

          {/* buton  */}
          <button className="bg-(--bg-color) hover:bg-(--bg-hover-color) transition-all duration-100 text-sm px-10 text-white py-2 rounded-2xl font-semibold cursor-pointer">
            Search
          </button>
        </div>

        {/* ==== cart =========  */}
        <div className="flex items-center justify-center gap-4">
          <Lock className="w-5 h-5 cursor-pointer text-(--text-color)" />
          <div className="relative cursor-pointer">
            <Heart className="w-5 h-5  text-(--text-color)" />
            {/* show number  */}
            <span className="absolute -right-1 top-3 text-xs bg-(--bg-color) rounded-full w-4 text-white flex items-center justify-center font-semibold">
              0
            </span>
          </div>
          <div className="relative cursor-pointer">
            <Handbag className="w-5 h-5  text-(--text-color)" />
            {/* show number  */}
            <span className="absolute -right-1 top-3 text-xs bg-(--bg-color) rounded-full w-4 text-white flex items-center justify-center font-semibold">
              0
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
        <div className="relative cursor-pointer">
          <Handbag className="w-5 h-5  text-(--text-color)" />
          {/* show number  */}
          <span className="absolute -right-1 top-3 text-xs bg-(--bg-color) rounded-full w-4 text-white flex items-center justify-center font-semibold">
            0
          </span>
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
              className="fixed inset-0 bg-black/40"
            ></motion.div>
            {/* == side bar ==  */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                duration: 0.3,
              }}
              className="bg-white absolute left-0 top-0 py-5 p-3 w-2/3 h-screen z-50 shadow space-y-5 overflow-y-auto"
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
                <div className="relative cursor-pointer">
                  <Handbag className="w-5 h-5  text-(--text-color)" />
                  {/* show number  */}
                  <span className="absolute -right-1 top-3 text-xs bg-(--bg-color) rounded-full w-4 text-white flex items-center justify-center font-semibold">
                    0
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
                    {departments.map((name, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="flex items-center gap-2 text-sm text-(--menu-text-color) hover:text-(--text-green) transition-all duration-150 border-b border-gray-200 last:border-b-0 py-2"
                      >
                        <span>{name.icon}</span>
                        <span>{name.name}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* menus  */}
          <div className="space-x-7">
            {menus.map((menu, index) => (
              <Link
                key={index}
                href={menu.link}
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
