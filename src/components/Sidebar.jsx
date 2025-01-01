import React from "react";

import logo from "../assets/logo.png";
import { FaBookAtlas, FaH, FaHeart } from "react-icons/fa6";
import { FaHome, FaSearch } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-72 h-screen bg-white hidden lg:block">
      <div className="flex flex-col gap-40">
        <div>
          <div className="flex items-center justify-center mt-10">
            <img src={logo} alt="profile" className="w-28" />
          </div>
          <nav className="mt-10 flex flex-col gap-2">
            <Link
              to={"/"}
              className=" py-2.5 px-4 text-[#8A8A8A] hover:text-[#4D4D4D] pl-20 flex flex-row items-center"
            >
              <FaHome className="mr-2" />
              Home
            </Link>
            <Link
              to={"/Search"}
              className=" py-2.5 px-4 text-[#8A8A8A] hover:text-[#4D4D4D] pl-20 flex flex-row items-center"
            >
              <FaSearch className="mr-2" />
              Search
            </Link>
            <Link
              to={"/myshelf"}
              className=" py-2.5 px-4 text-[#8A8A8A] hover:text-[#4D4D4D] pl-20 flex flex-row items-center"
            >
              <GiBookshelf className="mr-2" />
              My Shelf
            </Link>
            <Link
              to={"/Favorites"}
              className=" py-2.5 px-4 text-[#8A8A8A] hover:text-[#4D4D4D] pl-20 flex flex-row items-center"
            >
              <FaHeart className="mr-2" />
              Favorites
            </Link>
          </nav>
        </div>

        <div className="flex flex-col pl-20 gap-2">
          <a
            href="/About"
            className="text-sm text-[#8A8A8A] hover:text-[#4D4D4D]"
          >
            About
          </a>
          <a
            href="/Support"
            className="text-sm text-[#8A8A8A] hover:text-[#4D4D4D]"
          >
            Support
          </a>
          <a href="/TC" className="text-sm text-[#8A8A8A] hover:text-[#4D4D4D]">
            Terms and Conditions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
