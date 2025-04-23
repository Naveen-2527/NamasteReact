import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";

const Body=()=>{

  
  const [listOfRestaurants,setListOfRestaurant]=useState([])
  const[filterres,setFilterRes]=useState([])
  const[searchText,setSearchText]=useState("")
  useEffect(()=>{
    fetchData();

  },[])
  const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.026769&lng=76.9057724&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json= await data.json();
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
  }
  
   
  return listOfRestaurants.length===0 ?<Shimmer/>:
  (<div className="body">
    <div className="filter">
      <div className="search">
        <input type="text" className="search-box" value={searchText} onChange={(e)=>{
          setSearchText(e.target.value)
        }}/>
        <button onClick={()=>{
          const filteredRestaurant=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText))
          setFilterRes(filteredRestaurant)
        }}>search</button>
        
      </div>
      <button className="filter-btn" 
      onClick={()=>{
        const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4.2)
        setFilterRes(filteredList)
        
      }}
      
      >Top Rated Restaurants</button>
    </div>
    <div className="res-container">
      
     {
      filterres.map((restuarant)=><RestaurantCard key={restuarant.info.id}  resData={restuarant}/>)
     }
     

    </div>
  </div>)
}
export default Body;