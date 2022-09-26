import { useState } from "react";
import { Logo, MenuButton } from "./components/Logo";
import { Notifications, Cart, UserDetails } from "./components/Profile";
import { SearchBar } from "./components/SearchBar";
import Sidebar from "./components/Sidebar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="flex h-14 w-full items-center justify-between bg-neutral-800 px-4">
        <div className="flex items-center space-x-2">
          <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Logo />
        </div>
        {/* Large Screen Search Bar */}
        <div className="relative z-10 hidden md:block md:w-1/3">
          <SearchBar />
        </div>
        {/* User Profile */}
        <div className="flex items-center space-x-4">
          <Notifications />
          <Cart />
          <UserDetails />
          {/* <Authentication /> */}
        </div>
      </div>
      {/* Small Screen Search Bar  */}
      <div className="block border-t border-neutral-700 bg-neutral-800 px-4 py-2 md:hidden">
        <div className="relative z-10">
          <SearchBar />
        </div>
      </div>
      {/* Side Bar Component */}
      {isMenuOpen ? (
        <div className="absolute top-14 z-20">
          <Sidebar />
        </div>
      ) : null}
    </>
  );
};

export default Header;
