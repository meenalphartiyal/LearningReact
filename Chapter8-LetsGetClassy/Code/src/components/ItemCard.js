import { ITEMIMG } from "../utils/constants";
import veg from "../../asset/veg.png";
import nonVeg from "../../asset/non-veg.png";
import { useState } from "react";

const ItemCard = ({ data }) => {
  const [btn, setBtn] = useState("more");
  const item = data.card.info;

  const toggleReadMore = () => {
    if(btn === "more")
      setBtn("less");
    else
      setBtn("more")
  }

  console.log(item)
  const truncateDescription = (description) => {
    return description.slice(0, 100) + "..." ;
  }
  
  return (
    <div className="card">
      <div className="item-img">
        <img src={ITEMIMG + item?.imageId} alt={item?.name}/>
      </div>
      <div className="item-details">
        <div className="item-heading">
          {item?.itemAttribute?.vegClassifier === "NONVEG" ? (
            <img src={nonVeg} alt="non-veg" />
          ) : (
            <img src={veg} alt="veg" />
          )}
          <div className="item-name">{item?.name}</div>
        </div>
        <div className="item-price">
          ₹{item?.defaultPrice / 100 || item?.price / 100}
        </div>
        {item?.description && (
          <div className="item-description">
            {btn === "less" ? item?.description : truncateDescription(item?.description, 100)}
            <button type="button" onClick={toggleReadMore} className="read-more-button">{btn}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
