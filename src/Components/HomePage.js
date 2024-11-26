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
  

 //Displaying APOD component with fetched data
 return (
    <div>
      <h1><b>Welcome to Cosmos Explorer</b></h1>
      <h4>NASA's Astronomy Picture of the Day (APOD).</h4>
      <APOD myApod={[apodData]} />{/*Displaying Apod data*/}
    </div>
  );
};
  
  export default HomePage;