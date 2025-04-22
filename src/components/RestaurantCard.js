import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
  const{resData}=props;
  const{name,cuisines,cloudinaryImageId,avgRating,costForTwo}=resData?.info
  
  return(
    <div className="res-card">
      <img className="res-logo"  src={CDN_URL+cloudinaryImageId}/>
    <h4>{name}</h4>
    <h5>{cuisines.join(",")}</h5>
    <h4>{avgRating}</h4>
    <h4>{costForTwo}</h4>
    
    </div>
  )
}
export default RestaurantCard;