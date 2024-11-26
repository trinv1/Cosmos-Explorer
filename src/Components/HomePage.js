const HomePage = ()=>{
    return(
        <div>
             <div className="App">        
      
      {/*displaying simple hello world message*/}
     <h1>Hello World!</h1> 
 
     {/*displaying time*/}
     <h2>It is {new Date().toLocaleTimeString()}.</h2> 
 
   </div>
        </div>
    );
}
export default HomePage;