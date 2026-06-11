"use client";
import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "motion/react";

import { X, Plus, Minus } from "lucide-react";

import { closeCart } from "@/store/cartSlice"; //close cart function from cartslice

// ========== product image =============
import productImage from "@/public/products/product4.webp";

const Cart = () => {
  const disPatch = useDispatch();
  const { isOpen } = useSelector((state: any) => state.cart);
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50">
            {/* === overlay ==  */}
            <motion.div
              onClick={() => disPatch(closeCart())}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="inset-0 fixed bg-black/70 z-50 h-screen"
            ></motion.div>

            {/* ============ products =============  */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.2 }}
              className="absolute bg-white right-0 top-0 z-50 w-1/3 h-screen"
            >
              <div className="flex items-center justify-between gap-2 bg-(--bg-color) p-2 py-2">
                <X
                  onClick={() => disPatch(closeCart())}
                  className="text-white w-5 h-5 cursor-pointer font-semibold"
                />
                <h2 className="text-white text-sm sm:text-base font-semibold uppercase">
                  Shopping Cart
                </h2>
              </div>

              {/* ==== product ===  */}
              <div className="p-2 overflow-y-auto">
                <div className="flex items-center justify-between gap-2">
                  <div className="w-14 h-14">
                    <Image
                      src={productImage}
                      width={12}
                      height={12}
                      className="w-full object-cover"
                      layout="responsive"
                      alt="product"
                    />
                  </div>

                  <div>
                    <h2 className="text-sm font-medium">1 × $ 150.00</h2>
                    <h2 className="text-sm font-semibold text-(--heading-color)">
                      Guava fruit
                    </h2>
                  </div>

                  <div className="flex items-center gap-3 border border-gray-200 bg-white p-1 shadow">
                    <button className="flex h-4 w-4 items-center justify-center rounded-lg text-gray-600 transition hover:bg-red-50 hover:text-red-600 cursor-pointer">
                      <Minus size={16} />
                    </button>

                    <span className="min-w-8 text-center text-sm font-bold text-gray-800">
                      1
                    </span>

                    <button className="flex h-4 w-4 items-center justify-center rounded-lg text-gray-600 transition hover:bg-green-50 hover:text-green-600 cursor-pointer">
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* close button  */}
                  <X className="w-5 h-5 text-(--text-color) cursor-pointer" />
                </div>

                {/* === total ===  */}
                <div className="absolute left-0 bottom-0 w-full p-2 border-t border-gray-300 pb-6">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-xl font-semibold">Total:</h2>
                    <span className="text-xl text-(--heading-color) font-bold">
                      $120
                    </span>
                  </div>

                  <div className="space-y-3 mt-5">
                    <button
                      type="submit"
                      className="w-full bg-(--bg-color) hover:bg-(--bg-hover-color) transition-colors duration-150 py-2 font-semibold text-sm rounded-md cursor-pointer text-white"
                    >
                      View Cart
                    </button>
                    <button className="w-full bg-(--bg-hover-color) hover:bg-(--bg-color) transition-colors duration-150 py-2 font-semibold text-sm rounded-md text-white">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;
