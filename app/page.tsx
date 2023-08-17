import Blog from "./blog/page";
import Menu from "./components/Menu";
import ClientOnly from "./components/OnlyClient";
import Banner from "./components/banner";
import Header from "./components/header/Header";
import Slider from "./components/slider";

export default async function Home() {
  return (
    <>
      <ClientOnly>
        <Header home={true} />
      </ClientOnly>
      <Banner />
      <Menu />
      <Slider />
      <Blog />
    </>
  );
}
