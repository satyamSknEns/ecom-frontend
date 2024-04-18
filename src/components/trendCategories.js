import React from "react";
import Slider from "react-slick";
const TrendCategories = () => {
  const categories = [
    {
      title: "Food & Beverages",
      imgUrl: "/assets/images/categories/Food.png",
    },
    {
      title: "Electronic Gadgets",
      imgUrl: "/assets/images/categories/electronic.png",
    },
    {
      title: "Fashion Accessories",
      imgUrl: "/assets/images/categories/fashion.png",
    },
    {
      title: "Travel & Holidays",
      imgUrl: "/assets/images/categories/travel.png",
    },
  ];
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 100,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <section className="w-full p-8 trendCategories overflow-hidden">
      <div className="flex items-center justify-center pb-4">
        <h3 className="text-[40px] font-medium">Trending categories</h3>
      </div>
      <div className="flex items-center justify-between w-[80%] mx-auto my-4 overflow-hidden">
        <Slider {...settings}>
          {categories.map((item) => (
            <div className="flex items-center justify-between mx-3" key={item.title}>
              <img src={item.imgUrl} alt={item.title} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrendCategories;
