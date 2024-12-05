import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Edit from "../Edit";

const FavPage = () => { 
  const [favourites, setFavourites] = useState([]);
  
//Reloading updated galaxy data to favpage
const Reload = () => {
  axios.get('http://localhost:4000/api/favourites')
      .then((response) => {
        console.log("Reloading favourites data...", response.data.favourites);

          setFavourites(response.data.favourites);
      })
      .catch((error) => {
          console.error("Error reloading data:", error);
      });
};

//The useEffect calling reload
useEffect(() => {
    Reload();
}, []);

return (
  <div style={{ textAlign: "center" }}>
      <h1>Favourite Galaxies</h1>
      
      {/*Mapping over favourites and displaying*/}
      {favourites.map((favourite) => (
          <div key={favourite._id}>
              <h2>{favourite.Name}</h2>
              <p>{favourite.Description}</p>
              <img style={{ maxWidth: "1000px"}} src={favourite.Picture} alt={favourite.Name}  />
              <Link to={"/edit/" + favourite._id} className="btn btn-primary">Edit</Link>              
          </div>        
      ))}
  </div>
);
}
  
  export default FavPage;