import axios from "axios";
import { useEffect, useState } from "react";

//sending data to api

function FavPage() { 
    const [Name, setName] = useState('');
    const [Description, setDescription] = useState('');//state variable to manage input fields
    const [Picture, setPicture] = useState('');

    const[galaxies, setGalaxy] = useState([]);

        
     //The Reload function fetches the updated movie list from the server and updates the state with the new data
  const Reload = () => {
    console.log("Reloading galaxy data...");
    axios.get('http://localhost:4000/api/galaxies')
        .then((response) => {
            setGalaxy(response.data.myGalaxy);
        })
        .catch((error) => {
            console.error("Error reloading data:", error);
        });
  };

    //collects form input, creates a movie object, and sends it to the backend API.
    const handleSubmit = (e) => { 
      e.preventDefault();
      
      console.log(`Name: ${Name}, Description: ${Description}, Picture: ${Picture}`);
      
      const galaxy = {
        Name: Name,
        Description: Description,
        Picture: Picture
      }; 
      
      axios.post('http://localhost:4000/api/galaxies', galaxy)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.data));
        Reload(); // Reload data after successful submission
      
      // Clear form fields
      setName('');
      setDescription('');
      setPicture('');
    };

  //The useEffect hook calls the Reload function once when the component is being rendered and added to the DOM
  useEffect(() => {
      Reload();
  }, []);
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
        {/* A form element that listens for submission with the handleSubmit function */}
          <div className="form-group">
            <label>Add Galaxy Name: </label>
            <input type="text" //capturnig input & input control will submit data for me
              className="form-control"
              value={Name}
              onChange={(e) => { setName(e.target.value) }}//updating title everytime user hits a key stroke on input control
            // This onChange event triggers whenever the user types in the input field.
            // It calls setTitle with the new input value, updating the 'title' state in real-time.
           />
          </div>
        </form>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Add Galaxy Description: </label>
            <input type="text" //capturing movie year input
              className="form-control"
              value={Description}
              onChange={(e) => { setDescription(e.target.value) }}
           />
          </div>
        </form>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Add Galaxy Picture: </label>
            <input type="text" //capturing movie poster input
              className="form-control"
              value={Picture}
              onChange={(e) => { setPicture(e.target.value) }}
           />
          </div>
          <input type="submit" value="Add Galaxy" />
        </form>
      </div>
    );
  }
  
  export default FavPage;