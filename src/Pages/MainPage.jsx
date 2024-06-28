import React from 'react'
import google from "../assets/images/google1.png";
import apple from "../assets/images/apple2.png";
import centralBank from "../assets/images/centralBank2.png"
import NDIC from "../assets/images/NDIC2.png"
import financial from "../assets/images/makeFinancial.png"
import bills from "../assets/images/payBills.png"
import coupons from "../assets/images/coupons.png"
import NDIC3 from "../assets/images/NDIC3.png"
import helpcenter from "../assets/images/HelpCenter.png"

const MainPage = () => {
  return (
    <div className="pt-10">
      <div className="flex flex-col gap-y-9 items-center m-10">
        <h1 className="font-bold text-3xl sm:text-7xl">
          Finance That Fits Your Life
        </h1>
        <p className="sm:text-2xl text-center px-4">
          Seamlessly send and receive money, effortlessly pay your bills, shop
          anywhere with ease, and take full control of your finances - all in
          PalmPay
        </p>
        <div className="flex w-[20rem] gap-4">
          <button className="rounded ">
            <img src={google} alt="google" />
          </button>
          <button className="">
            <img src={apple} alt="apple" />
          </button>
        </div>
        <div className="flex justify-center mb-5 gap-2 text-[14px] text-gray-400">
          <p>Licenced by CBN as a MMO</p>
          <img width={20} src={centralBank} alt="centralBank" />
          <p>Deposits Insured by</p>
          <img width={60} src={NDIC} alt="NDIC" />
        </div>
        <div className="absolute top-[83%] sm:m-12">
          <img src={financial} alt="make financial" />
        </div>
        <div className="h-[48vh]"></div>
      </div>
      <div className="h-[365vh] w-full bg-[#191919] text-center">
        <div className="h-[80vh]"></div>
        <h2
          className="font-bold mt-7 text-6xl"
          style={{
            background: `linear-gradient(90deg,#7f7bf7 -2.5%,#d8c1fb 54.57%,#bb7ef8 99.91%)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            webkitTextFillColor: "transparent",
          }}
        >
          Do more with your money
        </h2>
        <p className="text-white sm:m-10 text-[1.3rem]">
          More than just transferring money. You can do all kinds of cool stuff
          - pay you bills, make purchase, save and earn, all financial needs in
          one PalmPay app.
        </p>
        <div className="sm:m-10 ">
          <img src={bills} alt="pay bills" />
        </div>
        <h2
          className="font-bold mt-40 text-6xl"
          style={{
            background: `linear-gradient(90deg, #ffe587, #fffad1 48.28%, #ffa57e 88.67%)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            webkitTextFillColor: "transparent",
          }}
        >
          Earn as you spend with rewards
        </h2>
        <p className="text-white sm:m-[2.7rem] text-[1.3rem]">
          With PalmPay, every expense becomes an opportunity to save. Unlock
          exclusive discounts and cashback rewards with transaction you make.
          Embrace cashless payment and make every payment count with PalmPay.
        </p>
        <div className="sm:m-10">
          <img src={coupons} alt="pay bills" />
        </div>
      </div>
      <div className="flex gap-16 p-0   sm:mx-20 sm:my-36 rounded-xl bg-[#f7f7fb]  overflow-hidden justify-center">
        <img width={500} src={NDIC3} alt="NDIC3" />
        <div className="w-[50%] flex flex-col gap-10 justify-center items-center pe-16">
          <h2 className="font-bold sm:text-[2.5rem]">
            Your privacy and security is our top priority
          </h2>
          <p className="sm:text-[1.15rem]">
            PalmPay is fully licensed as a Mobile Money Operator by CBN, and
            insured by NDIC. We manage customers' funds in compliance with all
            application regulations. This means that our more than 30 million
            users and millions of businesses are protected.
          </p>
        </div>
      </div>
      <div className=" flex p-0 gap-16 sm:m-20 mb-10 rounded-xl bg-[#f7f7fb] sm-m-10 overflow-hidden justify-center">
        <div className="w-[50%] flex flex-col gap-10 justify-center  ps-16">
          <h2 className="font-bold  sm:text-[2.5rem]">We are happy to help</h2>
          <p className="sm:text-[1.15rem]">
            Browse topics, find resources, or chat with customer service.
            PalmPay support has answers to all your questions. Have an inquiry,
            or need Customer Service assistance?
          </p>
          <p className="">
            Call us: +234 2018886888 <br /> Email: support@palmpay.com
          </p>
          <div>
            <button className="rounded-2xl flex bg-[#6d46db] text-white py-3 px-8">
              Contact
            </button>
          </div>
        </div>
        <img width={500} src={helpcenter} alt="helpenter" />
      </div>
    </div>
  );
}

export default MainPage