import React from "react";

const FormatDate = ({ dateString }: any) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = months[date.getMonth()];

  return <span>{`${date.getDate()} ${month} ${year}`}</span>;
};

export default FormatDate;
