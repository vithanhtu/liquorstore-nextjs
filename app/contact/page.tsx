import React from "react";
import Header from "../components/header/Header";
import ClientOnly from "../components/OnlyClient";

const Contact = () => {
  return (
    <ClientOnly>
      <Header heading="Contact Page"></Header>
    </ClientOnly>
  );
};

export default Contact;
