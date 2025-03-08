import RestaurantCard from "../RestaurantCard";

const IsTopRated = () => {
  return (props) => {
    return (
      <>
        <div className="absolute bg-green-400 text-white rounded-tl-lg rounded-br-lg p-2 mx-5 my-3 z-10">Top Rated</div>
        <RestaurantCard {...props}/>
      </>
    )
  }
};

export default IsTopRated;