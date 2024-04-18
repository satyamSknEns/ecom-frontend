import React from "react";

const HeaderBanner = () => {
  return (
    <section className="flex">
      <div className="flex items-center justify-center relative">
        {/* <img src="/assets/images/home-banner.png" alt="Home Banner" /> */}
        <img src="/assets/images/home-banner1.png" alt="Home Banner" />
        <div className="flex flex-col sm:text-6xl font-medium absolute sm:left-[8%] sm:top-1/4">
            <p>Find the <span className="text-[#1DAAA2] font-bold">best</span> deal</p>
            <p><span className="font-bold">today</span> in india</p>
        </div>
      </div>
    </section>
  );
};

export default HeaderBanner;
