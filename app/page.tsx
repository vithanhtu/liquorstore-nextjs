import Menu from "./components/Menu";
import Banner from "./components/banner";
import Header from "./components/header/Header";
import Slider from "./components/slider";

export default function Home() {
  return (
    <>
      <Header home={true} />
      <Banner />
      <Menu />
      <Slider />
    </>
  );
}
