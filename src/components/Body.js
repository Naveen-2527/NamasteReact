import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";



const Body=()=>{
  const [listOfRestaurants,setListOfRestaurants]=useState(resList)
  return(
    <div className="body">
      <div className="filter">
        <button className="filter-btn"
        onClick={()=>{
          const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.avgRating>4.2)
          setListOfRestaurants(filteredRestaurants);
          
        }}
        >Top Rated Restaurant</button>
      </div>


      <div className="res-container">
       {listOfRestaurants.map((restaurant)=>(
        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
       ))
       }
        
      </div>
    </div>
  )
}
export default Body;