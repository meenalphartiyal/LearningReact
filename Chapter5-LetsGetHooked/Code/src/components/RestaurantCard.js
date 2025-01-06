import React from 'react';
import { IMGURL } from '../utils/constants.js';

const RestaurantCard = (prop) => {
  const { avgRating, cloudinaryImageId, cuisines, name } = prop?.resObj?.info;
  
  return (
    <div className="res-card">
      <div className="res-img">
        <img src={IMGURL+cloudinaryImageId} alt="food image for this restaurant" />
      </div>
      <div className="res-name">{name}</div>
      <div className="res-cuisine">{cuisines.join(", ")}</div>
      <div className="res-rating">{avgRating}/5 stars</div>
    </div>
  );
};

export default RestaurantCard;