import { useEffect, useState } from "react"

export const useFetch = ( api, param = undefined ) => {
  const  [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
      let response;
      if(param === undefined){
        response = await fetch(api);
      } else {
        response = await fetch(api+param);
      }
      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`);
      }
      const json = await response.json();
      if (json) {
        setData(json?.data);
      } else {
        throw new Error("Data not found in the response");
      }
    } 
    catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to load data. Please try again later!");
    }
  };

  return data;
}