import React, { useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer.js";
import Accordion from "./Accordion.js";
import { MENUAPI } from "../utils/constants.js";
import { useRestaurantMenu } from "../utils/hooks/useRestaurantMenu.js";

const RestaurantMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { resId } = useParams();

  const data = useRestaurantMenu(MENUAPI, resId);
  const items = data?.cards;

  if (data === null) return <Shimmer />;

  const { name, avgRating, costForTwoMessage, sla } =
    items[2]?.card?.card?.info;

  const menuItems = items[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (menuItem) =>
      menuItem?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div>
      <div className="absolute w-4/12 top-0.5 left-0.5 translate-x-140 translate-y-50 text-white">
        <div className="font-semibold text-6xl">{name}</div>
        <div className="mb-2 mt-2 text-lg font-semibold">
          ⭐{avgRating} • {costForTwoMessage}
        </div>
        <hr />
        <div className="mb-2 text-lg font-semibold">
          {sla?.slaString.toLowerCase()}
        </div>
      </div>

      <div className="m-auto p-10">
        {menuItems.map((menuItem, index) => (
          <Accordion
            key={menuItem?.card?.card?.categoryId}
            item={menuItem?.card?.card}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
