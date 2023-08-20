"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GrFormNext } from "react-icons/gr";
import { MdShoppingCartCheckout, MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart-slice";
import Container from "../components/Container";
import Header from "../components/header/Header";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response: any) => {
        const data = response.data;
        if (data.products) {
          setProducts(data.products);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Ensure products is properly typed
  const allCategoriesSet = new Set(products.map((item: any) => item.category));
  const allCategories = [...Array.from(allCategoriesSet)];

  return (
    <div className="pb-20">
      <Header heading="Products" />

      <Container>
        <div className="grid grid-cols-4 gap-7">
          <div className="col-span-3">
            <div className="grid grid-cols-fluid gap-7 mt-12">
              {products.map((product: any, index: number) => {
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
                            href={`/products/${product.id}`}
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
                      <span className="text-brown-color">
                        {product.category}
                      </span>
                      <h5 className="text-[22px] font-light">{product.name}</h5>
                      <p className="flex justify-center italic text-[15px]">
                        {product.salePrice > 0 && (
                          <del className="mr-1 text-gray-400">
                            ${product.salePrice}
                          </del>
                        )}
                        <span className="font-light text-gray-800">
                          ${product.price}
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-[22px] font-semibold">Product Types</h2>
            <ul className="w-full text-[#1a1a1a] mt-2">
              {allCategories &&
                allCategories.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="w-11/12 py-2 border-b border-solid border-[#dee2e6] flex justify-between items-center cursor-pointer hover:text-brown-color"
                    >
                      <p>{item}</p>
                      <GrFormNext />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        {products && (
          <ul className="flex justify-center gap-2 mt-28">
            <li className="w-8 h-8 mr-2 cursor-pointer rounded-[50%] border border-solid border-brown-primary flex justify-center items-center">
              <GrFormPrevious />
            </li>
            <li className="w-8 h-8 cursor-pointer navigation--active rounded-[50%] border border-solid border-brown-primary flex justify-center items-center">
              <p>1</p>
            </li>
            <li className="w-8 h-8 cursor-pointer rounded-[50%] border border-solid border-brown-primary flex justify-center items-center">
              <p>2</p>
            </li>
            <li className="w-8 h-8 cursor-pointer rounded-[50%] border border-solid border-brown-primary flex justify-center items-center">
              <p>3</p>
            </li>
            <li className="w-8 h-8 cursor-pointer rounded-[50%] border border-solid border-brown-primary flex justify-center items-center">
              <p>4</p>
            </li>
            <li className="w-8 h-8 cursor-pointer rounded-[50%] border border-solid border-brown-primary flex justify-center items-center">
              <p>5</p>
            </li>
            <li className="w-8 h-8 ml-2 cursor-pointer rounded-[50%] border border-solid border-brown-primary flex justify-center items-center">
              <MdNavigateNext />
            </li>
          </ul>
        )}
      </Container>
    </div>
  );
};

export default Products;
