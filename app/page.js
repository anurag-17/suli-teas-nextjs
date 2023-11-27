import React from "react";
import Image from "next/image";
import search from "../public/images/search.svg";
import user from "../public/images/usera.svg";
import shopbag from "../public/images/shopbag.svg";
import leaves from "../public/images/leaves 1.svg";
import ListingsF from "../public/images/Listings 1.svg";
import ListingsS from "../public/images/Listings 2.svg";
import ListingsT from "../public/images/Listings 3.svg";
import ListingsFo from "../public/images/Listings 4.svg";
import ListingsFI from "../public/images/Listings 5.svg";
import ListingsSI from "../public/images/Listings 6.svg";
import groupP from "../public/images/groupP.svg";
import aa from "../public/images/11.svg";
import bb from "../public/images/22.svg";
import cc from "../public/images/55.svg";
import dd from "../public/images/33.svg";
import ee from "../public/images/44.svg";
import twitter from "../public/images/twitter.svg";
import fbb from "../public/images/fbb.svg";
import insta from "../public/images/insta.svg";
import music from "../public/images/music.svg";
import YTt from "../public/images/YTt.svg";
import arrow from "../public/images/arrow.svg";
import Link from "next/link";
import instagram from "../public/images/instagram 1.svg";

const page = () => {
  return (
    <>
      <section>
        <div>
          <div className="sm:h-screen " id="bg-poster">
            <div className="">
              <nav className="border 2xl:py-8 xl:py-4  lg:py-4 md:py-3 sm:py-2 bg-white">
                <div className="flex justify-around m-auto">
                  <div className="flex justify-between 2xl:gap-8 xl:gap-6 lg:gap-6 md:gap-4 sm:gap-2 my-auto ">
                    <div className="">
                      <li className="cursor-pointer list-none 2xl:text-[20px] 2xl:leading-6 xl:text-[14px] xl:leading-4 lg:text-[14px] lg:leading-3 md:text-[14px] md:leading-3 sm:text-[12px] text-[10px] sm:leading-2 text-[#666666] ">
                        Shop Teas
                      </li>
                    </div>
                    <div>
                      <li className=" cursor-pointer  list-none 2xl:text-[20px] 2xl:leading-6 xl:text-[14px] xl:leading-4 lg:text-[14px] lg:leading-3 text-[#666666] md:text-[14px] md:leading-3 sm:text-[12px] sm:leading-2 text-[10px] ">
                        About Me
                      </li>
                    </div>
                  </div>
                  <div className="  ">
                    <h1
                      className="2xl:text-[35px] xl:text-[30px] lg:text-[30px] md:text-[25px]  sm:text-[20px] text-[16px]"
                      id="nav-head"
                    >
                      TEAS
                    </h1>
                  </div>
                  <div className="flex justify-around 2xl:gap-8 xl:gap-6 lg:gap-5 md:gap-4 sm:gap-3 gap-3 my-auto ">
                    <Image
                      src={search}
                      className="cursor-pointer 2xl:w-full xl:w-5 lg:w-4 md:w-3  sm:w-3 w-3"
                    />
                    <Image
                      src={user}
                      className="cursor-pointer 2xl:w-full xl:w-5 lg:w-4 md:w-3  sm:w-3 w-3"
                    />
                    <Image
                      src={shopbag}
                      className="cursor-pointer 2xl:w-full xl:w-5 lg:w-4 md:w-3  sm:w-3 w-3"
                    />
                  </div>
                </div>
              </nav>
            </div>
            <div className="2xl:mt-80 2xl:ml-56 xl:mt-56 xl:ml-40 lg:mt-40 lg:ml-32  md:mt-32 md:ml-28 sm:mt-24 sm:ml-16 mt-16 ml-8">
              <h1
                id="p-font"
                className="2xl:text-[36px] 2xl:leading-[45px] text-[#50362D] xl:text-[25px] xl:leading-[20px] lg:text-[20px] lg:leading-[32px] md:text-[18px] md:leading-[25px]
                sm:text-[14px] sm:leading-[16px]
                text-[14px] leading-[10px]"
              >
                Mixing Function and Flavor
              </h1>
              <h1
                id="p-font"
                className="2xl:text-[80px] 2xl:mt-1 2xl:leading-[90px] text-[#1E1E1E]  xl:text-[48px] xl:leading-[55px] lg:text-[40px] lg:leading-[32px] md:text-[35px] md:leading-[35px] sm:text-[28px] sm:leading-[25px] text-[22px] leading-[25px]"
              >
                Curated{" "}
              </h1>
              <h1
                id="head"
                className="2xl:text-[90px] 2xl:leading-[90px] text-[#315031] xl:text-[64px] xl:leading-[50px] lg:text-[50px] lg:leading-[52px] md:text-[45px] md:leading-[35px]
                sm:text-[35px] sm:leading-[30px]
                text-[27px] leading-[20px]"
              >
                Herbal Teas
              </h1>
              <p
                id="nav-head"
                className="2xl:text-[18px] 2xl:mt-5 2xl:leading-[23px] xl:text-[13px] xl:mt-2 xl:leading-[23px] lg:text-[10.5px] lg:mt-0 lg:leading-[20px] md:text-[9px] md:mt-0 md:leading-[20px] sm:text-[7px] sm:mt-0 sm:leading-[14px] text-[10px] mt-0 leading-[14px]"
              >
                Explore the best herbal tea collections at Suli teas.
              </p>
              <button className="bg-black 2xl:my-6 2xl:px-10 rounded-bl-full rounded-tr-full xl:my-2 xl:px-6 lg:my-2 lg:px-5 md:my-2 md:px-5 sm:my-2 sm:px-3 mb-8">
                <h1
                  className="text-white 2xl:text-[20px] 2xl:leading-[26px] 2xl:py-[20px] 2xl:px-[40px] xl:text-[18px] xl:leading-[18px] xl:py-[8px] xl:px-[6px]
                  lg:text-[14px] lg:leading-[14px] lg:py-[7px] lg:px-[5px] sm:text-[10px] sm:leading-[14px] sm:py-[5px] sm:px-[3px] text-[8px] leading-[12px] py-[4px] px-[8px] "
                  id="b-font"
                >
                  Buy Now
                </h1>
              </button>
            </div>
          </div>
          <div className="flex justify-center 2xl:mt-24 xl:mt-16 lg:mt-16 md:mt-10 sm:mt-6 my-3">
            <div className="">
              <Image src={leaves} className="mx-auto md:w-12 sm:w-8 w-8" />
              <h1
                id="head"
                className="2xl:text-[60px] text-center 2xl:leading-[70px] 2xl:mt-7 xl:text-[40px] xl:leading-[35px] xl:mt-1 lg:text-[35px] lg:leading-[35px] lg:mt-4 md:text-[25px] md:leading-[25px] md:mt-2 sm:text-[20px] sm:leading-[20px] sm:mt-2 text-[18px] leading-[18px] mt-1"
              >
                Unique Herbs and Spices
              </h1>
              <h2
                id="head"
                className="text-center 2xl:text-[36px]  2xl:leading-[36px] 2xl:mt-3 xl:text-[24px]  xl:leading-[30px] xl:mt-1 lg:text-[21px]  lg:leading-[20px] lg:my-2 md:text-[15px]  md:leading-[15px] md:my-2 sm:text-[12px]  sm:leading-[10px] sm:my-1  text-[11px]  leading-[7px] my-1"
              >
                No Added Flavors
              </h2>
              <p
                id="p-font"
                className="text-[#666666] text-center  2xl:leading-[30px] 2xl:text-[20px] 2xl:mt-6 2xl:w-4/12 mx-auto 
                xl:leading-22px] xl:text-[12px] xl:mt-4 xl:w-4/12  lg:leading-[18px] lg:text-[10px] lg:mt-4 lg:w-4/12
                md:leading-[14px] md:text-[8px] md:mt-2 md:w-4/12
                leading-[12px] sm:text-[7px] sm:mt-2 sm:w-4/12 text-[10px] mt-1 w-10/12
              "
              >
                Bringing my most favorite blends together with the strength and
                flavor I enjoyed from my kitchen and purity my brain and body
                required.
              </p>
              <div className=" w-10/12 mx-auto 2xl:mt-20 xl:mt-8 lg:mt-6 md:mt-4 sm:mt-4 mt-3">
                <div className="flex justify-center flex-wrap gap-4  sm:justify-around md:gap-6 sm:gap-6">
                  <div className="2xl:mb-8 xl:w-1/4 lg:w-1/4 md:w-2/6 sm:w-2/6 w-3/6">
                    <Image src={ListingsF} className="cursor-pointer " />
                    <h1
                      id="head"
                      className="text-center 2xl:text-[24px]  2xl:leading-[37.5px] xl:text-[16px]  xl:leading-[35px]  lg:text-[14px]  lg:leading-[30px] md:text-[12px]  md:leading-[25px] sm:text-[10px]  sm:leading-[20px]  text-[10px]  leading-[15px]"
                    >
                      Weight Wonder
                    </h1>
                    <h1
                      id="head"
                      className="text-center 2xl:text-[36px] 2xl:leading-[37.5px]  xl:text-[22px] xl:leading-[20px] lg:text-[18px] lg:leading-[20px] md:text-[16px] md:leading-[20px] sm:text-[14px] sm:leading-[20px]   text-[10px] leading-[15px]  "
                    >
                      $17.00
                    </h1>
                  </div>
                  <div className="2xl:mb-8 xl:w-1/4 lg:w-1/4 md:w-2/6 sm:w-2/6 w-3/6">
                    <Image src={ListingsS} className="cursor-pointer " />
                    <h1
                      id="head"
                      className="text-center 2xl:text-[24px]  2xl:leading-[37.5px] xl:text-[16px]  xl:leading-[35px] lg:text-[14px]  lg:leading-[30px] md:text-[12px]  md:leading-[25px] sm:text-[10px]  sm:leading-[20px] text-[10px]  leading-[15px]"
                    >
                      Detox Delite
                    </h1>
                    <h1
                      id="head"
                      className="text-center 2xl:text-[36px] 2xl:leading-[37.5px]  xl:text-[22px] xl:leading-[20px] lg:text-[18px] lg:leading-[20px] md:text-[16px] md:leading-[20px] sm:text-[14px] sm:leading-[20px] text-[10px] leading-[15px] "
                    >
                      $17.00
                    </h1>
                  </div>
                  <div className="2xl:mb-8 xl:w-1/4 lg:w-1/4 md:w-2/6 sm:w-2/6 w-3/6">
                    <Image src={ListingsT} className="cursor-pointer " />
                    <h1
                      id="head"
                      className="text-center 2xl:text-[24px]  2xl:leading-[37.5px] xl:text-[16px]  xl:leading-[35px] lg:text-[14px]  lg:leading-[30px] md:text-[12px]  md:leading-[25px] sm:text-[10px]  sm:leading-[20px] text-[10px]  leading-[15px]"
                    >
                      Anxiety Assist
                    </h1>
                    <h1
                      id="head"
                      className="text-center 2xl:text-[36px] 2xl:leading-[37.5px]  xl:text-[22px] xl:leading-[20px] lg:text-[18px] lg:leading-[20px] md:text-[16px] md:leading-[20px] sm:text-[14px] sm:leading-[20px] text-[10px] leading-[15px] "
                    >
                      $17.00
                    </h1>
                  </div>
                  <div className="2xl:mb-8 xl:w-1/4 lg:w-1/4 md:w-2/6 sm:w-2/6 w-3/6">
                    <Image src={ListingsFo} className="cursor-pointer " />
                    <h1
                      id="head"
                      className="text-center 2xl:text-[24px]  2xl:leading-[37.5px] xl:text-[16px]  xl:leading-[35px] lg:text-[14px]  lg:leading-[30px] md:text-[12px]  md:leading-[25px] sm:text-[10px]  sm:leading-[20px] text-[10px]  leading-[15px]"
                    >
                      Champion Chai
                    </h1>
                    <h1
                      id="head"
                      className="text-center 2xl:text-[36px] 2xl:leading-[37.5px]  xl:text-[22px] xl:leading-[20px] lg:text-[18px] lg:leading-[20px] md:text-[16px] md:leading-[20px] sm:text-[14px] sm:leading-[20px] text-[10px] leading-[15px] "
                    >
                      $17.00
                    </h1>
                  </div>
                  <div className="2xl:mb-8 xl:w-1/4 lg:w-1/4 md:w-2/6 sm:w-2/6 w-3/6">
                    <Image src={ListingsFI} className="cursor-pointer " />
                    <h1
                      id="head"
                      className="text-center 2xl:text-[24px]  2xl:leading-[37.5px] xl:text-[16px]  xl:leading-[35px] lg:text-[14px]  lg:leading-[30px] md:text-[12px]  md:leading-[25px] sm:text-[10px]  sm:leading-[20px] text-[10px]  leading-[15px]"
                    >
                      Anxiety Assist
                    </h1>
                    <h1
                      id="head"
                      className="text-center 2xl:text-[36px] 2xl:leading-[37.5px]  xl:text-[22px] xl:leading-[20px] lg:text-[18px] lg:leading-[20px] md:text-[16px] md:leading-[20px] sm:text-[14px] sm:leading-[20px] text-[10px] leading-[15px] "
                    >
                      $17.00
                    </h1>
                  </div>
                  <div className="2xl:mb-8 xl:w-1/4 lg:w-1/4 md:w-2/6 sm:w-2/6 w-3/6">
                    <Image src={ListingsSI} className="cursor-pointer " />
                    <h1
                      id="head"
                      className="text-center 2xl:text-[24px]  2xl:leading-[37.5px]  xl:text-[16px]  xl:leading-[35px] lg:text-[14px]  lg:leading-[30px] md:text-[12px]  md:leading-[25px] sm:text-[10px]  sm:leading-[20px] text-[10px]  leading-[15px]"
                    >
                      Immune Boost Beast
                    </h1>
                    <h1
                      id="head"
                      className="text-center 2xl:text-[36px] 2xl:leading-[37.5px] xl:text-[22px] xl:leading-[20px] lg:text-[18px] lg:leading-[20px] md:text-[16px] md:leading-[20px] sm:text-[14px] sm:leading-[20px] text-[10px] leading-[15px] "
                    >
                      $17.00
                    </h1>
                  </div>
                </div>
              </div>
              <div
                className=" 2xl:mt-28 xl:mt-12 lg:mt-10 md:mt-10 sm:mt-10 mt-5"
                id="bg-posterS"
              >
                <h1
                  id="head"
                  className="2xl:text-[50px] text-center 2xl:pt-24 2xl:leading-[70px] xl:text-[32px] xl:pt-10 xl:leading-[70px] lg:text-[25px] lg:pt-10 lg:leading-[70px] md:text-[20px] md:pt-5 md:leading-[40px] sm:text-[16px] sm:pt-5 sm:leading-[40px] text-[22px] pt-5 leading-[40px]"
                >
                  Find Your Favorite
                </h1>
                <div className="flex justify-center 2xl:mt-4 xl:mt-1 lg:mt-1">
                  <div className="  w-3/12">
                    <h1
                      className="text-center  bg-[#5C161D] 2xl:my-32 text-white rounded-[8px]  2xl:w-7/12 2xl:py-3  2xl:text-[18px] 2xl:leading-[28px]  mx-auto xl:w-7/12 xl:py-3  xl:text-[14px] xl:leading-[20px] xl:mt-28   lg:w-7/12 lg:py-2  lg:text-[12px] lg:leading-[20px] lg:mt-20 md:w-7/12 md:py-1  md:text-[10px] md:leading-[16px] md:mt-12  sm:w-8/12 sm:py-1  sm:text-[8px] sm:leading-[12px] sm:mt-10  w-8/12 py-[6px]  text-[8px] leading-[10px] mt-16 "
                      id="head"
                    >
                      Immune Boost Beast
                    </h1>
                    <h1
                      className="2xl:my-32 text-white rounded-[8px]  w-7/12 2xl:py-3 text-center  bg-[#A47750] 2xl:text-[18px] 2xl:leading-[28px]  2xl:ml-6  xl:py-3  xl:text-[14px] xl:leading-[20px] xl:mt-16  lg:py-2  lg:text-[12px] lg:leading-[20px] lg:mt-12  md:w-7/12 md:py-1  md:text-[10px] md:leading-[16px] md:mt-10  sm:w-8/12 sm:py-1  sm:text-[8px] sm:leading-[12px] sm:mt-8  py-[6px]  text-[8px] leading-[10px] mt-12"
                      id="head"
                    >
                      Champion Chai
                    </h1>
                    <h1
                      className="2xl:my-32 text-white rounded-[8px]  w-7/12 2xl:py-3 text-center  bg-[#7A8654] 2xl:text-[18px] 2xl:leading-[28px]  mx-auto  xl:py-3  xl:text-[14px] xl:leading-[20px] xl:mt-16  lg:py-2  lg:text-[12px] lg:leading-[20px] lg:mt-12  md:w-7/12 md:py-1  md:text-[10px] md:leading-[16px] md:mt-10   sm:w-8/12 sm:py-1  sm:text-[8px] sm:leading-[12px] sm:mt-8  py-[6px]  text-[8px] leading-[10px] mt-12"
                      id="head"
                    >
                      Weight Wonder
                    </h1>
                  </div>
                  <div className="border rounded-[14px] shadow-2xl 2xl:p-10 2xl:pb-3 w-5/12 sm:w-3/12 xl:px-10 xl:py-6 xl:pb-0 lg:px-6 lg:py-4 lg:pb-0 md:px-5 md:py-3 md:pb-0 sm:px-5 sm:py-3 sm:pb-0  px-3 py-1 pb-0 ">
                    <h1
                      id="head"
                      className="text-center 2xl:text-[24px]  2xl:leading-[39px] 2xl:mb-3 xl:text-[16px]  xl:leading-[30px] xl:mb-2  lg:text-[14px]  lg:leading-[25px] lg:mb-1  md:text-[12px]  md:leading-[20px] md:mb-1  sm:text-[10px]  sm:leading-[20px] sm:mb-1 text-[16px]  leading-[30px] mb-1 "
                    >
                      Suli’s Sample Box
                    </h1>
                    <Image src={groupP} />
                    <h1
                      id="head"
                      className="text-center  2xl:text-[36px] 2xl:leading-[37px] 2xl:mt-6   xl:text-[25px] xl:leading-[30px] xl:mt-4 lg:mt-3 lg:text-[22px] lg:leading-[25px]  md:mt-3 md:text-[18px] md:leading-[20px]   sm:mt-1 sm:text-[14px] sm:leading-[20px]   mt-1 text-[16px] leading-[15px] "
                    >
                      {" "}
                      $15.00
                    </h1>

                    <div className="flex justify-center">
                      <button className="bg-black  2xl:my-6   2xl:px-10 rounded-bl-full rounded-tr-full xl:mt-4 xl:px-0  lg:mt-3 lg:px-0  md:my-4 md:px-0  sm:my-2 sm:px-0 my-2 ">
                        <h1
                          className="text-white 2xl:text-[20px] 2xl:leading-[26px] 2xl:py-[20px] 2xl:px-[40px]  xl:text-[12px] xl:leading-[20px] xl:py-[6px] xl:px-[22px]  lg:text-[12px] lg:leading-[20px] lg:py-[6px] lg:px-[22px]  md:text-[10px] md:leading-[16px] md:py-[4px] md:px-[16px] sm:text-[8px] sm:leading-[12px] sm:py-[2px] sm:px-[8px] text-[12px] leading-[15px] py-[4px] px-[10px] "
                          id="head"
                        >
                          Buy Now
                        </h1>
                      </button>
                    </div>
                  </div>
                  <div className=" w-3/12">
                    <h1
                      className=" text-white  bg-[#32504D] text-center rounded-[8px] mx-auto w-7/12 2xl:my-32 2xl:py-3 2xl:text-[18px] 2xl:leading-[28px]  xl:mt-28 xl:py-3 xl:text-[14px] xl:leading-[20px] lg:mt-20 lg:py-2 lg:text-[12px] lg:leading-[20px] md:w-7/12 md:py-1  md:text-[10px] md:leading-[16px] md:mt-12  sm:w-8/12 sm:py-1  sm:text-[8px] sm:leading-[12px] sm:mt-10  w-8/12 py-[6px]  text-[8px] leading-[10px] mt-16"
                      id="head"
                    >
                      Anxiety Assist
                    </h1>
                    <h1
                      className="  text-white rounded-[8px]  w-7/12 text-center  bg-[#482E69] 2xl:py-3  2xl:my-32 2xl:text-[18px] 2xl:leading-[28px] 2xl:ml-48  xl:mt-16 xl:py-3  xl:text-[14px] xl:leading-[20px] xl:ml-36   lg:mt-12 lg:py-2 lg:text-[12px] lg:leading-[20px] lg:ml-28  md:ml-24   md:w-7/12 md:py-1  md:text-[10px] md:leading-[16px] md:mt-10   sm:w-8/12 sm:py-1  sm:text-[8px] sm:leading-[12px] sm:mt-8 sm:ml-12  ml-14 py-[6px]  text-[8px] leading-[10px] mt-12"
                      id="head"
                    >
                      Flair Fighter
                    </h1>
                    <h1
                      className=" text-white rounded-[8px]  mx-auto  w-7/12 text-center  bg-[#7D062A] 2xl:py-3  2xl:my-32 2xl:text-[18px] 2xl:leading-[28px]  xl:mt-16 xl:py-3  xl:text-[14px] xl:leading-[20px] lg:py-2 lg:my-32 lg:text-[12px] lg:leading-[20px] lg:mt-12 md:w-7/12 md:py-1  md:text-[10px] md:leading-[16px] md:mt-10  sm:w-8/12 sm:py-1  sm:text-[8px] sm:leading-[12px] sm:mt-8  py-[6px]  text-[8px] leading-[10px] mt-12"
                      id="head"
                    >
                      Detox Delite
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center 2xl:mt-12 xl:mt-12 lg:mt-6">
            <div className=" ">
              <div className="mt-12">
                <h1 className="2xl:text-[28px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[#315031] text-center">
                  Instagram
                </h1>
                <h1
                  className=" text-[22px] text-center 2xl:text-[60px] 2xl:leading-[70px] 2xl:mt-1 xl:text-[40px] xl:leading-[40px] xl:mt-1 lg:text-[30px] lg:leading-[30px] lg:mt-1 md:text-[25px] md:leading-[25px] md:mt-1  sm:text-[20px] sm:leading-[20px] sm:mt-1"
                  id="head"
                >
                  #SuliTeas
                </h1>
              </div>
              <div className="flex  sm:flex-row gap-4 2xl:gap-4 2xl:mt-16 xl:mt-6 lg:mt-4 md:mt-2 sm:mt-1 mt-1 flex-col relative">
                <Image
                  src={aa}
                  className=" 2xl:w-72 xl:w-48  lg:w-36   md:w-32 sm:w-28 w-28 "
                />
                <Image
                  src={bb}
                  className=" 2xl:w-72 xl:w-48  lg:w-36 md:w-32 sm:w-28   w-28"
                />
                <Image
                  src={instagram}
                  className=" 2xl:w-8 xl:w-6  lg:w-5 md:w-4 sm:w-4  absolute sm:ml-[300px] sm:mt-[50px]  md:ml-[340px] md:mt-[55px]  lg:ml-[380px] lg:mt-[60px]  xl:ml-[499px] xl:mt-[84px]  2xl:ml-[740px] 2xl:mt-[135px] mt-500px ml:50 z-10 "
                />
                <Image
                  src={cc}
                  className="  2xl:w-72 xl:w-48  lg:w-36 md:w-32 sm:w-28 w-28 relative "
                />

                <Image
                  src={dd}
                  className=" 2xl:w-72 xl:w-48  lg:w-36 md:w-32 sm:w-28   w-28"
                />
                <Image
                  src={ee}
                  className=" 2xl:w-72 xl:w-48  lg:w-36 md:w-32 sm:w-28   w-28"
                />
              </div>
            </div>
          </div>
          <footer className="bg-[#E9F5DE] 2xl:pt-24 2xl:mt-24 xl:pt-20 xl:mt-20  lg:pt-16 lg:mt-16 md:pt-10 md:mt-10 sm:pt-10 sm:mt-10">
            <div className="lg:flex lg:justify-around lg:flex-row xl:flex xl:flex-row xl:justify-around 2xl:flex 2xl:justify-around   2xl:mb-20 xl:mb-5 lg:mb-5 md:flex-col md:justify-center     md:mb-5              sm:flex-col sm:justify-center sm:mb-5  flex-col justify-center">
              <div className="lg:w-3/12 xl:w-2/12 md:w-full sm:w-full">
                <h1
                  className="2xl:text-[35px] xl:text-[30px] lg:text-[25px] md:text-[25px] md:mb-5 sm:text-[25px] sm:mb-5 text-[18px] my-2 text-center"
                  id="nav-head"
                >
                  TEAS
                </h1>
              </div>

              <div className="2xl:w-4/12 xl:w-6/6 lg:w-4/6  md:flex md:justify-center   sm:flex sm:justify-center  flex justify-center ">
                <div className="flex justify-around xl: lg:w-[70%] lg:m-0 xl:w-[70%]  2xl:w-[90%] xl:m-0 md:w-6/12 md:my-5 sm:w-6/12 sm:my-5 w-full ">
                  <div className="">
                    <h1
                      className="2xl:text-[18px] 2xl:mb-6 xl:text-[16px] xl:mb-4  lg:text-[14px] lg:mb-3 md:text-[12px] md:mb-2  sm:text-[12px] sm:mb-2 text-[12px]"
                      id="nav-head"
                    >
                      Quick links
                    </h1>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[27px] 2xl:text-[16px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[12px] lg:my-1 lg:leading-[20px] lg:text-[12px] md:my-1 md:leading-[20px] md:text-[12px]  sm:my-1 sm:leading-[20px] sm:text-[12px] text-[10px] leading-[15px]">
                      Home
                    </li>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[27px] 2xl:text-[16px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[12px]  lg:my-1 lg:leading-[20px] lg:text-[12px]  md:my-1 md:leading-[20px] md:text-[12px]    sm:my-1 sm:leading-[20px] sm:text-[12px] text-[10px] leading-[15px]">
                      Shop Teas
                    </li>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[27px] 2xl:text-[16px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[12px]  lg:my-1 lg:leading-[20px] lg:text-[12px]  md:my-1 md:leading-[20px] md:text-[12px]  sm:my-1 sm:leading-[20px] sm:text-[12px] text-[10px] leading-[15px]">
                      About Me
                    </li>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[27px] 2xl:text-[16px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[12px]  lg:my-1 lg:leading-[20px] lg:text-[12px]  md:my-1 md:leading-[20px] md:text-[12px]  sm:my-1 sm:leading-[20px] sm:text-[12px] text-[10px] leading-[15px]">
                      Contact Us
                    </li>
                  </div>
                  <div>
                    <h1
                      className="2xl:text-[18px] 2xl:mb-6 xl:text-[16px] xl:mb-4   lg:text-[14px] lg:mb-3 md:text-[12px] md:mb-2 sm:text-[12px] sm:mb-2 text-[12px]"
                      id="nav-head"
                    >
                      Other Links
                    </h1>{" "}
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[27px] 2xl:text-[16px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[12px]  lg:my-1 lg:leading-[20px] lg:text-[12px]  md:my-1 md:leading-[20px] md:text-[12px] sm:my-1 sm:leading-[20px] sm:text-[12px] text-[10px] leading-[15px]">
                      Privacy Policy
                    </li>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[27px] 2xl:text-[16px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[12px]  lg:my-1 lg:leading-[20px] lg:text-[12px]  md:my-1 md:leading-[20px] md:text-[12px] sm:my-1 sm:leading-[20px] sm:text-[12px] text-[10px] leading-[15px]">
                      Return Policy
                    </li>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[27px] 2xl:text-[16px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[12px]  lg:my-1 lg:leading-[20px] lg:text-[12px]  md:my-1 md:leading-[20px] md:text-[12px] sm:my-1 sm:leading-[20px] sm:text-[12px] text-[10px] leading-[15px]">
                      Refund Policy
                    </li>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[27px] 2xl:text-[16px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[12px]  lg:my-1 lg:leading-[20px] lg:text-[12px]  md:my-1 md:leading-[20px] md:text-[12px] sm:my-1 sm:leading-[20px] sm:text-[12px] text-[10px] leading-[15px] ">
                      Cookies
                    </li>
                  </div>
                  <div>
                    <h1
                      className="2xl:text-[18px] 2xl:mb-4 xl:text-[16px] xl:mb-4  lg:text-[14px] lg:mb-3 md:text-[12px] md:mb-2 sm:text-[12px] sm:mb-2 text-[12px]"
                      id="nav-head"
                    >
                      My Account
                    </h1>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[27px] 2xl:text-[16px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[12px]  lg:my-1 lg:leading-[20px] lg:text-[12px]  md:my-1 md:leading-[20px] md:text-[12px] sm:my-1 sm:leading-[20px] sm:text-[12px] text-[10px] leading-[15px]">
                      Shopping Bag
                    </li>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[27px] 2xl:text-[16px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[12px]  lg:my-1 lg:leading-[20px] lg:text-[12px]  md:my-1 md:leading-[20px] md:text-[12px] sm:my-1 sm:leading-[20px] sm:text-[12px] text-[10px] leading-[15px]">
                      Wish List
                    </li>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[27px] 2xl:text-[16px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[12px]  lg:my-1 lg:leading-[20px] lg:text-[12px]  md:my-1 md:leading-[20px] md:text-[12px] sm:my-1 sm:leading-[20px] sm:text-[12px] text-[10px] leading-[15px]">
                      Order History
                    </li>
                    <li className="list-none cursor-pointer  2xl:my-2 2xl:leading-[27px] 2xl:text-[16px] text-[#555555] xl:my-1 xl:leading-[20px] xl:text-[12px]  lg:my-1 lg:leading-[20px] lg:text-[12px]  md:my-1 md:leading-[20px] md:text-[12px] sm:my-1 sm:leading-[20px] sm:text-[12px] text-[10px] leading-[15px]">
                      Order Tracking
                    </li>
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-3 md:flex md:justify-center sm:flex sm:justify-center lg:flex-none xl:flex-none xl:w-3/12 2xl:w-3/12 ">
                <div className="lg:w-full xl:w-full 2xl:w-full relative md:w-4/12 sm:w-4/12 ">
                  <h1
                    className="2xl:text-[18px] 2xl:mb-8 xl:text-[16px] xl:mb-2  lg:text-[14px] lg:mb-2 md:text-[12px] md:mb-2 sm:text-[12px] sm:mb-2 text-[12px] my-1"
                    id="nav-head"
                  >
                    Subscribe to our emails
                  </h1>
                  <Image
                    src={arrow}
                    className="absolute  z-20 ml-56 mt-2 2xl:w-5  2xl:ml-72  2xl:mt-4 xl:w-4  xl:ml-48  xl:mt-2 lg:ml-48  lg:mt-3 md:mt-2 md:ml-56 sm:mt-2 sm:ml-56 "
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className=" cursor-pointer border border-[#315031] bg-[#E9F5DE] relative rounded  2xl:w-8/12 2xl:p-2 xl:w-8/12 xl:p-0.5  lg:w-10/12 lg:p-0.5  p-0 "
                  />
                  <div className="flex justify-center md:justify-center lg:justify-start sm:justify-center 2xl:gap-7  2xl:my-4 xl:gap-5  xl:my-3 lg:my-2 lg:gap-4 md:my-5 sm:my-5   md:gap-4 sm:gap-4 my-2 gap-2 ">
                    <Link href="https://twitter.com/" target="_blank">
                      <Image
                        src={twitter}
                        className=" 2xl:w-8 xl:w-6 lg:w-6 w-5"
                      />
                    </Link>
                    <Link
                      href="https://www.facebook.com/login/"
                      target="_blank"
                    >
                      <Image src={fbb} className=" 2xl:w-7 xl:w-5 lg:w-5 w-4" />
                    </Link>
                    <Link
                      href="https://www.instagram.com/accounts/login/"
                      target="_blank"
                    >
                      <Image
                        src={insta}
                        className=" 2xl:w-7 xl:w-5 lg:w-5 w-4"
                      />
                    </Link>
                    <Link
                      href="https://accounts.spotify.com/en/login"
                      target="_blank"
                    >
                      <Image
                        src={music}
                        className=" 2xl:w-6 xl:w-4 lg:w-4 w-3"
                      />
                    </Link>
                    <Link href="https://www.youtube.com/" target="_blank">
                      <Image src={YTt} className=" 2xl:w-8 xl:w-6 lg:w-6 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mx-auto 2xl:w-[80%] xl:w-[90%] lg:w-[90%]  md:w-[70%] border  sm:w-[70%]   border-[#315031]" />
            <h1 className=" 2xl:text-[16px]  2xl:leading-[24px] xl:text-[12px]  xl:leading-[20px] xl:pb-4 lg:text-[12px]  lg:leading-[20px] lg:pb-4 text-[#666666] text-center  2xl:pb-5 md:text-[12px]  md:leading-[20px] md:pb-4  sm:text-[12px]  sm:leading-[20px] sm:pb-4 text-[10px] my-1 ">
              © 2023 Teas. All Rights Reserved.
            </h1>
          </footer>
        </div>
      </section>
    </>
  );
};

export default page;
