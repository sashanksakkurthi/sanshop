import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineNotifications, MdOutlineClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
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
import { BiSearch } from "react-icons/bi";

export const Navbar: React.FC<{}> = () => {
  const [openSideBar, setOpenSideBar] = React.useState(false);
  return (
    <div className="">
      <div className="flex h-14 w-full items-center justify-between px-4">
        <MenuAndLogo
          openSideBar={openSideBar}
          setOpenSideBar={setOpenSideBar}
        />
        <div className="hidden md:block md:w-1/3">
          <SearchBox />
        </div>
        <Profile />
      </div>
      <div className="block w-full px-4 py-2 md:hidden">
        <SearchBox />
      </div>
      <Sidebar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
    </div>
  );
};

const MenuAndLogo: React.FC<{
  openSideBar: boolean;
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  return (
    <div className="flex items-center space-x-3 md:w-1/3">
      <button
        className="rounded-md border border-gray-300 p-1"
        onClick={() => {
          props.setOpenSideBar(!props.openSideBar);
        }}
      >
        <FiMenu size={25} className="text-gray-700" />
      </button>
      <div className="font-BebasNeue text-4xl text-pink-500">SANSHOP</div>
    </div>
  );
};

const SearchBox: React.FC<{}> = () => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search"
        className="font-Inter w-full rounded-lg border border-gray-300 py-1 pl-2 pr-8 font-inter text-base font-medium text-gray-700 antialiased caret-gray-600 focus:outline-none"
      />
      <BiSearch
        className="absolute top-1.5 right-2 h-5 w-5 text-gray-600"
        size={25}
      />
    </div>
  );
};

const Profile: React.FC<{}> = () => {
  return (
    <div className="flex items-center justify-end space-x-4 md:w-1/3">
      <button className="relative">
        <AiOutlineShoppingCart className="h-7 w-7 text-gray-600" />
        <div className="absolute top-0 right-0 rounded-full bg-pink-500 px-1 text-xs font-medium text-white">
          0
        </div>
      </button>
      <button className="relative">
        <MdOutlineNotifications className="h-7 w-7 text-gray-600" />
        <div className="absolute top-0 right-0 rounded-full bg-blue-500 px-1 text-xs font-medium text-white">
          0
        </div>
      </button>

      <button>
        <picture>
          <img
            className="h-8 w-8 rounded-full"
            src="https://bit.ly/dan-abramov"
            alt=""
          />
        </picture>
      </button>
    </div>
  );
};

const Sidebar: React.FC<{
  openSideBar: boolean;
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
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
      {props.openSideBar ? (
        <div className="fixed top-0 bottom-0 left-0 z-10 h-full w-80 border border-gray-300 bg-white">
          <button
            className="absolute top-2 right-1 rounded-md border border-gray-300 p-1"
            onClick={() => props.setOpenSideBar(!props.openSideBar)}
          >
            <MdOutlineClose size={25} className="text-gray-700" />
          </button>
          <div className="mt-14">
            {SidebarItems.map((value) => (
              <button
                key={value.name}
                className="text-md flex h-14 w-full items-center space-x-2 pl-3 text-gray-700 hover:bg-sky-500 hover:text-white"
              >
                {value.icon}
                <div className="font-inter font-medium">{value.name}</div>
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};
