import React from "react";
import MenuList from "./menuList";
const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between px-8 py-3">
        <div className="flex items-center justify-center w-[30%] cursor-pointer">
          <span className="mr-2 hidden">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="10" fill="#1DAAA2" />
              <path
                d="M33.8334 15.75H13.1667M29.9584 23.5H13.1667M26.0834 31.25H13.1667"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <img
            src="/assets/images/logo.png"
            alt="logo"
            className="-mb-2"
          />
        </div>
        <div className="p-2 flex items-center justify-center my-2 rounded bg-[#F3F9FB] w-[40%]">
          <div className="p-2 flex items-center justify-center">
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.74142 14.4828C11.4646 14.4828 14.4828 11.4646 14.4828 7.74142C14.4828 4.01824 11.4646 1 7.74142 1C4.01824 1 1 4.01824 1 7.74142C1 11.4646 4.01824 14.4828 7.74142 14.4828Z"
                stroke="#6C6C6C"
                stroke-opacity="0.99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.4302 12.7803L15.0732 15.4164"
                stroke="#6C6C6C"
                stroke-opacity="0.99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search essentials, groceries and more..."
            className=" outline-none bg-[#F3F9FB] w-full"
          />
        </div>
        <div className="flex items-center justify-center w-[20%]">
          <div className="flex mx-4 cursor-pointer">
            <img src="/assets/icons/notification.png" alt="notifications" />
          </div>
          <div className="flex items-center justify-center px-2 cursor-pointer">
            <img src="/assets/icons/user.png" alt="user-icon" />
            <span className="text-lg font-medium -mb-1 mx-1">Login</span>
          </div>
        </div>
      </div>
      <MenuList />
    </header>
  );
};

export default Header;
