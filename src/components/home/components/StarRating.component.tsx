import React from "react";
import filledStar from "@/assets/homeProduct/filledStar.svg";
import emptyStar from "@/assets/homeProduct/emptyStar.svg";
import Image from "next/image";

const StarRating = ({ rating }: { rating: number }) => {
  // Create an array of 5 elements, each corresponding to a star
  const stars = Array.from({ length: 5 }, (_, index) => (
    <Image
      key={index}
      src={index < rating ? filledStar : emptyStar} // Use filled or empty star
      alt={index < rating ? "Filled star" : "Empty star"}
      style={{
        width: "20px", // Set the size of the star image
        height: "20px", // Ensure the height matches the width
        marginRight: "5px", // Add some space between stars
      }}
    />
  ));

  return <div className="flex items-center ">{stars}</div>;
};

export default StarRating;
