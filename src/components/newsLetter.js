import React from "react";

const NewsLetter = () => {
  const bgImage = {
    backgroundImage: `url(/assets/images/newsletter.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <section className="p-8 w-full" style={bgImage}>
      <div className="flex items-center justify-center w-[50%] mx-auto my-3">
        <input
          type="text"
          name="newsletter"
          id="newsletter"
          placeholder="Drop your Email for Updates"
          className="outline-none text-slate-700 w-full text-lg rounded-l-xl px-2 py-3 bg-[#E7F2F1]"
        />
        <div className="flex items-center justify-center text-lg bg-black text-white px-12 py-3 rounded-r-xl cursor-pointer">
          Subscirbe
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
