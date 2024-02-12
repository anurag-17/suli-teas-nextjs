"use client";
import React from "react";
import Navbar from "../navbar";
import { useCart } from "../create-context/cart-context";
import Image from "next/image";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  console.log(cart, "cart");
  return (
    <>
      <Navbar />
      <div>
        <div className="2xl:w-[1500px] xl:w-[1000px]  lg:w-[880px]  md:w-[620px] sm:w-[550px] flex justify-between m-auto mt-20 2xl:mt-44 lg:mt-28 sm:mt-24  nav">
          <div className=" w-full">
            <h1 className="font-semibold text-3xl 2xl:text-[40px]">
              Your Cart
            </h1>

            {cart.map((product, ind) => (
              <div className="border my-10 2xl:my-14 p-2 2xl:p-4 w-full flex gap-5">
                <div className="w-2/12">
                  <Image src={product.image} />
                </div>
                <div className="w-8/12">
                  <h1 className="text-[#1E1E1E] xl:text-[20px] 2xl:text-[30px] 2xl:mt-[18px] 2xl:leading-[50px]  xl:my-2 xl:leading-[35px] lg:my-2 lg:text-[14px] lg:leading-[25px] md:text-[16px] md:my-1 md:leading-[25px] sm:text-[14px] sm:mt-1 sm:leading-[30px] text-[10px] mt-1 leading-[20px] product-name font-semibold">
                    {product.name}
                  </h1>
                  <h1 className=" 2xl:my-3 2xl:text-[36px] 2xl:leading-[25px] xl:text-[22px] xl:my-2 xl:leading-[20px] lg:text-[20px] lg:leading-[25px] md:text-[18px] md:my-1 md:leading-[25px] sm:text-[18px] sm:leading-[25px] text-[14px] product-price">
                    {product.price}
                  </h1>
                </div>
                <div
                  className="w-1/12 flex justify-end"
                  onClick={() => {
                    removeFromCart(product.id);
                  }}
                >
                  <img src="/images/wrong.svg" className="w-3 lg:w-6 2xl:w-10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
