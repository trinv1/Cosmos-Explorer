//Imports
const express = require('express'); 
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());

//Letting front end communicate with backend
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
//Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Connecting to database
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.nokwl.mongodb.net/GalaxyDB');

//Schema for galaxy
const GalaxySchema = new mongoose.Schema({
  Name:String,
  Description:String,
  Picture:String
});

//Schema for Favourites
const FavouriteGalaxySchema = new mongoose.Schema({
  Name: String,
  Description: String,
  Picture: String,
});

//Generating model based on schema
const galaxyModel = new mongoose.model('myGalaxy', GalaxySchema); 

const favouriteModel = mongoose.model('FavouriteGalaxy', FavouriteGalaxySchema);

//Get route to fetch galaxies
app.get('/api/galaxies', async (req, res) => {
    
    //Fetching documents in movie collection
    const galaxies = await galaxyModel.find({});   
    res.status(200).json({ myGalaxy: galaxies });
});

//Get Route to Fetch Favourites
app.get('/api/favourites', async (req, res) => {
  const favourites = await favouriteModel.find({});
  res.status(200).json({ favourites });
});

//Searching for a particular galaxy by its id
app.get('/api/favourites/:id', async (req, res) => {
  const galaxy = await favouriteModel.findById(req.params.id);
  res.json(galaxy);
});

//Updating galaxy
app.put('/api/favourites/:id', async (req, res) => {
      let galaxy = await favouriteModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(galaxy); 
});

//Post route to add galaxy details and save to db
app.post('/api/galaxies', async (req, res)=>{
  const {Name, Description, Picture } = req.body; 
    console.log("Galaxies: " + req.body.Name);
    const newGalaxy = new galaxyModel({Name, Description, Picture});
    
    //Saving galaxy to db
    await newGalaxy.save(); 
    res.status(201).json({ myGalaxy: newGalaxy });
});

//Post route to add galaxy details and save to db
app.post('/api/favourites', async (req, res)=>{
  const {Name, Description, Picture } = req.body; 
    console.log("Galaxies: " + req.body.Name);
    const newFavourite = new favouriteModel({Name, Description, Picture});
    
    //Saving favourite to db
    await newFavourite.save(); 
});

 //Deleting selected galaxy
app.delete('/api/favourites/:id', async (req, res) => {
    console.log('Deleting galaxy with ID:', req.params.id);
    const favGalaxy = await favouriteModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Galaxy deleted successfully", favGalaxy });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



