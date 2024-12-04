import axios from "axios";
import { useEffect, useState } from "react";

const FavPage = () => { 
  const [favourites, setFavourites] = useState([]);

  
//Fetching favourites data
useEffect(
  ()=>{
    axios.get('http://localhost:4000/api/favourites')
    .then((response)=>{
      console.log(response.data);
      setFavourites(response.data.favourites)//Saving response data
    })
    .catch()
  },[]//empty array to only fire when things are updated
);

return (
  <div style={{ textAlign: "center" }}>
      <h1>Favourite Galaxies</h1>
      
      {/*Mapping over favourites and displaying*/}
      {favourites.map((favourite, index) => (
          <div key={index}>
              <h2>{favourite.Name}</h2>
              <p>{favourite.Description}</p>
              <img style={{ maxWidth: "1000px"}} src={favourite.Picture} alt={favourite.Name}  />
          </div>
      ))}
  </div>
);
}
  
  export default FavPage;