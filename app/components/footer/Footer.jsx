import React from "react";
import Container from "../Container";
import { MdNavigateNext } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/Ai";
import { FiDribbble } from "react-icons/fi";
import { BsFillTelephoneFill, BsMapFill } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-auto mt-20">
      <div className="w-full bg-[#1a1a1a] py-16 mb-24">
        <Container>
          <div className="grid grid-cols-fluid gap-6">
            <div className="flex justify-center">
              <div className="text-white">
                <div className="text-xl">
                  <span className="hover:text-brown-color mr-2">LIQUOR</span>
                  <span className="text-[#5f5f5f]">STORE</span>
                </div>
                <p className="mt-4 pr-14 font-light text-[#fffffff6]">
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>

                <div className="flex gap-3 text-white mt-3">
                  <Link
                    href={"/"}
                    className="bg-brown-color hover:bg-brown-primary w-8 h-8 rounded-[50%] flex justify-center items-center"
                  >
                    <FaFacebookF className="text-blue-100" />
                  </Link>
                  <Link
                    href={"/"}
                    className="bg-brown-color hover:bg-brown-primary w-8 h-8 rounded-[50%] flex justify-center items-center"
                  >
                    <AiOutlineTwitter className="text-blue-100" />
                  </Link>
                  <Link
                    href={"/"}
                    className="bg-brown-color hover:bg-brown-primary w-8 h-8 rounded-[50%] flex justify-center items-center"
                  >
                    <FaInstagram className="text-blue-100" />
                  </Link>
                  <Link
                    href={"/"}
                    className="bg-brown-color hover:bg-brown-primary w-8 h-8 rounded-[50%] flex justify-center items-center"
                  >
                    <FiDribbble className="text-blue-100" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <h2 className="text-[#ffffffcc] text-xl">My Accounts</h2>
                <ul className="mt-4 text-[#ffffff80]">
                  <Link href={"/"} className="flex items-center my-2 gap-1">
                    <MdNavigateNext className="text-2xl" />
                    <span>My Account</span>
                  </Link>
                  <Link href={"/"} className="flex items-center my-2 gap-1">
                    <MdNavigateNext className="text-2xl" />
                    <span>Register</span>
                  </Link>
                  <Link href={"/"} className="flex items-center my-2 gap-1">
                    <MdNavigateNext className="text-2xl" /> <span>Log In</span>
                  </Link>
                  <Link href={"/"} className="flex items-center my-2 gap-1">
                    <MdNavigateNext className="text-2xl" />
                    <span>My Order</span>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <h2 className="text-[#ffffffcc] text-xl">Information</h2>
                <ul className="mt-4 text-[#ffffff80]">
                  <Link href={"/"} className="flex items-center my-2 gap-1">
                    <MdNavigateNext className="text-2xl" />
                    <span>About us</span>
                  </Link>
                  <Link href={"/"} className="flex items-center my-2 gap-1">
                    <MdNavigateNext className="text-2xl" />
                    <span>Catalog</span>
                  </Link>
                  <Link href={"/"} className="flex items-center my-2 gap-1">
                    <MdNavigateNext className="text-2xl" />{" "}
                    <span>Contact us</span>
                  </Link>
                  <Link href={"/"} className="flex items-center my-2 gap-1">
                    <MdNavigateNext className="text-2xl" />
                    <span>Term & Conditions</span>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <h2 className="text-[#ffffffcc] text-xl">Have a Questions?</h2>
                <ul className="mt-4 text-[#ffffff80]">
                  <Link href={"/"} className="flex my-2 gap-1 text-[#fffffff6]">
                    <BsMapFill className="text-2xl mr-2" />
                    <span>
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </span>
                  </Link>
                  <Link href={"/"} className="flex items-center mt-4 gap-1">
                    <BsFillTelephoneFill className="text-lg mr-2" />
                    <span> +2 392 3929 210</span>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;