import { CDN_URL } from "../utils/constants";

const RestoCard = (props) => {
    console.log(props,'props');
    const {name, cuisines, avgRating, cloudinaryImageId} = props.resList.info;
    return(
    <div className='restoCard'>
        <img 
        alt='restoImage' 
        className='restoImage' 
        src={CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{props.resList.info.sla.slaString}</h4>
    </div>
    )
}

export default RestoCard;