import React from "react";
import Header from "../components/header/Header";
import ClientOnly from "../components/OnlyClient";

const About = () => {
  return (
    <ClientOnly>
      <Header heading="About Us"></Header>
    </ClientOnly>
  );
};

export default About;
