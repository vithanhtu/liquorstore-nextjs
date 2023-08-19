"use client";

import React, { useEffect, useState } from "react";
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
import { GrFormPrevious } from "react-icons/gr";
import Link from "next/link";

const Blog = ({}) => {
  const pathname = usePathname();
  const [blogs, setblogs] = useState([]);
  const [blogRecent, setBlogRecent] = useState([]);

  useEffect(() => {
    fetch("/api/blog")
      .then((response) => response.json())
      .then((data) => {
        if (data.blogs) {
          setblogs(data.blogs);
          setBlogRecent(data.blogs.slice(0, 4));
        }
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  console.log(blogRecent);

  return (
    <div className={`${pathname === "/blog" ? "mt-0" : "mt-12"} mb-40`}>
      {pathname === "/blog" ? <Header heading="Blog Page"></Header> : ""}
      <div className="text-center">
        {pathname === "/blog" ? (
          <div className="mt-20 max-md:mt-6"></div>
        ) : (
          <div>
            <p className="text-brown-color">Blog</p>
            <h1 className="text-4xl font-bold">Recent Blog</h1>
          </div>
        )}

        <Container>
          <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-7 mt-8">
            {pathname === "/blog"
              ? blogs.map((item: any, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full blog-item flex justify-between bg-bg-light text-gray-text cursor-pointer"
                    >
                      <Image
                        className="image-blog h-auto object-cover"
                        layout="responsive"
                        src={item.imageUrl}
                        width={300}
                        height={250}
                        alt="blog-image"
                      />

                      <div className="w-full p-6 text-left">
                        <div className="flex items-center">
                          <BsCalendar3 />
                          <p className="ml-3 font-light">23 April 2020</p>
                        </div>
                        <h3 className="text-[#333] font-semibold text-[22px] mt-4 italic hover:text-brown-color">
                          {item.title}
                        </h3>

                        <p className="my-5 leading-7 pr-7">
                          {item.description}
                        </p>

                        <Link href={"/blog"}>
                          <span className="text-brown-color flex items-center font-semibold gap-1">
                            Continue{" "}
                            <MdNavigateNext className="text-brown-color" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  );
                })
              : blogRecent.map((item: any, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full blog-item flex justify-between bg-bg-light text-gray-text cursor-pointer"
                    >
                      <Image
                        className="image-blog h-auto object-cover"
                        layout="responsive"
                        src={item.imageUrl}
                        width={300}
                        height={250}
                        alt="blog-image"
                      />

                      <div className="w-full p-6 text-left">
                        <div className="flex items-center">
                          <BsCalendar3 />
                          <p className="ml-3 font-light">23 April 2020</p>
                        </div>
                        <h3 className="text-[#333] font-semibold text-[22px] mt-4 italic hover:text-brown-color">
                          {item.title}
                        </h3>

                        <p className="my-5 leading-7 pr-7">
                          {item.description}
                        </p>

                        <Link href={"/blog"}>
                          <span className="text-brown-color flex items-center font-semibold gap-1">
                            Continue{" "}
                            <MdNavigateNext className="text-brown-color" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  );
                })}
          </div>
        </Container>
      </div>

      {pathname === "/blog" && (
        <ul className="flex justify-center gap-2 mt-28">
          <li className="w-8 h-8 mr-2 cursor-pointer rounded-[50%] border border-solid border-brown-primary flex justify-center items-center">
            <GrFormPrevious />
          </li>
          <li className="w-8 h-8 cursor-pointer navigation--active rounded-[50%] border border-solid border-brown-primary flex justify-center items-center">
            <p>1</p>
          </li>
          <li className="w-8 h-8 cursor-pointer rounded-[50%] border border-solid border-brown-primary flex justify-center items-center">
            <p>2</p>
          </li>
          <li className="w-8 h-8 cursor-pointer rounded-[50%] border border-solid border-brown-primary flex justify-center items-center">
            <p>3</p>
          </li>
          <li className="w-8 h-8 ml-2 cursor-pointer rounded-[50%] border border-solid border-brown-primary flex justify-center items-center">
            <MdNavigateNext />
          </li>
        </ul>
      )}
    </div>
  );
};

export default Blog;
