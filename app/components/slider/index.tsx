"use client";

import React from "react";
import Container from "../Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { BsChatRightQuote } from "react-icons/bs";
import avatar1 from "@/public/images/person_1.jpg.webp";
import avatar2 from "@/public/images/person_2.jpg.webp";
import avatar3 from "@/public/images/person_3.jpg.webp";
import useWindowSize from "@/app/hooks/useWindowSize";

const index = () => {
  const size = useWindowSize();

  const caculate = (params: any) => {
    if (params >= 768 && params <= 1024) {
      return 2;
    } else if (params > 1024) {
      return 3;
    } else {
      return 1;
    }
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: caculate(size?.width),
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
  };

  return (
    <div className="w-full h-[650px] bg-center bg-slider mb-40 relative">
      <div className="overlay-slider"></div>

      <Container>
        <div className="z-10 relative pt-20">
          <div className="text-white text-center">
            <span className="italic text-white/80">Testimonial</span>
            <h2 className="text-[40px] font-bold mt-1">Happy Clients</h2>

            <Slider {...settings} className="mt-16 flex justify-between">
              <div className="border border-[#888] border-solid text-white/70 rounded-sm h-64 slider-team px-4 py-4">
                <p className="text-left italic pt-1 flex">
                  <BsChatRightQuote className="text-yellow-600 text-5xl relative top-[-15px] mr-1" />
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="flex items-center mt-8 ml-1">
                  <Image
                    className="w-20 h-20 rounded-[50%]"
                    src={avatar1}
                    alt="avatar"
                  />
                  <div className="pl-4 text-left">
                    <h5 className="text-white text-xl">Roger Scott</h5>
                    <p className="text-[15px]">Marketing Manager</p>
                  </div>
                </div>
              </div>
              <div className="border border-[#888] border-solid text-white/70 rounded-sm h-64 slider-team px-4 py-4">
                <p className="text-left italic pt-1 flex">
                  <BsChatRightQuote className="text-yellow-600 text-5xl relative top-[-15px] mr-1" />
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="flex items-center mt-8 ml-1">
                  <Image
                    className="w-20 h-20 rounded-[50%]"
                    src={avatar2}
                    alt="avatar"
                  />
                  <div className="pl-4 text-left">
                    <h5 className="text-white text-xl">Roger Scott</h5>
                    <p className="text-[15px]">Marketing Manager</p>
                  </div>
                </div>
              </div>
              <div className="border border-[#888] border-solid text-white/70 rounded-sm h-64 slider-team px-4 py-4">
                <p className="text-left italic pt-1 flex">
                  <BsChatRightQuote className="text-yellow-600 text-5xl relative top-[-15px] mr-1" />
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="flex items-center mt-8 ml-1">
                  <Image
                    className="w-20 h-20 rounded-[50%]"
                    src={avatar3}
                    alt="avatar"
                  />
                  <div className="pl-4 text-left">
                    <h5 className="text-white text-xl">Roger Scott</h5>
                    <p className="text-[15px]">Marketing Manager</p>
                  </div>
                </div>
              </div>
              <div className="border border-[#888] border-solid text-white/70 rounded-sm h-64 slider-team px-4 py-4">
                <p className="text-left italic pt-1 flex">
                  <BsChatRightQuote className="text-yellow-600 text-5xl relative top-[-15px] mr-1" />
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="flex items-center mt-8 ml-1">
                  <Image
                    className="w-20 h-20 rounded-[50%]"
                    src={avatar1}
                    alt="avatar"
                  />
                  <div className="pl-4 text-left">
                    <h5 className="text-white text-xl">Roger Scott</h5>
                    <p className="text-[15px]">Marketing Manager</p>
                  </div>
                </div>
              </div>
              <div className="border border-[#888] border-solid text-white/70 rounded-sm h-64 slider-team px-4 py-4">
                <p className="text-left italic pt-1 flex">
                  <BsChatRightQuote className="text-yellow-600 text-5xl relative top-[-15px] mr-1" />
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="flex items-center mt-8 ml-1">
                  <Image
                    className="w-20 h-20 rounded-[50%]"
                    src={avatar2}
                    alt="avatar"
                  />
                  <div className="pl-4 text-left">
                    <h5 className="text-white text-xl">Roger Scott</h5>
                    <p className="text-[15px]">Marketing Manager</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default index;
