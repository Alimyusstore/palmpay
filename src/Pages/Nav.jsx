import React, { useState } from 'react'
import logo from '../assets/images/logo.png';
import NG from '../assets/images/NG.png';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { pathAbout, pathBlog, pathContact, pathMedia } from './pathName';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
const Nav = () => {
  let [show, setShow] = useState(false)

  function handleShow(){

    setShow(show=true)
  }
  function handleHide(show){
    setShow(show= false)
  }

  const [toggle, setToggle] = useState(false)

  function handleToggle(){
    setToggle(!toggle)
  }
  return (
    <nav className=" z-40">
      <div className="z-40 sm:px-[4rem] bg-white w-full  flex justify-between p-5 fixed ">
        <Link to="/">
          <div className="sm:w-[8rem] w-[6rem]">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <div
          className={
            toggle
              ? "hidden sm:block"
              : "block absolute top-10 mt-10 sm:mt-0 sm:static"
          }
        >
          <ul className="sm:flex grid pt-1 gap-10 sm:gap-20">
            <li>Personal</li>
            <li>Business</li>
            <li
              className={
                show
                  ? "sm:border-b-4 sm:border-b-purple-500 "
                  : "sm:border-none"
              }
              onMouseOver={() => handleShow()}
            >
              Company{" "}
            </li>
            <li>Developers</li>
            <li>Pricing</li>
            <div
              className="absolute sm:right-[35rem] sm:top-[4rem]"
              onMouseOver={() => handleShow()}
              onMouseLeave={() => handleHide()}
            >
              <ul
                className={
                  show
                    ? "flex flex-col gap-4 bg-white rounded shadow-2xl p-5"
                    : "hidden"
                }
              >
                <Link to={pathBlog}>
                  <li>Blog</li>
                </Link>
                <Link to={pathAbout}>
                  <li>About</li>
                </Link>
                <Link to={pathMedia}>
                  <li>Press and Media</li>
                </Link>
                <Link to={pathContact}>
                  <li>Contact</li>
                </Link>
              </ul>
            </div>
          </ul>
        </div>
        <div className="flex">
          <div className="flex gap-3 sm:px-5 px-2 rounded-3xl bg-[#e1e1e147]">
            <img className="w-5 py-2 " src={NG} alt="NG" />{" "}
            <p className="hidden sm:block">Nigeria</p>{" "}
            <RiArrowDropDownLine className="mt-2" />
          </div>
          <div onClick={handleToggle} className="sm:hidden">
            {toggle ? (
              <RxHamburgerMenu className="text-3xl" />
            ) : (
              <IoCloseSharp className="text-3xl" />
            )}
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </nav>
  );
}

export default Nav