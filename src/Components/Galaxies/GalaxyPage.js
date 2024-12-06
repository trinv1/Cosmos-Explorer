import { useEffect, useState } from "react";//Imports
import axios from "axios";
import Galaxy from "./Galaxy";
const GalaxyPage = () => { 

const[galaxies, setGalaxies] = useState([]);
const [Name, setName] = useState('');
const [Description, setDescription] = useState('');
const [Picture, setPicture] = useState('');


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

//The Reload function fetches the updated movie list from the server and updates the state with the new data
const Reload = () => {
  console.log("Reloading galaxy data...");
  axios.get('http://localhost:4000/api/galaxies')
      .then((response) => {
          setGalaxies(response.data.myGalaxy);
      })
      .catch((error) => {
          console.error("Error reloading data:", error);
      });
};

  //Collects form input, creates a movie object, and sends it to the backend API
    const handleSubmit = (e) => { 
    e.preventDefault();
        
    const galaxy = {
      Name: Name,
      Description: Description,
      Picture: Picture
    }; 
    
    //Post request for when user hits submit
    axios.post('http://localhost:4000/api/galaxies', galaxy)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
      Reload(); 
    
    //Clear form fields
    setName('');
    setDescription('');
    setPicture('');
  };

//UseEffect calls reload
useEffect(() => {
    Reload();
}, []);

  return (
    <div>
      {/*Handling name input*/}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Galaxy Name: </label>
          <input type="text" 
            className="form-control"
            value={Name}
            onChange={(e) => { setName(e.target.value) }}    
         />
        </div>
      </form>

        {/*Handling description input*/}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Galaxy Description: </label>
          <input type="text" 
            className="form-control"
            value={Description}
            onChange={(e) => { setDescription(e.target.value) }}
         />
        </div>
      </form>

        {/*Handling picture input*/}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Galaxy Picture: </label>
          <input type="text" 
            className="form-control"
            value={Picture}
            onChange={(e) => { setPicture(e.target.value) }}
         />
        </div>
        <input type="submit" value="Add Galaxy" />
      </form>

     {/*Displaying galaxy data*/}
     <Galaxy myGalaxy={galaxies}/> 
    </div>
  );
  };
  
  export default GalaxyPage;