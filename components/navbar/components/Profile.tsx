import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

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
  const { data: session } = useSession();
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  return (
    <>
      {session ? (
        <button
          onClick={() => setOpenProfileMenu(!openProfileMenu)}
          className="flex flex-col items-center"
        >
          <Image
            className="h-7 w-7 rounded-full"
            src={session.user?.image!}
            alt=""
            width={30}
            height={30}
          />
          <div className="font-inter text-xs font-medium text-gray-400">
            {session.user?.name}
          </div>
        </button>
      ) : (
        <div className="">
          <button
            onClick={() => {
              signIn();
            }}
            className="rounded-md border border-gray-500 px-4 py-1 font-inter font-normal text-white hover:bg-neutral-900 focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            SignIn
          </button>
        </div>
      )}
      {openProfileMenu ? (
        <div className="absolute right-1 top-14 z-20 flex w-36 flex-col rounded-b-md border-t border-gray-500 bg-neutral-800 py-2">
          <button className="w-full py-1 font-inter text-white hover:bg-neutral-700">
            Profile
          </button>
          <button className="w-full py-1 font-inter text-white hover:bg-neutral-700">
            Settings
          </button>
          <button
            onClick={() => signOut()}
            className="w-full py-1 font-inter text-white hover:bg-neutral-700"
          >
            SignOut
          </button>
        </div>
      ) : null}
    </>
  );
};
