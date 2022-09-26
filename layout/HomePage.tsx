import Carousels from "../components/Carousel";
import Header from "../components/navbar/index";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <Header />

        <Carousels />
      </div>
    </>
  );
};

export default HomePage;
