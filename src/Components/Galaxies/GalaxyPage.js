import { useEffect, useState } from "react";
import axios from "axios";
import Galaxy from "./Galaxy";
const GalaxyPage = () => { 

const[galaxies, setGalaxies] = useState([]);

//Fetching galaxy data
useEffect(
  ()=>{
    axios.get('http://localhost:4000/api/galaxies')
    .then((response)=>{
      console.log(response.data);
      setGalaxies(response.data.myGalaxy)//Saving response data
    })
    .catch()
  },[]//empty array to only fire when things are updated
);

//Displaying galaxy data
  return (
    <div>
     <Galaxy myGalaxy={galaxies}/> 
    </div>
  );
  };
  
  export default GalaxyPage;