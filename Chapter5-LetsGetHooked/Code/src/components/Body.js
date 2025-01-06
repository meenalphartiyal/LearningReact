import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { resList } from '../utils/mockData';

const Body = () => {
  const [searchItem, setSearchItem] = useState();
  const [filteredData, setFilteredData] = useState(resList)
  
  const handleSearchItem = (event) => {
    setSearchItem(event.target.value)
  }

  const handleSearch = () => {
    const result = resList.filter((res) => res.info.name.toLowerCase() === searchItem.toLowerCase());
    setFilteredData(result)
  }

  return (
    <div>
      <div className="srch">
        <div className="srch-bar">
          <input type="text" placeholder="Search" value={searchItem} onChange={(e) => handleSearchItem(e)}/>
          <button className="srch-btn" onClick={handleSearch} >🔍</button>
        </div>
      </div>
      <div className="res-container">
        {filteredData.length !== 0 ?
        (
          filteredData.map((res) => (
            <RestaurantCard resObj={res} key={res.info.id}/>
          ))
        ) : (
          <h1>
            Restaurant does not exist.
          </h1>
          )
        }
      </div>
    </div>
  );
};

export default Body;