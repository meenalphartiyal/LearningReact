import { useEffect, useState } from "react";

export const useRestaurantMenu = (API, resId) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const response = await fetch(API + resId);
    const json = await response.json();
    setData(json?.data);
  };

  return data; 
}