import type { NextPage } from "next";
import { useState } from "react";
import Carousels from "../components/Carousel";
import Header from "../components/navbar/index";
import Sidebar from "../components/Sidebar";
import { MenuContext } from "../context/MenuContext";

const Home: NextPage = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="h-screen">
      <MenuContext.Provider value={{ openMenu, setOpenMenu }}>
        <Header />
        <div className="flex h-full flex-row">
          <div className="z-10">
            <Sidebar />
          </div>
          <div className="h-full w-full space-y-6 p-2">
            <div className="w-full">
              <Carousels />
            </div>
          </div>
        </div>
      </MenuContext.Provider>
    </div>
  );
};

export default Home;
