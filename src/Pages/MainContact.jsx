import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaCirclePlus } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

function MainContact(){
    let locations = [
      { id: 1, toggled:false, name: "Abia", place: "No 46 Hospital Road, Aba" },
      {
        id: 2, toggled:false,
        name: "Abuja",
        place:
          "Suite A, Forth Floor, Plot 1019, Gimbiya Street, Garki Area 11, Fct",
      },
      { id: 3, toggled:false, name: "Akwa", place: "No 68, Atiku Abubakary Way, Uyo" },
      { id: 4, toggled:false, name: "Anambra", place: "No 20 Enugu Road, Onitsha" },
      {
        id: 5, toggled:false,
        name: "Bayelsa",
        place:
          "Shop 10, Dekebi Lott Street, Opp. Nuj Secretariat, Ekeki, Yenagoa",
      },
      {
        id: 6, toggled:false,
        name: "Benue",
        place:
          "No. 113, Old Otukpo Road, Opposite Commissioners'Quarters Beside Bipc Head Office,Makurdi",
      },
      {
        id: 7, toggled:false,
        name: "Cross River",
        place: "No. 111, Ndidem Usang Iso Road, Calabar",
      },
      {
        id: 8, toggled:false,
        name: "Delta",
        place:
          "No. 130, Dec Express Way, Opposite Germstone Ultra Mart, Udu-Warri No 9 Ogelue Chukwurah Street, Okpanam, Asaba",
      },
      {
        id: 9, toggled:false,
        name: "Edo",
        place: "No 6, Iyahmo Street, Off Akara Junction, Benin City",
      },
      {
        id: 10, toggled:false,
        name: "Ekiti",
        place:
          "Suite B03, Phenrose Filling Station Shopping Mall, Ajilosun, Ado Ekiti",
      },
      { id: 11, toggled:false, name: "Enugu", place: "No 162, Ogui Road, Enugu" },
      {
        id: 12, toggled:false,
        name: "Imo",
        place:
          "1 Naze Industrial Cluster, Poly Road, Owerri North (Paragon Plaza)",
      },
      {
        id: 13, toggled:false,
        name: "Kaduna",
        place: "No 24, Constitution Road, Kc Holding Ltd Building",
      },
      {
        id: 14, toggled:false,
        name: "Kano",
        place: "14C Murtala Muhammad Way, Beside Vava Furniture",
      },
      {
        id: 15, toggled:false,
        name: "Kogi",
        place: "First 200 Unit Road 4, Behind Old Poly Quarter'S, Lokoja",
      },
      {
        id: 16, toggled:false,
        name: "Kwara",
        place:
          "No 4, Pipeline Junction Area, Behind Bob Shege, Offa Garage Rd, Ilorin",
      },
      { id: 17, toggled:false, name: "Lagos", place: "20 Opebi Road, Ikeja, Lagos" },
      {
        id: 18, toggled:false,
        name: "Ogun",
        place:
          "No 1, Olusegun Oshoba Way Oke-Ilewo Besides Ace Supermarket Abeokuta",
      },
      {
        id: 19, toggled:false,
        name: "Ondo",
        place: "Oluwakemi Shopping Complex, Oke Aro, Akure",
      },
      {
        id: 20, toggled:false,
        name: "Osun",
        place: "52, Ayedun Layout, Opposite Slot, Ogo-Oluwa Bustop, Osogbo",
      },
      {
        id: 21, toggled:false,
        name: "Oyo",
        place: "No 39 Temitope Building Oyo Road Mokola, Ibadan",
      },
      {
        id: 22, toggled:false,
        name: "Plateau",
        place:
          "Second Floor, Suite C4, Ladies Gold Complex (Former Magnum), Angwan Gada, Tudun Wada, Jos",
      },
      {
        id: 23, toggled:false,
        name: "Rivers",
        place:
          "20 Okuru Road, Glory House, Besides Ebz Filling Station, Off Peter Odili Road, Port Harcourt ",
      },
      { id: 24, toggled:false, name: "Sokoto", place: "No 6, Emirate Mall, Emir Yahaya Road" },
      {
        id: 25, toggled:false,
        name: "Yobe",
        place: "No 2, Gujba Road, Adjacent New Cbn Office, Damaturu",
      },
    ];
    let contacts = [
      {
        id: 1,
        title: "Contact Sales",
        parag:
          "We're here to answer your technical questions whenever you need.",
        detail: "Get Started",
      },
      {
        id: 2,
        title: "Business Inquiry",
        parag:
          "For general business queries, including partnership opportunities, please email",
        detail: "palmpay-business@palmpay-inc.com",
      },
      {
        id: 3,
        title: "Talk to us",
        parag: "Have an inquiry, or need Customer Service assistance? Call us",
        detail: "+2342018886888",
      },
    ];
     let [hoverBtn, setHoverBtn] = useState(0);
     function handleHoverBtn(id) {
       setHoverBtn((id));
     }
    
     function stopHoverBtn() {
       setHoverBtn(!hoverBtn);
     }
     let [toggle, setToggle] = useState(0)
     let [show, setShow] = useState(false)
     function handleToggle(id){ 
        let handler = locations.filter(location => location.id === id).map(location => location.toggled === show ? true : false)
        setShow(handler[0])
        setToggle(id)
     }

    return (
      <>
        <div className="pt-10 sm:m-20 sm:mb-32 m-3">
          <div className="flex flex-col gap-y-9 items-center m-5 my-10 sm:mb-20">
            <h1 className="font-bold text-3xl sm:text-[4.9rem]">
              We are here to help
            </h1>
            <p className="sm:text-2xl text-[14px] text-center p-4 sm:px-32">
              Get the answers you need for any issues or questions you may have.
              Our Help center is here to provide support and solutions for you.
            </p>
          </div>

          <div className="grid sm:flex sm:justify-center gap-8">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="rounded-2xl px-10 py-8 bg-[#f7f7fb]"
              >
                <h2 className="font-semibold text-[1.5rem] mb-5">
                  {contact.title}
                </h2>
                <p className="">{contact.parag}</p>
                <button
                  onMouseOver={() => handleHoverBtn(contact.id)}
                  onMouseLeave={() => stopHoverBtn()}
                  className={
                    hoverBtn == contact.id
                      ? "mt-16 text-white bg-[#aa9cb2] text-[14px] rounded-2xl px-3 py-1 flex gap-3"
                      : "mt-16 text-[#848485] flex gap-3"
                  }
                >
                  {contact.detail} <BsArrowRight className="mt-[0.4rem]" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-y-6 items-center m-5 mt-32 sm:mb-20">
            <h1 className="font-semibold text-3xl text-center sm:text-5xl">
              Want to meet with one of our business relationship managers in
              person?
            </h1>
            <p className="sm:text-2xl text-[14px] text-center sm:px-32">
              Find an office near you.{" "}
            </p>
          </div>
        </div>
        <div className="bg-[#f7f7fb] p-14">
          {locations.map((location) => (
            <div
              onDoubleClick={() => handleToggle(location.id)}
              className="flex justify-between p-5 border-b-2"
              key={location.id}
            >
              <div>
                <h2 className="font-semibold text-2xl">{location.name}</h2>
                <p
                  className={
                    toggle == location.id
                      ? show
                        ? "block"
                        : "hidden"
                      : "hidden"
                  }
                >
                  {location.place}
                </p>
              </div>
              <div onClick={() => handleToggle(location.id)}>
                {toggle == location.id ? (
                  show ? (
                    <MdCancel className="text-[#6d46db] text-[1.3rem]" />
                  ) : (
                    <FaCirclePlus className="text-[#6d46db] text-[1.3rem]" />
                  )
                ) : (
                  <FaCirclePlus className="text-[#6d46db] text-[1.3rem]" />
                )}
              </div>
            </div>
          ))}
        </div>
      </>
    );
}

export default MainContact;