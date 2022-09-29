import type { NextPage } from "next";
import Carousels from "../components/carousel";
import { Navbar } from "../components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Carousels />
    </>
  );
};

export default Home;
