import React from "react";
import { Link } from "react-router-dom";
const CouponOffers = () => {
  const couponOffers = [
    {
      title: "Flipkart",
      imgUrl: "/assets/images/stores/flipkart.png",
      discount: "Signature Snacks - Grab Up to 40% Discount",
      allOffers: "6 More Offers Available",
    },
    {
      title: "Ebay",
      imgUrl: "/assets/images/stores/ebay.png",
      discount: "Signature Snacks - Grab Up to 40% Discount",
      allOffers: "6 More Offers Available",
    },
    {
      title: "MakeMyTrip",
      imgUrl: "/assets/images/stores/makemytrip.png",
      discount: "Signature Snacks - Grab Up to 40% Discount",
      allOffers: "6 More Offers Available",
    },
    {
      title: "Ajio",
      imgUrl: "/assets/images/stores/ajio.png",
      discount: "Signature Snacks - Grab Up to 40% Discount",
      allOffers: "6 More Offers Available",
    },
    {
      title: "amazon",
      imgUrl: "/assets/images/stores/amazon.png",
      discount: "Signature Snacks - Grab Up to 40% Discount",
      allOffers: "6 More Offers Available",
    },
    {
      title: "Myntra",
      imgUrl: "/assets/images/stores/myntra.png",
      discount: "Signature Snacks - Grab Up to 40% Discount",
      allOffers: "6 More Offers Available",
    },
    {
      title: "BookMyShow",
      imgUrl: "/assets/images/stores/bookmyshow.png",
      discount: "Signature Snacks - Grab Up to 40% Discount",
      allOffers: "6 More Offers Available",
    },
    {
      title: "Snapdeal",
      imgUrl: "/assets/images/stores/snapdeal.png",
      discount: "Signature Snacks - Grab Up to 40% Discount",
      allOffers: "6 More Offers Available",
    },
  ];
  return (
    <section className="w-full p-8 bg-[#F7F7F7]">
      <div className="flex items-center justify-center pb-4">
        <h3 className="text-[40px] font-medium">Top Coupon/Offers</h3>
      </div>
      <div className="flex items-center justify-center flex-wrap w-[85%] mx-auto">
        {couponOffers.map((item) => (
          <div
            className="flex items-center justify-center flex-col p-4 w-1/4 cursor-pointer"
            key={item.title}
          >
            <div className="flex items-center justify-center flex-col rounded-2xl bg-white transition-all ease-in-out duration-700 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <div className="flex items-center justify-center flex-col rounded-2xl mx-1 my-2 border w-60 p-2 text-center bg-white transition-all ease-in-out duration-400 hover:border-[#1DAAA2]">
                <img src={item.imgUrl} alt={item.title} className="pt-4" />
                <p className="p-1 font-medium">{item.discount}</p>
                <p className="p-1 text-[#1DAAA2] font-medium">
                  {item.allOffers}
                </p>
              </div>
              <div className="text-2xl text-center bg-black text-white w-full p-4 rounded-b-2xl">
                Get Deal
              </div>
            </div>
          </div>
        ))}
        <Link to="/" className="text-lg text-center font-medium p-4">
          View More
        </Link>
      </div>
    </section>
  );
};

export default CouponOffers;
