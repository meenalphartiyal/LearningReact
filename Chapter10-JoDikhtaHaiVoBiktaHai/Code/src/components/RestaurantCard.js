import React from "react";
import { IMGURL } from "../utils/constants.js";

const RestaurantCard = (prop) => {
  const { avgRating, cloudinaryImageId, cuisines, name, areaName, sla } =
    prop?.resObj?.info;

  const capitalizeFirstLetter = (words) => {
    return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  };

  return (
    <div className="w-[350px] rounded-lg p-[10px] mx-[20px] my-[10px] hover:shadow-xl cursor-pointer">
      <div className="w-full h-[250px] rounded-lg overflow-hidden relative">
        <img
          className="w-full h-auto rounded-lg"
          src={IMGURL + cloudinaryImageId}
          alt="food image for this restaurant"
        />
      </div>
      <div className="px-[10px]">
        <div className="text-2xl font-semibold mt-2">{name}</div>
        <div className="text-md font-semibold mb-2">
          ⭐{avgRating} • {sla.slaString}
        </div>
        <div className="text-[#535c68] mb-2">
          <div>{capitalizeFirstLetter(cuisines).join(", ")}</div>
          <div>{areaName}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
