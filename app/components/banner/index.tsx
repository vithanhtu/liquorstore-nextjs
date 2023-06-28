import React from "react";
import Container from "../Container";
import { BiSupport } from "react-icons/bi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import BannerHistory from "./BannerHistory";

const Banner = () => {
  return (
    <>
      <div className="w-full h-auto bg-brown-color mb-16">
        <Container>
          <div className="grid h-full max-lg:grid-cols-1 grid-cols-3">
            <div className="flex items-center text-white px-3 py-11">
              <BiSupport className="text-9xl text-white" />
              <div className="ml-5">
                <h2 className="text-lg font-semibold uppercase">
                  Online Support 24/7
                </h2>
                <p className="text-[#f1e2e2] mt-2">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>

            <div className="flex items-center text-white px-3 bg-[#ab4227] py-11">
              <MdOutlineLocalShipping className="text-9xl text-white" />
              <div className="ml-5">
                <h2 className="text-lg font-semibold uppercase">
                  Money Back Guarantee
                </h2>
                <p className="text-[#f1e2e2] mt-2">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>

            <div className="flex items-center text-white bg-brown-primary px-3 py-11">
              <FaRegMoneyBillAlt className="text-9xl text-white" />
              <div className="ml-5">
                <h2 className="text-lg font-semibold uppercase">
                  Free Shipping & Return
                </h2>
                <p className="text-[#f1e2e2] mt-2">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <BannerHistory />
    </>
  );
};

export default Banner;
