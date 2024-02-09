"use client";
import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const ContactUs = () => {
  return (
    <>
      <section className="bg-[#F1F3F6] h-screen ">
        <Navbar />
        <div className="2xl:mt-[135px] xl:mt-32 lg:mt-28 2xl:w-[1500px] xl:w-[1000px]  lg:w-[800px] md:w-[620px] sm:w-[600px] w-[420px] flex justify-between m-auto nav">
          <div className="w-full">
            <h1 className="font-semibold xl:text-xl my-4 lg:text-[16px] text-[10px] sm:text-[12px] md:text-[14px]">
              Help Center | 24x7 Customer Care Support
            </h1>

            <div className="flex gap-5 w-full">
              <div className="bg-white w-1/3">
                <h2 className="text-[8px] sm:text-[10px] xl:text-[14px] md:text-[10px] lg:text-[12px] 2xl:text-[16px] p-3">
                  TYPE OF ISSUE
                </h2>
                <p className="contect-us-text">Help with your issues</p>
                <p className="contect-us-text">Help with your order</p>
                <p className="contect-us-text">Help with other issues</p>
                <h2 className="text-[8px] sm:text-[10px] xl:text-[14px] md:text-[10px] lg:text-[12px] 2xl:text-[16px] p-3">
                  HELP TOPICS
                </h2>
                <p className="contect-us-text">Delivery related</p>
                <p className="contect-us-text">Login and my account</p>
                <p className="contect-us-text">Payment</p>
                <p className="contect-us-text">Cancellation related</p>
                <p className="contect-us-text">Others</p>
              </div>
              <div className="bg-white w-2/3">
                <h2 className="text-gray-500 text-[8px] sm:text-[10px] md:text-[10px] xl:text-[14px] lg:text-[12px] 2xl:text-[16px] p-3">
                  Help Center
                </h2>

                <h2 className="text-center text-[8px] sm:text-[10px] lg:text-[12px] md:text-[10px] xl:text-[14px] mt-20">
                  Login to get help with your recent issues
                </h2>
                <div className="flex justify-center">
                  <button className="border py-1 px-6 flex justify-center my-3 text-[8px] sm:text-[10px] md:text-[10px] lg:text-[12px] xl:text-[14px]">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </section>
    </>
  );
};

export default ContactUs;
