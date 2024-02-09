import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const page = () => {
  return (
    <>
      <Navbar />
      <div className=" 2xl:mt-[180px] xl:mt-32 lg:mt-28 2xl:w-[1300px] xl:w-[1000px]  lg:w-[750px]  md:w-[620px] sm:w-[600px] w-[420px] m-auto flex justify-around">
        <div className="">
          <h1 className="font-semibold  text-[40px] text-center">
            Order Tracking Form
          </h1>
          <div className="mx-auto bg-white ">
            <h1 className="text-center text-[25px] 2xl:text-[30px] my-14 font-bold">Order Tracker</h1>
            <input
              type="text"
              className="p-3  2xl:p-4 border-[1px] border-black outline-none w-full"
              placeholder="Email"
              Required
            />

            <button className="my-10 p-3 2xl:p-4 bg-[#007ACE] w-full text-white">
              Find Order
            </button>
          </div>

          <div className="flex">
            <div className="mx-auto my-20 text-center">
              <h1 className="font-semibold my-4 text-[20px]">
                {" "}
                Subscribe to our emails & save 15%
              </h1>
             <div className="flex gap-5">
             <input type="email" placeholder="Email" className=" border-black border rounded-[5px] p-[15px]" />
              <button className="p-2 bg-[#315031] text-white text-[17px] rounded-[5px]">Subscribe</button>
             </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
