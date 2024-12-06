import axios from "axios";//Imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

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
  <div style={{ fontFamily: "monospace", color: "white", textAlign: "center", backgroundColor: "black"}}>
      <h1><b>Favourite Galaxies</b></h1>
      
      {/*Mapping over favourites and displaying*/}
      {favourites.map((favourite) => (
          <Card>
          <div key={favourite._id} style = {{fontSize: "20px", fontFamily: "monospace", backgroundColor: "black", textAlign: "center",  color: "white", padding: "30px", border: "10px solid white"}}>
              <h2>{favourite.Name}</h2>
              <p>{favourite.Description}</p>
              <img style={{ maxWidth: "1000px", border: "10px solid white"}} src={favourite.Picture} alt={favourite.Name}  />
              <Link to={"/edit/" + favourite._id} className="btn btn-primary"
                style={{ marginTop: "-1000px", marginRight: "1150px", backgroundColor: "orange", width: "100px", height: "50px", fontSize: "20px", fontFamily: "monospace"}}> 
                <b>Edit</b>
                </Link>              
             <Button onClick={(e)=>deleteGalaxy(e, favourite._id)} className="btn btn-secondary"
                style={{ marginTop: "-900px", marginRight: "1150px", backgroundColor: "darkred", width: "100px", height: "50px", fontSize: "20px", fontFamily: "monospace"}}>           
                <b>Delete</b>
              </Button>{/*Delete galaxy button*/}
          </div>        
          </Card>
      ))}
  </div>
);
}

  export default FavPage;