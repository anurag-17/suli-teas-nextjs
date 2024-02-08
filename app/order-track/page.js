import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

const page = () => {
  return (
    <>
    <Navbar/>
    <div className="2xl:w-[1050px] xl:w-[700px]  lg:w-[750px]  md:w-[620px] sm:w-[600px] w-[420px] flex justify-between m-auto nav">
        <div>
          <h1 className="font-semibold  text-[45px] my-10">Order Tracking Form</h1>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default page
