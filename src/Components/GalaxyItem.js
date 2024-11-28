import { useEffect } from "react";

const GalaxyItem = (props) => { 

  //UseEffect runs whenever props.myGalaxy changes and logs the updated Galaxy data to the console
  useEffect( 
    ()=>{
        console.log("Galaxies:", props.myGalaxy);
    },[props.myGalaxy]
)

//displaying galaxy image and data
return(
    <div>
        <h3>{props.myGalaxy.Name}</h3>
        <h3>{props.myGalaxy.Description}</h3>
        <img src = {props.myGalaxy.Picture} 
        alt={props.myGalaxy.Name}
        style={{maxWidth: "60%"}}
            />
    </div>
);
}

  
export default GalaxyItem;

