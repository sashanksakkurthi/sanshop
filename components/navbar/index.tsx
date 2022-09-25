import Authentication from "./components/AuthButton";
import Logo, { MenuButton } from "./components/Logo";
import { Notifications, Cart, UserDetails } from "./components/Profile";
import { SearchBar } from "./components/SearchBar";

const Header = () => {
  return (
    <>
      <div className="flex h-14 w-full items-center justify-between bg-neutral-800 px-4">
        <div className="flex items-center space-x-2">
          <MenuButton />
          <Logo />
        </div>
        <div className="relative z-10 hidden md:block md:w-1/3">
          <SearchBar />
        </div>
        <div className="flex items-center space-x-4">
          <Notifications />
          <Cart />
          <UserDetails />
          {/* <Authentication /> */}
        </div>
      </div>
      <div className="block border-t border-neutral-700 bg-neutral-800 px-4 py-2 md:hidden">
        <div className="relative z-20">
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default Header;
