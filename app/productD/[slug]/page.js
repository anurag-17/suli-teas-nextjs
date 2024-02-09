"use client";
import Navbar from "@/app/navbar";
import React from "react";
import { products } from "@/app/page";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "@/app/footer";

const AboutUS = ({ params }) => {
  const router = useRouter();
  const productid = params?.slug || "";

  const filterProduct = products.filter((product) => product?.id == productid);
  console.log(filterProduct);

  return (
    <>
      <Navbar />
      <div className="2xl:w-[1600px] xl:w-[1200px]  lg:w-[800px] md:w-[620px] sm:w-[600px] w-[420px] flex justify-between m-auto nav">
        <div className="mt-10  w-full p-3">
          {filterProduct.map((products) => (
            <div className="flex gap-5">
              <div className="w-1/2">
                <div className="border p-5 ">
                  <Image
                    src={products.image}
                    className="lg:w-48 xl:w-[80%]  mx-auto"
                  />
                </div>
                {/* <div className="flex gap-3 my-4">
                  <div className="w-1/2">
                    <button className=" w-full  py-1 border">
                      Add To Cart
                    </button>
                  </div>
                  <div className="w-1/2 ">
                    <button className="w-full  py-1 border">Buy Now</button>
                  </div>
                </div> */}
              </div>
              <div className="flex w-1/2 overflow-y-scroll">
                <div className="h-[400px]">
                  <h1 className="lg:text-[16px] xl:text-[25px] 2xl:text-[35px] my-2">
                    {products.name}
                  </h1>
                  <h2 className="my-2 2xl:my-4 lg:text-[14px] xl:text-[20px] 2xl:text-[25px] font-semibold">
                    {products.price}
                  </h2>

                  <div className="flex gap-7 my-5 2xl:my-10">
                    <div>
                      <h1 className="text-gray-500 productD-text">Quantity </h1>
                    </div>{" "}
                    <div className="flex gap-5 productD-text">
                      <button className="border-2 py-2 px-4 hover:border-sky-500 hover:text-sky-500">
                        500g Pouch
                      </button>
                      <button className="border-2 py-2 px-4 hover:border-sky-500 hover:text-sky-500">
                        1 kg Pouch
                      </button>
                    </div>
                  </div>
                  <div className="my-5 flex gap-7 productD-text 2xl:my-10">
                    <div>
                      <h1 className="text-gray-500">Highlights</h1>
                    </div>
                    <div>
                      <p>Granules Form</p>
                      <p>Pouch Container</p>
                    </div>
                  </div>
                  <div className="my-5 flex gap-7 productD-text 2xl:my-10">
                    <div>
                      <h1 className="text-gray-500">Services</h1>
                    </div>
                    <div>Cash on Delivery available</div>
                  </div>
                  <h1 className="lg:text-[14px] xl:text-[20px] 2xl:text-[25px]">Product Description</h1>
                  <h2 className="my-2 text-gray-500 productD-text 2xl:my-5">
                    {products.description}
                  </h2>
                  <div className="my-4">
                    <div className="border py-4 px-2">
                      <h1 className="font-semibold text-[20px]  2xl:text-[25px]">
                        Specifications
                      </h1>
                    </div>
                    <div className="border py-4 px-2 productD-text">
                      <h1 className="font-semibold ">General</h1>
                      <div className="flex gap-20 my-4 ">
                        <h1 className="text-gray-500 w-2/6">Brand</h1>
                        <h1>Suli Tea</h1>
                      </div>
                      <div className="flex gap-20 my-4 ">
                        <h1 className="text-gray-500 w-2/6">Type</h1>
                        <h1>Black Tea</h1>
                      </div>
                      <div className="flex gap-20 my-4 ">
                        <h1 className="text-gray-500 w-2/6">Model Name</h1>
                        <h1>Strong Leaf</h1>
                      </div>
                      <div className="flex gap-20 my-4 ">
                        <h1 className="text-gray-500 w-2/6">Quantity</h1>
                        <h1>1kg</h1>
                      </div>
                      <div className="flex gap-20 my-4 ">
                        <h1 className="text-gray-500 w-2/6">Pack Of</h1>
                        <h1>1</h1>
                      </div>
                      <div className="flex gap-20 my-4 ">
                        <h1 className="text-gray-500 w-2/6">Tea Form</h1>
                        <h1>Granules</h1>
                      </div>
                      <div className="flex gap-20 my-4 ">
                        <h1 className="text-gray-500 w-2/6">Container Type</h1>
                        <h1>Pouch</h1>
                      </div>
                      <div className="flex gap-20 my-4 ">
                        <h1 className="text-gray-500 w-2/6">
                          Maximum Shelf Life
                        </h1>
                        <h1>12 Months</h1>
                      </div>
                    </div>
                  </div>
                  <div className="border py-4 px-2">
                    <h1 className="font-semibold text-[20px] 2xl:text-[25px]">
                      Legal Disclaimer
                    </h1>
                    <p className="my-4 productD-text 2xl:my-10">
                      Suli Teas endeavours to ensure that the sellers provide
                      accurate information on the platform. It is pertinent to
                      note that, actual product packaging and materials may
                      contain more and different information, which may include
                      nutritional information/allergen declaration/special
                      instruction for intended use/warning/directions, health &
                      nutritional claims, etc. We recommend that consumers
                      always read the label carefully before using or consuming
                      any products. Please do not solely rely on the information
                      provided on this website. For additional information,
                      please get in touch with the manufacturer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUS;
