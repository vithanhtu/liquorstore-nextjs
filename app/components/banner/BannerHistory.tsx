import Image from "next/image";
import React from "react";
import Container from "../Container";
import img from "@/public/images/about.jpg.webp";

const BannerHistory = () => {
  return (
    <Container>
      <div className="flex flex-wrap h-auto mb-36">
        <div className="md:w-1/2 w-full h-auto">
          <Image
            className="w-full h-full object-cover"
            alt="banner"
            src={img}
          />
        </div>
        <div className="md:w-1/2 w-full h-full flex items-center">
          <div className="py-16 h-full md:pl-11">
            <span className="text-brown-color italic">Since 1905</span>
            <h1 className="font-bold text-4xl my-2">
              Desire Meets A New Taste
            </h1>
            <div className="text-gray-500 leading-7 mt-9">
              <p className="font-light mt-6">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <p className="mt-3">
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country.
              </p>
            </div>
            <p className="text-[26px] mt-7">
              <strong className="text-brown-color mr-2 italic">115</strong>
              <span className="font-light text-[#333]">
                Years of Experience In Business
              </span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BannerHistory;
