import React from "react";

const OurCustomers = () => {
  const list = [
    {
      id:1,
      title: "Megha Sarpal",
      role: "IT Consultant (based in USA)",
      imgUrl: "/assets/images/customers/1.png",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      ratings: "5",
    },
    {
      id:2,
      title: "Megha Sarpal",
      role: "IT Consultant (based in USA)",
      imgUrl: "/assets/images/customers/1.png",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      ratings: "5",
    },
    {
      id:3,
      title: "Megha Sarpal",
      role: "IT Consultant (based in USA)",
      imgUrl: "/assets/images/customers/1.png",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      ratings: "5",
    },
  ];
  return (
    <section className="p-8 w-full">
      <div className="flex items-center justify-center pb-4">
        <h3 className="text-[40px] font-medium">What our customers say</h3>
      </div>
      <div className="flex">
        {list.map((item)=>(
            <div key={item.id} className="flex">

            </div>
        ))}
      </div>
    </section>
  );
};

export default OurCustomers;
