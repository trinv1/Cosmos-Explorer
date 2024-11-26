import APODItem from "./APODItem";

const APOD = (props) => { 
  
//Rendering ApodItem for each apod in props.MyApod
return props.myApod.map( 
        (apod)=>{
            return <APODItem myApod={apod} key={apod.date}/>
        }
    );
};
  
  export default APOD;