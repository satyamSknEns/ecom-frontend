import React, { useState, useEffect } from "react";
import axios from "axios";
import { endpoint } from "../config/config";
import Loader from "./loader";
const Collection = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log('endpoint',endpoint);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await axios.get(`${endpoint.baseUrl}/products`, {
          headers: {
            Authorization: `Bearer ${endpoint.userToken}`,
          },
        });
        if (data) {
          setProduct(data.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getAllProducts();
  }, []);
  console.log("products", product);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="p-8 mb-8">
          <div className="flex flex-wrap mx-auto w-full justify-center">
            {product.map((items) => (
              <div
                key={items.productId}
                className="flex flex-col items-center justify-center w-1/5 m-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl max-h-[440px]"
              >
                <div className="flex items-center justify-center p-4 max-w-[200px] min-h-[240px] h-[250px]">
                  <img src={items?.images[0]} alt={product[0]?.title} className="w-full h-auto"/>
                </div>
                <div className="flex flex-col items-center px-4 text-center max-h-[100px]">
                  <p className="text-base text-slate-800 font-medium">
                    {items?.title}
                  </p>
                  <p className="text-base font-medium flex items-start justify-start  text-green-700 pt-2">
                  {items.description && items.description.length > 10
                      ? `${items.description.slice(0, 40)}...`
                      : items.description}
                  </p>
                </div>
                <div className="flex items-center px-4 text-slate-500 pt-2 max-h-[40px]">
                  <img
                    src="/assets/icons/star.png"
                    alt="rating"
                    className="w-5"
                  />
                  <p className="m-1">{parseFloat(items?.rating.toFixed(1))}</p>
                  <div className="flex items-center justify-center mx-2">
                    <div
                      className="box"
                      style={{ margin: "0px", padding: "0px" }}
                    >
                      <div className="box-inside"></div>
                    </div>
                    <p className="mx-2">
                      <span>50</span> <span>Reviews</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center py-2">
                  <p className="text-xl font-medium">
                    <span className="text-[21px] mr-1 font-bold">₹</span>
                    {(
                      (items?.price * (100 - items?.discountPercentage)) /
                      100
                    ).toFixed()}
                  </p>
                  {(items?.discountPercentage !==0 && items?.discountPercentage > 0) && (
                    <>
                      <p className="text-xl font-medium text-slate-400 ml-2 line-through decoration-slate-400">
                        <span className="text-[21px] mr-1 font-bold">₹</span>
                        {items?.price}
                      </p>
                      <p className="m-1 bg-green-400 text-base rounded font-medium">
                        <span className="p-2">
                          {items?.discountPercentage.toFixed()}% off
                        </span>
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Collection;
