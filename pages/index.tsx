import type { NextPage } from "next";
import Carousels from "../components/carousel";
import DealsOfDay from "../components/dealsofday";
import { Navbar } from "../components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="px-2">
        <Carousels />
      </div>
      <DealsOfDay />
    </>
  );
};

export default Home;
