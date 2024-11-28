import Galaxy from "./Galaxy"; 

const GalaxyPage = () => { 

//Constant variable to hold JSON data for movies
const data =
[   
    {
      Name: "Andromeda Galaxy",
      Type: "Galaxy",
      Description: "Andromeda is the closest big galaxy to the Milky Way and is expected to collide with the Milky Way around 4.5 billion years from now. The two will eventually     merge into a single new galaxy called Milkdromeda.",
      Picture: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Andromeda_Galaxy_560mm_FL.jpg"
    },
    {
      Name: "Bode's Galaxy",
      Type: "Galaxy",
      Description: "Also known as Messier 81. The largest galaxy in the M81 Group. It harbors a supermassive black                           hole 70 million times the mass of the Sun.",
      Picture: "https://upload.wikimedia.org/wikipedia/commons/5/59/Messier81.png"
    },
    {
      Name: "Cartwheel Galaxy",
      Type: "Galaxy",
      Description: "Also known as Messier 81. The largest galaxy in the M81 Group. It harbors a supermassive black hole 70 million times the mass of the Sun.",
      Picture: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Cartwheel_Galaxy_JWST_NIRCam%2BMIRI_Full_Res.png"
    }
  ];

  return (
    <div>
     <Galaxy myGalaxy={data}/> {/* Rendering the Galaxy component and passing 'galaxy' as the 'myGalaxy' prop */}
    </div>
  );
  };
  
  export default GalaxyPage;