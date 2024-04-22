import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const lists = [
    {
      title: "Categories",
      links: [
        "Fashion Apparelss",
        "Fashion Accessories",
        "Travel & Holidays",
        "Food Beverage",
        "Electronics Gadgets",
        "Health & Beauty",
        "Health & Garden",
        "Hotels Coupons & Deal",
      ],
    },
    {
      title: "About us",
      links: ["Privacy Policy Disclaimer", "Faq", "Blog"],
    },
    {
      title: "Support",
      links: ["Contact Us"],
    },
    {
      title: "Newsletter",
      links: ["Join Our Mailing List To Stay Up To Date With World"],
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);
  const handleQuestionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <footer className="footer-section flex flex-col items-start justify-between w-full">
      <div className="flex sm:flex-row flex-col p-4 bg-black text-white items-start justify-between w-full">
        <div className="flex items-start justify-between flex-col w-full sm:w-[35%] py-4 sm:p-8 sm:pl-20">
          <Link to="/" className="outline-none">
            <img src="/assets/images/footer-logo.png" alt="footer-logo" />
          </Link>
          <p className="font-normal leading-26 tracking-normal text-left text-sm text-[#DADADA] py-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <div className="flex items-center justify-center">
            <Link
              to="#"
              className="text-white w-[34px] h-[34px] flex items-center justify-center rounded-full mx-2 ml-0"
            >
              <svg
                width="13"
                height="24"
                viewBox="0 0 13 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.43853 23.2499V12.9776H11.8865L12.4027 8.97439H8.43853V6.41842C8.43853 5.25941 8.76041 4.46948 10.4226 4.46948L12.5425 4.4685V0.888041C12.1757 0.839432 10.9174 0.730469 9.45345 0.730469C6.39705 0.730469 4.30457 2.596 4.30457 6.02215V8.97449H0.847656V12.9778H4.30446V23.25L8.43853 23.2499Z"
                  fill="#1DAAA2"
                />
              </svg>
            </Link>
            <Link
              to="#"
              className="text-white w-[34px] h-[34px] flex items-center justify-center border border-black rounded-full mx-2"
            >
              <svg
                width="21"
                height="17"
                viewBox="0 0 21 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.2757 4.63587C18.2757 4.8206 18.2757 5.00533 18.2757 5.16367C18.2757 10.6264 14.1061 16.9337 6.50576 16.9337C4.15705 16.9337 1.99306 16.2475 0.145752 15.0863C0.462433 15.1127 0.805504 15.1391 1.12219 15.1391C3.04866 15.1391 4.84319 14.4794 6.26825 13.371C4.44734 13.3446 2.91671 12.1307 2.4153 10.4945C2.6792 10.5473 2.91671 10.5736 3.207 10.5736C3.57646 10.5736 3.94592 10.5209 4.289 10.4153C2.38891 10.0458 0.963845 8.38326 0.963845 6.37762C0.963845 6.35123 0.963845 6.35123 0.963845 6.32484C1.51804 6.64152 2.1514 6.82625 2.83754 6.85264C1.72916 6.11372 0.990235 4.84699 0.990235 3.39554C0.990235 2.63023 1.20136 1.91769 1.54443 1.31072C3.57646 3.81778 6.63771 5.45397 10.0684 5.6387C9.98925 5.3484 9.96286 5.00533 9.96286 4.68865C9.96286 2.39272 11.8102 0.54541 14.1061 0.54541C15.2937 0.54541 16.3757 1.04682 17.1146 1.83852C18.0646 1.65379 18.9355 1.31072 19.7536 0.835701C19.4369 1.81213 18.7772 2.60384 17.9327 3.13164C18.7772 3.02608 19.5689 2.81496 20.3078 2.47189C19.78 3.31637 19.0938 4.05529 18.2757 4.63587Z"
                  fill="#1DAAA2"
                />
              </svg>
            </Link>
            <Link
              to="#"
              className="text-white w-[34px] h-[34px] flex items-center justify-center border border-black rounded-full mx-2"
            >
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.6209 20.5695C20.3338 20.5389 19.0773 20.5389 17.7902 20.5695C17.5144 20.5695 17.4531 20.5082 17.4531 20.2324C17.4531 17.9646 17.4531 15.6662 17.4531 13.3985C17.4531 12.8775 17.4225 12.3566 17.2693 11.8662C16.8096 10.2727 14.9709 9.69041 13.6531 10.763C12.9483 11.3146 12.6725 12.0807 12.6725 13.0001C12.6725 15.1453 12.6725 17.2905 12.6725 19.4356C12.6725 19.7114 12.6418 19.9872 12.6725 20.2937C12.7031 20.5389 12.5805 20.6001 12.366 20.5695C11.0483 20.5695 9.76116 20.5695 8.44342 20.5695C8.19825 20.5695 8.13696 20.5082 8.13696 20.263C8.16761 18.3324 8.16761 16.4017 8.16761 14.4404C8.16761 12.0501 8.16761 9.65977 8.13696 7.30008C8.13696 7.02427 8.19825 6.96298 8.44342 6.96298C9.76116 6.96298 11.0483 6.96298 12.366 6.96298C12.6112 6.96298 12.6725 7.02427 12.6725 7.26943C12.6725 7.75976 12.6725 8.25008 12.6725 8.83234C12.7644 8.74041 12.7951 8.70976 12.8257 8.67912C14.0209 6.93233 15.7064 6.44201 17.6983 6.74846C19.9967 7.11621 21.4677 8.70976 21.8354 11.1614C21.9274 11.7436 21.958 12.3259 21.958 12.9082C21.958 15.3598 21.958 17.7808 21.958 20.2324C21.958 20.4776 21.8967 20.5695 21.6209 20.5695Z"
                  fill="#1DAAA2"
                />
                <path
                  d="M5.6837 13.7669C5.6837 15.9121 5.6837 18.0572 5.6837 20.2024C5.6837 20.4782 5.6224 20.5701 5.3466 20.5701C4.05949 20.5395 2.77239 20.5701 1.48529 20.5701C1.24012 20.5701 1.17883 20.5089 1.17883 20.2637C1.17883 15.9427 1.17883 11.5911 1.17883 7.27008C1.17883 7.05556 1.24012 6.96362 1.48529 6.96362C2.80304 6.96362 4.12078 6.96362 5.43853 6.96362C5.71434 6.96362 5.74499 7.05556 5.74499 7.30072C5.6837 9.44589 5.6837 11.5911 5.6837 13.7669Z"
                  fill="#1DAAA2"
                />
                <path
                  d="M5.89825 3.40814C5.5918 4.63395 4.33534 5.33879 2.89501 5.09363C1.36275 4.84847 0.504678 3.34684 1.05629 1.87587C1.42404 0.95651 2.31275 0.404894 3.44663 0.43554C5.16277 0.404894 6.29664 1.78393 5.89825 3.40814Z"
                  fill="#1DAAA2"
                />
              </svg>
            </Link>
            <Link
              to="#"
              className="text-white w-[34px] h-[34px] flex items-center justify-center border border-black rounded-full mx-2"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5975 0.445994C10.9531 0.452064 10.2686 0.45851 9.54194 0.459662V0.456776C1.01859 0.465432 0.210693 0.627012 0.210693 10.9349C0.210693 21.1246 0.503556 21.416 10.6889 21.416C11.2028 21.416 11.708 21.4216 12.2018 21.427C17.075 21.4805 20.8444 21.5218 21.092 16.1026C21.8085 0.349821 20.6442 0.360787 11.5975 0.445994ZM15.9777 4.11541C15.9777 3.26856 16.6644 2.58184 17.5113 2.58184C18.3581 2.58184 19.0449 3.26856 19.0449 4.11541C19.0449 4.96226 18.3581 5.64898 17.5113 5.64898C16.6644 5.64898 15.9777 4.96226 15.9777 4.11541ZM4.12324 10.9407C4.12324 7.31527 7.06197 4.37509 10.6874 4.37509C14.3129 4.37509 17.2502 7.31527 17.2502 10.9407C17.2502 14.5662 14.3129 17.5049 10.6874 17.5049C7.06197 17.5049 4.12324 14.5662 4.12324 10.9407ZM10.6874 6.67905C16.3211 6.67905 16.3283 15.2024 10.6874 15.2024C5.05521 15.2024 5.04655 6.67905 10.6874 6.67905Z"
                  fill="#1DAAA2"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-start justify-between w-full sm:space-x-8 sm:w-[65%] pt-4 sm:pt-0">
          {!isMobile && (
            <>
              {lists.map((items, index) => (
                <div key={items.title} className="py-4 sm:p-5">
                  <h3 className="text-xl font-medium leading-18 tracking-normal text-left">
                    {items.title}
                  </h3>
                  <ul className="pt-3 text-[#DADADA]">
                    {items.links.map((item, linkIndex) => (
                      <li
                        key={linkIndex}
                        className="text-[12px] font-normal leading-34 tracking-normal text-left py-1 min-w-max"
                      >
                        <Link to="/">{item}</Link>
                      </li>
                    ))}
                  </ul>
                  {index === lists.length - 1 && (
                    <>
                      <div className="flex mt-6 relative rounded-full bg-[#F3F9FB]">
                        <input
                          type="text"
                          name="newsletter"
                          id="newsletter"
                          placeholder="Email address"
                          className="outline-none text-slate-700 text-sm w-full rounded-full px-3 py-2"
                        />
                        <div className="flex items-center justify-center bg-[#1DAAA2] p-1 rounded-full text-xs px-4 my-[2px] mr-[2px] cursor-pointer">
                          Subscirbe
                        </div>
                      </div>
                      <div className="flex items-start justify-center flex-col mt-6">
                        <p className="mb-1">International sites</p>
                        <img src="/assets/images/flags.png" alt="flags" />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </>
          )}
          {isMobile && (
            <>
              {lists.map((items, index) => (
                <div
                  key={items.title}
                  className={`w-full border-b-2 py-3 sm:p-5 ${
                    index === 0 ? "pt-4 border-b-2" : "pt-2"
                  } `}
                >
                  <h3
                    className="flex items-center justify-between font-medium leading-18 tracking-normal text-left"
                    onClick={() => handleQuestionClick(index)}
                  >
                    <span className="text-2xl">{items.title}</span>
                    <span
                      className={`text-4xl font-normal ease-in-out transition-all duration-1000`}
                    >
                      {activeIndex === index ? (
                        <span className="w-5 h-5 flex items-center justify-center">
                          -
                        </span>
                      ) : (
                        <span className="w-5 h-5 flex items-center justify-center">
                          +
                        </span>
                      )}
                    </span>
                  </h3>
                  <ul
                    className={`listContainer pt-3 transition-all duration-700 ${
                      activeIndex === index ? "open" : "overflow-hidden"
                    }`}
                  >
                    {items.links.map((item, linkIndex) => (
                      <li
                        key={linkIndex}
                        className="text-base font-normal leading-34 tracking-normal text-left py-2"
                      >
                        <Link to="/">{item}</Link>
                      </li>
                    ))}
                  </ul>
                  {index === lists.length - 1 && (
                    <>
                      <div className="flex mt-6 relative rounded-full bg-[#F3F9FB]">
                        <input
                          type="text"
                          name="newsletter"
                          id="newsletter"
                          placeholder="Email address"
                          className="outline-none text-slate-700 text-sm w-full rounded-full px-3 py-3"
                        />
                        <div className="flex items-center justify-center bg-[#1DAAA2] p-1 rounded-full text-xs px-6 my-[2px] mr-[2px] cursor-pointer">
                          Subscirbe
                        </div>
                      </div>
                      <div className="flex items-start justify-center flex-col mt-6">
                        <p className="mb-1">International sites</p>
                        <img src="/assets/images/flags.png" alt="flags" />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-between w-full px-4 py-2 bg-slate-600 text-white text-xs">
        <p className="sm:pl-20">© 2022 Single Best Answer | All Rights Researved</p>
        <p className="mt-1 sm:mt-0 sm:pr-10">Created by theasim .design</p>
      </div>
    </footer>
  );
};

export default Footer;
