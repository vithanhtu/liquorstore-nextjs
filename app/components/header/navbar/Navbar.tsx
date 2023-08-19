"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "../../Container";
import MenuNav from "./MenuNav";
import useWindowSize from "@/app/hooks/useWindowSize";
import { debounce } from "lodash";

const Navbar = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [toggleMenuNav, setToggleMenuNav] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    const headerHeight = 120; // Adjust to your header's height
    const handleScroll = () => {
      if (window.scrollY > headerHeight) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    const debouncedHandleScroll = debounce(handleScroll, 100); // Use lodash.debounce

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  useEffect(() => {
    if (size?.width && size?.width > 768) {
      setToggleMenuNav(true);
    } else {
      setToggleMenuNav(false);
    }
  }, [size.width]);

  return (
    <div
      className={`w-full transition-all ${
        isHeaderFixed ? "fixed-navbar bg-black/90" : ""
      }`}
    >
      <Container>
        <nav className="bg-transparent max-md:py-0 py-3 border-gray-200 dark:bg-gray-900 relative">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
            <Link
              href="/"
              className="flex items-center max-md:text-xl text-2xl uppercase"
            >
              <h1 className="text-white/90">Liquor</h1>
              <span className="self-center ml-2 font-semibold whitespace-nowrap text-white/50">
                store
              </span>
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-1 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => setToggleMenuNav((prevToggle) => !prevToggle)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {toggleMenuNav && <MenuNav />}
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
