import { useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import Galaxy from "./Galaxy";

const GalaxyItem = (props) => { 

  //UseEffect runs whenever props.myGalaxy changes and logs the updated Galaxy data to the console
  useEffect( 
    ()=>{
        console.log("Galaxies:", props.myGalaxy);
    },[props.myGalaxy]
)

//Function to handle saving to favourites
const saveToFavourites = () => {
    axios.post('http://localhost:4000/api/favourites', props.myGalaxy)
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
};

//displaying galaxy image, data and save button
return(
    <div style={{ textAlign: "center" }}>
        <h3 style={{ fontFamily: "Sakana" }}>{props.myGalaxy.Name}</h3>
        <h3 style={{ fontFamily: "Sakana" }}>{props.myGalaxy.Description}</h3>
        <img src = {props.myGalaxy.Picture} 
        alt={props.myGalaxy.Name}
        style={{maxWidth: "60%", maxHeight: "50%"}}/>
        
        <button onClick={saveToFavourites} 
        className="btn btn-secondary" 
        style={{ marginTop: "10px" }}>
            Save to Favourites
        </button>
    </div>
);
}

  
export default GalaxyItem;

