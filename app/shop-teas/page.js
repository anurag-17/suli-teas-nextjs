import React from "react";
import ListingsF from "../../public/images/Listings-1.webp";
import ListingsS from "../../public/images/Listings-2.webp";
import ListingsT from "../../public/images/Listings-3.webp";
import ListingsFo from "../../public/images/Listings-4.webp";
import ListingsFI from "../../public/images/Listings-5.webp";
import ListingsSI from "../../public/images/Listings-6.webp";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar";
import Footer from "../footer";

export const products = [
    {
      name: "Weight Wonder",
      price: "$17.00",
      image: ListingsF,
      id: 1,
    },
    {
      name: "Detox Delite",
      price: "$17.00",
      image: ListingsS,
      id: 2,
    },
    {
      name: "Anxiety Assist",
      price: "$17.00",
      image: ListingsT,
      id: 3,
    },
    {
      name: "Champion Chai",
      price: "$17.00",
      image: ListingsFo,
      id: 4,
    },
    {
      name: "Anxiety Assist",
      price: "$17.00",
      image: ListingsFI,
      id: 5,
    },
    {
      name: "Immune Boost Beast",
      price: "$17.00",
      image: ListingsSI,
      id: 6,
    },
  ];
const ShopTea = () => {
  return (
    <>
    <Navbar/>
      <div className="flex justify-center  2xl:mt-[100px] xl:mt-16 lg:mt-16 md:mt-10 sm:mt-6 my-10">
        <div className="2xl:w-[1500px] xl:w-[1000px]  lg:w-[750px]   mx-auto nav ">
          <h1
            id="head"
            className="text-[#1E1E1E] 2xl:text-[60px] text-center 2xl:leading-[70px] 2xl:mt-7 xl:text-[40px] xl:leading-[35px] xl:mt-1 lg:text-[30px] lg:leading-[40px] lg:mt-1 md:text-[30px] md:leading-[30px] md:mt-2 sm:text-[28px] sm:leading-[25px] sm:mt-2 text-[24px] leading-[30px] Unique-head "
          >
            Unique Herbs and Spices
          </h1>
          <h2
            id="head"
            className="text-center 2xl:text-[36px]  2xl:leading-[56px]  xl:text-[24px]  xl:leading-[30px] xl:mt-1 lg:text-[18px]  lg:leading-[20px] lg:my-1 md:text-[18px]  md:leading-[22px] md:my-2 sm:text-[16px]  sm:leading-[20px] sm:my-1  text-[14px]  leading-[20px] my-1 noAdded-head"
          >
            No Added Flavors
          </h2>
          <p
            id="p-font"
            className="text-[#666666] text-center  2xl:leading-[28px] 2xl:text-[18px] 2xl:mt-4 2xl:w-5/12 mx-auto 
                xl:leading-[25px] xl:text-[14px] xl:mt-4 xl:w-6/12  lg:leading-[20px] lg:text-[11px] lg:mt-3 lg:w-6/12
                md:leading-[25px] md:text-[16px] md:mt-2 md:w-6/12
                 leading-[20px] sm:text-[12px] sm:mt-2 sm:w-8/12 text-[10px] mt-1 w-8/12 Bringing-pera
              "
          >
            Bringing my most favorite blends together with the strength and
            flavor I enjoyed from my kitchen and purity my brain and body
            required.
          </p>
          <div className=" mx-auto 2xl:mt-[74px] xl:mt-10 lg:mt-8 md:mt-4 sm:mt-4 mt-3">
            <div className="flex flex-wrap 2xl:gap-20 justify-center lg:justify-between md:flex-row md:gap-8 flex-col sm:gap-6 gap-6 ">
              {products.map((product, index) => (
                <Link href="/productD/[slug]" as={`/productD/${product.id}`}>
                  <div
                    key={index}
                    data-aos="zoom-out-up"
                    className="2xl:mb-8 2xl:w-[446px] xl:w-[280px] lg:w-[200px] md:w-4/12 md:mx-0 sm:w-3/6 w-4/6 cursor-pointer mx-auto img-div"
                  >
                    <Image
                      src={product.image}
                      className=" 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-4/6 w-3/6 cursor-pointer mx-auto md:mx-0"
                    />
                    <h1 className="text-[#1E1E1E] text-center 2xl:text-[24px] 2xl:mt-[18px] 2xl:leading-[50px] xl:text-[16px] xl:my-2 xl:leading-[35px] lg:my-2 lg:text-[14px] lg:leading-[25px] md:text-[16px] md:my-1 md:leading-[25px] sm:text-[14px] sm:mt-1 sm:leading-[30px] text-[10px] mt-1 leading-[20px] product-name">
                      {product.name}
                    </h1>
                    <h1 className="text-center 2xl:my-3 2xl:text-[36px] 2xl:leading-[25px] xl:text-[22px] xl:my-2 xl:leading-[20px] lg:text-[20px] lg:leading-[25px] md:text-[18px] md:my-1 md:leading-[25px] sm:text-[18px] sm:leading-[25px] text-[14px] product-price">
                      {product.price}
                    </h1>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ShopTea;