import RestaurantCard from "./RestaurantCard";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListofRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [mealImages, setMealImages] = useState([]);

  console.log("body rendered");

  useEffect(() => {
    fetchData();
    fetchMealImages();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");

    const json = await data.json();

    console.log(json, "json object");
    //Optional chaining
    setListofRestaurants(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredRes(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const fetchMealImages = async () => {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    const data = await res.json();

    if (data?.meals) {
      const firstNine = data.meals.slice(0, 9).map((meal) => meal.strMealThumb);
      setMealImages(firstNine);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline. Please check your internet connection</h1>
    );
  }

  //conditional rendering
  return filteredRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the restaurant cards and apply in the ui

              console.log(searchText, "searchText");

              const filteredRest = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRes(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic
            const filteredList = filteredRes.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRes(filteredList);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="restaurantContainer">
        {filteredRes.map((restaurant, index) => {
          const imageUrl =
            mealImages.length > 0
              ? mealImages[index % mealImages.length]
              : "https://via.placeholder.com/200";

          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestaurantCard resList={restaurant} imageUrl={imageUrl} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
