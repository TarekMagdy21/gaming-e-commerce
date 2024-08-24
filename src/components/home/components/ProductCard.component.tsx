import React from "react";
import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import StarRating from "./StarRating.component";

interface ProductCardProps {
  title: string;
  price: number;
  rating: number;
  discount?: number;
  imageUrl: string;
  reviewsCount: number;
  imageSize?: { width: number; height: number };
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  discount,
  imageUrl,
  reviewsCount,
  rating,
  imageSize: { width, height } = { width: 190, height: 180 },
}) => {
  const discountedPrice = price - (price * (discount ?? 0)) / 100;

  // Truncate title if it exceeds 20 characters
  const truncatedTitle = title.length > 20 ? `${title.slice(0, 20)}...` : title;

  return (
    <div className="relative ">
      {(discount ?? 0) > 0 && (
        <div className="absolute top-4 left-4 bg-red rounded-md text-white px-3 py-1 text-sm">
          -{discount}%
        </div>
      )}
      <div className="absolute right-2 top-4 z-10">
        <IoIosHeartEmpty
          size={30}
          className="bg-white rounded-full p-1 cursor-pointer hover:bg-blue-500 hover:text-white"
          onClick={() => {
            console.log("WishList");
          }}
        />
        <IoEyeOutline
          size={30}
          className="bg-white rounded-full p-1 mt-2 cursor-pointer hover:bg-blue-500 hover:text-white"
          onClick={() => {
            console.log("View");
          }}
        />
      </div>

      <div className="relative group">
        <div className="bg-[#F5F5F5] px-10 py-[2.188rem] mx-auto rounded-sm">
          <div
            className="relative mx-auto"
            style={{ width: `${width}px`, height: `${height}px` }}
          >
            <Image
              src={imageUrl}
              alt={`${price}+${title}`}
              fill
              sizes="100%"
              className="rounded-lg object-contain"
            />
          </div>
        </div>
        <button
          onClick={() => {
            console.log("Add 1 Item to Cart");
          }}
          className="rounded-b-md w-[99.9%] bg-black text-white translate-y-4 absolute z-0 group-hover:-translate-y-4 duration-300 ease-in-out transition-transform"
        >
          Add To Cart
        </button>
      </div>

      <div className="mt-4 z-20 relative bg-white">
        <p className="text-base font-medium truncate">{truncatedTitle}</p>
        <div className="text-base flex items-center gap-3 font-medium mt-2">
          <p className="text-red">${discountedPrice.toFixed(2)}</p>
          <p
            className={`${
              (discount ?? 0) > 0
                ? "block text-[#808080] line-through"
                : "hidden"
            }`}
          >
            ${price.toFixed(2)}
          </p>
        </div>
        <div className="flex items-center ">
          <StarRating rating={rating} />{" "}
          <p className="text-[#808080]">({reviewsCount})</p>
        </div>
      </div>
    </div>
  );
};
