import React from "react";
import { Link } from "react-router-dom";

const PopularStores = () => {
  const storeList = [
    { title: "Myntra", imgUrl: "/assets/images/stores/myntra.png" },
    { title: "Ebay", imgUrl: "/assets/images/stores/ebay.png" },
    { title: "MakeMyTrip", imgUrl: "/assets/images/stores/makemytrip.png" },
    { title: "Ajio", imgUrl: "/assets/images/stores/ajio.png" },
    { title: "BlueStone", imgUrl: "/assets/images/stores/bluestone.png" },
    { title: "Flipkart", imgUrl: "/assets/images/stores/flipkart.png" },
    { title: "Adidas", imgUrl: "/assets/images/stores/adidas.png" },
    { title: "amazon", imgUrl: "/assets/images/stores/amazon.png" },
    { title: "BookMyShow", imgUrl: "/assets/images/stores/bookmyshow.png" },
    { title: "ShopClues", imgUrl: "/assets/images/stores/shopclues.png" },
    { title: "TravelGuru", imgUrl: "/assets/images/stores/travelguru.png" },
    { title: "Snapdeal", imgUrl: "/assets/images/stores/snapdeal.png" },
  ];
  return (
    <section className="w-full p-8">
      <div className="flex flex-col items-center justify-center w-full sm:w-[88%] mx-auto relative -top-20">
        <div className=" w-full flex items-center justify-between bg-[#1DAAA2] p-6 px-8 text-white rounded-t-3xl">
          <h3 className="text-2xl font-medium">Popular Stores</h3>
          <Link to="/" className="text-lg underline">
            View All Stores
          </Link>
        </div>
        <div className="flex items-center justify-center flex-wrap bg-[#D9D9D9] py-8 pb-10 rounded-b-3xl">
          {storeList.map((item) => (
            <div className="p-3 min-w-max" key={item.title}>
              <img
                src={item.imgUrl}
                alt={item.title}
                className="hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-[1px] border-transparent hover:border-[#1DAAA2] rounded-xl"
              />
            </div>
          ))}
          <div className="flex items-center justify-center cursor-pointer bg-[#1DAAA2] w-14 h-14 rounded-full absolute top-1/2 -right-7">
            <svg
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.601125 0.658502C0.296485 0.963235 0.125347 1.37649 0.125347 1.80738C0.125347 2.23827 0.296485 2.65152 0.601125 2.95625L8.64488 11L0.601125 19.0438C0.305119 19.3502 0.141327 19.7607 0.145029 20.1868C0.148732 20.6129 0.319632 21.0204 0.62092 21.3217C0.922208 21.623 1.32978 21.7939 1.75585 21.7976C2.18192 21.8013 2.5924 21.6375 2.89887 21.3415L12.0915 12.1489C12.3961 11.8441 12.5673 11.4309 12.5673 11C12.5673 10.5691 12.3961 10.1559 12.0915 9.85113L2.89887 0.658502C2.59414 0.353862 2.18089 0.182724 1.75 0.182724C1.31911 0.182724 0.905858 0.353862 0.601125 0.658502Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularStores;
