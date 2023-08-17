"use client";

import React from "react";
import Header from "../components/header/Header";
import { usePathname } from "next/navigation";
import img1 from "../../public/images/image_1.jpg.webp";
import img2 from "../../public/images/image_2.jpg.webp";
import img3 from "../../public/images/image_3.jpg.webp";
import img4 from "../../public/images/image_4.jpg.webp";
import img5 from "../../public/images/image_5.jpg.webp";
import img6 from "../../public/images/image_6.jpg.webp";
import Image from "next/image";
import Container from "../components/Container";
import { BsCalendar3 } from "react-icons/bs";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";

const Blog = ({}) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="mt-12 mb-40">
      {pathname === "/blog" ? <Header heading="Blog Page"></Header> : ""}
      <div className="text-center">
        <p className="text-brown-color">Blog</p>
        <h1 className="text-4xl font-bold">Recent Blog</h1>

        <Container>
          <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-7 mt-8">
            <div className="w-full blog-item flex justify-between bg-bg-light text-gray-text cursor-pointer">
              <Image
                src={img1}
                className="w-1/2 h-auto object-cover"
                alt="blog-image"
              />

              <div className="w-full p-6 text-left">
                <div className="flex items-center">
                  <BsCalendar3 />
                  <p className="ml-3 font-light">23 April 2020</p>
                </div>
                <h3 className="text-[#333] font-semibold text-[22px] mt-4 italic hover:text-brown-color">
                  The Recipe from a Winemaker’s Restaurent
                </h3>

                <p className="my-5 leading-7 pr-7">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>

                <Link href={"/blog"}>
                  <span className="text-brown-color flex items-center font-semibold gap-1">
                    Continue <MdNavigateNext className="text-brown-color" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="w-full flex justify-between bg-bg-light text-gray-text cursor-pointer">
              <Image
                src={img2}
                className="w-1/2 h-auto object-cover"
                alt="blog-image"
              />

              <div className="w-full p-6 text-left">
                <div className="flex items-center">
                  <BsCalendar3 />
                  <p className="ml-3 font-light">23 April 2020</p>
                </div>
                <h3 className="text-[#333] font-semibold text-[22px] mt-4 italic hover:text-brown-color">
                  The Recipe from a Winemaker’s Restaurent
                </h3>

                <p className="my-5 leading-7 pr-7">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>

                <Link href={"/blog"}>
                  <span className="text-brown-color flex items-center font-semibold gap-1">
                    Continue <MdNavigateNext className="text-brown-color" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="w-full flex justify-between bg-bg-light text-gray-text cursor-pointer">
              <Image
                src={img3}
                className="w-1/2 h-auto object-cover"
                alt="blog-image"
              />

              <div className="w-full p-6 text-left">
                <div className="flex items-center">
                  <BsCalendar3 />
                  <p className="ml-3 font-light">23 April 2020</p>
                </div>
                <h3 className="text-[#333] font-semibold text-[22px] mt-4 italic hover:text-brown-color">
                  The Recipe from a Winemaker’s Restaurent
                </h3>

                <p className="my-5 leading-7 pr-7">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>

                <Link href={"/blog"}>
                  <span className="text-brown-color flex items-center font-semibold gap-1">
                    Continue <MdNavigateNext className="text-brown-color" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="w-full flex justify-between bg-bg-light text-gray-text cursor-pointer">
              <Image
                src={img4}
                className="w-1/2 h-auto object-cover"
                alt="blog-image"
              />

              <div className="w-full p-6 text-left">
                <div className="flex items-center">
                  <BsCalendar3 />
                  <p className="ml-3 font-light">23 April 2020</p>
                </div>
                <h3 className="text-[#333] font-semibold text-[22px] mt-4 italic hover:text-brown-color">
                  The Recipe from a Winemaker’s Restaurent
                </h3>

                <p className="my-5 leading-7 pr-7">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>

                <Link href={"/blog"}>
                  <span className="text-brown-color flex items-center font-semibold gap-1">
                    Continue <MdNavigateNext className="text-brown-color" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Blog;
