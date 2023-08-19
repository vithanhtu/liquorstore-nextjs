"use client";

import React from "react";
import GoogleMapReact from "google-map-react";
import { useForm } from "react-hook-form";
import ClientOnly from "../components/OnlyClient";
import Header from "../components/header/Header";
import Container from "../components/Container";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { GiEarthAfricaEurope } from "react-icons/gi";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const Contact = ({ center, zoom }: any) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="w-full h-auto bg-bg-light max-sm:pb-0 pb-12 overflow-hidden">
      <ClientOnly>
        <Header heading="Contact Page"></Header>
      </ClientOnly>

      <Container>
        <div className="grid grid-cols-fluid gap-7 max-md:gap-9 max-md:py-6 py-16">
          <div className="w-full h-auto">
            <div className="w-20 h-20 mx-auto rounded-[50%] flex justify-center items-center bg-brown-color">
              <HiLocationMarker className="text-white text-3xl" />
            </div>
            <div className="flex gap-3 flex-wrap justify-center w-full px-6 mt-4">
              <p className="text-[#808080] text-center">
                <span className="font-semibold text-[#333] mr-1">Address:</span>
                198 West 21th Street, Suite 721 New York NY 10016
              </p>
            </div>
          </div>

          <div className="w-full h-auto">
            <div className="w-20 h-20 mx-auto rounded-[50%] flex justify-center items-center bg-brown-color">
              <BsFillTelephoneFill className="text-white text-3xl" />
            </div>
            <div className="flex gap-3 flex-wrap justify-center w-full px-6 mt-4">
              <p className="text-brown-primary text-center">
                <span className="font-semibold text-[#333] mr-1">Phone:</span>+
                1235 2355 98
              </p>
            </div>
          </div>

          <div className="w-full h-auto">
            <div className="w-20 h-20 mx-auto rounded-[50%] flex justify-center items-center bg-brown-color">
              <SiMinutemailer className="text-white text-3xl" />
            </div>
            <div className="flex gap-3 flex-wrap justify-center w-full px-6 mt-4">
              <p className="text-brown-primary text-center">
                <span className="font-semibold text-[#333] mr-1">Email:</span>
                info@yoursite.com
              </p>
            </div>
          </div>

          <div className="w-full h-auto">
            <div className="w-20 h-20 mx-auto rounded-[50%] flex justify-center items-center bg-brown-color">
              <GiEarthAfricaEurope className="text-white text-3xl" />
            </div>
            <div className="flex gap-3 flex-wrap justify-center w-full px-6 mt-4">
              <p className="text-brown-primary text-center">
                <span className="font-semibold text-[#333] mr-1">Website:</span>
                yoursite.com
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className="grid px-2 lg:px-6 grid-cols-1 md:grid-cols-2 lg:max-w-7xl max-w-2xl mx-auto contact my-16">
        <div className="w-full md:w-11/12 flex items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  {...register("firstName", { required: true })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="firstName"
                  type="text"
                  placeholder="Jane"
                />
                {errors.firstName?.type && (
                  <p className="text-xs italic text-red-600">
                    Please fill out this field.
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  {...register("lastName", { required: true })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                />
                {errors.lastName?.type && (
                  <p className="text-xs italic text-red-600">
                    Please fill out this field.
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  E-mail
                </label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="email"
                  type="text"
                  placeholder="Email"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600 text-xs italic">
                    Email is required
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Message
                </label>
                <textarea
                  {...register("message", { required: true })}
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 resize-none"
                  id="message"
                  defaultValue={""}
                  placeholder="Message"
                />
                {errors.message?.type && (
                  <p className="text-xs italic text-red-600">
                    Please fill out this field.
                  </p>
                )}
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  className="shadow bg-brown-color hover:bg-brown-primary focus:shadow-outline focus:outline-none text-gray-100 font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Send
                </button>
              </div>
              <div className="md:w-2/3" />
            </div>
          </form>
        </div>

        <div className="w-full contact-google-map h-[90%]">
          <GoogleMapReact defaultCenter={center} defaultZoom={zoom}>
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

Contact.defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
};

export default Contact;
