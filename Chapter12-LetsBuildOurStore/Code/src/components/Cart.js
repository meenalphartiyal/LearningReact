import { useDispatch, useSelector } from "react-redux";
import { ITEMIMG } from "../utils/constants";
import bin from "../../asset/bin.png";
import { removeItems, increaseQuantity, decreaseQuantity } from "../redux/slice/cartSlice";
import { Link } from "react-router";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItems(id));
  };

  const handleDecrement = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleIncrement = (id) => {
    dispatch(increaseQuantity(id));
  };

  const totalCharges = items.reduce((acc, curr) => {
      acc += curr.quantity * (curr.price || curr.defaultPrice) / 100;
      return acc;
    }, 0);

  if (items.length === 0)
    return (
      <div className="flex items-center justify-center flex-col m-10">
        <div className="font-bold text-2xl my-2">Your cart is empty</div>
        <div>You can go to home page to view more restaurants</div>
        <div className="my-5 w-40 h-12 cursor-pointer font-semibold text-white bg-amber-300 flex items-center justify-center"><Link to='/'>See Restaurants</Link></div>
      </div>
    );
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="my-5 font-bold text-5xl">Your Cart</h1>
      <div className="flex items-center justify-center flex-col w-6/12">
        {items.map((item) => (
          <div
            key={item?.id}
            className="flex items-center justify-between w-full rounded-l-full shadow-2xl my-6"
          >
            <div className="w-[100px] h-[100px] rounded-full flex">
              <img
                className="w-full rounded-full"
                src={ITEMIMG + item?.imageId}
                alt={item?.name}
              />
            </div>
            <div className=" w-70 font-semibold">{item?.name}</div>
            <div className=" w-20 font-semibold">
              <span className="text-sm font-bold text-amber-300">₹</span>
              <span className="text-xl font-semibold ml-1">
                {((item?.defaultPrice || item?.price) / 100) * item.quantity}
              </span>
            </div>
            <div className=" w-20 text-white h-8 flex justify-between bg-red-400 shadow-2xl rounded-md">
              <div className="w-8 cursor-pointer font-semibold flex justify-center items-center" onClick={() => handleDecrement(item.id)}>
                -
              </div>
              <div className="font-semibold flex justify-center items-center">
                {item?.quantity}
              </div>
              <div className="w-8 cursor-pointer font-semibold flex justify-center items-center" onClick={() => handleIncrement(item.id)}>
                +
              </div>
            </div>
            <div
              className="w-12 bg-gray-50 h-[100px] flex items-center justify-center cursor-pointer"
              onClick={() => handleRemove(item.id)}
            >
              <img src={bin} alt="bin" />
            </div>
          </div>
        ))}
      </div>

      {/* Payment */}
      <div className="flex flex-col p-5 w-100 h-40 shadow-2xl my-10">
        <div className="text-xl font-semibold mb-2">Cart Total</div>
        <div className="text-gray-500 flex justify-between">
          <span>Subtotal</span>
          <span>₹{totalCharges}</span>
        </div>
        <div className="text-gray-500 flex justify-between">
          <span>Delivery Charges</span>
          <span>₹100</span>
        </div>
        <hr className="text-gray-300 my-2"/>
        <div className="text-gray-500 flex justify-between">
          <span>Total</span>
          <span>₹{totalCharges + 100}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
