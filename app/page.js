"use client";
import React from "react";
import Image from "next/image";
import search from "../public/images/search.webp";
import user from "../public/images/usera.webp";
import shopbag from "../public/images/shopbag.webp";
import leaves from "../public/images/leaves 1.svg";
import ListingsF from "../public/images/Listings-1.webp";
import ListingsS from "../public/images/Listings-2.webp";
import ListingsT from "../public/images/Listings-3.webp";
import ListingsFo from "../public/images/Listings-4.webp";
import ListingsFI from "../public/images/Listings-5.webp";
import ListingsSI from "../public/images/Listings-6.webp";
import groupP from "../public/images/groupP.webp";
import aa from "../public/images/11.webp";
import bb from "../public/images/22.webp";
import cc from "../public/images/pending.webp";
import dd from "../public/images/33.webp";
import ee from "../public/images/44.webp";
import twitter from "../public/images/twitter.webp";
import fbb from "../public/images/fbb.webp";
import insta from "../public/images/insta.webp";
import music from "../public/images/music.webp";
import YTt from "../public/images/YTt.webp";
import arrow from "../public/images/arrow.webp";
import Link from "next/link";
import instagram from "../public/images/instagram 1.svg";
import cut from "../public/images/wrong.svg";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const page = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <section>
        <div>
          <nav className="border 2xl:py-8 xl:py-4  lg:py-4 md:py-3 sm:py-2 py-2 bg-white">
            <div className="flex justify-between sm:justify-around m-auto">
              <div id="nav-menu" className=" my-auto">
                <div className="flex justify-between 2xl:gap-8 xl:gap-6 lg:gap-6 md:gap-4 sm:gap-2 py-auto ">
                  <div className="my-auto ">
                    <li
                      id="hover-underline-animation"
                      className="cursor-pointer list-none 2xl:text-[25px] 2xl:leading-6 xl:text-[14px] xl:leading-4 lg:text-[14px] lg:leading-3 md:text-[18px] md:leading-3 sm:text-[16px] text-[10px] sm:leading-2 text-[#666666] "
                    >
                      Shop Teas
                    </li>
                  </div>
                  <div>
                    <li
                      id="hover-underline-animation"
                      className=" cursor-pointer  list-none 2xl:text-[25px] 2xl:leading-6 xl:text-[14px] xl:leading-4 lg:text-[14px] lg:leading-3 text-[#666666] md:text-[18px] md:leading-3 sm:text-[16px] sm:leading-2 text-[10px] "
                    >
                      About Me
                    </li>
                  </div>
                </div>
              </div>
              <div className=" ml-3" id="nav-drawer">
                <div className="text-center my-auto">
                  <button
                    className="  focus:ring-4  font-medium rounded-lg text-[10px] mx-auto focus:outline-none "
                    type="button"
                    onClick={openDrawer}
                  >
                    <div className="mt-3">
                      <div className="bg-black p-[1.5px] my-1 w-6"></div>
                      <div className="bg-black p-[1.5px] my-1"></div>
                      <div className="bg-black p-[1.5px] my-1"></div>
                    </div>
                  </button>
                </div>

                {/* Drawer */}
                {isDrawerOpen && (
                  <div
                    id="drawer-form"
                    className="fixed top-0 left-0 z-40 h-screen  overflow-y-auto transition-transform -translate-x-0 bg-white w-6/12 dark:bg-gray-800"
                    tabIndex={-1}
                    aria-labelledby="drawer-form-label"
                  >
                    <div>
                      <button
                        type="button"
                        onClick={closeDrawer}
                        className="text-gray-400  shadow-2xl text-sm  p-1 mt-2 mr-2 border rounded-lg float-right "
                      >
                        <Image
                          src={cut}
                          className="mx-auto md:w-12 sm:w-6 w-6"
                        />
                      </button>
                    </div>
                    <div className="mt-10 ">
                      <div className=" lg:w-3/12 xl:w-2/12 md:w-full sm:w-full my-4">
                        <Image
                          src={leaves}
                          className="mx-auto md:w-12 sm:w-8 w-10"
                        />

                        <h1
                          className="2xl:text-[35px] xl:text-[30px] lg:text-[25px] md:text-[25px] md:mb-5 sm:text-[25px] sm:mb-5 text-[25px]  text-center"
                          id="nav-head"
                        >
                          TEAS
                        </h1>
                      </div>
                      <hr />
                      <ul>
                        <li className="text-sm first-letter:uppercase text-center my-2">
                          Shop Teas
                        </li>
                        <li className="text-sm first-letter:uppercase text-center my-2">
                          About Me
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div className="  ">
                <h1
                  className="2xl:text-[45px] xl:text-[30px] lg:text-[40px] md:text-[35px]  sm:text-[30px] text-[25px]"
                  id="nav-head"
                >
                  TEAS
                </h1>
              </div>
              <div className="flex justify-around 2xl:gap-8 xl:gap-6 lg:gap-5 md:gap-4 sm:gap-3 gap-3 my-auto mr-3">
                <Image
                  src={search}
                  className="cursor-pointer 2xl:w-10 2xl:h-10 xl:w-6 xl:h-6 lg:w-7 md:w-5  sm:w-5 w-5"
                />
                <Image
                  src={user}
                  className="cursor-pointer 2xl:w-10 2xl:h-10 xl:w-6 xl:h-6 lg:w-7 md:w-5  sm:w-5 w-5"
                />
                <Image
                  src={shopbag}
                  className="cursor-pointer 2xl:w-10 2xl:h-10  xl:w-6 xl:h-6 lg:w-7 md:w-5  sm:w-5 w-5"
                />
              </div>
            </div>
          </nav>
          <div className="sm:h-screen h-auto pt-10 " id="bg-poster">
            <div className="2xl:mt-96 2xl:ml-56 xl:mt-60 xl:ml-40 lg:mt-40 lg:ml-32  md:mt-32 md:ml-28 sm:mt-24 sm:ml-16  ml-8 mt-8 sticky">
              <h1
                id="p-font"
                className="2xl:text-[36px] 2xl:leading-[45px] text-[#50362D] xl:text-[25px] xl:leading-[20px] lg:text-[22px] lg:leading-[32px] md:text-[18px] md:leading-[25px]
                sm:text-[14px] sm:leading-[16px]
                text-[12px] leading-[10px] "
              >
                Mixing Function and Flavor
              </h1>
              <h1
                id="p-font"
                className="2xl:text-[70px] 2xl:mt-1 2xl:leading-[60px] text-[#1E1E1E]  xl:text-[48px] xl:leading-[55px] lg:text-[40px] lg:leading-[32px] md:text-[35px] md:leading-[35px] sm:text-[28px] sm:leading-[25px] text-[24px] leading-[25px]"
              >
                Curated{" "}
              </h1>
              <h1
                id="head"
                className="2xl:text-[90px] 2xl:leading-[90px] text-[#315031] xl:text-[64px] xl:leading-[50px] lg:text-[50px] lg:leading-[52px] md:text-[45px] md:leading-[35px]
                sm:text-[35px] sm:leading-[30px]
                text-[30px] leading-[20px]"
              >
                Herbal Teas
              </h1>
              <p
                id="nav-head"
                className="2xl:text-[25px] 2xl:mt-3 2xl:leading-[23px] xl:text-[18px] xl:mt-2 xl:leading-[23px] lg:text-[16px] lg:mt-0 lg:leading-[20px] md:text-[14px] md:mt-0 md:leading-[25px] sm:text-[12px] sm:mt-0 sm:leading-[25px] text-[10px] mt-0 leading-[25px]"
              >
                Explore the best herbal tea collections at Suli teas.
              </p>
              <button className="bg-black 2xl:my-6 2xl:px-10 rounded-bl-full rounded-tr-full xl:my-3 xl:px-6 lg:my-2 lg:px-5 md:my-2 md:px-5 sm:my-2 sm:px-3 mb-8">
                <h1
                  className="text-white 2xl:text-[25px] 2xl:leading-[26px] 2xl:py-[20px] 2xl:px-[36px] xl:text-[18px] xl:leading-[18px] xl:py-[12px] xl:px-[22px]
                  lg:text-[14px] lg:leading-[14px] lg:py-[7px] lg:px-[5px] sm:text-[12px] sm:leading-[14px] sm:py-[5px] sm:px-[3px] text-[10px] leading-[15px] py-[4px] px-[10px] "
                  id="b-font"
                >
                  Buy Now
                </h1>
              </button>
            </div>
          </div>
          <div className="flex justify-center 2xl:mt-24 xl:mt-16 lg:mt-16 md:mt-10 sm:mt-6 my-3">
            <div className="">
              <Image
                src={leaves}
                className="mx-auto 2xl:w-20 xl:w-16 md:w-12 sm:w-8 w-8"
              />
              <h1
                id="head"
                className="2xl:text-[60px] text-center 2xl:leading-[70px] 2xl:mt-4 xl:text-[40px] xl:leading-[35px] xl:mt-1 lg:text-[40px] lg:leading-[45px] lg:mt-4 md:text-[30px] md:leading-[30px] md:mt-2 sm:text-[28px] sm:leading-[25px] sm:mt-2 text-[25px] leading-[30px] "
              >
                Unique Herbs and Spices
              </h1>
              <h2
                id="head"
                className="text-center 2xl:text-[36px]  2xl:leading-[36px] 2xl:mt-1 xl:text-[24px]  xl:leading-[30px] xl:mt-1 lg:text-[22px]  lg:leading-[20px] lg:my-1 md:text-[20px]  md:leading-[25px] md:my-2 sm:text-[16px]  sm:leading-[20px] sm:my-1  text-[18px]  leading-[20px] my-1"
              >
                No Added Flavors
              </h2>
              <p
                id="p-font"
                className="text-[#666666] text-center  2xl:leading-[45px] 2xl:text-[25px] 2xl:mt-6 2xl:w-5/12 mx-auto 
                xl:leading-[25px] xl:text-[16px] xl:mt-4 xl:w-5/12  lg:leading-[25px] lg:text-[16px] lg:mt-4 lg:w-6/12
                md:leading-[25px] md:text-[16px] md:mt-2 md:w-6/12
                 leading-[22px] sm:text-[16px] sm:mt-2 sm:w-8/12 text-[16px] mt-1 w-10/12
              "
              >
                Bringing my most favorite blends together with the strength and
                flavor I enjoyed from my kitchen and purity my brain and body
                required.
              </p>
              <div className=" w-10/12 mx-auto 2xl:mt-20 xl:mt-8 lg:mt-6 md:mt-4 sm:mt-4 mt-3">
                <div className="flex justify-center flex-wrap gap-4  sm:justify-around md:gap-6 sm:gap-6">
                  <div
                    data-aos="zoom-out-up"
                    className="2xl:mb-8 xl:w-1/4 lg:w-1/4 md:w-2/6 sm:w-2/6 w-3/6"
                  >
                    <Image src={ListingsF} className="cursor-pointer " />
                    <h1
                      id="head"
                      className="text-center 2xl:text-[27px]  2xl:leading-[50px] xl:text-[16px]  xl:leading-[35px]  lg:text-[18px]  lg:leading-[30px] md:text-[16px]  md:leading-[25px] sm:text-[18px]  sm:leading-[30px]  text-[16px]  leading-[25px ]"
                    >
                      Weight Wonder
                    </h1>
                    <h1
                      id="head"
                      className="text-center 2xl:text-[36px] 2xl:leading-[37.5px]  xl:text-[22px] xl:leading-[20px] lg:text-[22px] lg:leading-[25px] md:text-[18px] md:leading-[25px] sm:text-[20px] sm:leading-[25px]   text-[18px]  leading-[25px] "
                    >
                      $17.00
                    </h1>
                  </div>
                  <div
                    data-aos="zoom-out-up"
                    className="2xl:mb-8 xl:w-1/4 lg:w-1/4 md:w-2/6 sm:w-2/6 w-3/6"
                  >
                    <Image src={ListingsS} className="cursor-pointer " />
                    <h1
                      id="head"
                      className="text-center 2xl:text-[27px]  2xl:leading-[50px] xl:text-[16px]  xl:leading-[35px] lg:text-[18px]  lg:leading-[30px] md:text-[16px]  md:leading-[25px] sm:text-[18px]  sm:leading-[30px] text-[16px]  leading-[25px]"
                    >
                      Detox Delite
                    </h1>
                    <h1
                      id="head"
                      className="text-center 2xl:text-[36px] 2xl:leading-[37.5px]  xl:text-[22px] xl:leading-[20px] lg:text-[22px] lg:leading-[25px] md:text-[18px] md:leading-[25px] sm:text-[20px] sm:leading-[25px]  text-[18px]  leading-[25px]"
                    >
                      $17.00
                    </h1>
                  </div>
                  <div
                    data-aos="zoom-out-up"
                    className="2xl:mb-8 xl:w-1/4 lg:w-1/4 md:w-2/6 sm:w-2/6 w-3/6"
                  >
                    <Image src={ListingsT} className="cursor-pointer " />
                    <h1
                      id="head"
                      className="text-center 2xl:text-[27px]  2xl:leading-[50px] xl:text-[16px]  xl:leading-[35px] lg:text-[18px]  lg:leading-[30px] md:text-[16px]  md:leading-[25px] sm:text-[18px]  sm:leading-[30px] text-[16px]  leading-[25px]"
                    >
                      Anxiety Assist
                    </h1>
                    <h1
                      id="head"
                      className="text-center 2xl:text-[36px] 2xl:leading-[37.5px]  xl:text-[22px] xl:leading-[20px] lg:text-[22px] lg:leading-[25px] md:text-[18px] md:leading-[25px] sm:text-[20px] sm:leading-[25px]  text-[18px]  leading-[25px]"
                    >
                      $17.00
                    </h1>
                  </div>
                  <div
                    data-aos="zoom-out-up"
                    className="2xl:mb-8 xl:w-1/4 lg:w-1/4 md:w-2/6 sm:w-2/6 w-3/6"
                  >
                    <Image src={ListingsFo} className="cursor-pointer " />
                    <h1
                      id="head"
                      className="text-center 2xl:text-[27px]  2xl:leading-[50px] xl:text-[16px]  xl:leading-[35px] lg:text-[18px]  lg:leading-[30px] md:text-[16px]  md:leading-[25px] sm:text-[18px]  sm:leading-[30px] text-[16px]  leading-[25px]"
                    >
                      Champion Chai
                    </h1>
                    <h1
                      id="head"
                      className="text-center 2xl:text-[36px] 2xl:leading-[37.5px]  xl:text-[22px] xl:leading-[20px] lg:text-[22px] lg:leading-[25px] md:text-[18px] md:leading-[25px] sm:text-[20px] sm:leading-[25px]  text-[18px]  leading-[25px]"
                    >
                      $17.00
                    </h1>
                  </div>
                  <div
                    data-aos="zoom-out-up"
                    className="2xl:mb-8 xl:w-1/4 lg:w-1/4 md:w-2/6 sm:w-2/6 w-3/6"
                  >
                    <Image src={ListingsFI} className="cursor-pointer " />
                    <h1
                      id="head"
                      className="text-center 2xl:text-[27px]  2xl:leading-[50px] xl:text-[16px]  xl:leading-[35px] lg:text-[18px]  lg:leading-[30px] md:text-[16px]  md:leading-[25px] sm:text-[18px]  sm:leading-[30px] text-[16px]  leading-[25px]"
                    >
                      Anxiety Assist
                    </h1>
                    <h1
                      id="head"
                      className="text-center 2xl:text-[36px] 2xl:leading-[37.5px]  xl:text-[22px] xl:leading-[20px] lg:text-[22px] lg:leading-[25px] md:text-[18px] md:leading-[25px] sm:text-[20px] sm:leading-[25px]  text-[18px]  leading-[25px]"
                    >
                      $17.00
                    </h1>
                  </div>
                  <div
                    data-aos="zoom-out-up"
                    className="2xl:mb-8 xl:w-1/4 lg:w-1/4 md:w-2/6 sm:w-2/6 w-3/6"
                  >
                    <Image src={ListingsSI} className="cursor-pointer " />
                    <h1
                      id="head"
                      className="text-center 2xl:text-[27px]  2xl:leading-[50px]  xl:text-[16px]  xl:leading-[35px] lg:text-[18px]  lg:leading-[30px] md:text-[16px]  md:leading-[25px] sm:text-[18px]  sm:leading-[30px] text-[16px]  leading-[25px]"
                    >
                      Immune Boost Beast
                    </h1>
                    <h1
                      id="head"
                      className="text-center 2xl:text-[36px] 2xl:leading-[37.5px] xl:text-[22px] xl:leading-[20px] lg:text-[22px] lg:leading-[25px] md:text-[18px] md:leading-[25px] sm:text-[20px] sm:leading-[25px]  text-[18px]  leading-[25px]"
                    >
                      $17.00
                    </h1>
                  </div>
                </div>
              </div>
              <div
                className=" 2xl:mt-28 xl:mt-12 lg:mt-10 md:mt-10 sm:mt-10 mt-5 "
                id="bg-posterS"
              >
                <h1
                  id="head"
                  className="2xl:text-[50px] text-center 2xl:pt-24 2xl:leading-[70px] xl:text-[32px] xl:pt-10 xl:leading-[70px] lg:text-[30px] lg:pt-10 lg:leading-[70px] md:text-[22px] md:pt-5 md:leading-[40px] sm:text-[20px] sm:pt-5 sm:leading-[40px] text-[22px] pt-5 leading-[40px]"
                >
                  Find Your Favorite
                </h1>
                <div className="flex flex-col justify-center w-2/3 mx-auto  sm:justify-center sm:flex-col sm:w-1/3 sm:mx-auto 2xl:mt-4 xl:mt-1 lg:mt-1 lg:w-full lg:justify-around lg:flex-row">
                  <div className="  w-full sm:w-full lg:w-3/12 ">
                    <h1
                      className="text-center  bg-[#5C161D] 2xl:my-32 text-white rounded-[8px]  2xl:w-7/12 2xl:py-4  2xl:text-[22px] 2xl:leading-[28px]  mx-auto  xl:py-3  xl:text-[14px] xl:leading-[20px] xl:mt-20  xl:w-7/12 lg:w-7/12 lg:py-2  lg:text-[12px] lg:leading-[20px] lg:mt-28 md:w-9/12 md:py-1  md:text-[14px] md:leading-[22px] md:mt-12  sm:w-8/12 sm:py-1  sm:text-[14px] sm:leading-[15px] sm:mt-10  w-11/12 py-[6px]  text-[16px] leading-[30px] mt-10  "
                      id="head"
                    >
                      Immune Boost Beast
                    </h1>
                    <h1
                      className="2xl:my-32 text-white mx-auto rounded-[8px] 2xl:w-7/12  2xl:py-4 text-center  bg-[#A47750] 2xl:text-[22px] 2xl:leading-[28px]  2xl:ml-6  xl:py-3  xl:mr-36 xl:text-[14px] xl:leading-[20px] xl:mt-16 xl:w-7/12 lg:py-2 lg:w-7/12  lg:text-[12px] lg:leading-[20px] lg:mt-14 lg:mr-28 md:w-9/12 md:py-1  md:text-[14px] md:leading-[22px] md:mt-12 sm:mx-auto sm:w-8/12 sm:py-1  sm:text-[14px] sm:leading-[15px] sm:mt-8  py-[6px]  text-[16px] leading-[30px] mt-12 w-11/12 "
                      id="head"
                    >
                      Champion Chai
                    </h1>
                    <h1
                      className="2xl:my-32 text-white rounded-[8px]  w-11/12 2xl:py-4 text-center  bg-[#7A8654] 2xl:w-7/12 2xl:text-[22px] 2xl:leading-[28px]  mx-auto  xl:py-3  xl:text-[14px] xl:leading-[20px] xl:mt-16 xl:w-7/12 lg:py-2 lg:w-7/12  lg:text-[12px] lg:leading-[20px] lg:mt-14  md:w-9/12 md:py-1  md:text-[14px] md:leading-[22px] md:mt-12   sm:w-8/12 sm:py-1  sm:text-[14px] sm:leading-[15px] sm:mb-0 py-[6px]  text-[16px] leading-[30px] mt-12"
                      id="head"
                    >
                      Weight Wonder
                    </h1>
                  </div>
                  <div
                    data-aos="zoom-out-up"
                    className="border rounded-[14px] w-full mt-10 shadow-2xl 2xl:p-10 2xl:pb-3  xl:px-10 xl:py-6 xl:pb-0 lg:px-6 lg:w-1/4 lg:py-4 lg:pb-0 md:px-5 md:py-3 md:mt-10 md:pb-0 sm:px-5 sm:py-3 sm:pb-0 sm:w-full sm:my-2 px-3 py-1 pb-0  "
                  >
                    <h1
                      id="head"
                      className="text-center 2xl:text-[26px]  2xl:leading-[39px] 2xl:mb-3 xl:text-[16px]  xl:leading-[30px] xl:mb-2  lg:text-[16px]  lg:leading-[25px] lg:mb-1  md:text-[14px]  md:leading-[20px] md:mb-1  sm:text-[18px]  sm:leading-[30px] sm:mb-1 text-[16px]  leading-[30px] mb-1 "
                    >
                      Suli’s Sample Box
                    </h1>
                    <Image src={groupP} />
                    <h1
                      id="head"
                      className="text-center  2xl:text-[36px] 2xl:leading-[37px] 2xl:mt-6   xl:text-[25px] xl:leading-[30px] xl:mt-4 lg:mt-3 lg:text-[25px] lg:leading-[25px]  md:mt-3 md:text-[18px] md:leading-[20px]   sm:mt-1 sm:text-[20px] sm:leading-[25px]    mt-1 text-[18px] leading-[20px] "
                    >
                      {" "}
                      $15.00
                    </h1>

                    <div className="flex justify-center">
                      <button className="bg-black  2xl:my-6   2xl:px-10 rounded-bl-full rounded-tr-full xl:mt-4 xl:px-0  lg:mt-3 lg:px-0  md:my-4 md:px-0  sm:my-2 sm:px-0 my-2 ">
                        <h1
                          className="text-white 2xl:text-[20px] 2xl:leading-[26px] 2xl:py-[20px] 2xl:px-[40px]  xl:text-[12px] xl:leading-[20px] xl:py-[6px] xl:px-[22px]  lg:text-[14px] lg:leading-[20px] lg:py-[6px] lg:px-[22px]  md:text-[14px] md:leading-[16px] md:py-[4px] md:px-[16px] sm:text-[14px] sm:leading-[15px] sm:py-[2px] sm:px-[8px] text-[14px] leading-[20px] py-[5px] px-[12px] "
                          id="head"
                        >
                          Buy Now
                        </h1>
                      </button>
                    </div>
                  </div>
                  <div className=" w-full  sm:w-full lg:w-3/12">
                    <h1
                      className=" text-white  bg-[#32504D] text-center rounded-[8px] mx-auto w-11/12 2xl:w-7/12 2xl:my-32 2xl:py-4 2xl:text-[22px] 2xl:leading-[28px]  xl:mt-20 xl:py-3 xl:text-[14px] xl:leading-[20px] xl:w-7/12  lg:py-2 lg:w-7/12  lg:text-[12px] lg:leading-[20px] lg:mt-28 md:w-9/12 md:py-1  md:text-[12px] md:leading-[22px] md:mt-12  sm:w-8/12 sm:py-1  sm:text-[14px] sm:leading-[15px] sm:mt-10  py-[6px]  text-[16px] leading-[30px] mt-10"
                      id="head"
                    >
                      Anxiety Assist
                    </h1>
                    <h1
                      className="  text-white rounded-[8px]  w-11/12 text-center  bg-[#482E69] 2xl:py-4 2xl:w-7/12  2xl:my-32 2xl:text-[22px] 2xl:leading-[28px] 2xl:ml-48  xl:mt-16 xl:py-3  xl:text-[14px] xl:leading-[20px ] xl:w-7/12 xl:ml-36  lg:w-7/12    lg:mt-14 lg:py-2 lg:text-[12px] lg:leading-[20px] lg:ml-28    md:w-9/12 md:py-1  md:mx-auto md:text-[14px] md:leading-[22px] md:mt-12   sm:w-8/12 sm:py-1  sm:text-[14px] sm:leading-[15px] sm:mt-8 sm:mx-auto ml-2 py-[6px]  text-[16px] leading-[30px] mt-12"
                      id="head"
                    >
                      Flair Fighter
                    </h1>
                    <h1
                      className=" text-white rounded-[8px]  mx-auto  w-11/12 text-center  bg-[#7D062A] 2xl:w-7/12 2xl:py-4  2xl:my-32 2xl:text-[22px] 2xl:leading-[28px]  xl:mt-16 xl:py-3  xl:text-[14px] xl:leading-[20px] xl:w-7/12 lg:py-2 lg:my-32 lg:w-7/12  lg:text-[12px] lg:leading-[20px] lg:mt-14 md:w-9/12 md:py-1  md:text-[14px] md:mx-auto  md:leading-[22px] md:mt-12  sm:w-8/12 sm:py-1  sm:text-[14px] sm:leading-[15px] sm:mt-8  py-[6px]  text-[16px] leading-[30px] mt-12"
                      id="head"
                    >
                      Detox Delite
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/4 sm:w-full mx-auto sm:flex sm:justify-center 2xl:mt-12 xl:mt-12 lg:mt-6 mb-10 lg:w-10/12">
            <div className=" ">
              <div className="mt-12">
                <h1 className="2xl:text-[28px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[20px] text-[20px] text-[#315031] text-center">
                  Instagram
                </h1>
                <h1
                  className=" text-[30px] text-center 2xl:text-[60px] 2xl:leading-[70px] 2xl:mt-1 xl:text-[40px] xl:leading-[40px] xl:mt-1 lg:text-[30px] lg:leading-[30px] lg:mt-1 md:text-[30px] md:leading-[30px] md:mt-1  sm:text-[30px] sm:leading-[30px] leading-[35px]  sm:mt-1"
                  id="head"
                >
                  #SuliTeas
                </h1>
              </div>

              <div
                data-aos="fade-up"
                className="flex xl:w-10/12 xl:mx-auto  sm:flex-col gap-4 2xl:w-full 2xl:gap-4 xl:gap-4 2xl:mt-10 xl:mt-6 lg:mt-4 md:mt-2 sm:mt-1 mt-1 flex-col relative md:flex-col lg:flex-row"
              >
                <div id="image2">
                  <Image
                    id="img1"
                    src={aa}
                    className=" 2xl:w-72 xl:w-48  lg:w-36   md:w-32 sm:w-28 w-96 "
                  />
                  <div className="img3">
                    <Image id="img4" src={instagram} />
                  </div>
                </div>

                <div id="image2" className="rounded-lg">
                  <Image
                    id="img1"
                    src={bb}
                    className=" 2xl:w-72 xl:w-48  lg:w-36   md:w-32 sm:w-28 w-full "
                  />
                  <div className="img3">
                    <Image id="img4" src={instagram} />
                  </div>
                </div>

                <div id="image2" className="rounded-lg">
                  <Image
                    id="img1"
                    src={cc}
                    className=" 2xl:w-72 xl:w-48  lg:w-36   md:w-32 sm:w-28 w-full "
                  />
                  <div className="img3">
                    <Image id="img4" src={instagram} />
                  </div>
                </div>

                <div id="image2" className="rounded-lg">
                  <Image
                    id="img1"
                    src={dd}
                    className=" 2xl:w-72 xl:w-48  lg:w-36   md:w-32 sm:w-28 w-full "
                  />
                  <div className="img3">
                    <Image id="img4" src={instagram} />
                  </div>
                </div>
                <div id="image2" className="rounded-lg">
                  <Image
                    id="img1"
                    src={ee}
                    className=" 2xl:w-72 xl:w-48  lg:w-36   md:w-32 sm:w-28 w-full "
                  />
                  <div className="img3">
                    <Image id="img4" src={instagram} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-[#E9F5DE] 2xl:pt-24 2xl:mt-24 xl:pt-20 xl:mt-20  lg:pt-8 lg:mt-16 md:pt-10 md:mt-10 sm:pt-10 sm:mt-10 ">
            <div className="lg:flex lg:justify-around lg:flex-row  xl:flex xl:flex-row xl:justify-around 2xl:flex 2xl:justify-around   2xl:mb-20 xl:mb-5 lg:mb-5 md:flex-col md:justify-center md:mb-5 sm:flex-col sm:justify-center sm:mb-5  flex-col justify-center">
              <div className="2xl:w-3/12 lg:w-2/12 xl:w-2/12 md:w-full sm:w-full pt-5 sm:pt-0 md:pt-0 lg:py-0">
                <Image
                  src={leaves}
                  className="mx-auto 2xl:w-10 md:w-12 sm:w-8 w-8"
                />

                <h1
                  className="2xl:text-[50px] xl:text-[30px] lg:text-[30px] md:text-[30px]  sm:text-[25px] sm:mb-5 text-[25px]  text-center"
                  id="nav-head"
                >
                  TEAS
                </h1>
              </div>

              <div className="2xl:w-5/12 xl:w-6/6 lg:w-3/6 md:w-10/12  sm:w-1/3 w-1/3 mx-auto   md:flex md:justify-center  sm:mx-auto   sm:flex sm:justify-center  flex justify-center ">
                <div className="flex flex-col sm:flex sm:flex-col md:flex-row 2xl:justify-between mx-auto lg:w-full lg:m-0 xl:w-[70%]  2xl:w-[90%] xl:m-0 md:w-full md:my-5 sm:w-10/12  sm:my-5 ">
                  <div className="sm:mx-auto sm:my-5 mx-auto my-5 ">
                    <h1
                      className="2xl:text-[30px] 2xl:mb-6 xl:text-[20px] xl:mb-4  lg:text-[18px] lg:mb-3 md:text-[20px] md:mb-2  sm:text-[18px] sm:mb-2 text-[20px]"
                      id="nav-head"
                    >
                      Quick links
                    </h1>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[27px] 2xl:text-[25px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[16px] lg:my-1 lg:leading-[25px] lg:text-[16px] md:my-1 md:leading-[25px] md:text-[16px]  sm:my-1 sm:leading-[30px] sm:text-[16px] text-[16px] leading-[25px]">
                      Home
                    </li>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[35px] 2xl:text-[25px] text-[#555555] xl:my-1 xl:leading-[25px] xl:text-[16px]  lg:my-1 lg:leading-[25px] lg:text-[16px]  md:my-1 md:leading-[25px] md:text-[16px]    sm:my-1 sm:leading-[30px] sm:text-[16px] text-[16px] leading-[25px]">
                      Shop Teas
                    </li>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[35px] 2xl:text-[25px] text-[#555555] xl:my-1 xl:leading-[25px] xl:text-[16px]  lg:my-1 lg:leading-[25px] lg:text-[16px]  md:my-1 md:leading-[25px] md:text-[16px]  sm:my-1 sm:leading-[30px] sm:text-[16px] text-[16px] leading-[25px]">
                      About Me
                    </li>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[35px] 2xl:text-[25px] text-[#555555] xl:my-1 xl:leading-[25px] xl:text-[16px]  lg:my-1 lg:leading-[25px] lg:text-[16px]  md:my-1 md:leading-[25px] md:text-[16px]  sm:my-1 sm:leading-[30px] sm:text-[16px] text-[16px] leading-[25px]">
                      Contact Us
                    </li>
                  </div>
                  <div className="sm:mx-auto sm:my-5 mx-auto   my-5">
                    <h1
                      className="2xl:text-[30px] 2xl:mb-6 xl:text-[20px] xl:mb-4   lg:text-[18px] lg:mb-3 md:text-[20px] md:mb-2 sm:text-[18px] sm:mb-2 text-[20px]"
                      id="nav-head"
                    >
                      Other Links
                    </h1>{" "}
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[35px] 2xl:text-[25px] text-[#555555] xl:my-1 xl:leading-[25px] xl:text-[16px]  lg:my-1 lg:leading-[25px] lg:text-[16px]  md:my-1 md:leading-[25px] md:text-[16px] sm:my-1 sm:leading-[30px] sm:text-[16px] text-[16px] leading-[25px]">
                      Privacy Policy
                    </li>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[35px] 2xl:text-[25px] text-[#555555] xl:my-1 xl:leading-[25px] xl:text-[16px]  lg:my-1 lg:leading-[25px] lg:text-[16px]  md:my-1 md:leading-[25px] md:text-[16px] sm:my-1 sm:leading-[30px] sm:text-[16px] text-[16px] leading-[25px]">
                      Return Policy
                    </li>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[35px] 2xl:text-[25px] text-[#555555] xl:my-1 xl:leading-[25px] xl:text-[16px]  lg:my-1 lg:leading-[25px] lg:text-[16px]  md:my-1 md:leading-[25px] md:text-[16px] sm:my-1 sm:leading-[30px] sm:text-[16px] text-[16px] leading-[25px]">
                      Refund Policy
                    </li>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[35px] 2xl:text-[25px] text-[#555555] xl:my-1 xl:leading-[25px] xl:text-[16px]  lg:my-1 lg:leading-[25px] lg:text-[16px]  md:my-1 md:leading-[25px] md:text-[16px] sm:my-1 sm:leading-[30px] sm:text-[16px] text-[16px] leading-[25px] ">
                      Cookies
                    </li>
                  </div>
                  <div className="sm:mx-auto sm:my-5  mx-auto  my-5">
                    <h1
                      className="2xl:text-[30px] 2xl:mb-4 xl:text-[20px] xl:mb-4  lg:text-[18px] lg:mb-3 md:text-[20px] md:mb-2 sm:text-[18px] sm:mb-2 text-[20px]"
                      id="nav-head"
                    >
                      My Account
                    </h1>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[35px] 2xl:text-[25px] text-[#555555] xl:my-1 xl:leading-[25px] xl:text-[16px]  lg:my-1 lg:leading-[25px] lg:text-[16px]  md:my-1 md:leading-[25px] md:text-[16px] sm:my-1 sm:leading-[30px] sm:text-[16px] text-[16px] leading-[25px]">
                      Shopping Bag
                    </li>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[35px] 2xl:text-[25px] text-[#555555] xl:my-1 xl:leading-[25px] xl:text-[16px]  lg:my-1 lg:leading-[25px] lg:text-[16px]  md:my-1 md:leading-[25px] md:text-[16px] sm:my-1 sm:leading-[30px] sm:text-[16px] text-[16px] leading-[25px]">
                      Wish List
                    </li>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[35px] 2xl:text-[25px] text-[#555555] xl:my-1 xl:leading-[25px] xl:text-[16px]  lg:my-1 lg:leading-[25px] lg:text-[16px]  md:my-1 md:leading-[25px] md:text-[16px] sm:my-1 sm:leading-[30px] sm:text-[16px] text-[16px] leading-[25px]">
                      Order History
                    </li>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[35px] 2xl:text-[25px] text-[#555555] xl:my-1 xl:leading-[25px] xl:text-[16px]  lg:my-1 lg:leading-[25px] lg:text-[16px]  md:my-1 md:leading-[25px] md:text-[16px] sm:my-1 sm:leading-[30px] sm:text-[16px] text-[16px] leading-[25px]">
                      Order Tracking
                    </li>
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-3 md:flex md:justify-center sm:flex sm:justify-center lg:w-4/12 lg:flex-none xl:flex-none xl:w-3/12 2xl:w-3/12 ">
                <div className="lg:w-10/12 xl:w-full 2xl:w-full relative md:w-4/12 sm:w-4/12 ">
                  <h1
                    className="2xl:text-[30px] 2xl:mb-2 xl:text-[20px] xl:mb-2  lg:text-[18px] lg:mb-2 md:text-[20px] md:mb-2 sm:text-[18px] sm:mb-2 text-[20px] my-1"
                    id="nav-head"
                  >
                    Subscribe to our emails
                  </h1>
                  <Image
                    src={arrow}
                    className="absolute  z-20 ml-56 mt-2 2xl:w-5  2xl:ml-96  2xl:mt-4 xl:w-4  xl:ml-48  xl:mt-2 lg:ml-60 lg:mt-3 md:mt-3 md:ml-64 sm:mt-2 sm:ml-56 "
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className=" cursor-pointer border border-[#315031] bg-[#E9F5DE] relative rounded  2xl:w-10/12  2xl:p-3 xl:w-8/12 xl:p-0.5  lg:w-11/12 lg:p-0.5  w-full px-1 md:p-1 md:w-11/12"
                  />
                  <div className="flex justify-center md:justify-center lg:justify-start sm:justify-center 2xl:gap-7  2xl:my-4 xl:gap-5  xl:my-3 lg:my-2 lg:gap-4 md:my-5 sm:my-5 md:w-11/12  md:gap-4 sm:gap-4 my-2 gap-4  ">
                    <Link href="https://twitter.com/" target="_blank">
                      <Image
                        src={twitter}
                        className=" 2xl:w-12 xl:w-6 lg:w-6 md:w-8 w-7"
                      />
                    </Link>
                    <Link
                      href="https://www.facebook.com/login/"
                      target="_blank"
                    >
                      <Image
                        src={fbb}
                        className=" 2xl:w-10 xl:w-5 lg:w-5 md:w-7 w-6"
                      />
                    </Link>
                    <Link
                      href="https://www.instagram.com/accounts/login/"
                      target="_blank"
                    >
                      <Image
                        src={insta}
                        className=" 2xl:w-10 xl:w-5 lg:w-5 md:w-7 w-6"
                      />
                    </Link>
                    <Link
                      href="https://accounts.spotify.com/en/login"
                      target="_blank"
                    >
                      <Image
                        src={music}
                        className=" 2xl:w-8 xl:w-4 lg:w-4 md:w-6 w-5"
                      />
                    </Link>
                    <Link href="https://www.youtube.com/" target="_blank">
                      <Image
                        src={YTt}
                        className=" 2xl:w-12 xl:w-6 lg:w-6 md:w-8 w-7"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mx-auto 2xl:w-[80%] xl:w-[90%] lg:w-[90%]  md:w-[70%] border  sm:w-[70%]   border-[#315031]" />
            <h1 className=" 2xl:text-[25px]  2xl:leading-[24px] xl:text-[16px]  xl:leading-[20px] xl:pb-4 lg:text-[16px]  lg:leading-[20px] lg:pb-4 text-[#666666] text-center  2xl:pb-5 md:text-[16px]  md:leading-[30px] md:pb-4  sm:text-[16px]  sm:leading-[20px] sm:pb-4 text-[16px] my-1 pb-3">
              © 2023 Teas. All Rights Reserved.
            </h1>
          </footer>
        </div>
      </section>
    </>
  );
};

export default page;
