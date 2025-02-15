import { useEffect, useState } from "react";
import { MENUAPI } from "../constants";

export const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const data = await fetch(MENUAPI + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };

  return resInfo; 
}