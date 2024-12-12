import React, { useEffect } from "react";
import { Card } from "react-bootstrap";

const APODItem = (props) => {
  
  //UseEffect runs whenever props.myApod changes and logs the updated APOD data to the console
  useEffect(() => {
    console.log("APOD Data:", props.myApod);
  }, [props.myApod]);

  //Displaying the APOD image and data
  return (
    <div>
      <Card>
        <div style = {{backgroundColor:"black", color:"gray", fontSize:"20px"}}>
        {props.myApod.title}
          </div>
          <blockquote className="blockquote mb-0">           

                {/*Moving data to left of screen and styling*/}
                <div style = {{textAlign: "left", backgroundColor: "black", border: "8px gray"}}>
                  {props.myApod.media_type === "image" && 
                  (<img src = {props.myApod.url} 
                  alt={props.myApod.title}/>)}
                </div>  
            
                {/*Moving data to right of screen and styling*/}
                <div style = {{textAlign: "left", marginLeft: "900px", marginTop: "-400px", backgroundColor: "black", color: "gray", fontFamily: "initial"}}>
              <p>{props.myApod.explanation}</p>
              <p><b>{props.myApod.date}</b></p>
              </div> 
          </blockquote>
          </Card>
    </div>
  );
};

export default APODItem;

