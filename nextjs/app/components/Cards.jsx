"use client";

import { useState } from "react";
import { Card } from "flowbite-react";
import Image from "next/image";

export const CardsComponent = ({ products }) => {
  // State to manage the disabled state of "Add to Cart" buttons
  const [iscartbtndisabled, setIsCartBtnDisabled] = useState(
    new Array(products.length).fill(false) // Initially, all buttons are enabled
  );

  const AddToCart = (product, index) => {
    // Disable the button once clicked (you could also handle cart logic here)
    const updatedDisabledState = [...iscartbtndisabled];
    updatedDisabledState[index] = true;
    setIsCartBtnDisabled(updatedDisabledState);

    // Mock the addition to cart (you could replace this with actual logic)
    console.log(`${product.title} added to cart!`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 justify-center items-center">
      {products.map((product, index) => (
        <div
          key={index}
          className="relative max-w-sm border border-gray-200 rounded-lg overflow-hidden shadow-lg h-[480px] bg-white"
        >
          {/* Product Image */}
          <div className="relative">
            <Image
              className="w-full h-60 object-cover"
              src={product.image}
              alt={product.title}
              width={400} // Adjust width as needed
              height={240} // Adjust height as needed
              priority={false} // Lazy load images (default behavior)
            />
          </div>

          {/* Product Details */}
          <div className="px-4 py-2">
            <h3 className="font-bold text-lg mb-2 truncate">{product.title}</h3>
            <p className="text-gray-700 text-sm mb-3">
              {product.description.substring(0, 70)}...
            </p>
          </div>

          {/* Price and Buttons */}
          <div className="absolute bottom-2 left-2 right-2">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xl font-bold text-gray-800">
                ₹{product.price}
              </span>
            </div>
            <div className="flex justify-between">
              {iscartbtndisabled[index] ? (
                <button
                  className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 w-[100%]"
                  type="button"
                  disabled
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </button>
              ) : (
                <button
                  className="bg-white border border-gray-300 px-2 py-2 text-gray-800 rounded hover:bg-gray-100 shadow-md w-[100%]"
                  onClick={() => AddToCart(product, index)}
                  disabled={iscartbtndisabled[index]}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
