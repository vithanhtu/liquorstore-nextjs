"use client";

import React, { useEffect, useState } from "react";
import Header from "@/app/components/header/Header";
import ClientOnly from "@/app/components/OnlyClient";
import Container from "@/app/components/Container";
import Image from "next/image";
import ReviewForm from "@/app/components/review/ReviewForm";
import { GrFormAdd } from "react-icons/gr";
import { MdRemove } from "react-icons/md";
import TabProduct from "@/app/components/tabs/TabProduct";
import useCartModal from "@/app/hooks/useCartModal";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/features/cart-slice";
import axios from "axios";

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
  const dispatch = useDispatch();

  const cartModal = useCartModal();
  const [quantity, setQuantity] = useState(1);
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
    axios
      .get(`/api/products/${id}`)
      .then((response: any) => {
        const data = response.data;
        if (data.product) {
          setProduct(data.product);
        }
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, []);

  // console.log(product);

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
                <span>{product?.sold?.toFixed()}</span>
                <span className="ml-1 text-[#bbb]">Sold</span>
              </div>
            </div>

            <h2 className="text-3xl mt-8">${product?.price.toFixed(2)}</h2>
            <p className="leading-7 mt-2 text-[17px] text-light-text">
              {product?.description}
            </p>

            <div className="flex gap-2 mt-8 mb-4">
              <button
                className="w-10 h-10 border border-solid boder-[#fefefe] text-xl flex justify-center items-center"
                onClick={() => setQuantity(quantity - 1)}
              >
                <MdRemove />
              </button>
              <input
                type="text"
                value={quantity < 1 ? 1 : quantity}
                min={1}
                max={100}
                className="border border-solid boder-[#fefefe] w-32 h-10 outline-none text-center"
              />
              <button
                className="w-10 h-10 border border-solid boder-[#fefefe] text-xl flex justify-center items-center"
                onClick={() => setQuantity(quantity + 1)}
              >
                <GrFormAdd />
              </button>
            </div>

            <p className="font-light text-[#444]">
              {product?.stock?.toFixed()} piece available
            </p>

            <div className="flex gap-2 text-white mt-6">
              <div
                className="px-10 py-4 bg-brown-color rounded cursor-pointer"
                onClick={() =>
                  dispatch(addToCart({ ...product, qty: quantity }))
                }
              >
                <span>Add to Cart</span>
              </div>
              <div
                onClick={cartModal.onOpen}
                className="px-10 py-4 bg-brown-color rounded cursor-pointer"
              >
                <span>Buy now</span>
              </div>
            </div>
          </div>
        </div>

        <TabProduct
          description={product?.description?.toString()}
          name={product?.name?.toString()}
          manufactured={product?.manufactured?.toString()}
          reviews={product?.description?.toString()}
        />
      </Container>
    </div>
  );
};

export default DetailPage;
