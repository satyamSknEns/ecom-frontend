import React from "react";
import { Link } from "react-router-dom";

const MenuList = () => {
  const list = [
    {
      title: "Top Products",
      path: "/",
    },
    {
      title: "Collection",
      path: "/collections/all",
    },
    {
      title: "Best Deals",
      path: "/",
    },
    {
      title: "New Arrivals",
      path: "/",
    },
    {
      title: "Blog",
      path: "/",
    },
  ];
  return (
    <div className="bg-black w-full flex items-center justify-center p-1">
      {list.map((item) => (
        <Link
        key={item.title}
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
