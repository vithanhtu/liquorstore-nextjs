"use client";

import React, { useEffect, useState } from "react";
import Header from "@/app/components/header/Header";
import ClientOnly from "@/app/components/OnlyClient";
import Container from "@/app/components/Container";
import Image from "next/image";
import ReviewForm from "@/app/components/review/ReviewForm";

interface Product {
  name: String;
  imageUrl: string;
  description?: String;
  manufactured?: String;
  price: Number;
  sold?: Number;
  stock?: Number;
  // Other properties of your product
}

const DetailPage = ({ params }: any) => {
  const id = params.id;

  const [product, setProduct] = useState<Product>({
    name: "",
    imageUrl: "",
    description: "",
    manufactured: "",
    price: 0,
    sold: 0,
    stock: 0,
  });

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
      <ClientOnly>
        <Header heading="Products Single"></Header>
      </ClientOnly>
      {/* Hiển thị thông tin chi tiết */}

      <Container>
        <div className="flex justify-around gap-9 mt-20 bg-center">
          <div className="w-full h-auto">
            <Image
              className="w-full h-auto object-cover"
              layout="responsive"
              width={200}
              height={200}
              src={product?.imageUrl}
              alt="product-detail-img"
            />
          </div>

          <div className="w-full px-8 pt-2">
            <h3 className="text-3xl">Bacardi 151 Degree</h3>
            <div className="flex items-center mt-4 gap-6">
              <ReviewForm />
              <div>
                <span>100</span>
                <span className="ml-1 text-[#bbb]">Rating</span>
              </div>
              <div>
                <span>500</span>
                <span className="ml-1 text-[#bbb]">Sold</span>
              </div>
            </div>

            <h2 className="text-3xl mt-8">${product?.price.toFixed(2)}</h2>
            <p>{product?.description}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailPage;
