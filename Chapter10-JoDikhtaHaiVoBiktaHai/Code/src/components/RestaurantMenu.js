import React, { useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer.js";
import ItemCard from "./ItemCard.js";
import { MENUAPI } from "../utils/constants.js";
import { useFetch } from "../utils/hooks/useFetch.js";

const RestaurantMenu = () => {
  const [isExpanded, setIsExpended] = useState({});
  const { resId } = useParams();
  const data = useFetch(MENUAPI, resId);
  const items = data?.cards;

  if (data === null) return <Shimmer />;

  const { name, avgRating, costForTwoMessage, sla } =
    items[2]?.card?.card?.info;

  const menuItems = items[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (menuItem) =>
      menuItem?.card?.card?.itemCards || menuItem?.card?.card?.categories
  );

  const toggleSection = (title) => {
    setIsExpended((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div>
      <div className="absolute top-0.5 left-0.5 translate-x-130 translate-y-40 w-auto text-white p-[20px]">
        <div className="font-semibold text-8xl">{name}</div>
        <div className="mb-2">
          ⭐{avgRating} • {costForTwoMessage}
        </div>
        <hr />
        <div className="mb-2">{sla?.slaString.toLowerCase()}</div>
      </div>

      <div className="mt-[10px] mr-[200px] mb-[10px] ml-[100px]">
        <h1 className="font-semibold text-6xl my-4">Menu</h1>
        {menuItems.map((item) => {
          const food = item?.card?.card;
          return (
            <div key={food?.title}>
              {food?.categories && (
                <div>
                  <h2 className="text-3xl font-semibold mt-4 mb-2">{food?.title}</h2>
                  {food.categories.map((category) => (
                    <div key={category?.title}>
                      <div className="flex items-center justify-between border-b-[5px] border-b-gray-200 pb-4">
                        <h3 className="text-2xl font-semibold">
                          {category?.title}
                        </h3>
                        <button
                          type="button"
                          onClick={() =>
                            toggleSection(category?.title, food.title)
                          }
                          className="bg-transparent borde-none text-xl cursor-pointer text-gray-500"
                        >
                          {!isExpanded[category?.title] ? "⯅" : "⯆"}
                        </button>
                      </div>
                      {!isExpanded[category?.title] && (
                        <div className="flex pl-[20px] flex-wrap items-center justify-start">
                          {category?.itemCards.map((itemCard) => (
                            <ItemCard
                              key={itemCard?.card?.info?.name}
                              data={itemCard}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {food?.itemCards && (
                <>
                  <div className="flex items-center justify-between border-b-[5px] border-b-gray-200 py-4">
                    <h2 className="text-2xl font-semibold">{food?.title}</h2>
                    <button
                      type="button"
                      onClick={() => toggleSection(food?.title)}
                      className="bg-transparent borde-none text-xl cursor-pointer text-gray-500"
                    >
                      {!isExpanded[food?.title] ? "⯅" : "⯆"}
                    </button>
                  </div>
                  {!isExpanded[food?.title] && (
                    <div className="flex pl-[20px] flex-wrap items-center justify-start">
                      {food.itemCards.map((itemCard) => (
                        <ItemCard
                          key={itemCard?.card?.info?.name}
                          data={itemCard}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantMenu;
