import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";

export const Notifications = () => {
  return (
    <button className="relative">
      <IoMdNotificationsOutline className="h-7 w-7 text-gray-400" />
      <div className="absolute top-0 right-0 rounded-full bg-blue-500 px-1 text-xs font-medium text-gray-300">
        0
      </div>
    </button>
  );
};

export const Cart = () => {
  return (
    <button className="relative">
      <AiOutlineShoppingCart className="h-7 w-7 text-gray-400" />
      <div className="absolute top-0 right-0 rounded-full bg-pink-500 px-1 text-xs font-medium text-gray-300">
        0
      </div>
    </button>
  );
};

export const UserDetails = () => {
  return (
    <button className="flex flex-col items-center">
      <Image
        className="h-7 w-7 rounded-full"
        src={"https://bit.ly/dan-abramov"}
        alt=""
        width={30}
        height={30}
      />
      <div className="font-inter text-xs font-medium text-gray-400">
        John Doe
      </div>
    </button>
  );
};
