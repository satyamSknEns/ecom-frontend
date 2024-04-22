import React, { useState, useEffect } from "react";
import axios from "axios";
import { endpoint } from "../config/config";
import Loader from "./loader";
import { useLocation } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("variant");
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log("endpoint", endpoint);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await axios.get(
            // ${endpoint.baseUrl}/products/getproduct?productId=${id}
          `http://localhost:8081/products/getproduct?productId=${id}`,
          {
            headers: {
              Authorization: `Bearer ${endpoint.userToken}`,
            },
          }
        );
        console.log("data", data);
        if (data) {
          setProduct(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getAllProducts();
  }, [id]);
  console.log("products", product);
  console.log(`_____${endpoint.baseUrl}/products/getproduct?productId=${id}`);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="p-8">
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <img src={product?.images[0]} alt={product?.title} />
            </div>
            <div className="w-1/2">
              <div className="h2">{product?.title}</div>
              <p>{product?.description}</p>
              <div className="flex items-center justify-center py-2">
                  <p className="text-xl font-medium">
                    <span className="text-[21px] mr-1 font-bold">₹</span>
                    {(
                      (product?.price * (100 - product?.discountPercentage)) /
                      100
                    ).toFixed()}
                  </p>
                  {product?.discountPercentage !== 0 &&
                    product?.discountPercentage > 0 && (
                      <>
                        <p className="text-xl font-medium text-slate-400 ml-2 line-through decoration-slate-400">
                          <span className="text-[21px] mr-1 font-bold">₹</span>
                          {product?.price}
                        </p>
                        <p className="m-1 bg-green-400 text-base rounded font-medium">
                          <span className="p-2">
                            {product?.discountPercentage.toFixed()}% off
                          </span>
                        </p>
                      </>
                    )}
                </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Product;
