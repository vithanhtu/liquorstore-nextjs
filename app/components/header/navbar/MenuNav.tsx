"use client";

import Link from "next/link";
import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useParams, usePathname } from "next/navigation";
import useCartModal from "@/app/hooks/useCartModal";
import { useSelector } from "react-redux";

const data = [
  {
    title: "Home",
    pathname: "/",
  },
  {
    title: "About",
    pathname: "/about",
  },
  {
    title: "Product",
    pathname: "/product",
  },
  {
    title: "Blog",
    pathname: "/blog",
  },
  {
    title: "Contact",
    pathname: "/contact",
  },
];

const MenuNav = () => {
  const cartModal = useCartModal();
  const pathname = usePathname();
  const params = useParams();

  const carts = useSelector((state: any) => state.cartReducer?.products);

  return (
    <div className="w-full lg:block lg:w-auto" id="navbar-default">
      <ul className="font-medium flex uppercase flex-col pl-2 py-2 lg:p-0 mt-4 border-l lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0">
        {data.map((item, index) => {
          return (
            <li key={index} className="max-lg:mb-4">
              <Link
                href={item.pathname}
                className={`${
                  pathname === item.pathname ||
                  pathname === `${item.pathname}/${params?.id}`
                    ? "text-white"
                    : "text-white/70"
                } hover:text-brown-color text-[15px]`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
        <li>
          <div
            onClick={cartModal.onOpen}
            className="text-white/70 cursor-pointer hover:text-brown-color"
          >
            <BsFillCartPlusFill className="text-xl" />
            <p className=" bg-white/25 w-5 text-sm text-center top-[-30px] right-[-14px] text-white/75 rounded-[50%] relative">
              {carts.length}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MenuNav;
