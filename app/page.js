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
import twitter from "../public/images/twitter.svg";
import fbb from "../public/images/facebook.svg";
import insta from "../public/images/instagram.svg";
import music from "../public/images/tiktok.svg";
import YTt from "../public/images/youtube.svg";
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
        <div className="">
          <nav className="border 2xl:py-8 xl:py-4 lg:py-4 md:py-2 sm:py-2  bg-white">
            <div className="2xl:w-[1500px] xl:w-[1000px]  lg:w-[750px]   flex justify-between m-auto">
              <div id="nav-menu" className=" my-auto  ">
                <div className="flex justify-between 2xl:gap-8 xl:gap-6 lg:gap-6 md:gap-4 sm:gap-2 py-auto ">
                  <div className="my-auto ">
                    <li
                      id="nav-head"
                      className="cursor-pointer list-none 2xl:text-[20px] 2xl:leading-6 xl:text-[14px] xl:leading-6 lg:text-[12px] lg:leading-4 md:text-[18px] md:leading-3 sm:text-[16px] text-[10px] sm:leading-2 text-[#666666] "
                    >
                      Shop Teas
                    </li>
                  </div>
                  <div>
                    <li
                      id="nav-head"
                      className=" cursor-pointer  list-none 2xl:text-[20px] 2xl:leading-6 xl:text-[14px] xl:leading-6 lg:text-[12px] lg:leading-4 text-[#666666] md:text-[18px] md:leading-3 sm:text-[16px] sm:leading-2 text-[10px] "
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
                      <div className="bg-black sm:p-[1.2px] md:p-[1.5px] p-[1px] my-1 sm:w-6 w-5"></div>
                      <div className="bg-black sm:p-[1px] md:p-[1.5px] p-[1px] my-1"></div>
                      <div className="bg-black sm:p-[1px] md:p-[1.5px] p-[1px] my-1"></div>
                    </div>
                  </button>
                </div>
                {/* Drawer */}
                {isDrawerOpen && (
                  <div
                    id="drawer-form"
                    className="fixed top-0 left-0 z-40 h-screen  overflow-y-auto transition-transform -translate-x-0 bg-white w-5/12 sm:w-3/12 dark:bg-gray-800 xsm-drawer"
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
                          className="mx-auto md:w-5 sm:w-4 w-3"
                        />
                      </button>
                    </div>
                    <div className="mt-10 ">
                      <div className=" lg:w-3/12 xl:w-2/12 md:w-full sm:w-full my-4">
                        <Image
                          src={leaves}
                          className="mx-auto md:w-10 sm:w-6 w-4"
                        />

                        <h1
                          className=" 2xl:text-[35px] xl:text-[30px] lg:text-[25px] md:text-[25px] md:mb-5 sm:text-[20px] sm:mb-5 text-[14px]  text-center"
                          id="nav-head"
                        >
                          TEAS
                        </h1>
                      </div>
                      <hr />
                      <ul className="flex flex-col">
                        <li
                          id="hover-underline-animation"
                          className=" text-[#666666] text-[10px] sm:text-sm first-letter:uppercase text-center mt-2 mx-auto"
                        >
                          Shop Teas
                        </li>
                        <br />
                        <li
                          id="hover-underline-animation"
                          className=" text-[#666666] text-[10px]  sm:text-sm first-letter:uppercase text-center mx-auto"
                        >
                          About Me
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex  ">
                <h1
                  className="my-auto 2xl:text-[35px] xl:text-[25px] lg:text-[20px] md:text-[18px]  sm:text-[16px] text-[14px]"
                  id="nav-head"
                >
                  TEAS
                </h1>
              </div>
              <div className=" mr-3 xl:mr-0 lg:mr-10 flex justify-around 2xl:gap-10 xl:gap-6 lg:gap-5 md:gap-4 sm:gap-3 gap-3 my-auto">
                <Image
                  src={search}
                  className="cursor-pointer 2xl:w-[21px] 2xl:h-[23px] xl:w-4 xl:h-4 lg:w-4 lg:h-4 md:w-4  sm:w-3 w-2"
                />
                <Image
                  src={user}
                  className="cursor-pointer 2xl:w-[21px] 2xl:h-[23px] xl:w-4 xl:h-4 lg:w-4 lg:h-4 md:w-4  sm:w-3 w-2"
                />
                <Image
                  src={shopbag}
                  className="cursor-pointer 2xl:w-[21px] 2xl:h-[23px]  xl:w-4 xl:h-4 lg:w-4 lg:h-4 md:w-4  sm:w-3 w-2"
                />
              </div>
            </div>
          </nav>
          <div
            className="border border-red flex  2xl:py-[280px] xl:py-44 lg:py-[132px] md:pt-24 md:pb-24 sm:pt-20 sm:pb-20 pt-6 pb-6 h-auto xms-m"
            id="bg-poster"
          >
            {/* <div className="2xl:my-auto 2xl:ml-56 xl:mt- xl:ml-40 lg:mt-40 lg:ml-32  md:mt-32 md:ml-28 sm:mt-24 sm:ml-16  ml-8 mt-8 sticky"> */}
            <div
              className="2xl:w-[1500px] xl:w-[1000px]  lg:w-[750px]  lg:mx-auto   md:ml-24 sm:ml-20 my-auto ml-[12%]
               "
            >
              {/* 2xl:ml-56
              xl:ml-40
                   lg:ml-32
                        md:ml-20
                      sm:ml-16
                       ml-5  */}
              <h1
                id="p-font"
                className="2xl:text-[36px] 2xl:leading-[45px] text-[#50362D] xl:text-[25px] xl:leading-[20px] lg:text-[18px] lg:leading-[25px] md:text-[16px] md:leading-[20px]
                sm:text-[14px] sm:leading-[16px]
                text-[7px] leading-[10px] my-[1px] text-Mixing"
              >
                Mixing Function and Flavor
              </h1>
              <h1
                id="p-font"
                className="2xl:text-[70px] 2xl:mt-2 2xl:leading-[80px] text-[#1E1E1E] 2xl:my-0   xl:text-[48px] xl:leading-[55px] lg:text-[35px] lg:my-1 lg:leading-[32px] md:text-[26px] md:leading-[30px] sm:text-[22px] sm:leading-[25px] sm:my-[2px] text-[14px] leading-[12px] my-[2px] text-Curated"
              >
                Curated{" "}
              </h1>
              <h1
                id="head"
                className="2xl:text-[90px] 2xl:leading-[80px] text-[#315031] xl:text-[64px] xl:leading-[50px] lg:text-[45px] lg:leading-[45px] md:text-[30px] md:leading-[30px]
                sm:text-[25px] sm:leading-[30px] sm:my-[2px]
                text-[18px] leading-[12px] my-[3px] text-Herbal"
              >
                Herbal Teas
              </h1>
              <p
                id="nav-head"
                className="2xl:text-[18px] 2xl:leading-[22px] 2xl:my-8 xl:text-[13px] xl:my-6  xl:leading-[23px] lg:text-[9px] lg:my-2  lg:leading-[20px] md:text-[6px] md:mt-0 md:leading-[12px] sm:text-[5px] sm:mt-0 sm:leading-[12px] text-[4px] mt-0 leading-[10px] pera-Explore"
              >
                Explore the best herbal tea collections at Suli teas.
              </p>
              <button className="bg-[#1E1E1E] 2xl:mt-4 2xl:px-8  2xl:my-0 xl:mt-3 xl:px-6 lg:mt-3 lg:px-5 md:my-2 md:px-5 sm:my-2 sm:px-3 btn-curv">
                <p
                  className="text-white 2xl:text-[20px] 2xl:leading-[26px] 2xl:py-[15px] 2xl:px-[16px] xl:text-[16px] xl:leading-[18px] xl:py-[14px] xl:px-[16px]
                  lg:text-[12px] lg:leading-[14px] lg:py-[12px] lg:px-[7px]  md:py-[5px] md:px-[3px] md:text:[8px] sm:text-[6px] sm:leading-[14px] sm:py-[3px] sm:px-[3px] text-[4px] leading-[10px] py-[1px] px-[10px] head-bttn "
                >
                  Shop Now
                </p>
              </button>
            </div>
          </div>
          <div className="flex justify-center  2xl:mt-[100px] xl:mt-16 lg:mt-16 md:mt-10 sm:mt-6 my-10">
            <div className="2xl:w-[1500px] xl:w-[1000px]  lg:w-[750px]   mx-auto  ">
              <Image
                src={leaves}
                className="mx-auto 2xl:w-[57.7px] 2xl:h-[51.91px] xl:w-[35px] lg:w-[25px] sm:w-8 w-5"
              />
              <h1
                id="head"
                className="text-[#1E1E1E] 2xl:text-[60px] text-center 2xl:leading-[70px] 2xl:mt-7 xl:text-[40px] xl:leading-[35px] xl:mt-1 lg:text-[30px] lg:leading-[40px] lg:mt-1 md:text-[30px] md:leading-[30px] md:mt-2 sm:text-[28px] sm:leading-[25px] sm:mt-2 text-[24px] leading-[30px] "
              >
                Unique Herbs and Spices
              </h1>
              <h2
                id="head"
                className="text-center 2xl:text-[36px]  2xl:leading-[56px]  xl:text-[24px]  xl:leading-[30px] xl:mt-1 lg:text-[18px]  lg:leading-[20px] lg:my-1 md:text-[18px]  md:leading-[22px] md:my-2 sm:text-[16px]  sm:leading-[20px] sm:my-1  text-[14px]  leading-[20px] my-1"
              >
                No Added Flavors
              </h2>
              <p
                id="p-font"
                className="text-[#666666] text-center  2xl:leading-[28px] 2xl:text-[18px] 2xl:mt-4 2xl:w-5/12 mx-auto 
                xl:leading-[25px] xl:text-[14px] xl:mt-4 xl:w-6/12  lg:leading-[20px] lg:text-[11px] lg:mt-3 lg:w-6/12
                md:leading-[25px] md:text-[16px] md:mt-2 md:w-6/12
                 leading-[20px] sm:text-[12px] sm:mt-2 sm:w-8/12 text-[10px] mt-1 w-8/12
              "
              >
                Bringing my most favorite blends together with the strength and
                flavor I enjoyed from my kitchen and purity my brain and body
                required.
              </p>
              <div className=" mx-auto 2xl:mt-[74px] xl:mt-10 lg:mt-8 md:mt-4 sm:mt-4 mt-3">
                <div className="flex  flex-wrap 2xl:gap-20 justify-center lg:justify-between md:flex-row md:gap-8 flex-col sm:gap-6 gap-6">
                  <div
                    data-aos="zoom-out-up"
                    className="2xl:mb-8 2xl:w-[446px] xl:w-[280px]  lg:w-[200px] md:w-4/12 md:mx-0 sm:w-3/6 w-4/6 cursor-pointer mx-auto"
                  >
                    <Image
                      src={ListingsF}
                      className=" 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-4/6 w-3/6 cursor-pointer mx-auto md:mx-0"
                    />
                    <h1
                      id="head"
                      className="text-[#1E1E1E] text-center 2xl:text-[24px] 2xl:mt-[18px] 2xl:leading-[50px]  xl:text-[16px] xl:my-2 xl:leading-[35px] lg:my-2 lg:text-[14px]  lg:leading-[25px] md:text-[16px] md:my-1  md:leading-[25px] sm:text-[14px] sm:mt-1 sm:leading-[30px]  text-[10px] mt-1  leading-[20px]"
                    >
                      Weight Wonder
                    </h1>
                    <h1
                      id="head"
                      className="text-center 2xl:my-3  2xl:text-[36px] 2xl:leading-[25px]  xl:text-[22px] xl:my-2 xl:leading-[20px] lg:text-[20px]  lg:leading-[25px] md:text-[18px] md:my-1 md:leading-[25px] sm:text-[18px] sm:leading-[25px]   text-[14px] "
                    >
                      $17.00
                    </h1>
                  </div>
                  <div
                    data-aos="zoom-out-up"
                    className="2xl:mb-8 2xl:w-[446px] xl:w-[280px]  lg:w-[200px] md:w-4/12 md:mx-0  sm:w-3/6  w-4/6 cursor-pointer mx-auto"
                  >
                    <Image
                      src={ListingsS}
                      className=" 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-4/6 w-3/6 cursor-pointer mx-auto md:mx-0"
                    />
                    <h1
                      id="head"
                      className="text-[#1E1E1E] text-center 2xl:text-[24px] 2xl:mt-[18px] 2xl:leading-[50px]  xl:text-[16px] xl:my-2 xl:leading-[35px] lg:my-2 lg:text-[14px]  lg:leading-[25px] md:text-[16px] md:my-1  md:leading-[25px] sm:text-[14px] sm:mt-1 sm:leading-[30px]  text-[10px] mt-1  leading-[20px]"
                    >
                      Detox Delite
                    </h1>
                    <h1
                      id="head"
                      className="text-center 2xl:my-3  2xl:text-[36px] 2xl:leading-[25px]  xl:text-[22px] xl:my-2 xl:leading-[20px] lg:text-[20px]  lg:leading-[25px] md:text-[18px] md:my-1 md:leading-[25px] sm:text-[18px] sm:leading-[25px]   text-[14px] "
                    >
                      $17.00
                    </h1>
                  </div>
                  <div
                    data-aos="zoom-out-up"
                    className="2xl:mb-8 2xl:w-[446px] xl:w-[280px]  lg:w-[200px] md:w-4/12 md:mx-0  sm:w-3/6  w-4/6 cursor-pointer mx-auto"
                  >
                    <Image
                      src={ListingsT}
                      className=" 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-4/6 w-3/6 cursor-pointer mx-auto md:mx-0"
                    />
                  <h1
                      id="head"
                      className="text-[#1E1E1E] text-center 2xl:text-[24px] 2xl:mt-[18px] 2xl:leading-[50px]  xl:text-[16px] xl:my-2 xl:leading-[35px] lg:my-2 lg:text-[14px]  lg:leading-[25px] md:text-[16px] md:my-1  md:leading-[25px] sm:text-[14px] sm:mt-1 sm:leading-[30px]   text-[10px] mt-1  leading-[20px]"
                    >
                      Anxiety Assist
                    </h1>
                    <h1
                      id="head"
                      className="text-center 2xl:my-3  2xl:text-[36px] 2xl:leading-[25px]  xl:text-[22px] xl:my-2 xl:leading-[20px] lg:text-[20px]  lg:leading-[25px] md:text-[18px] md:my-1 md:leading-[25px] sm:text-[18px] sm:leading-[25px]   text-[14px] "
                    >
                      $17.00
                    </h1>
                  </div>
                  <div
                    data-aos="zoom-out-up"
                    className="2xl:mb-8 2xl:w-[446px] xl:w-[280px] 2xl:mt-3  xl:mt-2  lg:w-[200px] md:w-4/12 md:mx-0  sm:w-3/6  w-4/6 cursor-pointer mx-auto"
                  >
                    <Image
                      src={ListingsFo}
                      className=" 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-4/6 w-3/6 cursor-pointer mx-auto md:mx-0"
                    />
                    <h1
                      id="head"
                      className="text-[#1E1E1E] text-center 2xl:text-[24px] 2xl:mt-[18px] 2xl:leading-[50px]  xl:text-[16px] xl:mt-2 xl:leading-[35px] lg:my-2 lg:text-[14px]  lg:leading-[25px] md:text-[16px] md:my-1  md:leading-[25px] sm:text-[14px] sm:mt-1 sm:leading-[30px]   text-[10px] mt-1  leading-[20px]"
                    >
                      Champion Chai
                    </h1>
                    <h1
                      id="head"
                      className="text-center 2xl:my-12xl:my-3  2xl:text-[36px] 2xl:leading-[25px]  xl:text-[22px] xl:my-2 xl:leading-[20px] lg:text-[20px]  lg:leading-[25px] md:text-[18px] md:my-1 md:leading-[25px] sm:text-[18px] sm:leading-[25px]   text-[14px] "
                    >
                      $17.00
                    </h1>
                  </div>
                  <div
                    data-aos="zoom-out-up"
                    className="2xl:mb-8 2xl:w-[446px] xl:w-[280px] 2xl:mt-3  xl:mt-2 lg:w-[200px] md:w-4/12 md:mx-0  sm:w-3/6  w-4/6 cursor-pointer mx-auto"
                  >
                    <Image
                      src={ListingsFI}
                      className=" 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-4/6 w-3/6 cursor-pointer mx-auto md:mx-0"
                    />
                    <h1
                      id="head"
                      className="text-[#1E1E1E] text-center 2xl:text-[24px] 2xl:mt-4 2xl:leading-[50px] xl:text-[16px] xl:my-2 xl:leading-[35px] lg:my-2 lg:text-[14px]  lg:leading-[25px] md:text-[16px] md:my-1  md:leading-[25px] sm:text-[14px] sm:mt-1 sm:leading-[30px]   text-[10px] mt-1  leading-[20px]"
                    >
                      Anxiety Assist
                    </h1>
                    <h1
                      id="head"
                      className="text-center 2xl:my-12xl:my-3  2xl:text-[36px] 2xl:leading-[25px]  xl:text-[22px] xl:my-2 xl:leading-[20px] lg:text-[20px]  lg:leading-[25px] md:text-[18px] md:my-1 md:leading-[25px] sm:text-[18px] sm:leading-[25px]   text-[14px]    "
                    >
                      $17.00
                    </h1>
                  </div>
                  <div
                    data-aos="zoom-out-up"
                    className="2xl:mb-8 2xl:w-[446px] xl:w-[280px] 2xl:mt-3 xl:mt-2  lg:w-[200px] md:w-4/12 md:mx-0  sm:w-3/6  w-4/6 cursor-pointer mx-auto"
                  >
                    <Image
                      src={ListingsSI}
                      className=" 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-4/6 w-3/6 cursor-pointer mx-auto md:mx-0"
                    />
                    <h1
                      id="head"
                      className="text-center 2xl:text-[24px] 2xl:mt-[18px] 2xl:leading-[50px]   xl:text-[16px]  xl:leading-[35px] lg:text-[14px]  lg:leading-[25px] md:text-[16px]  md:leading-[25px] md:my-1 sm:text-[14px]  sm:leading-[30px]  text-[10px] mt-1  leading-[20px]"
                    >
                      Immune Boost Beast
                    </h1>
                    <h1
                      id="head"
                      className="text-center 2xl:my-12xl:my-3  2xl:text-[36px] 2xl:leading-[25px]  xl:text-[22px] xl:my-2 xl:leading-[20px] lg:text-[20px]  lg:leading-[25px] md:text-[18px] md:my-1 md:leading-[25px] sm:text-[18px] sm:leading-[25px]   text-[14px]   "
                    >
                      $17.00
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className=" w-full xl:mt-[60px] lg:mt-12 md:mt-10 sm:mt-10 mt-5 "
              id="bg-posterS"
            >
              <div className="2xl:w-[1500px] xl:w-[1000px]  lg:w-[750px]   mx-auto ">
                <h1
                  id="head"
                  className="2xl:w-full 2xl:mb-8 2xl:text-[60px] text-center 2xl:pt-28 2xl:leading-[70px] xl:mb-8 xl:text-[32px] xl:pt-10 xl:leading-[30px] lg:mb-4 lg:text-[30px] lg:pt-10 lg:leading-[70px] md:mb-6 md:text-[22px] md:pt-5 md:leading-[40px] sm:mb-4 sm:text-[20px] sm:pt-5 sm:leading-[40px] text-[22px] pt-5 leading-[40px]"
                >
                  Find Your Favorite
                </h1>
                <div className="flex flex-col  justify-between  mx-auto  sm:flex-col sm:w-1/3 sm:mx-auto 2xl:mt-4 xl:mt-1  lg:w-full  lg:flex-row">
                  <div className="  w-1/3 mx-auto sm:w-full lg:w-1/3  ">
                    <h1
                      className="text-center  bg-[#5C161D]  2xl:mt-[36%]  text-white rounded-[8px]  2xl:w-[300px] 2xl:py-[15px]  2xl:text-[18px] 2xl:mr-20 2xl:leading-[28px]  mx-auto  xl:w-[200px] xl:mr-20  lg:mr-10  xl:py-2  xl:text-[14px] xl:leading-[20px] xl:mt-24   lg:w-8/12 lg:py-[6px]  lg:text-[12px] lg:leading-[20px] lg:mt-20  md:w-9/12 md:py-[5px]  md:text-[14px] md:leading-[22px] md:mt-1  sm:w-9/12 sm:py-1  sm:text-[12px] sm:leading-[15px] sm:mt-1  w-11/12 py-[1px]  text-[10px] leading-[30px] mt-10  "
                      id="head"
                    >
                      Immune Boost Beast
                    </h1>
                    <h1
                      className=" text-white  rounded-[8px] 2xl:w-[300px] 2xl:py-[15px]  2xl:mt-[25%]  text-center  bg-[#A47750] 2xl:text-[18px] 2xl:mr-[175px]  2xl:leading-[28px] xl:py-2 xl:mr-20 xl:text-[14px] xl:leading-[20px] xl:mt-20 xl:w-[200px] lg:py-[6px] lg:w-8/12  lg:text-[12px] lg:leading-[20px] lg:mt-14 lg:ml-0  md:w-9/12 md:py-[5px]  md:text-[14px] md:leading-[22px] md:mt-12 mx-auto sm:w-9/12 sm:py-1  sm:text-[12px] sm:leading-[15px] sm:mt-8 py-[1px]  text-[10px] leading-[30px] mt-8 w-11/12 "
                      id="head"
                    >
                      Champion Chai
                    </h1>
                    <h1
                      className=" text-white rounded-[8px]  w-11/12 2xl:py-[15px]  2xl:mt-[25%]  text-center  bg-[#7A8654] 2xl:w-[300px] 2xl:text-[18px] 2xl:mr-20 2xl:leading-[28px]  mx-auto  xl:mr-20  lg:mr-10  xl:py-2  xl:text-[14px] xl:leading-[20px] xl:mt-20 xl:w-[200px] lg:py-[6px] lg:w-8/12  lg:text-[12px] lg:leading-[20px] lg:mt-14  md:w-9/12 md:py-[5px]  md:text-[14px] md:leading-[22px] md:mt-12   sm:w-9/12 sm:py-1  sm:text-[12px] sm:leading-[15px] sm:mb-0 py-[1px] sm:mt-8  text-[10px] leading-[30px] mt-8"
                      id="head"
                    >
                      Weight Wonder
                    </h1>
                  </div>
                  <div
                    data-aos="zoom-out-up"
                    className="border  w-2/4 mx-auto mt-10 rounded-[14px] 2xl:w-[550px] 2xl:mt-4
                     shadow-2xl 2xl:p-10 2xl:pb-3 xl:w-1/3 xl:px-10 xl:py-6 xl:pb-0 lg:px-6 lg:mt-0 lg:w-1/3 lg:py-4 lg:pb-0 md:px-5 md:py-3 md:mt-10 sm:mt-10 md:pb-0 sm:px-5 sm:py-3 sm:pb-0 sm:w-full sm:my-2 px-3 p-5  "
                  >
                    <h1
                      id="head"
                      className="text-center 2xl:text-[24px]  2xl:leading-[39px] 2xl:mb-3 xl:text-[16px]  xl:leading-[30px] xl:mb-2  lg:text-[16px]  lg:leading-[25px] lg:mb-1  md:text-[14px]  md:leading-[20px] md:mb-1  sm:text-[18px]  sm:leading-[30px] sm:mb-1 text-[16px]  leading-[30px] mb-1 "
                    >
                      Suli’s Sample Box
                    </h1>
                    <Image src={groupP} className=" flex mx-auto" />
                    <h1
                      id="head"
                      className="text-center  2xl:text-[36px] 2xl:leading-[37px] 2xl:mt-[30px]   xl:text-[25px] xl:leading-[30px] xl:mt-4 lg:mt-3 lg:text-[20px] lg:leading-[25px]  md:mt-3 md:text-[18px] md:leading-[20px]   sm:mt-1 sm:text-[18px] sm:leading-[25px]    mt-1 text-[14px] leading-[20px] "
                    >
                      {" "}
                      $15.00
                    </h1>

                    <div className="flex justify-center">
                      <button className="bg-black  2xl:my-6   2xl:px-10  xl:mt-4 xl:px-0  lg:my-4 lg:px-0  md:my-4 md:px-0  sm:my-2 sm:px-0 my-2 sm:mb-2 btn-curv">
                        <p
                          className="text-white 2xl:text-[20px] 2xl:leading-[22px] 2xl:py-[14px] 2xl:px-[16px]  xl:text-[14px] xl:leading-[20px] xl:py-[12px] xl:px-10 lg:text-[12px] lg:leading-[16px]  lg:px-[24px]  md:text-[10px] md:leading-[12px] md:py-[10px] md:px-[16px] sm:text-[10px] sm:leading-[8px] sm:py-[8px]  sm:px-[14px] text-[8px] leading-[10px] py-[10px] px-[20px]  "
                          id="head"
                        >
                          Buy Now
                        </p>
                      </button>
                    </div>
                  </div>
                  <div className=" w-1/3 mx-auto flex flex-col   sm:w-full lg:w-1/3">
                    <h1
                      className="  text-white  bg-[#32504D] 2xl:mt-[36%] text-center rounded-[8px] mx-auto w-11/12 2xl:w-[300px] 2xl:py-[15px]   2xl:text-[18px] 2xl:ml-[80px] 2xl:leading-[28px] xl:ml-20 xl:mt-24 xl:py-2 xl:text-[14px] xl:leading-[20px] xl:w-[200px]   lg:ml-10  lg:py-[6px] lg:w-8/12  lg:text-[12px] lg:leading-[20px] lg:mt-20 md:w-9/12 md:py-[5px]  md:text-[14px] md:leading-[22px] md:mt-12  sm:w-9/12 sm:py-1  sm:text-[12px] sm:leading-[15px] sm:mt-10 py-[1px]  text-[10px] leading-[30px] mt-10"
                      id="head"
                    >
                      Anxiety Assist
                    </h1>
                    <h1
                      className="   text-white rounded-[8px]  w-11/12 text-center bg-[#482E69] 2xl:py-[15px] 2xl:w-[300px] 2xl:text-[18px] 2xl:mt-[25%] 2xl:leading-[28px] 2xl:ml-[180px]  xl:py-2  xl:text-[14px] xl:leading-[20px ] xl:w-[200px] xl:mr-0 xl:mt-20 lg:mr-0  lg:w-8/12    lg:mt-14 lg:py-[6px] lg:text-[12px] lg:leading-[20px] md:w-9/12 md:py-[5px]  md:mx-auto md:text-[14px] md:leading-[22px] md:mt-12   sm:w-9/12 sm:py-1  sm:text-[12px] sm:leading-[15px] sm:mt-8 mx-auto py-[1px]  text-[10px] leading-[30px] mt-8"
                      id="head"
                    >
                      Flair Fighter
                    </h1>
                    <h1
                      className=" text-white rounded-[8px]  mx-auto  w-11/12 text-center  bg-[#7D062A] 2xl:w-[300px] 2xl:py-[15px] 2xl:mt-[25%]  2xl:text-[18px] 2xl:ml-[80px] 2xl:leading-[28px] xl:ml-20 xl:mt-20 xl:py-2  xl:text-[14px] xl:leading-[20px] xl:w-[200px]  lg:ml-10  lg:py-[6px]  lg:w-8/12  lg:text-[12px] lg:leading-[20px] lg:mt-14 md:w-9/12 md:py-[5px]  md:text-[14px] md:mx-auto  md:leading-[22px] md:mt-12  sm:w-9/12 sm:py-1  sm:text-[12px] sm:leading-[15px] sm:mt-8 py-[1px]  text-[10px] leading-[30px] mt-8"
                      id="head"
                    >
                      Detox Delite
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" sm:w-full mx-auto2xl:mt-36 2xl:mt-48 xl:mt-32 lg:mt-20 sm:mt mb-10 ">
            <div className=" 2xl:w-[1500px] xl:w-[1000px]  lg:w-[750px]   mx-auto">
              <div className="mt-12 ">
                <h1
                  className="2xl:text-[26px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#315031] text-center"
                  id="p-font"
                >
                  Instagram
                </h1>
                <h1
                  className=" text-[25px] text-center 2xl:text-[60px] 2xl:leading-[70px] 2xl:mt-[10px] xl:text-[40px] xl:leading-[40px] xl:mt-1 lg:text-[35px] lg:leading-[30px] lg:mt-1 md:text-[30px] md:leading-[30px] md:mt-1  sm:text-[30px] sm:leading-[30px] leading-[35px]  sm:mt-1"
                  id="head"
                >
                  #SuliTeas
                </h1>
              </div>

              <div
                data-aos="fade-up"
                className=" flex flex-col lg:flex-row justify-between 2xl:mt-[40px]  xl:mt-2 lg:mt-4"
              >
                {/* className="flex  xl:mx-auto  sm:flex-col gap-4 2xl:gap-[10px] xl:gap-4  xl:mt-6 lg:mt-4 md:mt-2 sm:mt-1 mt-1 flex-col relative md:flex-col lg:flex-row 2xl:justify-between" */}
                <div id="image2" className=" w-[30%] 2xl:w-[291px] 2xl:h-[291px] xl:w-[190px] xl:h-[190px] sm:w-44 mt-5 mx-auto lg:w-[140px] ">
                  <Image
                    id="img1"
                    src={aa}
                    className=" 2xl:w-[291px] 2xl:h-[292px] xl:w-48  lg:w-24   md:w-32 sm:w-28  mx-auto"
                  />
                  <div className="img3">
                    <Image id="img4" src={instagram} />
                  </div>
                </div>

                <div id="image2" className=" w-[30%] 2xl:w-[291px] 2xl:h-[291px] xl:w-[190px] xl:h-[190px] sm:w-44 mt-5 mx-auto lg:w-[140px] ">
                  <Image
                    id="img1"
                    src={bb}
                    className=" 2xl:w-full xl:w-48  lg:w-24   md:w-32 sm:w-28 w-full "
                  />
                  <div className="2xl:w-[291px] 2xl:h-[292px] img3">
                    <Image id="img4" src={instagram} />
                  </div>
                </div>

                <div id="image2" className=" w-[30%] 2xl:w-[291px] 2xl:h-[291px] xl:w-[190px] xl:h-[190px] sm:w-44 mt-5 mx-auto lg:w-[140px]">
                  <Image
                    id="img1"
                    src={cc}
                    className=" 2xl:w-full xl:w-48  lg:w-24   md:w-32 sm:w-28 w-full "
                  />
                  <div className="img3">
                    <Image id="img4" src={instagram} />
                  </div>
                </div>

                <div id="image2" className=" w-[30%] 2xl:w-[291px] 2xl:h-[291px] xl:w-[190px] xl:h-[190px] sm:w-44 mt-5 mx-auto lg:w-[140px] ">
                  <Image
                    id="img1"
                    src={dd}
                    className=" 2xl:w-full xl:w-48  lg:w-24   md:w-32 sm:w-28 w-full "
                  />
                  <div className="img3">
                    <Image id="img4" src={instagram} />
                  </div>
                </div>
                <div id="image2" className=" w-[30%] 2xl:w-[291px] 2xl:h-[291px] xl:w-[190px] xl:h-[190px] sm:w-44 mt-5 mx-auto lg:w-[140px] ">
                  <Image
                    id="img1"
                    src={ee}
                    className=" 2xl:w-full xl:w-48  lg:w-24   md:w-32 sm:w-28 w-full "
                  />
                  <div className="img3">
                    <Image id="img4" src={instagram} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-[#E9F5DE] 2xl:pt-[70px] 2xl:mt-[100px]   xl:pt-12 xl:mt-20  lg:pt-8 lg:mt-16 md:pt-10 md:mt-10 sm:pt-10 sm:mt-10 ">
            <div className="2xl:w-[1500px] xl:w-[1000px]  lg:w-[750px]   mx-auto lg:flex  lg:justify-around lg:flex-row  xl:flex xl:flex-row  2xl:mx-auto 2xl:flex 2xl:justify-around   2xl:mb-10 xl:mb-2 lg:mb-8 md:flex-col md:justify-center md:mb-10 sm:flex-col sm:justify-center sm:mb-5  flex-col justify-center">
              <div className="2xl:w-2/12 lg:w-2/12 xl:w-2/12 md:w-full sm:w-full pt-5 sm:pt-0 md:pt-0 lg:py-0">
                {/* <Image
                  src={leaves}
                  className="mx-auto 2xl:w-16 md:w-10 sm:w-7 w-5 my-2"
                /> */}

                <h1
                  className="2xl:text-[40px] 2xl:mt-8 2xl:leading-[26px] xl:text-[30px] xl:leading-[20px] lg:text-left lg:text-[25px] lg:leading-[16px] lg:mt-6 md:text-[20px]  sm:text-[18px] sm:mb-5 text-[25px] text-center "
                  id="nav-head"
                >
                  TEAS
                </h1>
              </div>

              <div className="2xl:w-6/12 xl:w-7/12 lg:w-3/6 md:w-10/12  sm:w-1/3 w-1/3 mx-auto   md:flex md:justify-center  sm:mx-auto   sm:flex sm:justify-center  flex justify-center ">
                <div className="flex flex-col sm:flex sm:flex-col md:flex-row 2xl:justify-between mx-auto lg:w-full lg:m-0 xl:w-[70%]  2xl:w-[90%] xl:m-0 md:w-full md:my-5 sm:w-10/12  sm:my-5 ">
                  <div className="sm:mx-auto sm:my-5 mx-auto my-5 ">
                    <h1
                      className="list-none cursor-pointer 2xl:pb-[15px] xl:pb-[10px] lg:pb-[8px]  2xl:my-3 2xl:leading-[27px] 2xl:text-[18px] text-[##1E1E1E] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px]"
                      id="b-font"
                    >
                      Quick links
                    </h1>
                    <li
                      id="hover-underline-animation"
                      className="list-none cursor-pointer  2xl:mt-[0px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px]"
                    >
                      Home
                    </li>
                    <br />

                    <li
                      id="hover-underline-animation"
                      className="list-none cursor-pointer  2xl:my-[10px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px]"
                    >
                      Shop Teas
                    </li>
                    <br />
                    <li
                      id="hover-underline-animation"
                      className="list-none cursor-pointer  2xl:my-[6px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px]"
                    >
                      About Me
                    </li>
                    <br />
                    <li
                      id="hover-underline-animation"
                      className="list-none cursor-pointer  2xl:my-[10px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px]"
                    >
                      Contact Us
                    </li>
                  </div>
                  <div className="sm:mx-auto sm:my-5 mx-auto my-5 ">
                    <h1
                      className="list-none 2xl:pb-[15px] xl:pb-[10px] lg:pb-[8px]  cursor-pointer  2xl:my-3 2xl:leading-[27px] 2xl:text-[18px] text-[##1E1E1E] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px]"
                      id="b-font"
                    >
                      Other Links
                    </h1>
                    <li
                      id="hover-underline-animation"
                      className="list-none cursor-pointer  2xl:mt-[0px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px]"
                    >
                      Privacy Policy
                    </li>
                    <br />

                    <li
                      id="hover-underline-animation"
                      className="list-none cursor-pointer  2xl:my-[10px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px]"
                    >
                      Return Policy
                    </li>
                    <br />
                    <li
                      id="hover-underline-animation"
                      className="list-none cursor-pointer  2xl:my-[6px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px]"
                    >
                      Refund Policy
                    </li>
                    <br />
                    <li
                      id="hover-underline-animation"
                      className="list-none cursor-pointer  2xl:my-[10px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px]"
                    >
                      Cookies
                    </li>
                  </div>
                  <div className="sm:mx-auto sm:my-5 mx-auto my-5 ">
                    <h1
                      className="list-none cursor-pointer 2xl:pb-[15px] xl:pb-[10px] lg:pb-[8px]  2xl:my-3 2xl:leading-[27px] 2xl:text-[18px] text-[##1E1E1E] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px]"
                      id="b-font"
                    >
                      My Account
                    </h1>
                    <li
                      id="hover-underline-animation"
                      className="list-none cursor-pointer  2xl:mt-[0px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px]"
                    >
                      Shopping Bag
                    </li>
                    <br />

                    <li
                      id="hover-underline-animation"
                      className="list-none cursor-pointer  2xl:my-[10px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px]"
                    >
                      Wish List
                    </li>
                    <br />
                    <li
                      id="hover-underline-animation"
                      className="list-none cursor-pointer  2xl:my-[6px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px]"
                    >
                      Order History
                    </li>
                    <br />
                    <li
                      id="hover-underline-animation"
                      className="list-none cursor-pointer  2xl:my-[10px] 2xl:leading-[22px] 2xl:text-[18px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[14px] lg:my-1 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px]"
                    >
                      Order Tracking
                    </li>
                  </div>
                </div>
              </div>
              <div
                className="flex justify-center my-4
              5 md:flex md:justify-center sm:flex sm:justify-center lg:w-4/12 lg:flex-none xl:flex-none xl:w-3/12 2xl:w-3/12 "
              >
                <div className=" lg:w-10/12 xl:w-full 2xl:w-full  md:w-4/12 sm:w-4/12 mx-auto text-center lg:text-left">
                  <h1
                    className="list-none cursor-pointer  2xl:my-4 2xl:leading-[27px] 2xl:text-[18px] text-[##1E1E1E] xl:mt-2 xl:leading-[20px] xl:text-[14px] lg:my-2 lg:leading-[18px] lg:text-[12px] md:my-1 md:leading-[18px] md:text-[12px]  sm:my-1 sm:leading-[10px] sm:text-[10px] text-[10px] leading-[18px] mb-2"
                    id="b-font"
                  >
                    Subscribe to our emails
                  </h1>
                  <Image
                    src={arrow}
                    className="absolute z-20 ml-48 mt-2 2xl:w-5  2xl:ml-[345px]  2xl:mt-[18px] 2xl:mb-4 xl:w-4  xl:ml-[225px]  xl:mt-3 lg:ml-[185px] lg:mt-[11px] md:mt-3 md:ml-56 sm:mt-2 sm:ml-48 "
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="flex cursor-pointer border relative border-[#315031] bg-[#E9F5DE]  rounded  2xl:w-full 2xl:mt-3 2xl:p-[11px] xl:w-full xl:mt-3 xl:p-0.5  lg:w-full lg:p-0.5 lg:mt-2 w-[65%] sm:w-full sm:my-1 px-1 md:p-1 md:w-11/12  mx-auto"
                  />
                  <div className="flex justify-center md:justify-center lg:justify-start sm:justify-center 2xl:gap-7  2xl:my-5 xl:gap-5  xl:my-3 lg:my-2 lg:gap-4 md:my-5 sm:my-5 md:w-11/12  md:gap-4 sm:gap-4 my-2 gap-4  ">
                    <Link href="https://twitter.com/" target="_blank">
                      <Image
                        src={twitter}
                        className=" 2xl:w-5 xl:w-6 lg:w-4 md:w-4 w-4"
                      />
                    </Link>
                    <Link
                      href="https://www.facebook.com/login/"
                      target="_blank"
                    >
                      <Image
                        src={fbb}
                        className=" 2xl:w-5 xl:w-6 lg:w-4 md:w-4 w-4"
                      />
                    </Link>
                    <Link
                      href="https://www.instagram.com/accounts/login/"
                      target="_blank"
                    >
                      <Image
                        src={insta}
                        className=" 2xl:w-5 xl:w-6 lg:w-4 md:w-[16px] w-4 "
                      />
                    </Link>
                    <Link
                      href="https://accounts.spotify.com/en/login"
                      target="_blank"
                    >
                      <Image
                        src={music}
                        className=" 2xl:w-5 xl:w-[22px] lg:w-4 md:w-4 w-4"
                      />
                    </Link>
                    <Link href="https://www.youtube.com/" target="_blank">
                      <Image
                        src={YTt}
                        className=" 2xl:w-6 xl:w-6 lg:w-[18px] md:w-[16px] w-4"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mx-auto 2xl:w-[1500px] xl:w-[1000px]  lg:w-[750px]   opacity-[50%] sm:w-[70%]   border-[#315031]" />
            <h1 className=" 2xl:text-[16px] 2xl:my-1 2xl:leading-[24px] xl:text-[12px]  xl:leading-[20px] lg:text-[12px]  lg:leading-[20px]  text-[#666666] text-center  md:text-[12px]  md:leading-[20px] sm:text-[12px]  sm:leading-[20px] text-[12px] py-3 ">
              © 2023 Teas. All Rights Reserved.
            </h1>
          </footer>
        </div>
      </section>
    </>
  );
};

export default page;
