"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const DetailPage = ({ params }: any) => {
  const id = params.id;

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.product) {
          setProduct(data.product);
        }
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, []);

  console.log(product);

  return (
    <div>
      <h1>Detail Page for ID: {id}</h1>
      {/* Hiển thị thông tin chi tiết */}
    </div>
  );
};

export default DetailPage;
