const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestoCard = (props) => {
  const { resList, imageUrl } = props;

  const { name, cuisines, avgRating } = resList.info;
  return (
    <div className="restaurantCard" style={styleCard}>
      <img className="restaurantImage" alt="res-image" src={imageUrl} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{props.resList.info.sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestoCard;
