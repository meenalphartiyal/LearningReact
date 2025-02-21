import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANTAPI } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { useNetworkStatus } from '../utils/hooks/useNetworkStatus.js';

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [btnName, setBtnName] = useState('Top Restaurants');
  const networkStatus = useNetworkStatus();

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURANTAPI);
      
      if (!data.ok) {
        throw new Error(`Error! Status: ${data.status}`);
      }
      const response = await data.json();
      const resList =
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
      
      if (resList) {
        setListOfRestaurant(resList);
        setFilteredList(resList);
      } else {
        throw new Error("Restaurants data not found in the response");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to load restaurants data. Please try again later.");
    }
  };

  const handleSearch = () => {
    const filteredList = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredList(filteredList);
  };

  const handleTopRatings = () => {
    if(filteredList.length != listOfRestaurant.length){
      setFilteredList(listOfRestaurant); 
      setBtnName('Top Restaurants');
    }
    else{
      const filteredList = listOfRestaurant.filter(
        (res) => res.info.avgRating >= 4.5
      );
      setFilteredList(filteredList);
      setBtnName('All Restaurants');
    }
  };

  if(!networkStatus){
    return <div>
      <h1>Oops!</h1>
      <h2>Looks like you're offline!</h2>
      <h2>Please check your Internet Connection!</h2>
    </div>
  }

  return (
    <div>
      <div className="absolute top-20 w-full mt-45 flex items-center justify-center">
        <div className="w-[40%] h-[50%] rounded-2xl overflow-hidden flex">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            className="py-2 px-4 w-full border-none outline-none bg-white"
          />
          <button className="text-md cursor-pointer w-10 bg-white" onClick={handleSearch}>
            🔍
          </button>
        </div>
      </div>
      <div className="absolute">
        <button
          type="button"
          className="ml-5 w-40 h-12 my-5 font-medium shadow-2xl bg-cyan-600 text-sm px-4 py-2.5 rounded-full text-white cursor-pointer"
          onClick={handleTopRatings}
        >
          {btnName}
        </button>
      </div>
      {listOfRestaurant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex items-start justify-center flex-wrap p-20">
          {filteredList.length !== 0 ? (
            filteredList.map((res) => (
              <Link to={"./restaurants/" + res.info.id} key={res.info.id}>
                <RestaurantCard resObj={res} />
              </Link>
            ))
          ) : (
            <h1>Restaurant does not exist!!</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
