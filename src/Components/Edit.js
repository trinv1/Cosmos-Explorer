import React from 'react';//Imports
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Edit() {

//Manages state of galaxy name, description and picture
  let { id } = useParams();
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Picture, setPicture] = useState("");
  const navigate = useNavigate();

  //Sending get request to fetch galaxy details by id
  useEffect(() => {   
    axios.get('http://localhost:4000/api/favourites/' + id)
        .then((response) => {
            setName(response.data.Name);
            setDescription(response.data.Description);
            setPicture(response.data.Picture);
        })
        .catch((error) => {
            console.log(error);
        });
}, [id]);


//Triggers when user submits form
const handleSubmit = (event) => {
    event.preventDefault();
    const updatedGalaxy = { Name, Description, Picture };
    
    //Updating movie on server
    axios.put('http://localhost:4000/api/favourites/' + id, updatedGalaxy)
        .then((res) => {
            console.log(res.data);
            navigate('/favourites');//Bringing back to favourites page
            console.log("Submitting updated galaxy:", updatedGalaxy);
        });
}

//Forms to edit galaxy
return (
    <div style = {{textAlign: "center", color: "gray",backgroundColor: "black"}}>
    <h1><b>Edit Galaxy</b></h1>
    <div style = {{backgroundColor: "black", minHeight: "100vh", marginTop: "300px"}}>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label><b>Edit Galaxy Name: </b></label>
                <input type="text" 
                className="form-control" 
                value={Name} 
                style = {{maxWidth: "600px", textAlign: "center", margin: "auto"}}
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label><b>Edit Description: </b></label>
                <input type="text" 
                className="form-control" 
                value={Description}
                style = {{maxWidth: "600px", textAlign: "center", margin: "auto"}} 
                onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="form-group">
                <label><b>Edit Picture: </b></label>
                <input type="text" 
                className="form-control" 
                value={Picture} 
                style = {{maxWidth: "600px", textAlign: "center", margin: "auto"}}
                onChange={(e) => setPicture(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="submit" value="Edit" className="btn btn-primary" 
                style = {{backgroundColor: "gray"}}
                />
            </div>
        </form>
    </div>
    </div>
);
}