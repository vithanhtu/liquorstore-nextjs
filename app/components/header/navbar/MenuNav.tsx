"use client";

import Link from "next/link";
import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useParams, usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const params = useParams();
  // console.log(params);

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
                  pathname === `${item.pathname}/${params.id}`
                    ? "text-white hover:text-[#b7472a]"
                    : "text-white/70 hover:text-[#b7472a]"
                }`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
        <li>
          <Link href="/cart" className="text-white/70">
            <BsFillCartPlusFill />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuNav;
