import { ITEMIMG } from "../utils/constants";
import veg from "../../asset/veg.png";
import nonVeg from "../../asset/non-veg.png";
import { useState } from "react";

const ItemCard = ({ data }) => {
  const [btn, setBtn] = useState("more");
  const item = data?.card?.info;
  
  const toggleReadMore = () => {
    if(btn === "more")
      setBtn("less");
    else
      setBtn("more")
  }

  const truncateDescription = (description) => {
    return description.slice(0, 100) + "..." ;
  }
  
  return (
    <div className="flex items-center justify-between w-[550px] h-[200px] overflow-hidden my-1">
      <div className="w-[150px] h-[150px] rounded-full flex relative">
        <img className="w-full rounded-full" src={ITEMIMG + item?.imageId} alt={item?.name}/>
        <div className="absolute left-13 -bottom-4 text-white font-medium rounded-lg bg-green-500 px-2 py-1 cursor-pointer shadow-md">Add</div>
      </div>
      <div className="flex pl-5 flex-col w-[400px]">
        <div className="flex items-center text-md font-semibold">
          {item?.itemAttribute?.vegClassifier === "NONVEG" ? (
            <img className="w-8 mr-3" src={nonVeg} alt="non-veg" />
          ) : (
            <img className="w-8 mr-3" src={veg} alt="veg" />
          )}
          <div>{item?.name}</div>
        </div>
        <div className="font-semibold my-1">
          ₹{item?.defaultPrice / 100 || item?.price / 100}
        </div>
        {item?.description && (
          <div className="text-[#535c68] pr-8 break-words text-justify text-sm">
            {btn === "less" ? item?.description : truncateDescription(item?.description, 100)}
            <button type="button" onClick={toggleReadMore} className="border-none bg-transparent text-[#535c68] cursor-pointer font-semibold text-sm">{btn}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
