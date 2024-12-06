import APOD from "./APOD";
import React, { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => { 

const [apodData, setApodData] = useState([]); //State to store the APOD data

    //Fetching Nasas APOD data
    useEffect(
        ()=>{
          axios.get('https://api.nasa.gov/planetary/apod?api_key=NVuSDMgefuJhpTZhSAMDQZkOD7DtbIeL1le6tS3s')//sending http request and run in background not causing app to freeze (asynchronous)
          .then((response)=>{//got response back from http request
            console.log(response.data);
            setApodData(response.data)//saving response data
          })
          .catch()
        },[]//empty array to stop firing every time and only fire when things are updated
      );
  

 //Displaying APOD component with fetched data and added image
 return (
  <div style ={{ textAlign: "center", color: "white", fontFamily: "monospace", backgroundColor: "black", minHeight: "100vh"}}>
      <h1><b>Welcome to the Cosmos Galaxy Diary</b></h1>
      <img src = "https://cdn.britannica.com/90/2590-050-6C33CB5C/Milky-Way-Galaxy-Earth.jpg" style={{ width: "2000px", height: "200px" }}/>
      <h4>NASA's Astronomy Picture of the Day (APOD).</h4>
      <APOD myApod={[apodData]} />{/*Displaying Apod data*/}
    </div> 
  );
};
  
  export default HomePage;
