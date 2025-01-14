import React from 'react';
import { IMGURL } from '../utils/constants.js';

const RestaurantCard = (prop) => {
  const { avgRating, cloudinaryImageId, cuisines, name, areaName, sla } = prop?.resObj?.info;
  
  const capitalizeFirstLetter = (words) => {
    return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  }
  return (
    <div className="res-card">
      <div className="res-img">
        <img src={IMGURL+cloudinaryImageId} alt="food image for this restaurant" />
      </div>
      <div className='res-info'>
        <div className="res-name">{name}</div>
        <div className="res-rating">⭐{avgRating} • {sla.slaString}</div>
        <div className="res-extras">
          <div>{capitalizeFirstLetter(cuisines).join(", ")}</div>
          <div>{areaName}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;