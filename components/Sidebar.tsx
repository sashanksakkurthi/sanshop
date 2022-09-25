import React, { useContext } from "react";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { RiFridgeFill } from "react-icons/ri";
import {
  GiBookshelf,
  GiRunningShoe,
  GiClothes,
  GiSquareBottle,
} from "react-icons/gi";
import { MdSportsBasketball, MdOutlineLuggage } from "react-icons/md";
import { BsMusicPlayer } from "react-icons/bs";
import { MenuContext } from "../context/MenuContext";
import { FiLogOut } from "react-icons/fi";

const SidebarMenu = () => {
  const { openMenu }: any = useContext(MenuContext);
  return (
    <>
      {openMenu ? (
        <div className="absolute block h-full md:hidden">
          <SidebarItems />
        </div>
      ) : null}
      <div className="hidden h-full md:block">
        <SidebarItems />
      </div>
    </>
  );
};

const SidebarItems = () => {
  const SidebarItems = [
    { icon: <HiOutlineDeviceMobile size={23} />, name: "Electronics" },
    { icon: <RiFridgeFill size={22} />, name: "Appliances" },
    { icon: <GiBookshelf size={23} />, name: "Books" },
    { icon: <MdSportsBasketball size={23} />, name: "Sports & Outdoors" },
    { icon: <GiClothes size={23} />, name: "Clothing" },
    { icon: <GiSquareBottle size={23} />, name: "Beauty & Personal Care" },
    { icon: <MdOutlineLuggage size={23} />, name: "Luggage & Travel Gear" },
    { icon: <BsMusicPlayer size={23} />, name: "Musical Instruments" },
    { icon: <GiRunningShoe size={23} />, name: "Shoes" },
  ];
  return (
    <>
      <div className="relative h-full w-64 border-t border-neutral-600 bg-neutral-800 md:block">
        {SidebarItems.map((value) => (
          <button
            key={value.name}
            className="text-md flex h-14 w-full items-center space-x-2 pl-3 text-gray-300 hover:bg-neutral-700"
          >
            {value.icon}
            <div className="font-inter font-medium ">{value.name}</div>
          </button>
        ))}
        <button className="m-2 absolute bottom-3 flex w-28 items-center space-x-2 rounded-md bg-red-500 py-2 pl-3 font-inter text-sm font-medium text-white hover:bg-red-600">
          <FiLogOut size={18} />
          <div>LogoOut</div>
        </button>
      </div>
    </>
  );
};

export default SidebarMenu;
