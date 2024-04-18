import React from "react";
import { Link } from "react-router-dom";

const MenuList = () => {
  const list = [
    {
      title: "Top Stores",
      path: "/top-stores",
    },
    {
      title: "Categories",
      path: "/categories",
    },
    {
      title: "Top20",
      path: "/top20",
    },
    {
      title: "Exclusive",
      path: "/exclusive",
    },
    {
      title: "The Gateway Hotels and Resorts",
      path: "/gateway",
    },
  ];
  return (
    <div className="bg-black w-full flex items-center justify-center p-1">
      {list.map((item) => (
        <Link
          to={item.path}
          className="text-white p-2 mx-2 text-lg hover:text-[#1DAAA2]"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default MenuList;
