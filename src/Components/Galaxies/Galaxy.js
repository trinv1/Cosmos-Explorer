import GalaxyItem from "./GalaxyItem";

const Galaxy = (props) => { 

 //Logging the props passed to the component
 console.log("props.myGalaxy:", props.myGalaxy);

    //Rendering galaxy item from each galaxy
    return props.myGalaxy.map( 
        (galaxy)=>{
            return <GalaxyItem myGalaxy={galaxy} key={galaxy._id} style={{ maxWidth: "10px" }}/>
        }
    );
};
  
  export default Galaxy;