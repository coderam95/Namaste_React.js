import { CDN_URL } from "../utils/constants";
const styleCard = {
    backgroundColor: '#f0f0f0',

}

const RestaurantCard = (props) => {
    console.log(props);
    const {cloudinaryImageId, name, cuisines, avgRating } = props.resList.info;
    return(
        <div className='restaurantCard' style={styleCard}>
        <img 
        className='restaurantImage'
        alt='res-image'
        src={CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} Stars</h4>   
        <h4>{props.resList.info.sla.deliveryTime} mins</h4>
        </div>
    )
}

export default RestaurantCard;
