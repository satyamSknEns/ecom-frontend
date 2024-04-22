import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path !== "");
  console.log("path", location.pathname);

  return (
    <nav className="p-4">
      <div className="breadcrumb flex">
        <div className="flex items-center justify-center font-medium text-slate-600">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="arcs"
            >
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </span>
        </div>

        <div className="flex items-center justify-center font-medium m-1 p-1 text-slate-600">
          <Link to={`/${paths[0]}/${paths[1]}`} className="hover:text-black">
            {paths[1]}
          </Link>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="arcs"
            >
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </span>
        </div>
        <div className="flex items-center justify-center font-medium m-1 p-1">
          {paths[paths.length - 1]}
        </div>
      </div>
    </nav>
  );
}

export default Breadcrumb;
