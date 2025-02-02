import { useEffect } from "react";//Imports
import { Card } from "react-bootstrap";
import axios from "axios";
import Galaxy from "./Galaxy";

const GalaxyItem = (props) => { 

  //Logging props change to console
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
        <h3 style={{ fontFamily: "monospace" }}><b>{props.myGalaxy.Name}</b></h3>
        <h3 style={{ fontFamily: "monospace" }}>{props.myGalaxy.Description}</h3>
        <img src = {props.myGalaxy.Picture} 
        alt={props.myGalaxy.Name}
        style={{maxWidth: "45%", maxHeight: "40%", border: "10px solid white"}}/>
        </div>
    <div>
    <button onClick={saveToFavourites} //Save to favourites button
        className="btn btn-secondary" 
        style={{ marginTop: "-900px", marginRight: "1000px", backgroundColor: "lightpink", width: "80px", height: "80px", fontSize: "50px"}}>
              &hearts;{/*Heart symbol*/}
        </button>
    </div>
    </Card>
);
}

  
export default GalaxyItem;

