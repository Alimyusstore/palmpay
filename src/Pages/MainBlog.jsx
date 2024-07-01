import React from 'react'
import banner1 from "../assets/images/Banner1.png"
import banner2 from "../assets/images/Banner2.png"
import banner3 from "../assets/images/Banner3.jpg"
import banner4 from "../assets/images/Banner4.png"
import banner5 from "../assets/images/Banner5.png"
import banner6 from "../assets/images/Banner6.jpg"
import banner7 from "../assets/images/Banner7.png"
import banner8 from "../assets/images/Banner8.jpg"
import banner9 from "../assets/images/Banner9.png"
import banner10 from "../assets/images/Banner10.png"

const MainBlog = () => {
    let cards = [
      {
        image: banner1,
        parag:
          "Final Week to Win a New iPhone 14 Pro Max or TECNO V Fold with ₦300 Glo Recharge on PalmPay",
        date: "September 26, 2023",
      },
      {
        image: banner2,
        parag:
          "Your Guide to Winning a Share of 300 Million in the PalmPay Dance Fiesta!",
        date: "July 12, 2023",
      },
      {
        image: banner3,
        parag: "Win 30% Cashback at PalmPay POS Agent Super July Carnival!",
        date: "July 18, 2023",
      },
      {
        image: banner4,
        parag: "Payment Safety: How to Stay Safe with Payments!",
        date: "June 19, 2023",
      },
      {
        image: banner5,
        parag:
          "Tech Meets Beats: PalmPay and Poppin's 'Pop&Pay' Campus Tour Lights Up Nigerian Universities",
        date: "October 9, 2023",
      },
      {
        image: banner6,
        parag:
          "How Does PalmPay Help Keep Your Money Safe from Scams and Fraud?",
        date: "Sep 19, 2022",
      },
      {
        image: banner7,
        parag: "What Is PalmPay? Here's All You Need to Know about Us!",
        date: "Sep 14, 2022",
      },
      {
        image: banner8,
        parag:
          "Team Battle of PalmPay Anniversary Celebration: A Stepwise Guide",
        date: "Sep 5, 2022",
      },
      {
        image: banner9,
        parag:
          "PalmPay Anniversary ₦300 Million Giveaway: Get The Most of It Now!",
        date: "Sep 5, 2022",
      },
      { image: banner10, parag: "PalmPay Easter Promo", date: "Apr 8, 2022" },
    ];
  return (
    <div className="pt-10 sm:m-10 sm:mb-32 m-3">
      <div className="flex flex-col gap-y-9 items-center m-10 sm:mb-40">
        <h1 className="font-bold text-3xl sm:text-[4.9rem]">PalmPay Blog</h1>
        <p className="sm:text-2xl text-[14px] text-center p-4">
          Stories from the team that makes you accomplish more with your money.
        </p>
      </div>
      <div className="sm:grid sm:grid-cols-3 gap-10 space-y-7">
        {cards.map((card, i) => (
          <div
            className="w-full rounded-2xl overflow-hidden bg-[#f7f7fb]"
            key={i}
          >
            <img src={card.image} alt={card.image} />
            <h2 className="font-bold text-[1.25rem] p-5">{card.parag}</h2>
            <p className="p-5 text-[14px] text-[rgba(30, 30, 30, 0.6)]">{card.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainBlog
