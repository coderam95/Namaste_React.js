import RestaurantData from '../utils/restaurants.json'
import RestoCard from './RestoCard'


const Body = () => {
    return(
        <div className='body'>
            <div className='restoCardContainer'>
                {
                RestaurantData.restaurants.map((restaurant) => {
                    return(
                        <RestoCard key={restaurant.info.id} resList={restaurant} />
                    )
                })
            }
            </div>
        </div>
    )
}

export default Body;