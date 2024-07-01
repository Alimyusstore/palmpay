import React, { useState } from 'react'
import reportBg from "../assets/images/ReportBg.png"
import earth from "../assets/images/Earth.png"
import customer from "../assets/images/customer.png"
import excellence from "../assets/images/Excellence.png"
import team from "../assets/images/Team.png"
import chat from "../assets/images/chat.png"
import global from "../assets/images/Globally.png"
import ownership from "../assets/images/Ownership.png"
import CNBC from "../assets/images/CNBC.png";
import benzinga from "../assets/images/Benzinga.png";
import theGuardian from "../assets/images/TheGuardian.png";
import business from "../assets/images/BusinessDay.png";
import TC from "../assets/images/TC.png";
import financial from "../assets/images/FinancialTimes.png";
import vanguard from "../assets/images/Vanguard.png";
import marketInsider from "../assets/images/MarketsInsider.png";
import palmpay from "../assets/images/PalmPayWhite.png";
import palmpay2 from "../assets/images/BusinessBlack.png";
import { BsArrowRight } from 'react-icons/bs'

const MainAbout = () => {
    let reports = [
      { view: "2500+", title: "Global Employees" },
      { view: "30M+", title: "Active Users" },
      { view: "500k+", title: "Agents" },
      { view: "600k+", title: "Merchants" },
    ];
    let values = [
      { image: customer, title: "Customer First" },
      { image: excellence, title: "Striving for Excellence" },
      { image: team, title: "One Team, One Dream" },
      { image: chat, title: "Open Communication" },
      { image: global, title: "Think Globally, Act Locally" },
      { image: ownership, title: "Taking Ownership of the Result" },
    ];
    let palmPays = [
      {
        id: 1,
        image: palmpay,
        title: "For Customers",
        parag1:
          "We have been at the forefront of offering accessible and diversified financial services to individual users.",
        parag2:
          "Embrace a barrier-free payment experience and upgrade your lifestyle with high efficiency",
        btnText: "Learn more",
      },
      {
        id:2,
        image: palmpay2,
        title: "For Businesses",
        parag1:
          "We help your business expand with tech-powered solutions and smooth digital payment services.",
        parag2:
          "Our innovative services and data-driven insights enable your business to thrive like never before.",
        btnText: "Learn more",
      },
    ];

    let [hoverBtn, setHoverBtn] = useState(0);
    function handleHoverBtn(id){
        setHoverBtn((id));
      
    }
    function stopHoverBtn(){
         setHoverBtn((!hoverBtn ));
    }
  return (
    <div className="">
      <main className="sm:m-[4rem] m-5">
        <div className="my-10 flex flex-col sm:gap-10 gap-10 items-center">
          <div className="">
            <h1 className="font-bold text-center text-3xl sm:text-6xl">
              A fintech innovator that aims to make digital payment more
              accessible and flexible.
            </h1>
          </div>
          <div
            className="sm:py-20 px-10 py-5 flex w-full sm:m-10 text-white text-center justify-evenly items-center sm:bg-contain bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${reportBg})` }}
          >
            {reports.map((report, i) => (
              <div key={i} className=" space-y-5">
                {" "}
                <p className="font-extrabold sm:text-[3rem] text-2xl">
                  {report.view}
                </p>
                <p className="">{report.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 ">
          <h2 className="text-3xl font-bold sm:mb-20 sm:text-[2.7rem]">
            What we do
          </h2>
          <div
            className="overflow-x-hidden flex h-[90vh] rounded-2xl white bg-contain text-white sm:text-2xl text-center font-medium"
            style={{ backgroundImage: `url(${earth})` }}
          >
            <div className="bg-[linear-gradient(180deg,#6c3cc1,rgba(108,60,193,.44))] w-full flex justify-center  pt-28">
              <p className="sm:w-72 ">
                Since launched in 2018, PalmPay quickly emerged as Africa's
                leading Fintech, making a tangible impact on the continent's
                financial landscape.
              </p>
            </div>
            <div className="bg-[linear-gradient(180deg,#6c3cc1,rgba(108,60,193,.44))] w-full flex justify-center pe-20 pt-28">
              <p className="w-[29rem]">
                Our commitment to delivering secure, accessible, and innovative
                digital payment services has garnered the trust and support of
                millions of users and merchants, driving financial inclusion
                across the continent.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-[3rem] font-bold sm:mb-20 sm:text-[2.7rem]">
            Our Milestones
          </h2>
          <div className="w-full h-40"></div>
        </div>
        <div className="mt-20">
          <h2 className="text-[1.5rem] pb-5 sm:pb-0 font-bold sm:mb-20 sm:text-[2.7rem]">
            Our Values
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-10  gap-5">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-[#f7f7fb] rounded-2xl p-7 sm:p-10 flex flex-col justify-center items-center gap-5"
              >
                <img className="w-20" src={value.image} alt={value.image} />
                <p className="text-[13px] sm:text-2xl text-center">
                  {value.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-[1.7rem] sm:pb-0 pb-5 font-bold sm:mb-[4rem] sm:text-[2.7rem]">
            Featured In
          </h2>
          <p className="text-2xl sm:mb-10 mb-5">
            The latest product and company news.
          </p>
          <div className="flex flex-col sm-wrap">
            <div className="flex justify-between  items-center py-5 pe-[5rem] ps-0">
              <img src={CNBC} alt="CNBC" className="" width={200} />
              <img src={benzinga} alt="benzinga" className="" width={200} />
              <img
                src={theGuardian}
                alt="theGuardian"
                className=""
                width={200}
              />
              <img src={business} alt="business" className="" width={200} />
            </div>
            <div className="flex justify-between items-center py-5 pe-[5rem] ps-0">
              <img src={TC} alt="TC" className="" width={100} />
              <img
                src={financial}
                alt="financial"
                className="h-3 sm:h-8 sm:w-96"
                width={200}
              />
              <img src={vanguard} alt="vanguard" className="" width={200} />
              <img
                src={marketInsider}
                alt="marketInsider"
                className=""
                width={120}
              />
            </div>
          </div>
        </div>
      </main>
      <div className="mt-20 pb-20 bg-[#1e1e1e] min-h-[150vh]">
        <h2 className="text-[1.7rem] pt-40  font-bold sm:my-[3.2rem] sm:text-[3rem] text-white text-center">
          Accelerate financial inclusion in Africa with tech-powered solutions
        </h2>
        <div className="flex flex-col sm:flex-row p-8 gap-10 m-6">
          {palmPays.map((palmPay) => (
            <div
              className="w-full p-10 rounded-2xl bg-black text-white"
              key={palmPay.id}
            >
              <img width={155} src={palmPay.image} alt={palmPay.image} />
              <h2 className="text-[2.3rem] font-semibold my-4">
                {palmPay.title}
              </h2>
              <p className="text-[18px] mt-5">{palmPay.parag1}</p>
              <p className="text-[18px] mt-5">{palmPay.parag2}</p>
              <button
                onMouseOver={() => handleHoverBtn(palmPay.id)}
                onMouseLeave={() => stopHoverBtn()}
                className={
                  hoverBtn == palmPay.id
                    ?"mt-12 bg-[#5542e9] rounded-2xl px-3 py-1 flex gap-3":
                     "mt-12 text-[#7b4ff4] flex gap-3"
                    
                }
              >
                {palmPay.btnText} <BsArrowRight className="mt-[0.4rem]" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainAbout
