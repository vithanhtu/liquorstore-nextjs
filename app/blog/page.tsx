import React from "react";
import Header from "../components/header/Header";
import ClientOnly from "../components/OnlyClient";

const Blog = () => {
  return (
    <ClientOnly>
      <Header heading="Blog Page"></Header>
    </ClientOnly>
  );
};

export default Blog;
