import React from 'react'
import google from '../assets/images/googlePlay.png'
import apple from '../assets/images/appStore.png'
import logoLight from '../assets/images/logoLight.png'
import centralBank from '../assets/images/centralBank.png'
import PCI from "../assets/images/PCI.png"
import NDIC from "../assets/images/NDIC.png"
import NDPC from "../assets/images/NDPC.png"
import facebook from "../assets/images/Facebook.png"
import x from "../assets/images/X.png"
import linkedIn from "../assets/images/LinkedIn.png"
import instagram from "../assets/images/Instagram.png"

const Footer = () => {
  return (
    <footer>
      <div
        className=" flex justify-around items-center w-full h-[7.5rem] font-bold text-3xl text-white"
        style={{
          background: `linear-gradient(91deg, #341d77 -6.56%, #7f46db 106.09%)`,
        }}
      >
        <p>
          Join <span className="text-4xl font-extrabold">30+ million </span>
          users who love PalmPay{" "}
        </p>
        <div className="">
          <a href="https://play.google.com/store/apps/details?id=com.transsnet.palmpay&hl=en&gl=US&pli=1">
            <button className="rounded w-[10rem]">
              <img src={google} alt="google" />
            </button>
          </a>
          <a href="https://apps.apple.com/ng/app/palmpay-transfers-bills/id1479656820?mt=8">
            <button className="rounded w-[10rem] ms-2">
              <img src={apple} alt="apple" />
            </button>
          </a>
        </div>
      </div>
      <div className="bg-black sm:h-[90vh] text-white">
        <div className="sm:flex justify-evenly leading-7 text-[14px]	 p-5">
          <ul className="flex flex-col gap-4">
            <p className="w-[10rem] ">
              <img src={logoLight} alt="logo" />
            </p>
            <li className="w-[10rem]">
              <img src={centralBank} alt="centralBank" />
            </li>
            <li className="w-[10rem]">
              <img src={PCI} alt="PCI" />
            </li>
            <li className="w-[10rem]">
              <img src={NDIC} alt="NDIC" />
            </li>
            <li className="w-[10rem]">
              <img src={NDPC} alt="NDPC" />
            </li>
          </ul>
          <ul className="">
            <p className="font-bold text-2xl">Personal</p>
            <li className="">PalmPay App</li>
            <li className="">Send and Receive Money</li>
            <li className="">Bill Payment</li>
            <li className="">Buy and Shop</li>
          </ul>
          <ul className="">
            <p className="font-bold text-2xl">Business</p>
            <li className="">Payin</li>
            <li className="">Payout</li>
            <li className="">POS</li>
            <li className="">Pay with Transfer</li>
            <li className="">Business Account</li>
            <li className="">Management</li>
            <li className="">Agent Network</li>
          </ul>
          <ul className="">
            <p className="font-bold text-2xl">Company</p>
            <li className="">About</li>
            <li className="">Blog</li>
            <li className="">Press and Media</li>
            <li className="">Contact</li>
          </ul>
          <ul className="">
            <p className="font-bold text-2xl">Legal</p>
            <li className="">Privacy Policy</li>
            <li className="">Terms & Conditions</li>
            <li className="">Complaints</li>
          </ul>
        </div>
        <div className='flex w-full gap-3 px-5 sm:justify-end'>
          <img width={25} src={instagram} alt="instagram" />
          <img width={25} src={facebook} alt="facebook" />
          <img width={25} src={x} alt="x" />
          <img width={25} src={linkedIn} alt="linkedIn" />
        </div>
        <p className="text-white pb-10 m-5 text-[14px]  border-b-2 border-[#3e3d3d]">
          © 2023 PalmPay. All rights reserved.
        </p>
        <p className="text-gray-600  p-5 text-[13px]">
          PalmPay is a financial service provided by PalmPay Limited, licensed
          and regulated by the Central Bank of Nigeria (CBN). Deposits are
          insured by the Nigerian Deposit Insurance Corporation (NDIC). We
          empower individuals and businesses with payments solutions, high-yield
          investment opportunities, and easy-to-use tools for financial
          management. We are a global company with a presence in Nigeria, Ghana,
          Tanzania, and the United Kingdom.
        </p>
      </div>
    </footer>
  );
}

export default Footer