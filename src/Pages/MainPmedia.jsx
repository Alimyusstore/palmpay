import banner11 from "../assets/images/Banner11.jpg";
import banner12 from "../assets/images/Banner12.png";
import banner13 from "../assets/images/Banner13.png";
import banner14 from "../assets/images/Banner14.png";
import banner15 from "../assets/images/Banner15.png";
import banner16 from "../assets/images/Banner16.png";
import { BsArrowRight } from "react-icons/bs";
function MainPmedia(){

    let cards = [
      {
        image: banner11,
        parag:
          "PalmPay Users to Pay Zero Bank Fees on All Transaction on the Fintech App",
        date: "March 01, 2024",
      },
      {
        image: banner12,
        parag:
          "Lucky Winners Emerge in PalmPay and StarTimes AFCON Football Fiesta",
        date: "January 30, 2024",
      },
      {
        image: banner13,
        parag:
          "PalmPay Rewards Agents with N200 Million Cash Winnings in End-of-Year Promo",
        date: "March 21, 2024",
      },]

      let cards2 = [{
        image: banner14,
        parag:
          "Nigeria: PalmPay Champions Responsible Gaming to Curb Fraud Among Sports Pundits",
        date: "June 19, 2023",
      },
      {
        image: banner15,
        parag: "UPDATE: Transfers Are Now Free on PalmPay App To All Banks",
        date: "March 1, 2024",
      },
      {
        image: banner16,
        parag: "AI, Contactless technologies will affect banking – PalmPay CEO",
        date: "January 21, 2024",
      },
    ];
  return (
    <div className="pt-10 sm:m-10 sm:mb-32 m-3">
      <div className="flex flex-col gap-y-9 items-center m-10 sm:mb-40">
        <h1 className="font-bold text-3xl sm:text-[4.9rem]">Press and Media</h1>
        <div className=" flex gap-x-6 text-[1.25rem] mt-10 items-center">
          <button className="bg-black rounded-2xl text-white px-8 py-2 text-2xl">
            Contact PR
          </button>
          <p className="flex text-[#6a35ff] ">
            Media Kit <BsArrowRight className="m-2" />
          </p>
        </div>
      </div>
      <div className="flex justify-between my-12">
        <p className="font-semibold text-[1.75rem]">Press Release</p>
        <p className="flex text-[#b8b8b9] text-[14px]">
          See all <BsArrowRight className="m-2" />{" "}
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
            <p className="p-5 text-[14px] text-[rgba(30, 30, 30, 0.6)]">
              {card.date}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between my-12">
        <p className="font-semibold text-[1.75rem]">In the media</p>
        <p className="flex text-[#b8b8b9]   text-[14px]">
          See all <BsArrowRight className="m-2" />{" "}
        </p>
      </div>
      <div className="sm:grid sm:grid-cols-3 gap-10 space-y-7">
        {cards2.map((card, i) => (
          <div
            className="w-full rounded-2xl overflow-hidden bg-[#f7f7fb]"
            key={i}
          >
            <img src={card.image} alt={card.image} />
            <h2 className="font-bold text-[1.25rem] p-5">{card.parag}</h2>
            <p className="p-5 text-[14px] text-[rgba(30, 30, 30, 0.6)]">
              {card.date}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPmedia