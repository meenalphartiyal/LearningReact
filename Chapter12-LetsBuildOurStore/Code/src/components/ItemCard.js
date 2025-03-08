import { ITEMIMG } from "../utils/constants";
import veg from "../../asset/veg.png";
import nonVeg from "../../asset/non-veg.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, increaseQuantity, decreaseQuantity } from "../redux/slice/cartSlice";

const ItemCard = ({ data }) => {
  const [btn, setBtn] = useState("more");
  const [addBtn, setAddBtn] = useState("Add");
  const item = data?.card?.info;
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const cartItem = cartItems.find((i) => i.id === item.id)

  const handleAdd = (item) => {
    dispatch(addItems(item));
  };

  const handleDecrement = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleIncrement = (id) => {
    dispatch(increaseQuantity(id));
  };

  const toggleReadMore = () => {
    if (btn === "more") setBtn("less");
    else setBtn("more");
  };

  const truncateDescription = (description) => {
    return description.slice(0, 100) + "...";
  };

  return (
    <div className="flex items-center justify-between w-[550px] h-[200px] overflow-hidden my-1">
      <div className="w-[150px] h-[150px] rounded-full flex relative">
        <img
          className="w-full rounded-full"
          src={ITEMIMG + item?.imageId}
          alt={item?.name}
        />
        <div className="absolute left-10 -bottom-4 text-white font-medium rounded-lg bg-green-500 py-1 cursor-pointer shadow-md">
        {!cartItem ? (
          <div onClick={() => handleAdd(item)} className="px-4">
            {addBtn}
          </div>
        ) : (
          <div className="flex">
            <div
              className="w-8 cursor-pointer font-semibold flex justify-center items-center"
              onClick={() => handleDecrement(cartItem.id)}
            >
              -
            </div>
            <div className="font-semibold flex justify-center items-center">
              {cartItem?.quantity}
            </div>
            <div
              className="w-8 cursor-pointer font-semibold flex justify-center items-center"
              onClick={() => handleIncrement(cartItem.id)}
            >
              +
            </div>
          </div>
        )}
        </div>
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
            {btn === "less"
              ? item?.description
              : truncateDescription(item?.description, 100)}
            <button
              type="button"
              onClick={toggleReadMore}
              className="border-none bg-transparent text-[#535c68] cursor-pointer font-semibold text-sm"
            >
              {btn}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
