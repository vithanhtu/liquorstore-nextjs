"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const tabs = [
  {
    id: uuidv4(),
    title: "Description",
  },
  {
    id: uuidv4(),
    title: "Manufacturer",
  },
  {
    id: uuidv4(),
    title: "Reviews",
  },
];

interface TabProductProps {
  description?: String;
  name?: String;
  manufactured?: String;
  reviews?: String;
}

const TabProduct: React.FC<TabProductProps> = ({
  description,
  name,
  manufactured,
  reviews,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex gap-2 mt-16">
        {tabs.map((tab, index) => {
          return (
            <div
              onClick={() => setActiveTab(index)}
              key={tab.id}
              className={`${
                index === activeTab
                  ? "bg-brown-color text-white tabs-item"
                  : "bg-[#f2f2f2] "
              } py-5 px-[30px] text-center font-bold relative cursor-pointer`}
            >
              <p className="text-xl">{tab.title}</p>
            </div>
          );
        })}
      </div>

      <div className="w-full h-auto px-5 py-6 bg-[#f2f2f2] mt-4">
        <h2 className="text-[28px]">
          {activeTab === 0
            ? name
            : "Manufactured By Liquor Store" && activeTab === 2
            ? "Review"
            : "Manufactured By Liquor Store"}
        </h2>

        <p className="mt-6 leading-7 text-light-text">{description}</p>
      </div>
    </div>
  );
};

export default TabProduct;
