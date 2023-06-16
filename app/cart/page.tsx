import React from "react";
import Header from "../components/header/Header";
import ClientOnly from "../components/OnlyClient";

const Cart = () => {
  return (
    <ClientOnly>
      <Header heading="Cart Page"></Header>
    </ClientOnly>
  );
};

export default Cart;
