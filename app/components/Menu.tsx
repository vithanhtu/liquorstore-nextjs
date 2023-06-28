import React from "react";
import Container from "./Container";
import Image from "next/image";
import { GrFormNextLink } from "react-icons/gr";
import img1 from "@/public/images/prod-1.jpg.webp";
import img2 from "@/public/images/prod-2.jpg.webp";
import img3 from "@/public/images/prod-3.jpg.webp";
import img4 from "@/public/images/prod-4.jpg.webp";
import img5 from "@/public/images/prod-5.jpg.webp";
import img6 from "@/public/images/prod-6.jpg.webp";
import Link from "next/link";

const Menu = () => {
  return (
    <Container>
      <span className="italic text-brown-primary">
        Our Delightful offerings
      </span>
      <h2>Tastefully Yours</h2>

      <div className="grid grid-cols-fluid gap-6">
        <div className="w-full h-auto mt-12">
          <Image
            className="w-full h-96 bg-cover bg-center rounded-[4px]"
            src={img1}
            alt="product"
          />
          <span className="bg-brown-primary pt-[2px] px-2 ml-2 text-white font-light text-sm">
            sale
          </span>
          <div className="text-center">
            <span className="text-brown-color">Brandy</span>
            <h5 className="text-[22px] font-light">Bacardi 151</h5>
            <p className="flex justify-center italic text-[15px]">
              <del className="mr-1 text-gray-400">$69.00</del>
              <span className="font-light text-gray-800">$49.00</span>
            </p>
          </div>
        </div>
        <div className="w-full h-auto mt-12">
          <Image
            className="w-full h-96 bg-cover bg-center rounded-[4px]"
            src={img2}
            alt="product"
          />
          <span className="bg-[#fe9801] pt-[2px] px-2 ml-2 text-white font-light text-sm">
            best seller
          </span>
          <div className="text-center">
            <span className="text-brown-color">Gin</span>
            <h5 className="text-[22px] font-light px-12 leading-7 mb-2">
              Jim Beam Kentucky Straight
            </h5>
            <p className="flex justify-center italic text-[15px]">
              <span className="font-light text-gray-800">$49.00</span>
            </p>
          </div>
        </div>
        <div className="w-full h-auto mt-12">
          <Image
            className="w-full h-96 bg-cover bg-center rounded-[4px]"
            src={img3}
            alt="product"
          />
          <span className="pt-[2px] px-2 ml-2 text-white font-light text-sm"></span>
          <div className="text-center">
            <span className="text-brown-color">Rum</span>
            <h5 className="text-[22px] font-light">Citadelle</h5>
            <p className="flex justify-center italic text-[15px]">
              <span className="font-light text-gray-800">$59.00</span>
            </p>
          </div>
        </div>
        <div className="w-full h-auto mt-12">
          <Image
            className="w-full h-96 bg-cover bg-center rounded-[4px]"
            src={img4}
            alt="product"
          />
          <span className="pt-[2px] px-2 ml-2 text-white font-light text-sm"></span>
          <div className="text-center">
            <span className="text-brown-color">Rum</span>
            <h5 className="text-[22px] font-light">The Glenlivet</h5>
            <p className="flex justify-center italic text-[15px]">
              <span className="font-light text-gray-800">$59.00</span>
            </p>
          </div>
        </div>
        <div className="w-full h-auto mt-12">
          <Image
            className="w-full h-96 bg-cover bg-center rounded-[4px]"
            src={img5}
            alt="product"
          />
          <span className="pt-[2px] px-2 ml-2 text-white font-light text-sm"></span>
          <div className="text-center">
            <span className="text-brown-color">Whiskey</span>
            <h5 className="text-[22px] font-light">Black Label</h5>
            <p className="flex justify-center italic text-[15px]">
              <span className="font-light text-gray-800">$69.00</span>
            </p>
          </div>
        </div>
        <div className="w-full h-auto mt-12">
          <Image
            className="w-full h-96 bg-cover bg-center rounded-[4px]"
            src={img6}
            alt="product"
          />
          <span className="pt-[2px] px-2 ml-2 text-white font-light text-sm"></span>
          <div className="text-center">
            <span className="text-brown-color">Tequila</span>
            <h5 className="text-[22px] font-light">Macallan</h5>
            <p className="flex justify-center italic text-[15px]">
              <span className="font-light text-gray-800">$69.00</span>
            </p>
          </div>
        </div>
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
