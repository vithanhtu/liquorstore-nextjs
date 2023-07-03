"use client";

import React, { useCallback, useState } from "react";
import Container from "../Container";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiPaperPlane } from "react-icons/bi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/Ai";
import { FiDribbble } from "react-icons/fi";
import Link from "next/link";
import Navbar from "./navbar/Navbar";
import ClientOnly from "../OnlyClient";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { signOut } from "next-auth/react";

interface BannerProps {
  home?: boolean;
  heading?: string;
}

const Header: React.FC<BannerProps> = ({ home, heading }) => {
  const loginModal = useLoginModal();

  console.log(loginModal.isOpen);
  const registerModal = useRegisterModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <ClientOnly>
      <header className="overflow-hidden">
        <div className="bg-brown-primary w-full h-8">
          <Container>
            <div className="flex justify-between h-full items-center">
              <div className="flex text-xs">
                <div className="mr-5 flex items-center text-[#e8e2e2]">
                  <h1 onClick={() => signOut()} className="text-white">
                    Logout
                  </h1>
                  <BsFillTelephoneFill className="mr-1" />
                  <span> +00 1234 567</span>
                </div>
                <div className="flex items-center text-[#e8e2e2]">
                  <BiPaperPlane className="mr-1 text-sm" />
                  <span> youremail@email.com</span>
                </div>
              </div>

              <div className="flex">
                <div className="flex text-sm text-white">
                  <Link href={"/"}>
                    <FaFacebookF className="text-xs" />
                  </Link>
                  <Link href={"/"}>
                    <AiOutlineTwitter className="ml-2" />
                  </Link>
                  <Link href={"/"}>
                    <FaInstagram className="ml-2" />
                  </Link>
                  <Link href={"/"}>
                    <FiDribbble className="ml-2" />
                  </Link>
                </div>

                <div className="text-xs ml-6 text-[#e8e2e2]">
                  <span
                    className="cursor-pointer"
                    onClick={registerModal.onOpen}
                  >
                    SIGN UP /{" "}
                  </span>
                  <span className="cursor-pointer" onClick={loginModal.onOpen}>
                    LOGIN
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <div
          className={`${
            home ? "h-screen" : "h-[50vh]"
          } bg-navbar-banner w-full relative`}
        >
          <div className="overlay"></div>
          <Navbar />
          {heading ? (
            <div className="text-white text-5xl relative top-8 flex justify-center items-center flex-col w-full h-full z-10">
              <h1 className="text-center">{heading}</h1>
            </div>
          ) : (
            <div className="transform rotate-[-4deg] w-full h-full flex justify-center lg:items-center text-center">
              <div className="banner-heading mb-24">
                <h1 className="max-md:text-5xl max-md:ml-2 max-lg:mt-12 max-sm:ml-8">
                  Good <span className="text-[#eee]">Drink</span> for Good{" "}
                  <br />
                  <span className="text-[#eee]">Moment</span>
                </h1>

                <div className="flex justify-center mt-6 items-center max-sm:ml-8">
                  <button className="w-[120px] rounded-md text-sm h-11 bg-brown-primary text-[#eee] flex justify-center items-center">
                    Shop Now
                  </button>
                  <button className="w-[120px] ml-3 rounded-md text-sm h-11 border hover:bg-brown-primary hover:border-none border-[#fff] bg-transparent text-[#eee] flex justify-center items-center">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </ClientOnly>
  );
};

export default Header;
