const express = require('express'); //Requierement of the framework Express
const morgan = require('morgan'); //Require of Morgan a middleware of Express
const app = express(); // I init my app with the express constructor, it gaves me access to all it's functionalities
const path = require('path'); //Requiero de a Node.js Module that allows me to work with the file and directory paths
const {mongoose} = require('./database')
//Settings
app.set('port',process.env.PORT || 3000); //I set an enviroment variable within my app in this case the port, i set the current env.Port or i set default PORT=3000

//Config

//Middlewares -> Functions that execute before we get to our routes
app.use(morgan('dev')); //This allows me to everytime the app gets refreshed i'm able to get every single request and response the program it's using
app.use(express.json()); //Basically determines that the data will be trasspassed using JSON.

//Routes
app.use('/api/badges',require('./routes/badges.routes')); //Here i define the routes from my api's that's were my data it's going to be allocated
//Static Files
app.use(express.static(path.join(__dirname,'public'))); //I set the static redirects to the public directory, using path.join __dirname prints out my current directory and adds or concatenate the public to it

//Starting the server
//Here im setting which PORT my app listens to
app.listen(app.get('port'),()=>{
    console.error(`Server on port ${app.get('port')}`);
});
