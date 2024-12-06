import axios from "axios";//Imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const FavPage = () => { 
  const [favourites, setFavourites] = useState([]);
  //let { id } = useParams();

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

   //Function to delete galaxy
   const deleteGalaxy = (e, id) => {
    e.preventDefault();
    axios.delete('http://localhost:4000/api/favourites/' + id)
        .then(() => {
        console.log("deleted galaxy with id: " + id);
        Reload();
        })
        .catch((err) => console.error(err));
  };

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
             <Button onClick={(e)=>deleteGalaxy(e, favourite._id)} className="btn btn-secondary" style={{ marginTop: "10px" }}>
                Delete
              </Button>{/*Delete galaxy button*/}
          </div>        
      ))}
  </div>
);
}

  export default FavPage;