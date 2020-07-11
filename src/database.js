const mongoose = require('mongoose');
const URI = 'mongodb://localhost/platzi-badges'

const connectDatabase = async () =>{
    try{

     const database = await mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true,});
     console.log(`The Database connection was executed sucessfully`)
     return database;

    }catch(error){

        console.log(error)

    }
}

connectDatabase();

module.exports = mongoose;