import RestaurantData from "../utils/restaurants.json";
import RestoCard from "./RestoCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.872589376447683&lng=80.20514437766997&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonify = await data.json();

    console.log(jsonify, "jsonify");

    setRestaurants(
      jsonify?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  const handleFilter = () => {
    console.log("button clicked");
    const filteredRes = restaurants.filter((res) => res.info.avgRating > 4.4);
    setRestaurants(filteredRes);
  };

  return (
    <div className="body">
      <div className="filter-btn">
        <button onClick={handleFilter}>Top rated restaurants</button>
      </div>
      <div className="restoCardContainer">
        {restaurants.map((restaurant) => {
          return <RestoCard key={restaurant.info.id} resList={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
