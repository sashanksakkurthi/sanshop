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
import { MdOutlineClose } from "react-icons/md";

export const Sidebar: React.FC<{
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
          <div className="mt-14 p-2">
            {SidebarItems.map((value) => (
              <button
                key={value.name}
                className="text-md flex h-14 w-full items-center space-x-2 rounded-md pl-3 text-gray-700 hover:bg-sky-600 hover:text-white"
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
