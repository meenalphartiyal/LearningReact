import React from 'react';
import RestaurantCard from './RestaurantCard';
import { resList } from '../utils/mockData';

const Body = () => {
  return (
    <div className="res-container">
      {
        resList.map((res) => (
          <RestaurantCard resObj={res} key={res.info.id}/>
        ))
      }
    </div>
  );
};

export default Body;