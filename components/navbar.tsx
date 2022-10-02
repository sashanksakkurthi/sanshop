import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { Sidebar } from "./sidebar";
import { signIn, useSession } from "next-auth/react";

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
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const { data: sessions } = useSession();
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
      {sessions ? (
        <button onClick={() => setIsProfileOpen(!isProfileOpen)}>
          <picture>
            <img
              className="h-8 w-8 rounded-full"
              src="https://bit.ly/dan-abramov"
              alt=""
            />
          </picture>
        </button>
      ) : (
        <button
          onClick={() => signIn()}
          className="rounded-md bg-sky-400 px-2 py-1 font-inter text-white hover:bg-sky-500"
        >
          Sign In
        </button>
      )}

      {isProfileOpen ? (
        <div className="absolute top-[58px] right-1 z-10 flex h-48 w-40 flex-col space-y-1 rounded-md border border-gray-300 bg-white p-2">
          <button className="rounded-md py-1 font-inter text-gray-800 hover:bg-pink-500 hover:text-white">
            Profile
          </button>
          <button className="rounded-md py-1 font-inter text-gray-800 hover:bg-pink-500 hover:text-white">
            Orders
          </button>
          <button className="rounded-md py-1 font-inter text-gray-800 hover:bg-pink-500 hover:text-white">
            Settings
          </button>
          <button className="rounded-md py-1 font-inter text-gray-800 hover:bg-pink-500 hover:text-white">
            Contact Us
          </button>
          <button className="rounded-md py-1 font-inter text-gray-800 hover:bg-pink-500 hover:text-white">
            Help
          </button>
        </div>
      ) : null}
    </div>
  );
};
