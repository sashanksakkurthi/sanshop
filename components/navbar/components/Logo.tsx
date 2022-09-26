import React, { Dispatch, SetStateAction } from "react";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

export const Logo = () => {
  return (
    <div className="font-bebasneue text-4xl font-normal text-pink-600">
      SANSHOP
    </div>
  );
};

export const MenuButton = (props: {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
}) => {
  return (
    <button
      className=""
      onClick={() => {
        props.setIsMenuOpen(!props.isMenuOpen);
      }}
    >
      {props.isMenuOpen ? (
        <MdOutlineClose className="text-gray-500" size={25} />
      ) : (
        <FiMenu className="text-gray-500" size={25} />
      )}
    </button>
  );
};
