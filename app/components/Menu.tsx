"use client";

import React, { useEffect, useState } from "react";
import Container from "./Container";
import Image from "next/image";
import { GrFormNextLink } from "react-icons/gr";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart-slice";

const Menu = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        if (data.products) {
          setProducts(data.products);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // console.log(products);

  return (
    <Container>
      <div className="text-center">
        <span className="italic text-brown-primary text-xl">
          Our Delightful offerings
        </span>
        <h2 className="text-[40px] mt-1">Tastefully Yours</h2>
      </div>

      <div className="grid grid-cols-fluid gap-6">
        {Array.isArray(products) &&
          products.map((product: any, index: number) => {
            return (
              <div className="w-full h-auto mt-12" key={index}>
                <div className="relative product-image cursor-pointer">
                  <Image
                    className="w-full h-96 bg-center rounded-[4px]"
                    src={product.imageUrl}
                    width={250}
                    height={380}
                    alt="product-img"
                  />
                  <div className="product-overlay">
                    <div className="flex text-white h-full justify-center items-center">
                      <div
                        onClick={() => dispatch(addToCart({ ...product }))}
                        className="w-[60px] h-[60px] border border-solid border-white/75 mx-1 hover:bg-slate-600/50 mb-10 flex justify-center items-center text-xl"
                      >
                        <MdShoppingCartCheckout />
                      </div>
                      <Link
                        href={`/product/${product.id}`}
                        className="w-[60px] h-[60px] border border-solid border-white/75 mx-1 hover:bg-slate-600/50 mb-10 flex justify-center items-center text-xl"
                      >
                        <FaEyeSlash />
                      </Link>
                    </div>
                  </div>
                </div>
                {product.salePrice > 0 ? (
                  <span className="bg-brown-primary pt-[2px] px-2 ml-2 text-white font-light text-sm">
                    sale
                  </span>
                ) : (
                  <span className="pt-[2px] px-2 ml-2"></span>
                )}
                <div className="text-center">
                  <span className="text-brown-color">{product.category}</span>
                  <h5 className="text-[22px] font-light">{product.name}</h5>
                  <p className="flex justify-center italic text-[15px]">
                    <del className="mr-1 text-gray-400">${product.price}</del>
                    <span className="font-light text-gray-800">
                      ${product.salePrice}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
      </div>

      <Link
        href={"#"}
        className="bg-brown-primary flex justify-center w-96 h-10 rounded-[4px] mb-28 mt-20 mx-auto items-center text-white"
      >
        View All Products <GrFormNextLink className="text-xl icon-next ml-1" />
      </Link>
    </Container>
  );
};

export default Menu;
