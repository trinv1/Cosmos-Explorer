import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const APODItem = (props) => {
  
  //UseEffect runs whenever props.myApod changes and logs the updated APOD data to the console
  useEffect(() => {
    console.log("APOD Data:", props.myApod);
  }, [props.myApod]);

  //Displaying the APOD image and data
  return (
    <div>
      <Card>
        <Card.Header>{props.myApod.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">           
                {props.myApod.media_type === "image" && (<img src = {props.myApod.url} alt={props.myApod.title}/>)}
            <p><b>{props.myApod.explanation}</b></p>
            <p>{props.myApod.date}</p>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
};

export default APODItem;

