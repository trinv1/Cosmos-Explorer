import GalaxyItem from "./GalaxyItem";

const Galaxy = (props) => { 

 //Logging the props passed to the component
 console.log("props.myGalaxy:", props.myGalaxy);

    //Rendering movie item from each movie
    return props.myGalaxy.map( 
        (galaxy)=>{
            return <GalaxyItem myGalaxy={galaxy} key={galaxy._id} style={{ maxWidth: "10px" }}/>
        }
    );
};
  
  export default Galaxy;