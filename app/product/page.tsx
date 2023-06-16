import React from "react";
import Header from "../components/header/Header";
import ClientOnly from "../components/OnlyClient";

const Product = () => {
  return (
    <ClientOnly>
      <Header heading="Product Page"></Header>
    </ClientOnly>
  );
};

export default Product;
