// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express= require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require ('body-parser') 

//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cors for cross origin allowance
const cors =require ('cors');
app.use (cors()); 

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port =8000;
const server =app.listen(port , listening)
  
function listening(){
    console.log ("server running");
    console.log(  `server Running On Localhost: $(port)`)
}

// create a callBack function and send the data to 'all' file 
//get route
app.get('/all' , function(req,res){
res.send(projectData);
console.log(projectData);
})



// post route 

app.post('/add' , function(req,res){
    
    console.log(req.body)

    let newEntry = {
        date: req.body.date,
        temp: req.body.temp,
        content: req.body.content
        }
    //send project data
    projectData = newEntry;
    res.send(projectData);
});