import { useEffect } from "react";//Imports
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
    <Card>
    <div style={{ textAlign: "center",  color: "white", backgroundColor: "black", padding: "30px"}}>
        <h3 style={{ fontFamily: "Sakana" }}><b>{props.myGalaxy.Name}</b></h3>
        <h3 style={{ fontFamily: "Sakana" }}>{props.myGalaxy.Description}</h3>
        <img src = {props.myGalaxy.Picture} 
        alt={props.myGalaxy.Name}
        style={{maxWidth: "45%", maxHeight: "40%", border: "white 2px",}}/>
        </div>
    <div>
    <button onClick={saveToFavourites} 
        className="btn btn-secondary" 
        style={{ marginTop: "-900px", marginRight: "1000px", backgroundColor: "gray", width: "80px", height: "80px", fontSize: "50px"}}>
              &hearts;
        </button>
    </div>
    </Card>
);
}

  
export default GalaxyItem;

