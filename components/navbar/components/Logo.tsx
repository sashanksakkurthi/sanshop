import React, { useContext } from "react";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { MenuContext } from "../../../context/MenuContext";

export const Logo = () => {
  return (
    <div className="font-bebasneue text-4xl font-normal text-pink-600">
      SANSHOP
    </div>
  );
};

export default Logo;

export const MenuButton = () => {
  const { openMenu, setOpenMenu }: any = useContext(MenuContext);
  return (
    <button
      className="block md:hidden"
      onClick={() => {
        setOpenMenu(!openMenu);
      }}
    >
      {openMenu ? (
        <MdOutlineClose className="text-gray-500" size={25} />
      ) : (
        <FiMenu className="text-gray-500" size={25} />
      )}
    </button>
  );
};
