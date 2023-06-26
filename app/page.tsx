import Banner from "./components/banner";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <>
      <Header home={true} />
      <Banner />
    </>
  );
}
