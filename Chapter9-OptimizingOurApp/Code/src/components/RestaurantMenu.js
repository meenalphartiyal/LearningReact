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
      <div className="res-details">
        <div className="name">{name}</div>
        <div className="rating">
          ⭐{avgRating} • {costForTwoMessage}
        </div>
        <hr />
        <div className="time">{sla?.slaString.toLowerCase()}</div>
      </div>

      <div className="menu">
        <h1>Menu</h1>
        {menuItems.map((item) => {
          const food = item?.card?.card;
          return (
            <div key={food?.title}>
              {food?.categories && (
                <div>
                  <h2 className="category-heading">{food?.title}</h2>
                  {food.categories.map((category) => (
                    <div key={category?.title}>
                      <div className="itemcard-heading">
                        <h3>{category?.title}</h3>
                        <button
                          type="button"
                          onClick={() => toggleSection(category?.title, food.title)}
                        >
                          {!isExpanded[category?.title] ? "⯅" : "⯆"}
                        </button>
                      </div>
                      {!isExpanded[category?.title] && (
                        <div className="item-card">
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
                  <div className="itemcard-heading">
                    <h2>{food?.title}</h2>
                    <button
                      type="button"
                      onClick={() => toggleSection(food?.title)}
                    >
                      {!isExpanded[food?.title] ? "⯅" : "⯆"}
                    </button>
                  </div>
                  {!isExpanded[food?.title] && (
                    <div className="item-card">
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
