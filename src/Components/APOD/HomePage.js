import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const HomePage = () => { 

const [apodData, setApodData] = useState([]); //Storing APOD data

    //Fetching Nasas APOD data
    useEffect(
        ()=>{
          axios.get('https://api.nasa.gov/planetary/apod?api_key=NVuSDMgefuJhpTZhSAMDQZkOD7DtbIeL1le6tS3s')
          .then((response)=>{
            console.log(response.data);
            setApodData(response.data)
          })
          .catch()
        },[]
      );

 //Displaying APOD 
 return (
  <div style ={{ textAlign: "center", color: "gray", fontFamily: "inherit", backgroundColor: "black", minHeight: "100vh"}}>
      <h1><b>Welcome to the Cosmos Explorer</b></h1>
      <img src = "https://cdn.britannica.com/90/2590-050-6C33CB5C/Milky-Way-Galaxy-Earth.jpg" style={{ width: "2000px", height: "200px" }}/>
      <h4>NASA's Astronomy Picture of the Day (APOD).</h4>
      
      <Card>
        <div style = {{backgroundColor:"black", color:"gray", fontSize:"20px"}}>
        {apodData.title}
          </div>
          <blockquote className="blockquote mb-0">           
                {/*Moving data to left of screen and styling*/}
                <div style = {{textAlign: "left", backgroundColor: "black", border: "8px gray"}}>
                  {apodData.media_type === "image" && 
                  (<img src = {apodData.url}/>)}
                </div>              
                {/*Moving data to right of screen and styling*/}
                <div style = {{textAlign: "left", marginLeft: "900px", marginTop: "-400px", backgroundColor: "black", color: "gray", fontFamily: "initial"}}>
                <p>{apodData.explanation}</p>
                <p><b>{apodData.date}</b></p>
              </div> 
          </blockquote>
          </Card>
    </div> 
  );
};
  
  export default HomePage;
