import RestaurantCard from "./RestaurantCard";
import restaurantsData from '../utils/restaurants.json'

const Body = () => {
    return(
        <div className='body'>
            <div className='search'>Search</div>
            <div className='restaurantContainer'>
                {
                    restaurantsData.restaurants.map(restaurant => {
                        return (
                        <RestaurantCard key={restaurant.info.id} resList={restaurant} />
                    )
                    })
                }
            </div>
        </div>
    )
}

export default Body;